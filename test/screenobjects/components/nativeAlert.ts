const SELECTORS = {
  ANDROID: {
    ALERT_TITLE:
      '*//android.widget.TextView[@resource-id="android:id/alertTitle"]',
    ALERT_MESSAGE:
      '*//android.widget.TextView[@resource-id="android:id/message"]',
    ALERT_BUTTON: '*//android.widget.Button[@text="{BUTTON_TEXT}"]'
  },
  IOS: {
    ALERT: "-ios predicate string:type == 'XCUIElementTypeAlert'"
  }
}

/**
 * Wait for the alert to exist.
 *
 * The selector for Android differs from iOS
 */
export async function waitForIsShown (isShown = true): Promise<never> {
  const selector = driver.isAndroid
    ? SELECTORS.ANDROID.ALERT_TITLE
    : SELECTORS.IOS.ALERT

  return await $(selector).waitForExist({
    timeout: 11000,
    reverse: !isShown
  })
}

/**
 * Press a button in a cross-platform way.
 *
 * IOS:
 *  iOS always has an accessibilityID so use the `~` in combination
 *  with the name of the button as shown on the screen
 * ANDROID:
 *  Use the text of the button, provide a string and it will automatically transform it to uppercase
 *  and click on the button
 */
export async function tapOnButtonWithText (selector: string): Promise<void> {
  const buttonSelector = driver.isAndroid
    ? SELECTORS.ANDROID.ALERT_BUTTON.replace(
      /{BUTTON_TEXT}/,
      selector.toUpperCase()
    )
    : `~${selector}`
  await $(buttonSelector).click()
}

/**
 * Get the alert text
 *
 * iOS:
 *  The default Appium method can be used to get the text of the alert
 * Android:
 *  The UI hierarchy for Android is different so it will not give the same result as with
 *  iOS if `getText` is being used. Here we construct a method that would give the same output.
 */
export async function text (): Promise<string> {
  if (driver.isIOS) {
    return await $(SELECTORS.IOS.ALERT).getText()
  }

  return `${await $(SELECTORS.ANDROID.ALERT_TITLE).getText()}\n${await $(SELECTORS.ANDROID.ALERT_MESSAGE).getText()}`
}
