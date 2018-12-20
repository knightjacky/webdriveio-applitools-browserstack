export default class Page {
    open() {
        browser.url('./')
        // browser.windowHandleMaximize();
        browser.windowHandleSize({width:1024, height:768});
    }
}