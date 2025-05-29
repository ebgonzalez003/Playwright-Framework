import { test } from '@playwright/test';
import { LoginPageMap } from './PageObject/LoginPageMap';
import { MainPageMap } from './PageObject/MainPageMap';

test('verify user can signIn', async ({ page }) => {
  const login = new LoginPageMap(page)
  const mainMap = new MainPageMap(page)
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
  await login.loginForm("rahulshettyacademy", "learning")
  await mainMap.checkSuccesfullLogin()
});


