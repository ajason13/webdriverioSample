import {
  text,
  tapOnButtonWithText,
  waitForIsShown
} from '../../screenobjects/components/nativeAlert.ts'
import {
  waitForTabBarShown,
  openLogin
} from '../../screenobjects/components/tabBar.ts'
import LoginScreen from '../../screenobjects/login.screen.ts'

describe('Login screen', () => {
  beforeEach(async () => {
    await waitForTabBarShown()
    await openLogin()
    await LoginScreen.waitForIsShown(true)
  })

  it('should be able login successfully', async () => {
    // Always make sure you are on the right tab
    await LoginScreen.tapOnLoginContainerButton()
    // Submit the data
    await LoginScreen.submitLoginForm({
      username: 'test@webdriver.io',
      password: 'Test1234!'
    })
    // Wait for the alert and validate it
    await waitForIsShown()
    await expect(await text()).toContain('Success')

    // Close the alert
    await tapOnButtonWithText('OK')
    await waitForIsShown(false)
  })

  it('should be able sign up successfully', async () => {
    // Always make sure you are on the right tab
    await LoginScreen.tapOnSignUpContainerButton()
    // Submit the data
    await LoginScreen.submitSignUpForm({
      username: 'test@webdriver.io',
      password: 'Test1234!'
    })
    // Wait for the alert and validate it
    await waitForIsShown()
    await expect(await text()).toContain('Signed Up')

    // Close the alert
    await tapOnButtonWithText('OK')
    await waitForIsShown(false)
  })
})
