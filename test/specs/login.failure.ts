import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('Login page', () => {
  it('should error with invalid credentials', async () => {
    await LoginPage.open()

    await LoginPage.login('incorrect', 'login')
    await expect(LoginPage.flashAlert).toBeExisting()
    await expect(LoginPage.flashAlert).toHaveText(
      expect.stringContaining('Your username is invalid!')
    )
  })

  it('should error with no credentials', async () => {
    await LoginPage.open()

    await LoginPage.btnSubmit.click()
    await expect(LoginPage.flashAlert).toBeExisting()
    await expect(LoginPage.flashAlert).toHaveText(
      expect.stringContaining('Your username is invalid!')
    )
  })
})
