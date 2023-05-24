const { delay } = require("./domManipulation")

module.exports = {
    openTab: async function (browser) {
        let page = await browser.newPage()
        await page.goto(`https://studio.youtube.com/channel/${process.env.CHANNEL_ID}/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D`)
        await page.click('#menu-item-1')
        await delay(3000)
        return page
    }
}