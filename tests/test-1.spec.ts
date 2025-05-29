import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   page.goto('https://rahulshettyacademy.com/angularpractice/');
   page.locator('form input[name="name"]').click();
   page.locator('form input[name="name"]').press('CapsLock');
   page.locator('form input[name="name"]').fill('Emiliano');
   page.locator('input[name="email"]').click();
   page.locator('input[name="email"]').fill('ebgonzalez@techmahindra.com');
   page.locator('input[name="email"]').press('Tab');
   page.getByRole('textbox', { name: 'Password' }).fill('12345678');
   page.getByRole('checkbox', { name: 'Check me out if you Love' }).check();
   page.getByRole('radio', { name: 'Student' }).check();
   page.locator('input[name="bday"]').fill('2003-04-23');
   page.getByRole('button', { name: 'Submit' }).click();
});