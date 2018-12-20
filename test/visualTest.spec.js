const {Eyes, Target} = require('@applitools/eyes.webdriverio');

const eyes = new Eyes();
//  eyes.setApiKey('process.env.APPLITOOLS_KEY');
eyes.setApiKey('NhBEEo1frQRbYyUGLZmeazh2s107RAkBMmt6n6ylcsw108w110');


describe('my first visual test', function () {
    it('should look visually perfect', async function () {
        browser.url('./helloworld');

        const pageTitle = browser.getTitle();

        console.log(`Title of page is ${pageTitle}`)

        try {
            const viewportSize = browser.getViewportSize();
            console.log(viewportSize);

            await eyes.open(browser, 'Hello World!', 'My first Javascript test!', viewportSize);

            await eyes.check('Main Page', Target.window());

            browser.click('button');

            await eyes.check('Click!', Target.window());

            await eyes.close();
        } finally {
            await eyes.abortIfNotClosed();
        }

    })
});
