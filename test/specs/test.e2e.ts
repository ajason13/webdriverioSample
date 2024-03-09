import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login page', () => {
  it('should login with valid credentials', async () => {
    await LoginPage.open()

    await LoginPage.login(process.env.LOGINNAME, process.env.PASSWORD)
    await expect(SecurePage.flashAlert).toBeExisting()
    await expect(SecurePage.flashAlert).toHaveText(
      expect.stringContaining('You logged into a secure area!')
    )
  })

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
