import { expect } from '@wdio/globals'
import LoginPage from '../../pageobjects/login.page.js'
import SecurePage from '../../pageobjects/secure.page.js'

describe('Login page', () => {
  it('should login with valid credentials', async () => {
    await LoginPage.open()

    await LoginPage.login(process.env.LOGINNAME, process.env.PASSWORD)
    await expect(SecurePage.flashAlert).toBeExisting()
    await expect(SecurePage.flashAlert).toHaveText(
      expect.stringContaining('You logged into a secure area!')
    )
  })
})
