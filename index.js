
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    })
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 1800 })
    await page.goto('http://contractorsinsurancereview.com/ExampleForm/')

    await page.$eval('input[name="name"]', el => el.value = 'Gil Alkobi');
    await page.$eval('input[name="email"]', el => el.value = 'Gil@gmail.com');
    await page.$eval('input[name="phone"]', el => el.value = '123456789');
    await page.$eval('input[name="company"]', el => el.value = 'TheCompany!');
    // if the email is not valid, the form will not be submitted
    // the phone number has no validation but it is required like all other fields

    // get the value from the text of option in the dropdown list (no value attribute)
    await page.select('#employees', '51-500');

    await page.screenshot({ path: 'fullFormChanges.png' });

    await Promise.all([
        page.click('button.primary.button'),
        page.waitForNavigation(),
        console.log('Form submitted')
    ]);
    await browser.close()
})()