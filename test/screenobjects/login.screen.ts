import AppScreen from './app.screen.ts'
import { checkIfDisplayedWithSwipe } from '../helpers/gestures.ts'

const SELECTORS = {
  SCREEN: '~Login-screen'
}

class LoginScreen extends AppScreen {
  constructor () {
    super(SELECTORS.SCREEN)
  }

  get screen (): Promise<WebdriverIO.Element> {
    return $(SELECTORS.SCREEN)
  }

  private get loginContainerButton (): Promise<WebdriverIO.Element> {
    return $('~button-login-container')
  }

  private get signUpContainerButton (): Promise<WebdriverIO.Element> {
    return $('~button-sign-up-container')
  }

  private get loginButton (): Promise<WebdriverIO.Element> {
    return $('~button-LOGIN')
  }

  private get signUpButton (): Promise<WebdriverIO.Element> {
    return $('~button-SIGN UP')
  }

  private get email (): Promise<WebdriverIO.Element> {
    return $('~input-email')
  }

  private get password (): Promise<WebdriverIO.Element> {
    return $('~input-password')
  }

  private get repeatPassword (): Promise<WebdriverIO.Element> {
    return $('~input-repeat-password')
  }

  private get biometricButton (): Promise<WebdriverIO.Element> {
    return $('~button-biometric')
  }

  async isBiometricButtonDisplayed (): Promise<boolean> {
    return await (await this.biometricButton).isDisplayed()
  }

  async tapOnLoginContainerButton (): Promise<void> {
    await (await this.loginContainerButton).click()
  }

  async tapOnSignUpContainerButton (): Promise<void> {
    await (await this.signUpContainerButton).click()
  }

  async tapOnBiometricButton (): Promise<void> {
    await (await this.biometricButton).click()
  }

  async submitLoginForm ({
    username,
    password
  }: {
    username: string
    password: string
  }): Promise<void> {
    await (await this.email).setValue(username)
    await (await this.password).setValue(password)

    if (await driver.isKeyboardShown()) {
      /**
       * Normally we would hide the keyboard with this command `driver.hideKeyboard()`, but there is an issue for hiding the keyboard
       * on iOS when using the command. You will get an error like below
       *
       *  Request failed with status 400 due to Error Domain=com.facebook.WebDriverAgent Code=1 "The keyboard on iPhone cannot be
       *  dismissed because of a known XCTest issue. Try to dismiss it in the way supported by your application under test."
       *  UserInfo={NSLocalizedDescription=The keyboard on iPhone cannot be dismissed because of a known XCTest issue. Try to dismiss
       *  it in the way supported by your application under test.}
       *
       * That's why we click outside of the keyboard.
       */
      await $('~Login-screen').click()
    }
    // On smaller screens there could be a possibility that the button is not shown
    await checkIfDisplayedWithSwipe({
      scrollContainer: await this.screen,
      searchableElement: await this.loginButton,
      maxScrolls: 2
    })
    await (await this.loginButton).click()
  }

  async submitSignUpForm ({
    username,
    password
  }: {
    username: string
    password: string
  }): Promise<void> {
    await (await this.email).setValue(username)
    await (await this.password).setValue(password)
    await (await this.repeatPassword).setValue(password)

    if (await driver.isKeyboardShown()) {
      /**
       * Normally we would hide the keyboard with this command `driver.hideKeyboard()`, but there is an issue for hiding the keyboard
       * on iOS when using the command. You will get an error like below
       *
       *  Request failed with status 400 due to Error Domain=com.facebook.WebDriverAgent Code=1 "The keyboard on iPhone cannot be
       *  dismissed because of a known XCTest issue. Try to dismiss it in the way supported by your application under test."
       *  UserInfo={NSLocalizedDescription=The keyboard on iPhone cannot be dismissed because of a known XCTest issue. Try to dismiss
       *  it in the way supported by your application under test.}
       *
       * That's why we click outside of the keyboard.
       */
      await $('~Login-screen').click()
    }
    // On smaller screens there could be a possibility that the button is not shown
    await checkIfDisplayedWithSwipe({
      scrollContainer: await this.screen,
      searchableElement: await this.signUpButton,
      maxScrolls: 2
    })
    await (await this.signUpButton).click()
  }
}

export default new LoginScreen()
