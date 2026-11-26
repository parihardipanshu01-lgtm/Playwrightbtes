import { test } from '@playwright/test';

test('Inspect login page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.pause(); // Opens the Playwright Inspector

  await page.getByPlaceholder('Username').fill('standard_user');
});