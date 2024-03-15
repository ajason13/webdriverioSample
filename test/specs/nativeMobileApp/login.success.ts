import {
  alertText,
  tapOnButtonWithText,
  waitForAlertToExist
} from '../../screenobjects/components/nativeAlert.ts'
import {
  waitForTabBarToBeDisplayed,
  openLogin
} from '../../screenobjects/components/tabBar.ts'
import LoginScreen from '../../screenobjects/login.screen.ts'

describe('Login screen', () => {
  beforeEach(async () => {
    await waitForTabBarToBeDisplayed()
    await openLogin()
    await LoginScreen.waitForIsShown(true)
  })

  it('should be able login successfully', async () => {
    // Always make sure you are on the right tab
    await LoginScreen.tapOnLoginContainerButton()
    // Submit the data
    await LoginScreen.submitLoginForm(
      process.env.MOBILE_LOGINNAME,
      process.env.MOBILE_PASSWORD
    )
    // Wait for the alert and validate it
    await waitForAlertToExist()
    await expect(await alertText()).toContain('Success')

    // Close the alert
    await tapOnButtonWithText('OK')
    await waitForAlertToExist(false)
  })

  it('should be able sign up successfully', async () => {
    // Always make sure you are on the right tab
    await LoginScreen.tapOnSignUpContainerButton()
    // Submit the data
    await LoginScreen.submitSignUpForm(
      process.env.MOBILE_LOGINNAME,
      process.env.MOBILE_PASSWORD
    )
    // Wait for the alert and validate it
    await waitForAlertToExist()
    await expect(await alertText()).toContain('Signed Up')

    // Close the alert
    await tapOnButtonWithText('OK')
    await waitForAlertToExist(false)
  })
})
