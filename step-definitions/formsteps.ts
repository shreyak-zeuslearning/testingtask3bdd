import {Given, When, Then} from '@cucumber/cucumber';
import { FormPage } from '../pages/formpage';
import {page} from '../step-definitions/hooks';
import { expect } from '@playwright/test';

let formPage:FormPage

Given ('user is on form page', async function(){
    formPage=new FormPage(page);
    await formPage.gotoFormpage();
});

When('user fills the form with following data:', async function (dataTable){
    const data = dataTable.rowsHash();
    await formPage.fillDetails(
        data.name,
        data.email,
        data.currAdd,
        data.permAdd
    )
        await formPage.clickSubmit();

})

Then('form should be submitted successfully', async function () {
   await  formPage.outputVisible();  
})


