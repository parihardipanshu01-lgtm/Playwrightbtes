import { test, expect } from '@playwright/test';

 test('dropdown',async({page})=>{

    await page.goto('https://www.google.com/');

    await expect(page).toHaveTitle('Google');

    await page.locator('xpath=//*[@class="gLFyf"]').fill('playwright');
  
  
    await page.waitForTimeout(3000);

const searchbox = page.locator('xpath=//*[@class="wM6W7d"]//span');

const suggestions = await searchbox.all();

let expected = "playwright automation";

for (let i = 0; i < suggestions.length; i++) {

    const a = await suggestions[i].textContent();

    console.log("Suggestion:", a);

    if (a === expected) {
        await suggestions[i].click();
        
    }
}

await page.waitForTimeout(3000);

 });