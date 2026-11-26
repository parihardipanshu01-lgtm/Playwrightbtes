import {test,expect} from '@playwright/test'

test("automation exercise", async({page})=>{

    await page.goto("https://automationexercise.com/#google_vignette")

    const t=await page.title()
    console.log(t)

    await expect(page).toHaveTitle("Automation Exercise")

    //click on login
    // await page.locator("xpath=//*[contains(text(),'Signup/Login')]").click()
    await page.locator('xpath=//*[@class="nav navbar-nav"]//li[4]').click();
    await page.waitForTimeout(4000)


    //new account 
    // await page.locator('xpath=//input[@data-qa="signup-name"]').fill("dipanshu")
    // await page.locator("xpath=//input[@data-qa='signup-email']").fill("dipanshuuu01@gmail.com")
    // await page.locator("xpath=//button[text()='Signup']").click()
    // await page.waitForTimeout(5000)

    //login 

    await page.locator("xpath=//input[@data-qa='login-email']").fill("dipanshuuu@gmail.com")
    await page.getByRole("textbox",{name:'password'}).fill("Test@123")
    await page.locator('xpath=//button[text()="Login"]').click()
    await page.waitForTimeout(5000)


    // images in slider count
    const countImg=await page.locator(".img-responsive").count()
    console.log("count is: ",countImg)

    //category NAME
    const CategoryNames=await page.locator("xpath=//*[@data-toggle='collapse']").allTextContents()
    console.log("category names: ",CategoryNames);

    //category names

    const w=await page.locator('xpath=//*[@href="#Women"]').textContent()
    console.log(w.trim())

    const m=await page.locator('xpath=//*[@href="#Men"]').textContent()
    console.log(m.trim())

    const k=await page.locator('xpath=//*[@href="#Kids"]').textContent()
    console.log(k.trim())

    //feature image count
    const featureImg= await page.locator(".productinfo").count()
    console.log("count of feature image is: ",featureImg)

    //feature image name

    const f=await page.locator('xpath=//*[@class="productinfo text-center"]//p').allTextContents()
    console.log(f)

    // const content=await page.locator('xpath=//*[text()="Blue Top"]').textContent()
    // console.log(content)

    //logout
    await page.locator('a[href="/logout"]').click()
    console.log("logout")

    

})