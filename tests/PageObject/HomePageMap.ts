import { test, expect, Locator, Page } from '@playwright/test';
export class HomePageMap{
    //Home Buttons
    public homeBtn: Locator
    public iceChckBx: Locator
    public statusBtn: Locator
    public submitBtn: Locator
    //Home Text Boxs
    public nameTxtBx: Locator
    public emailTxtBx: Locator
    public passwordTxtBx: Locator
    public birthdayBx: Locator
    //Asserts
    public protractorAppear: Locator;
    public successMsg: Locator;

    constructor(page: Page){
        //Home Buttons
        this.homeBtn = page.locator("//ul[@class='navbar-nav']//li[1]")
        this.iceChckBx = page.getByRole('checkbox', { name: 'Check me out if you Love' })
        this.statusBtn = page.getByRole('radio', { name: 'Student' })
        this.submitBtn = page.getByRole('button', { name: 'Submit' })
        //Home Text Boxes
        this.nameTxtBx = page.locator('form input[name="name"]')
        this.emailTxtBx = page.locator('input[name="email"]')
        this.passwordTxtBx = page.getByRole('textbox', { name: 'Password' })
        this.birthdayBx = page.locator('input[name="bday"]')
        //Asserts Messages
        this.protractorAppear = page.locator("//div[@class = 'jumbotron']")
        this.successMsg = page.locator("xpath = //div[@class = 'alert alert-success alert-dismissible']")
    }

    //Home Buttons Actions
    async homeButton(){
        await this.homeBtn.click()
    }
    async iceCheckBox(){
        await this.iceChckBx.check()
    }
    async statusButton(){
        await this.statusBtn.check()
    }
    async submitButton(){
        await this.submitBtn.click()
    }
    //Home Text Boxes
    async nameTextBox(){
        await this.nameTxtBx.click
        await this.nameTxtBx.fill("Emiliano")
    }
    async emailTextBox(){
        await this.passwordTxtBx.click()
        await this.emailTxtBx.fill("ebgonzalez@techmahindra.com")
        await this.passwordTxtBx.press('Tab')
    }
    async passwordTextBox(){
        await this.passwordTxtBx.click()
        await this.passwordTxtBx.fill("12345678")
    }
    async birthdayBox(){
        await this.birthdayBx.fill('2003-04-23')
    }

    //Asserts
    async banner(){
        await expect (this.protractorAppear).toBeVisible()
    }
    async successMessage(){
        await expect (this.successMsg).toBeVisible()
    }
}