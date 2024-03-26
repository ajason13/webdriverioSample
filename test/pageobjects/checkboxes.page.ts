import { $$ } from '@wdio/globals'
import Page from './page.js'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckboxesPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get checkboxes (): ChainablePromiseArray<WebdriverIO.ElementArray> {
    return $$('input[type="checkbox"]')
  }

  public async checkCheckbox1 (): Promise<void> {
    await this.checkboxes[0].click()
  }

  public async checkCheckbox2 (): Promise<void> {
    await this.checkboxes[1].click()
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public async open (): Promise<string> {
    return await super.open('checkboxes')
  }
}

export default new CheckboxesPage()
