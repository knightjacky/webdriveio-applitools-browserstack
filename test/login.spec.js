// login.spec.js

const expect = require('chai').expect;
const axeSource = require('axe-core').source;
const assert = require('assert');
import LoginPage from '../pageobjects/loginPage';
import SearchPatientPage from '../pageobjects/searchPatientPage';
import PatientDetailPage from '../pageobjects/patientDetailPage';
import LogoutPage from '../pageobjects/logoutPage';

describe('Testing for docotor website page', () => {
  it("login in the website", () => {
    LoginPage.open();
    browser.EyesOpen('doctorWebsiteLogin');
    LoginPage.loginEmail.setValue('testemailaddress');
    LoginPage.loginPassword.setValue('testingpassword');
    browser.EyesCheckWindow('loginPage');
    LoginPage.submit();
    SearchPatientPage.searchButton.waitForVisible();
    SearchPatientPage.searchPatientName.setValue('testing');
    browser.EyesCheckWindow('searchPatientPage');
    SearchPatientPage.searchButton.click();
    SearchPatientPage.firstPatientProfileButton.waitForVisible();
    browser.EyesCheckWindow('patientListPage');
    SearchPatientPage.firstPatientProfileButton.click();
    PatientDetailPage.stripDelivery.waitForVisible();
    browser.EyesCheckWindow('patientDetailPage');
    PatientDetailPage.stripDelivery.click();
    PatientDetailPage.devliveryStatus.waitForEnabled();
    browser.EyesCheckWindow('stripDeliveryPage');
    PatientDetailPage.guidelineTab.click();
    PatientDetailPage.customSetButton.waitForVisible();
    browser.EyesCheckWindow('guidelinePage');
    PatientDetailPage.alertsTab.click();
    PatientDetailPage.saveAlertsButton.waitForEnabled();
    browser.EyesCheckWindow('alertPage');
    PatientDetailPage.stockButton.click();
    PatientDetailPage.totalStock.waitForVisible();
    browser.EyesCheckWindow('stockPage');
    LogoutPage.logout();
    LoginPage.signIn.waitForVisible();
    browser.EyesClose(false);
  });
});
