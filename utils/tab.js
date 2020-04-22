module.exports = {
    openTab: async function (browser) {
        let page = await browser.newPage()
        await page.goto(`https://studio.youtube.com/channel/${process.env.CHANNEL_ID}/videos/upload?filter=%5B%7B"name"%3A"HAS_COPYRIGHT_CLAIM"%2C"value"%3A"VIDEO_HAS_COPYRIGHT_CLAIM"%7D%2C%7B"name"%3A"VISIBILITY"%2C"value"%3A%5B"PRIVATE"%5D%7D%5D&sort=%7B"columnType"%3A"date"%2C"sortOrder"%3A"DESCENDING"%7D`)
        await page.click('[tooltip-text="Videos"]')
        await page.waitFor(3000)
        return page
    }
}