import {expect, Page} from '@playwright/test';

export class LoginPage{
constructor(private page:Page){}

async gotoLoginPage(){
    await this.page.goto('https://the-internet.herokuapp.com/login')
}

async login(username:string, password:string){
    await this.page.locator('#username').fill(username);
    await this.page.locator('#password').fill(password);

}

async clickloginButton(){
  await this.page.locator('button[type="submit"]').click();

}

async dashboardVisible(){
    await expect(this.page).toHaveURL(/secure/);
}

async errorVisible(){
    await expect(this.page.locator('#flash')).toBeVisible();
}

async logout(){
    await this.page.locator('.button.secondary.radius').click();
}


async loginVisible(){
    await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/login')
}
}