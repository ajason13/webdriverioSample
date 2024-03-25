import { expect } from '@wdio/globals'
import AddRemovePage from '../../pageobjects/addRemove.page.js'

describe('Add/Remove Elements page', () => {
  it('should be able to add 1 element', async () => {
    await AddRemovePage.open()
    await AddRemovePage.addElement()
    await expect(AddRemovePage.btnAddedElement).toBeExisting()
  })
})
