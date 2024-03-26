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

  public get btnAddedElementList (): ChainablePromiseArray<WebdriverIO.ElementArray> {
    return $$('button=Delete')
  }

  /**
   * Add web elements. Throws an error if 0 or negative number
   * @param {number} count Default count is 1
   */
  public async addElement (count: number = 1): Promise<void> {
    if (count < 1) {
      throw Error(`Unable to add ${count} element(s).`)
    }

    for (let i = 0; i < count; i++) {
      await this.btnAddElement.click()
    }
  }

  /**
   * Remove web elements. Throws an error if 0, negative number, or if there is no more removable web elements
   * @param {number} count Default count is 1
   */
  public async removeElement (count: number = 1): Promise<void> {
    if (count < 1) {
      throw Error(`Unable to remove ${count} element(s).`)
    }

    if (!(await this.btnAddedElement.isDisplayed())) {
      throw Error('No removable elements are displayed. Add an element first')
    }

    for (let i = 0; i < count; i++) {
      await this.btnAddedElement.click()

      if (i < count && !(await this.btnAddedElement.isDisplayed())) {
        throw Error(
          'No removable elements are displayed. Add an element first'
        )
      }
    }
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public async open (): Promise<string> {
    return await super.open('add_remove_elements/')
  }
}

export default new AddRemovePage()
