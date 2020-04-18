module.exports = {
    openTab: async function (browser) {
        let page = await browser.newPage()
        await page.goto(`https://studio.youtube.com/channel/${process.env.CHANNEL_ID}/videos/upload?filter=%5B%7B%22name%22%3A%22HAS_COPYRIGHT_CLAIM%22%2C%22value%22%3A%22VIDEO_HAS_COPYRIGHT_CLAIM%22%7D%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D`)
        await page.click('[tooltip-text="Videos"]')
        await page.waitFor(3000)
        return page
    }
}