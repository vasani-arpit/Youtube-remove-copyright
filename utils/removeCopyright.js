const { delay } = require("./domManipulation")

module.exports = {
    removeCopyright: async function (myNumber, page) {

        console.log('doing operation on #' + myNumber)

        //add hover numbers
        //work on the number given in parameter
        await page.click('.hoverthis' + myNumber)
        //await page.click('#tooltip ytcp-button')
        await delay(3000)
        await page.waitForSelector('ytcp-paper-tooltip-placeholder[type="custom-content"]')
        await page.waitForTimeout(500) //could have used sloMo but 🤷‍♂️
        await page.click('#tooltip a.action-link')
        await page.waitForSelector("ytcp-icon-button#action-button")
        // await page.waitFor(2000)
        //check if video is in processing already.
        let isDisabled = await page.$$("#action-button[disabled]")
        if (isDisabled.length == 0) {
            await page.click('ytcp-icon-button#action-button')
            await page.waitForSelector('#text-item-1 > ytcp-ve')
            //await page.waitFor(2000)
            await page.click('#text-item-1 > ytcp-ve')
            await page.waitForSelector('#continue-button')
            //await page.waitFor(2000)
            await page.click('#continue-button')
            await page.waitForSelector('#confirm-button')
            //await page.waitFor(2000)
            await page.click('#confirm-button')
            //closing popup
            await page.waitForSelector('ytcp-icon-button.close-button.style-scope.ytcr-video-home-dialog')
            //await page.waitFor(2000)
            // close popup
            await page.click('ytcp-icon-button.close-button.style-scope.ytcr-video-home-dialog')
            //video details 
            //#anchor-video-details
            await page.waitForTimeout(3000)
        } else {
            console.log("Video is already in processing. checking")
            // close popup
            await page.click('ytcp-icon-button.close-button.style-scope.ytcr-video-home-dialog')
        }
    }
}