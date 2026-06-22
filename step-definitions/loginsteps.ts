import {Given, When, Then} from '@cucumber/cucumber';
import { LoginPage } from '../pages/loginpage';
import {page} from '../step-definitions/hooks';
import { expect } from '@playwright/test';

let loginPage:LoginPage;

Given('user is on login page',async function(){
    loginPage= new LoginPage(page);
    await loginPage.gotoLoginPage();
});


When('user enters valid username and password',async function(){
    await loginPage.login(
        'tomsmith',
        'SuperSecretPassword!'
    )
});


When('clicks on login button',async function(){
  await loginPage.clickloginButton();
});


Then('user should be navigated to dashboard',async function(){
   await loginPage.dashboardVisible();
});


When('user enters invalid credentials',async function(){
    await loginPage.login(
        'tom',
        'tom123'
    )
});


Then('error message should be displayed',async function(){
    await loginPage.errorVisible();
});


Given('user is already logged in',async function(){
    loginPage= new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login(
        'tomsmith',
        'SuperSecretPassword!'
    )
    await loginPage.clickloginButton();
});


When('user clicks logout button',async function(){
    await loginPage.logout();

});

Then('user is back on login page',async function(){
    await loginPage.loginVisible
});

When('user enters {string} and {string}', async function (username, password){
  await loginPage.login(username,password);
  await loginPage.clickloginButton();

})

Then ('login result should be {string}', async function (result){
 switch(result){
    case 'Success': 
    await loginPage.dashboardVisible();
    break;
    
    case 'Failure':
    await loginPage.errorVisible();
    break;

    default:
    throw new Error(`Invalid value of ${result}`);

 }
});
