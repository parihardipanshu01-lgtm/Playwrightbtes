import { test, expect } from '@playwright/test';

test.skip('date picker 3', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.getByPlaceholder('Start Date').fill('2024-05-18');
  await page.getByPlaceholder('End Date').fill('2026-11-15');

  await page.locator('.date-picker-box .submit-btn').click();

  await expect(page.locator('.result')).toHaveText('You selected a range of 911 days.');
});





test("static table", async({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/")

    const heading=await page.locator('//*[@name="BookTable"]//tbody//tr//th').count()
    console.log("total heading  is: ",heading)

    //count rows
    const rows=await page.locator('//*[@name="BookTable"]//tbody//tr').count()
     console.log("total rows is: ",rows)


    const cols=await page.locator('//*[@name="BookTable"]//tbody//tr//th').count()
     console.log("total cols  is: ",cols)

    //fetching all content of the table

  
       const  arr=await page.locator('//*[@name="BookTable"]//tbody//tr//td').allTextContents()
        
    
     //this will give data in array 
     console.log(arr)

    });