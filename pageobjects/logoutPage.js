// logoutPage.js
import Page from './page';

class LogoutPage extends Page {


    get menuButton()                    {return browser.element('[type] [width]');}
    get logoutButton()                  {return browser.element('.sc-esoVGF .sc-iRbamj');}

    open() {
        super.open('./home');
        this.searchButton.waitForVisible();
        this.searchButton.isVisible();
    }

    logout(){
        this.menuButton.waitForVisible();
        this.menuButton.click();
        this.logoutButton.waitForVisible();
        this.logoutButton.click();
    }



}

export default new LogoutPage();
