import { test, expect } from '@playwright/test';
test('register',async ({ page }) =>{

    await page.goto("https://demo.automationtesting.in/Register.html");

   await expect(page).toHaveTitle('Register');

   await page.getByPlaceholder('First Name').fill('dipanshu');

   await page.getByPlaceholder('Last Name').fill('parihar');

   await page.locator('textarea[ng-model="Adress"]').fill('kallr,jalari, nadaun ,hamirpur(H.P)177042');
await page.locator('input[ng-model="EmailAdress"]')
    .fill('dipanshu01@gmail.com');

    
    await page.locator('input[ng-model="Phone"]')
        .fill('6280076582');

        await page.locator('[id="firstpassword"]').fill('Test@123');

await page.locator('[id="secondpassword"]').fill('Test@123');

await page.waitForTimeout(5000);

});

