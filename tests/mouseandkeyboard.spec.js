import { test, expect } from '@playwright/test';

test.skip('hover and click', async ({ page }) => {
  await page.goto('https://tutorialsninja.com/demo/');



  const notebook = await page.locator('//a[text()="Laptops & Notebooks"]');

  const window = await page.locator('//a[text()="Windows (0)"]');


  await notebook.hover();

  await window.click();


  await page.waitForTimeout(5000);


  await expect  (page).toHaveTitle('Windows')

});


  test.skip('click', async ({ page }) => {
  await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');


const right_click = await page.locator('//*[@class="context-menu-one btn btn-neutral"]');

await right_click.click({ button: 'right' });

  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('clicked: copy');

    await dialog.accept();

  });
await page.locator('//span[text()="Copy"]').click();

  await page.waitForTimeout(5000);


});


test('double click', async ({ page }) => {
  await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');

const frame = page.frameLocator('#iframeResult');
   const field1 =await frame.locator('#field1');
  const field2 =await frame.locator('#field2');
   await field1.clear();

   await field1.fill('playwright');
     await page.waitForTimeout(5000);

   const button = await frame.locator('//button[text()="Copy Text"]');


   await button.dblclick();




     await page.waitForTimeout(5000);


     const value1 = await field1.inputValue();
const value2 = await field2.inputValue();

console.log(value1);
console.log(value2);

expect(value2).toEqual(value1);


});