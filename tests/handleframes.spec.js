
import { test, expect } from '@playwright/test';

test('frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const allframes = page.frames();

    console.log("Total frames:", allframes.length);


    const input = page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
     await input.fill("dipanshu");

      const input2 = page.frameLocator("frame[src='frame_4.html']").locator("[name='mytext4']");
     await input2.fill("parihar");
     
      const frame31 = page.frameLocator("frame[src='frame_3.html']").locator("[name='mytext3']");
     await frame31.fill("hello");




const frame3 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3' });


const childFrames = frame3.childFrames();
console.log("Total frames:", childFrames.length);

await childFrames[0].locator("//*[@class='vd3tt']").first().click();



     await page.waitForTimeout(5000);

})