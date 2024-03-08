import { $ } from '@wdio/globals'
import Page from './page.js'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get inputUsername (): ChainablePromiseElement {
    return $('#username')
  }

  public get inputPassword (): ChainablePromiseElement {
    return $('#password')
  }

  public get btnSubmit (): ChainablePromiseElement {
    return $('button[type="submit"]')
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login (
    username: string | undefined,
    password: string | undefined
  ): Promise<void> {
    if (
      username === undefined ||
      password === undefined ||
      username === '' ||
      password === ''
    ) {
      throw new Error('USERNAME or PASSWORD is not set.')
    }

    await this.inputUsername.setValue(username)
    await this.inputPassword.setValue(password)
    await this.btnSubmit.click()
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public async open (): Promise<string> {
    return await super.open('login')
  }
}

export default new LoginPage()
