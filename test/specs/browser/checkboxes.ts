import { expect } from '@wdio/globals'
import CheckboxesPage from '../../pageobjects/checkboxes.page.js'

describe('Checkboxes page', () => {
  it('should check a checkbox', async () => {
    await CheckboxesPage.open()

    await CheckboxesPage.checkCheckbox1()
    await expect(CheckboxesPage.checkboxes[0]).toHaveAttribute('checked')
  })

  it('should uncheck a checkbox', async () => {
    await CheckboxesPage.open()

    await CheckboxesPage.checkCheckbox2()
    await expect(CheckboxesPage.checkboxes[1]).not.toHaveAttribute('checked')
  })
})
