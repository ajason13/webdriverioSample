export async function openHome (): Promise<void> {
  await $('~Home').click()
}

export async function openWebView (): Promise<void> {
  await $('~Webview').click()
}

export async function openLogin (): Promise<void> {
  await $('~Login').click()
}

export async function openForms (): Promise<void> {
  await $('~Forms').click()
}

export async function openSwipe (): Promise<void> {
  await $('~Swipe').click()
}

export async function openDrag (): Promise<void> {
  await $('~Drag').click()
}

export async function waitForTabBarToBeDisplayed (): Promise<boolean> {
  return await $('~Home').waitForDisplayed({
    timeout: 20000
  })
}
