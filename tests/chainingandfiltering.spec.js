
// import { firefox, expect } from '@playwright/test';


// (async () => {

//     const browser = await firefox.launch({ headless: false });
//     const context = await browser.newContext();
//     const page = await context.newPage();


    // await page.locator('#form')
    //     .locator('input[data-qa="login-email"]')
    //     .fill('dipanshuuu01@gmail.com');

    // await page.locator('#form')
    //     .locator('input[data-qa="login-password"]')
    //     .fill('Test@123');

    // await page.locator('#form')
    //     .locator('button[data-qa="login-button"]')
    //     .click();

    // await page.waitForTimeout(3000);

  

 


    // await page.locator('a[href="/products"]').click();

    // await page.locator('#search_product').fill('Blue Top');

    // await page.locator('#submit_search').click();

    

    // await page.locator('.productinfo')
    //     .filter({ hasText: 'Blue Top' })
    //     .getByText('Add to cart')
    //     .click();

   

    // await expect(
    //     page.getByText('Your product has been added to cart')
    // ).toBeVisible();

    // console.log('Product successfully added to cart');

    // await page.waitForTimeout(2000);

    // await browser.close();


    //=================================================================================================

import { test, expect } from '@playwright/test';

test("nav menu count", async ({ page }) => {

    await page.goto('https://www.automationexercise.com/login');

 
    const menus = page.locator('.navbar-nav li');


    const count = await menus.count();
    console.log(" menu count:", count);

    
    const text = await menus.allTextContents();
    console.log(" menu names:", text);

  


    
    for (let i = 0; i < count; i++) {
        const text2 = await menus.nth(i).textContent();
        console.log(text2);
    }
    await menus.nth(1).click();
    


const product = page.locator(
  'xpath=//*[@class="productinfo p"]'
);

const count1 = await product.count();
console.log(count1);
const firstproduct = await product.first().textContent();
console.log(firstproduct.trim());

const lastproduct = await product.last().textContent();
console.log(lastproduct.trim());


 await product.first().click();
 

 await page.locator('xpath=//*[@class="fa fa-plus-square"]').nth(0).click();
  await page.waitForTimeout(3000);

await expect(page.getByText('Blue Top')).toBeVisible();




});




