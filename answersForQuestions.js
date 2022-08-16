// Question 1:
/* 
    - I think the title does not reflect the content of the form.
    - The type of currency for payment was not specified.
    - Writing the credit card number without spaces or dashes makes it difficult to write correctly.
    - The expiration date can be easier to be written in the format MM/YY instead of drop down menus.
    - It is not clear what the purpose of the the second field for adress (which is not required) is.
    - I would seperate the card holder details from the payment details.
    - The transition between fields using the tab key should be in correct order.
    - The drop down menu for the state may be very long and difficult to scroll through - there is an option to write with keyboard?.
    - The CVV code and\or card holder id are not required for the payment.
    - Check if card number matches the type of card.
*/

// Question 2:

// to check the order of the transition between fields using the tab key

const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    })
    const page = await browser.newPage()
    const fields = await page.$$('input');
    for (let i = 0; i < fields.length; i++) {
        await fields[i].focus();
        await page.keyboard.press('Tab');
    }
})()

// to check if the card number matches the type of card
// I can try to insert the card number and check if the form is submitted or not

// Question 3:

/*
We can use the regular expression to check if the card number is valid.
To order the fields in the correct order we can use the tabindex attribute.
*/
