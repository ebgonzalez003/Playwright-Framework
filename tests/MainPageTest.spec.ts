import { test } from '@playwright/test';
import { LoginPageMap } from './PageObject/LoginPageMap';
import { MainPageMap } from './PageObject/MainPageMap';

test('validate user can shop an iphone', async ({ page }) => {
  const login = new LoginPageMap(page)
  const mainMap = new MainPageMap(page)
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
  await login.loginForm("rahulshettyacademy", "learning")
  await mainMap.checkSuccesfullLogin()
  await mainMap.clickIphone()
  await mainMap.checkTotalAmount()
  await mainMap.completePurchase()
  await mainMap.thanksMessage()
});

test('validate user can shop all items', async ({ page }) => {
  const login = new LoginPageMap(page)
  const mainMap = new MainPageMap(page)
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
  await login.loginForm("rahulshettyacademy", "learning")
  await mainMap.checkSuccesfullLogin()
  await mainMap.purchaseSomeItems()
  await mainMap.checkTotalAmount()
  await mainMap.completePurchase()
  await mainMap.thanksMessage()
});
test('validate user can back to the shop', async ({ page }) => {
  const login = new LoginPageMap(page)
  const mainMap = new MainPageMap(page)
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
  await login.loginForm("rahulshettyacademy", "learning")
  await mainMap.checkSuccesfullLogin()
  await mainMap.purchaseSomeItems()
  await mainMap.checkTotalAmount()
  await mainMap.continueShopping()
  await mainMap.mainPageAppear()
});