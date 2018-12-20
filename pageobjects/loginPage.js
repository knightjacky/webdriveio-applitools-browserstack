// loginPage.js
import Page from './page';

class loginPage extends Page {


    get loginEmail()       {return browser.element('#gigya-textbox-loginID');}
    get loginPassword()    {return browser.element('#gigya-password-10866137136906000');}
    get signIn()           {return browser.element('input[value="sign in"]');}

    open() {
        super.open('./auth/login');
        this.loginEmail.waitForVisible();
    }

    submit() {
        this.signIn.waitForEnabled(3000);
        this.signIn.click();
    }

}

export default new loginPage();
