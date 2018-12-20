// patientDetailPage.js
import Page from './page';

class patientDetailPage extends Page {


    get patientName()        {return browser.element('.sc-gCUMDz');}
    get stripDelivery()      {return browser.element('.dKKOAp a.sc-eqIVtm.ePLTOx');}
    get stripTab()           {return browser.element('[href=\'\\/patients\\/283463\\/strip-information\']');}
    get devliveryStatus()    {return browser.element("button[aria-label='Create Guideline']");}
    get guidelineTab()       {return browser.element('[href=\'\\/patients\\/283463\\/strip-information\\/prescription\']');}
    get customSetButton()    {return browser.element('.sc-OJyzl .sc-csuQGl');}
    get alertsTab()          {return browser.element('[href=\'\\/patients\\/283463\\/strip-information\\/alerts\']');}
    get saveAlertsButton()   {return browser.element('button[aria-label="saveAccessibilityLabel"]');}
    get stockButton()        {return browser.element('[width=\'15\\.521739130434781\']');}
    get totalStock()         {return browser.element('.sc-jvjKQy .sc-iRbamj');}

    open() {
        this.searchButton.waitForVisible();
        super.open('./home');
        this.searchButton.isVisible();
    }

    click(){
        this.createNewPatient.click();
    }



}

export default new patientDetailPage();
