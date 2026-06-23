import {expect, Page} from '@playwright/test';

export class FormPage{
constructor(private page:Page){}

async gotoFormpage(){
    await this.page.goto('https://demoqa.com/text-box');
}

async fillDetails(fullname:string , email:string, currAdd:string, permAdd: string){
    await this.page.locator('#userName').fill(fullname);
    await this.page.locator('#userEmail').fill(email);
    await this.page.locator('#currentAddress').fill(currAdd);
    await this.page.locator('#permanentAddress').fill(permAdd);
}

async clickSubmit(){
    await this.page.locator('#submit').click()
}

async outputVisible(){
    await expect(this.page.locator('#output')).toBeVisible();
}

}