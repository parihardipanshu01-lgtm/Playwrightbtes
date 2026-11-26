
import { test, expect } from '@playwright/test';

test.skip('alerts', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('I am a JS Alert');

    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Click for JS Alert' }).click();

  await expect(page.locator('#result'))
    .toContainText('You successfully clicked an alert');

// await page.waitForTimeout(6000);

});


test.skip('confirm', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toBe('I am a JS Confirm');

    // await dialog.accept();
    await dialog.dismiss();
  })

    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();

//   await expect(page.locator('#result'))
//     .toContainText('You clicked: Ok');
await expect(page.locator('#result'))
    .toContainText('You clicked: Cancel');

});

test.skip('prompt', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('prompt');
    expect(dialog.message()).toBe('I am a JS prompt');

     await dialog.accept("hello ");
    
  })

    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();


await expect(page.locator('#result'))
    .toContainText('You entered: hello ');
    await page.waitForTimeout(4000);

});

test ('beforeunload', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill('standard_user');

await page.evaluate(()=>
{
  window.onbeforeunload = () =>"you have unsaved changes!";
});




page.on('dialog', async dialog => {

  
console.log("pop-up type:  ",dialog.type());//output : beforunload//
await page.waitForTimeout(10000);
  await dialog.accept();

});


await page.waitForTimeout(10000);

await page.reload();




await expect(page.locator('#user-name')).toBeEmpty();
});





