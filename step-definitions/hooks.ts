import {Before,After, setDefaultTimeout} from '@cucumber/cucumber';
import { chromium, Browser, Page} from '@playwright/test';

setDefaultTimeout(30000)

export let page:Page;
export let browser:Browser;

Before(async()=>{
    browser= await chromium.launch({
        headless:false,
    });
    page= await browser.newPage();
});

After(async()=>{
    await browser.close();
})