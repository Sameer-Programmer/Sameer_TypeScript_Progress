import { test, expect, chromium } from "@playwright/test";

test("Login", async ({ }) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    const URL = "https://testautomationpractice.blogspot.com/"
    await page.goto(URL)
    await page.waitForLoadState('networkidle')
    // await page.screenshot({
    //     path: 'Sameer_TypeScript_Progress/Screenshorts/loginPage.png'
    // })

    const country_Dropdown = page.locator('#country');
    await country_Dropdown.selectOption({ value: 'germany' })
   await expect(country_Dropdown).toHaveValue('germany')
    



})

//Sameer_TypeScript_Progress\RevisonFolder\PlaywrightPractice\Test1.spec.ts
//npx playwright  RevisonFolder/PlaywrightPractice/Test1.spec.ts