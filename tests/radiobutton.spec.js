
import { test, expect } from '@playwright/test';

// test('radiobutton', async ({ page }) => {


//     await page.goto('https://demoqa.com/automation-practice-form');

//       const maleRadio = page.locator('#gender-radio-1');
//     const femaleRadio = page.locator('#gender-radio-2');


//     await maleRadio.check();

//     await expect(maleRadio).toBeChecked();

   
//     const checkedmale = await maleRadio.isChecked();
//     expect(checkedmale).toBeTruthy();


//     await expect(femaleRadio).not.toBeChecked();

//     await page.waitForTimeout(5000);


//    const count = await page.locator('input[type="radio"]').count();
//     console.log('Total radio buttons:', count);


    //========================checkbox================================


test('checkBox', async ({ page }) => {


    await page.goto('https://demoqa.com/automation-practice-form');

    //single


  const sports = page.locator('//input[@id="hobbies-checkbox-1"]');
   await sports.check({ force: true });

     await expect(sports).toBeChecked();


       const checked = await sports.isChecked();
              expect(checked).toBeTruthy();


      const reading = page.locator('//input[@id="hobbies-checkbox-2"]');
                  const readingChecked = await reading.isChecked();
                   expect(readingChecked).toBeFalsy();

//////////multiple


const hobbies = page.locator('//input[@type="checkbox"]');

const count = await hobbies.count();

console.log('Count of checkboxes:', count);

for (let i = 0; i < count; i++) {
    await hobbies.nth(i).check();



 await hobbies.nth(i).uncheck();
}



/////////////////////

const checkbox =[
   ' //*[@id="hobbies-checkbox-1"]',
    '//*[@id="hobbies-checkbox-3"]'
]


for(let i=0; i<checkbox.length;i++){
    await page.locator(checkbox[i]).check();
}



/////////////////////////

await page.waitForTimeout(5000);



});
