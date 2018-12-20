// searchPatient.js
import Page from './page';

class SearchPatientPage extends Page {


    get searchButton()                  {return browser.element('button[aria-label="Search"]');}
    get createNewPatient()              {return browser.element('.sc-kMBllD .sc-iRbamj');}
    get searchPatientName()             {return browser.element('.kGjiXX:nth-of-type(2) > [type]');}
    get firstPatientProfileButton()     {return browser.element('[href=\'\\/patients\\/283463\'] .sc-csuQGl');}

    open() {
        super.open('./home');
        this.searchButton.waitForVisible();
        this.searchButton.isVisible();
    }

    click(){
        this.createNewPatient.click();
    }



}

export default new SearchPatientPage();
