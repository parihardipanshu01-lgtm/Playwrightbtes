import { test, expect } from '@playwright/test';


test ("Css and Xpath loacator example",async({page})=>
{
    await page.goto('https://www.saucedemo.com/');
    console.log("navigate to sauce demo");
// fill username using Css  (id)
await page.locator('#user-name').fill('standard_user');

//fill password using classname
await page.locator('#password').fill('secret_sauce');

//click on login by class
await page.getByRole('button',{class :'submit-button'}).click();

//verify title of page

const a  =await page.title();
console.log(a);

// locate all the product--------
//const product = await page.locator('.invertory_item_name ').allTextContents();
const products =await page.locator('.inventory_item_name ').all();
console.log('available products are ' );
for (const product of products){
    const productsName = await product.textContent();
console.log( productsName.trim());}


await page.locator('.btn_inventory').nth(2).click();

await page.locator('.btn_inventory').nth(0).click();
await page.locator('.btn_inventory').nth(1).click();
 console.log("product add to cart");


await page.locator('.shopping_cart_link').click();

let count = await page.locator('.cart_item').count();
console.log(" products in cart:", count);

let b = await page.locator('.inventory_item_name').allTextContents();
console.log(b);




const cart = await page.locator('xpath = //*[@data-test="title"]').textContent();


console.log('heading of cart:', cart);


await page.locator('xpath=//*[@data-test="checkout"]').click();


    // 4. Fill checkout information
    await page.locator("//input[@id='first-name']").fill('dipanshu');
    await page.locator("//input[@id='last-name']").fill('parihar');
    await page.locator("//input[@id='postal-code']").fill('141001');

    // 5. Click Continue
    await page.locator("//input[@id='continue']").click();

    // Verify checkout overview page
    await expect(page).toHaveURL(/checkout-step-two\.html/);

    // 6. Get Order Summary
    const summary = page.locator("//div[@class='summary_info']");
    const summaryText = await summary.innerText();

    console.log('----- ORDER SUMMARY -----');
    console.log(summaryText);

    // Get product name
    const productName = await page.locator(
        "//div[@class='inventory_item_name']"
    ).allInnerTexts();

    console.log('Products:', productName);

    // Verify summary is visible
    await expect(summary).toBeVisible();

    // 7. Click Finish
    await page.locator("//button[@id='finish']").click();

    // 8. Verify order confirmation
    const confirmation = page.locator(
        "//h2[@class='complete-header']"
    );

    await expect(confirmation).toHaveText(
        'Thank you for your order!'
    );

    const confirmationMessage = await confirmation.innerText();
    console.log('Order Confirmation:', confirmationMessage);

    // Get confirmation description
    const confirmationText = await page.locator(
        "//div[@class='complete-text']"
    ).innerText();

    console.log('Confirmation Details:', confirmationText);

    // 9. Click Back Home
    await page.locator("//button[@id='back-to-products']").click();

    // 10. Verify return to Products page
    await expect(page).toHaveURL(/inventory\.html/);

    await expect(
        page.locator("//span[@class='title']")
    ).toHaveText('Products');

    console.log('Returned to Home/Products page successfully!');
});

























