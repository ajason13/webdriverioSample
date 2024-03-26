import { expect } from '@wdio/globals'
import AddRemovePage from '../../pageobjects/addRemove.page.js'

describe('Add/Remove Elements page', () => {
  const tests = [
    { elementCount: 1, expected: 1 },
    { elementCount: 2, expected: 2 },
    { elementCount: 10, expected: 10 }
  ]

  tests.forEach(({ elementCount, expected }) => {
    it(`should be able to add ${elementCount} element`, async () => {
      await AddRemovePage.open()
      await AddRemovePage.addElement(elementCount)
      await expect(AddRemovePage.btnAddedElement).toBeExisting()
      await expect(AddRemovePage.btnAddedElementList).toBeElementsArrayOfSize(
        expected
      )
    })

    it(`should be able to remove ${elementCount} element`, async () => {
      await AddRemovePage.open()
      await AddRemovePage.addElement(elementCount)
      await AddRemovePage.removeElement(elementCount)
      await expect(AddRemovePage.btnAddedElement).not.toBeExisting()
    })
  })
})
