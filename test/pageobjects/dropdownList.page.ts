import Page from './page.js'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DropdownListPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get dropdownList (): ChainablePromiseElement {
    return $('#dropdown')
  }

  public get dropdownListCurrentValue (): ChainablePromiseElement {
    return $('option[selected="selected"]')
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async updateDropdownField (dropDownValue: string): Promise<void> {
    if (dropDownValue === undefined || dropDownValue === '') {
      throw new Error("Dropdown value can't be null")
    }

    try {
      await this.dropdownList.selectByVisibleText(dropDownValue)
    } catch {
      console.log(`${dropDownValue} is not a valid drop down value`)
    }
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public async open (): Promise<string> {
    return await super.open('dropdown')
  }
}

export default new DropdownListPage()
