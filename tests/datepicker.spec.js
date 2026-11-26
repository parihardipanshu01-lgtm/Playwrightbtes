import { test, expect } from '@playwright/test';

test.skip('datepicker', async ({ page }) => {


     await page.goto('https://jqueryui.com/datepicker/');


await expect(page).toHaveTitle('Datepicker | jQuery UI');

const frame = page.frame({ url: 'https://jqueryui.com/resources/demos/datepicker/default.html' });
frame.locator('#datepicker').click();

// await frame.fill("12/12/2004");

const year ='2027';
const month ='December';
const date = '12'

// await frame.click();



 while (true){

  const currentYear = await frame.locator('.ui-datepicker-year').textContent();
    const currentMonth = await frame.locator('.ui-datepicker-month').textContent();


// console.log(currentYear);

   if(currentYear==year && currentMonth==month ){

    break;
   }
   
    await frame.locator('xpath=//*[@class="ui-icon ui-icon-circle-triangle-e"]').click();



}

const dates = await frame.locator('xpath=//*[@class="ui-state-default"]').all();

for (const dt of dates){
     if(await dt.textContent()==date){
          await dt.click();
          break;
     }
}


const dateInput = frame.locator('#datepicker');
await expect(dateInput).toHaveValue('12/12/2027');

console.log("verified");
});



////////////////////////////////////////////////////////


test.skip ('datepicker2', async ({ page }) => {


     await page.goto('https://testautomationpractice.blogspot.com/');


      await page.locator('#txtDate').click();

     



        await page.locator('.ui-datepicker-year').selectOption('2025');
  await page.locator('.ui-datepicker-month').selectOption('11');

   const date = '12';

    const dates = page.locator(
        '.ui-datepicker-calendar td:not(.ui-datepicker-other-month) a'
    );

    const count = await dates.count();

    for (let i = 0; i < count; i++) {

        const dt = dates.nth(i);

        if (await dt.textContent() === date) {
            await dt.click();
            break;
        }
    }

    // Verify selected date
    await expect(page.locator('#txtDate'))
        .toHaveValue('12/12/2025');
await page.waitForTimeout(5000);





test("date picker 3",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
     await page.locator('//*[@placeholder="Start Date"]').fill("2024-05-18");
    await page.locator('//*[@placeholder="End Date"]').fill("2026-11-15")
    await page.waitForTimeout(3000)
    
    await page.locator(".date-picker-box").locator(".submit-btn").click()
    expect(page.locator(".result")).toHaveText("You selected a range of 911 days.")
    
})
});