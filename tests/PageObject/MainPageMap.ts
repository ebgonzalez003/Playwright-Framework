import { test, expect, Locator, Page } from '@playwright/test';
export class MainPageMap{
    //CheckOut Buttons
    public chckBtn: Locator
    public chckOutBtn: Locator
    public deliveryChkBx: Locator
    public termsChkBx: Locator
    public closeBtn: Locator
    public purchaseBtn: Locator
    public continueShoppingBtn: Locator
    //Articles
    public samsungChckBtn: Locator
    public nokiaChckBtn: Locator
    public blackberryChckBtn: Locator
    public iphoneChckBtn: Locator
    //Asserts Messages
    public shoppingIcon: Locator
    public totalAmount: Locator
    public thanksMsg: Locator
    public mainPage: Locator;
    

    constructor(page: Page){
        //Articles
        this.iphoneChckBtn = page.locator("//app-card[1]//button")
        this.samsungChckBtn = page.locator("//app-card[2]//button")
        this.nokiaChckBtn = page.locator("//app-card[3]//button")
        this.blackberryChckBtn = page.locator("//app-card[4]//button")
        //CheckOut Button
        this.chckBtn = page.locator("//a[@class=\"nav-link btn btn-primary\"]")
        this.chckOutBtn = page.getByRole('button', { name: 'Checkout' })
        this.deliveryChkBx = page.getByRole('textbox', { name: 'Please choose your delivery' })
        this.termsChkBx = page.locator("//input[@id='checkbox2']/following-sibling::label")
        this.closeBtn = page.getByText("Close")
        this.purchaseBtn = page.getByRole('button', { name: 'Purchase' })
        this.continueShoppingBtn = page.locator("//button[@class = 'btn btn-default']")
        //Asserts Messages
        this.mainPage = page.locator("//div[@class = 'col-lg-9']")
        this.shoppingIcon = page.locator("xpath = //h1[@class='my-4']")
        this.totalAmount = page.locator("xpath = //td[@class='text-right']")
        this.thanksMsg = page.locator("xpath = //div[@class='alert alert-success alert-dismissible']")
    }
    async clickIphone(){
        await this.iphoneChckBtn.click()
        await this.chckBtn.click()
    }

    async purchaseSomeItems(){
        await this.iphoneChckBtn.click()
        await this.samsungChckBtn.click()
        await this.blackberryChckBtn.click()
        await this.nokiaChckBtn.click()
        await this.chckBtn.click()
    }
    async completePurchase(){
        await this.chckOutBtn.click()
        await this.deliveryChkBx.fill("Mexico")
        await this.termsChkBx.click()
        await this.closeBtn.click()
        await this.purchaseBtn.click()
    }
    async continueShopping(){
        await this.continueShoppingBtn.click()
    }

    //Asserts
    async checkSuccesfullLogin(){
        await expect (this.shoppingIcon).toBeVisible()
    }
    async checkTotalAmount(){
        await expect (this.totalAmount).toBeVisible()
    }
    async thanksMessage(){
        await expect(this.thanksMsg).toBeVisible()
    }
    async mainPageAppear(){
        await expect (this.mainPage).toBeVisible()
    }
}
