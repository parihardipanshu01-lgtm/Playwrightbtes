import { test, expect } from '@playwright/test';

test(" table", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator("#productTable");

    

    const columns = table.locator('thead tr th');

    const rows = table.locator('tbody tr');

    console.log('Number of columns:', await columns.count());

    console.log('Number of rows:', await rows.count());


    expect(await columns.count()).toBe(4);

    expect(await rows.count()).toBe(5);



    ////////////////////////////////////////

 const matchedRow = rows.filter({
        hasText: 'Smartwatch'
    });

    
    await matchedRow.locator('input[type="checkbox"]').check();

    await expect(
        matchedRow.locator('input[type="checkbox"]')
    ).toBeChecked();






    const count = await rows.count();

    let expected = ['Laptop', 'Smartwatch', 'Wireless Earbuds'];

    for (let i = 0; i < count; i++) {

        const productName = (await rows.nth(i).locator('td').nth(1).textContent());

        if (expected.includes(productName)) {

            await rows.nth(i).locator('input[type="checkbox"]').check();

          
        }
    }


  



for (let i = 0; i < count; i++) {

    const data = await rows.nth(i).textContent();

    console.log(data);
}
 await page.waitForTimeout(5000);





    // const pages = page.locator('xpath=//*[@class="pagination"]/li');
   

    // const pageCount = await pages.count();

    // console.log("Total Pages:", pageCount);

  
    // expect(pageCount).toBe(4);


// Capture Page 1 data
const page1 = await table.locator('tbody tr').allTextContents();

// Click Page 2
const page2link = page.locator('.pagination li a').nth(1);
await page2link.click();

// Capture Page 2 data
const page2 = await table.locator('tbody tr').allTextContents();

expect(page1).not.toEqual(page2);

console.log("Both pages have different content");

// Fetch all pages data
const pagesa = page.locator('.pagination li a');
const pageCounta = await pagesa.count();

for (let i = 0; i < pageCounta; i++) {
    await pagesa.nth(i).click();

    const data = await table.locator('tbody tr').allTextContents();
    console.log(`Page ${i + 1}:`, data);
}
//////////////////////////////////////////////////////////////////////////////

const ids = await page.locator('//*[@id="productTable"]/tbody/tr/td[1]').allTextContents();
const uniqueIds = [...new Set(ids)];

console.log("Total IDs:", ids);
console.log("Unique IDs:", uniqueIds);

expect(uniqueIds.length).toBe(ids.length);

 //////////////////////////////////


await pagesa.nth(1).click();



await pagesa.nth(0).click();


await expect(table).toContainText('Laptop');    



});