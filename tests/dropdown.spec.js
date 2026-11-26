import { test, expect } from '@playwright/test';


// test('dropdown',async({page})=>{

// await page.goto('https://testautomationpractice.blogspot.com/');

// //select india--

// //await page.locator("#country").selectOption('India');
// //await page.locator('#country').selectOption({index:9});
// await page.locator('#country').selectOption({value:'india'});
// //count

// const total = await page.locator('#country option');
// const count =await total.count();
// console.log("total count",count);

// await expect(total).toHaveCount(10);

// //validate
// const country = await page.locator('#country').textContent();
// await expect(country.includes('India')).toBeTruthy();

// await page.waitForTimeout(3000);



// });


// test('multipledropdown',async({page})=>{
// await page.goto('https://testautomationpractice.blogspot.com/');

// await page.selectOption('#colors',['Blue','Red','Yellow','Green']);


// const options = await page.locator('#colors option');
// const count = await page.locator('#colors option').count();
// console.log(count);
// await expect(options).toHaveCount(7);


// const colors = await page.locator('#colors').textContent();
// await expect(colors.includes('Red')).toBeTruthy();

// const male = page.locator("input[name='gender']").nth(0);
//     const female = page.locator("input[name='gender']").nth(1);


// await female.check();

   

//       await expect(female).toBeChecked();

//     const checkedfemale = await female.isChecked();
//     expect(checkedfemale).toBeTruthy();

//      await expect(male).not.toBeChecked();




//      //=====================================


//          const days = page.locator("//input[@class='form-check-input' and @type='checkbox']");
            
         
//          const totalDays = await days.count();
//     console.log('Total days checkboxes:', totalDays);


// ////////////////////////////////////////////////////////////////////////
//          await page.getByLabel('Monday').check();
//     await page.getByLabel('Wednesday').check();
//     await page.getByLabel('Friday').check();
//     await page.getByLabel('Sunday').check();


//        await expect(page.getByLabel('Monday')).toBeChecked();
//     await expect(page.getByLabel('Wednesday')).toBeChecked();
//     await expect(page.getByLabel('Friday')).toBeChecked();
//     await expect(page.getByLabel('Sunday')).toBeChecked();

// //////////////////////////////////////////////
//    await page.getByLabel('Wednesday').uncheck();
//     await page.getByLabel('Friday').uncheck();

//     await expect(page.getByLabel('Wednesday')).not.toBeChecked();
//     await expect(page.getByLabel('Friday')).not.toBeChecked();
     


// await page.waitForTimeout(3000);

//});