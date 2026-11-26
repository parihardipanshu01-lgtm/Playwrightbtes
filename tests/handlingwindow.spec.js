import{test,expect,webkit} from "@playwright/test"

test.skip("handle pages", async ()=>{

    const browser = await webkit.launch();

    const context = await browser.newContext();



    const page1 = await context.newPage();
    const page2 = await context.newPage();


    const total_pages= context.pages();
    console.log(total_pages.length);

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle("OrangeHRM")

     await page2.goto('https://orangehrm.com/');
    await expect(page2).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM")
})

test("handle multiple pages/window", async ({browser}) => {
   // const browser = await webkit.launch();

    const context = await browser.newContext();

    const page1 = await context.newPage();

    await page1.goto("https://www.google.com/webhp");

    await expect(page1).toHaveTitle("Google");

    // Start listening for a new page before clicking
    //const pagePromise = context.waitForEvent("page");

    await page1.locator('xpath=//*[@class="w5hRs"]')
        .nth(0)
        .click();

    // Wait for the newly opened tab/window
    //const newPage = await pagePromise;

    //await newPage.waitForLoadState();

    console.log("New page title:", await page1.title());

    await expect(page1).toHaveTitle(
        "About Google: Our products, technology and company information - About Google"
    );

    await page1.waitForTimeout(3000);
    // await page1.waitForTimeout(3000);

    await browser.close();
});
