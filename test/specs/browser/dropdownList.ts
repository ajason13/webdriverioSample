import { expect } from '@wdio/globals'
import DropdownListPage from '../../pageobjects/dropdownList.page.js'

describe('Dropdown List page', () => {
  const tests = [
    { dropdownFieldValue: 'Option 1', expected: 'Option 1' },
    { dropdownFieldValue: 'Option 2', expected: 'Option 2' }
  ]

  tests.forEach(({ dropdownFieldValue, expected }) => {
    it(`should be able to update dropdown field to ${expected}`, async () => {
      await DropdownListPage.open()

      await DropdownListPage.updateDropdownField(dropdownFieldValue)
      await expect(DropdownListPage.dropdownListCurrentValue).toHaveText(
        expected
      )
    })
  })

  it('should not be able to update dropdown field to hint', async () => {
    await DropdownListPage.open()

    await DropdownListPage.updateDropdownField('Option 1')
    await DropdownListPage.updateDropdownField('Please select an option')
    await expect(DropdownListPage.dropdownListCurrentValue).toHaveText(
      'Option 1'
    )
  })
})
