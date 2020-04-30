module.exports = {
    removeCopyright: async function (myNumber, page) {

        console.log('doing operation on ' + myNumber)

        //add hover numbers
        //work on the number given in parameter
        await page.click('.hoverthis' + myNumber)
        //await page.click('#tooltip ytcp-button')
        await page.waitFor(3000)
        await page.waitForSelector('ytcp-paper-tooltip-placeholder')
        //await page.waitFor(2000) //could have used sloMo but 🤷‍♂️
        await page.click('#tooltip a.action-link')
        await page.waitForSelector("ytcp-button#select-action")
        //await page.waitFor(2000)
        //check if video is in processing already.
        let isDisabled = await page.$$("#select-action[disabled]")
        if (isDisabled.length == 0) {
            await page.click('ytcp-button#select-action')
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
            await page.waitForSelector('#remove-claim-tool > ytcr-claim-tool-remove-claim > div > ytcr-editing-in-progress > ytcp-badge')
            //await page.waitFor(2000)
            await page.click('#dialog > div.header.style-scope.ytcp-dialog > div > div:nth-child(2) > ytcp-icon-button > iron-icon')
            //video details 
            //#anchor-video-details
            await page.waitFor(3000)
        } else {
            console.log("Video is already in processing. checking")
            await page.click('#dialog > div.header.style-scope.ytcp-dialog > div > div:nth-child(2) > ytcp-icon-button > iron-icon')
        }
    }
}