import { test } from '@playwright/test';
import { LoginPageMap } from './PageObject/LoginPageMap';
import { MainPageMap } from './PageObject/MainPageMap';
import { HomePageMap } from './PageObject/HomePageMap';

test('verify user can access to the Home Page', async ({ page }) => {
  const login = new LoginPageMap(page)
  const mainMap = new MainPageMap(page)
  const homeMap = new HomePageMap(page)
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
  await login.loginForm("rahulshettyacademy", "learning")
  await mainMap.checkSuccesfullLogin()
  await homeMap.homeButton()
  await homeMap.banner()

});
test('verify user can fill all the form', async ({ page }) => {
  const login = new LoginPageMap(page)
  const mainMap = new MainPageMap(page)
  const homeMap = new HomePageMap(page)
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
  await login.loginForm("rahulshettyacademy", "learning")
  await mainMap.checkSuccesfullLogin()
  await homeMap.homeButton()
  await homeMap.banner()
  await homeMap.nameTextBox()
  await homeMap.emailTextBox()
  await homeMap.passwordTextBox()
  await homeMap.iceCheckBox()
  await homeMap.statusButton()
  await homeMap.birthdayBox()
  await homeMap.submitButton()
  await homeMap.successMessage()
  
});