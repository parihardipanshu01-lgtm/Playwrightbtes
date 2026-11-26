import { firefox } from '@playwright/test';
(async()=>{
const browser = await firefox.launch({headless:false});
const context = await browser.newContext();
const page = await context.newPage()
await page.goto('https://www.demoblaze.com/')

const countslider=await page.locator(".d-block").count()
console.log("total number of images in slider are :", countslider)

})();