import { $ } from '@wdio/globals'
import Page from './page.js'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddRemovePage extends Page {
  /**
   * define selectors using getter methods
   */
  public get btnAddElement (): ChainablePromiseElement {
    return $('button=Add Element')
  }

  public get btnAddedElement (): ChainablePromiseElement {
    return $('button=Delete')
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async addElement (count: number = 1): Promise<void> {
    if (count < 1) {
      throw Error(`Unable to add ${count} element(s).`)
    }

    for (let i = 0; i < count; i++) {
      await this.btnAddElement.click()
    }
  }

  public async removeElement (): Promise<void> {
    await this.btnAddedElement.click()
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public async open (): Promise<string> {
    return await super.open('add_remove_elements/')
  }
}

export default new AddRemovePage()
