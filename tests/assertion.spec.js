
import { test, expect } from '@playwright/test';


// test('verifying page',async ({page}) =>{

//    //URL 
// await  page.goto('https://www.saucedemo.com/');

// await expect(page).toHaveTitle('Swag Labs');

// //USername
// const username= await page.getByPlaceholder('Username');
// username.fill('standard_user');

// await  expect(username).toHaveValue('standard_user');

// //password
// const password =await page.getByPlaceholder('Password');
// password.fill('secret_sauce');
// await  expect(password).toHaveValue('secret_sauce');

// // click login

// await page.getByRole('button',{ name:'login' } ).click();

// //verify url

// await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

// //heading

// await expect(page.getByText('Products', { exact: true })).toBeVisible();

// //product count

// const count = await page.locator('.inventory_item').count();

// console.log(count);

// await expect(count).toBe(6);

// //add to cart 

// await expect(page.locator('.btn_inventory').first()).toBeEnabled();

// await page.locator('.btn_inventory').first().click();
// await page.waitForTimeout(3000);

// });



test('register page',async ({page}) =>{

    //URL 
 await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');

await  expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/register');

//titile
const title = await page.title();
console.log(title);

await expect(page).toHaveTitle('Register Account');


// logo check

const logo =await page.locator('xpath=//*[@class="col-sm-4"]' );
await expect(logo).toBeVisible();

//check search box
await expect (page.getByPlaceholder('Search')).toBeEnabled();

//raddio button
await page.getByLabel('Yes').click();

await expect (page.getByLabel('Yes')).toBeChecked();
// submit button
await expect(page.locator('.btn-primary')).toHaveAttribute('type', 'submit');


    
    await page.locator('#input-firstname').fill('Dipanshu');
    await expect(page.locator('#input-firstname')).toHaveValue('Dipanshu');

   
    await page.locator('#input-lastname').fill('Parihar');
    await expect(page.locator('#input-lastname')).toHaveValue('Parihar');

    
    await page.locator('#input-email').fill('test123@gmail.com');
    await expect(page.locator('#input-email')).toHaveValue('test123@gmail.com');

   
    await page.locator('#input-telephone').fill('6280013131');
    await expect(page.locator('#input-telephone')).toHaveValue('6280013131');

    
    await page.locator('#input-password').fill('Test@123');
    await expect(page.locator('#input-password')).toHaveValue('Test@123');

    
    await page.locator('#input-confirm').fill('Test@123');
    await expect(page.locator('#input-confirm')).toHaveValue('Test@123');


    await page.locator('.btn-primary').click();

});
