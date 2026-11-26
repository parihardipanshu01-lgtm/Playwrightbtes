
import { test, expect } from '@playwright/test';
test('bootstrap',async({page})=>{

    await page.goto('https://www.jquery-az.com/');

    await page.locator('.nav-link ').nth(1).click();

    const count = await page.locator("xpath=//*[@class='dropdown-menu m-0 bg-secondary rounded-0 show']//a").all();
    // console.log("total count:",count);

// const data = await page.locator("xpath=//*[@class='dropdown-menu m-0 bg-secondary rounded-0 show']//a");

let expected = "Java";
for (let i =0; i<count.length;i++){

const a =await count[i].textContent();
if (a===expected){
    await count[i].click();
    break;
}
}

await expect(page).toHaveTitle('Java Tutorials', { timeout: 10000 });




 await page.waitForTimeout(3000);
});