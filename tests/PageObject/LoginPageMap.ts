import { Locator, Page } from "@playwright/test"

export class LoginPageMap {
    public readonly userNameText: Locator
    public readonly userPassword: Locator
    public readonly termsBtn: Locator
    public readonly signInBtn: Locator

    constructor(page: Page) {
        this.userNameText = page.locator("//input[@id = 'username']");
        this.userPassword = page.locator("//input[@id = 'password']");
        this.termsBtn = page.locator("//input[@id = 'terms']");
        this.signInBtn = page.locator("//input[@id = 'signInBtn']");
    }
    async loginForm(username : string, password: string) {
        await this.userNameText.fill(username);
        await this.userPassword.fill(password);
        await this.termsBtn.click();
        await this.signInBtn.click();
    }

}