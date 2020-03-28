const axios = require('axios');
const { assignClass, getCC } = require('./utils/domManipulation')
const { removeCopyright } = require('./utils/removeCopyright')
const { openTab } = require('./utils/tab')
const puppeteer = require('puppeteer-core')

async function launch() {
    try {
        const response = await axios.get(`http://localhost:9222/json/version`);
        const { webSocketDebuggerUrl } = response.data;

        // Connecting the instance using `browserWSEndpoint`
        const browser = await puppeteer.connect({
            defaultViewport: null,
            browserWSEndpoint: webSocketDebuggerUrl
        });
        console.info(browser);

        let page = await openTab(browser)
        let restrictionsColumn = await page.evaluate(getCC)
        await page.evaluate(assignClass)
        //let CC = await getCC(restrictionsColumn)
        console.log(`there are ${restrictionsColumn.length} copyright claims`)

        for (let i = 0; i < 1; i++) {
            removeCopyright(i, browser)
        }

        //await browser.close();
        //await chrome.kill();
    } catch (error) {
        console.log(error)
    }

}


//await browser.close();

launch()


