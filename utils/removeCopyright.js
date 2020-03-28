const { openTab } = require('./tab')
const { assignClass } = require('./domManipulation')
module.exports = {
    removeCopyright: async function (myNumber, browser) {

        //Duplicate tab 
        let page = await openTab(browser)
        await page.evaluate(assignClass)

        //add hover numbers
        //work on the number given in parameter
        await page.click('.hoverthis' + myNumber)
        //await page.click('#tooltip ytcp-button')
        await page.waitFor(2000)
        //await page.waitForSelector('#tooltip ytcp-button')        
        await page.click('#tooltip ytcp-button')
    }
}