/**
 * main screen object containing all methods, selectors and functionality
 * that is shared across all screen objects
 */
export default class AppScreen {
  private readonly selector: string

  constructor (selector: string) {
    this.selector = selector
  }

  /**
   * Wait for the login screen to be visible
   *
   * @param {boolean} isShown
   */
  async waitForIsShown (isShown = true): Promise<boolean> {
    return await $(this.selector).waitForDisplayed({
      reverse: !isShown
    })
  }
}
