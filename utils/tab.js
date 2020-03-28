module.exports = {
    openTab: async function (browser) {
        let page = await browser.newPage()
        await page.goto('https://studio.youtube.com/')
        await page.click('[tooltip-text="Videos"]')
        await page.waitFor(3000)
        return page
    }
}