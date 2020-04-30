const axios = require('axios');
const {
    assignClass,
    getCC,
    getNone,
    showButtons,
    checkProcessing,
    getLink
} = require('./utils/domManipulation')
const { removeCopyright } = require('./utils/removeCopyright')
const { openTab } = require('./utils/tab')
const puppeteer = require('puppeteer-core')
require('dotenv').config()
let browser;
//const launchChrome = require('chrome-launcher') //TODO: Figure this out later
async function setup() {
    const response = await axios.get(`http://localhost:9222/json/version`);
    const { webSocketDebuggerUrl } = response.data;

    // Connecting the instance using `browserWSEndpoint`
    browser = await puppeteer.connect({
        defaultViewport: null,
        browserWSEndpoint: webSocketDebuggerUrl
    });
    console.info(browser);
    launch()
}

async function launch() {
    try {
        let page = await openTab(browser)
        let restrictionsColumn = await page.evaluate(getCC)
        let cNumber = await page.evaluate(assignClass)
        //let CC = await getCC(restrictionsColumn)
        console.log(`there are ${restrictionsColumn.length} copyright claims`)
        //is there any private videos with no copyright? yes then make them public and call launch()
        // let noRestrictionsColumn = await page.evaluate(getNone)
        // if (noRestrictionsColumn.length > 0) {
        //     await page.click('#row-container > div.style-scope.ytcp-video-row.cell-body.tablecell-visibility > div > div')
        //     await page.waitForSelector('[name="PUBLIC"]')
        //     await page.click('[name="PUBLIC"]')
        //     await page.waitForSelector('#save-button')
        //     await page.click('#save-button')
        //     await page.waitFor(3000)
        //     await page.close()
        //     await launch();
        // }
        page.waitForSelector('paper-toast', { visible: true, timeout: 0 })
            .then(() => {
                console.log('There was an error. Exiting.')
                process.exit(0)
            }).catch(() => {
                console.log('There was an error. Exiting.')
                //process.exit(0)
            })

        //check if video is processing first 
        let lastUpdatedVideoNumber
        //removing first copyright of first two videos video
        for (let i = cNumber; i > cNumber - 2; i--) {
            await removeCopyright(i, page)
            lastUpdatedVideoNumber = i
        }
        await page.evaluate(showButtons)
        console.log('buttons are here')
        await page.waitForSelector("#anchor-video-details")
        let openLink = await page.evaluate(getLink, lastUpdatedVideoNumber)
        await page.goto(openLink + 'or')
        await page.waitForSelector('#cover-area')
        //await page.waitForSelector('#mask', { hidden: true, timeout: 0 })
        await page.evaluate(checkProcessing)
        console.log("video processing is done. You can now proceed with other tasks")
        await page.close()
        await launch()
        //await browser.close();
        //await chrome.kill();
    } catch (error) {
        console.log(error)
    }
}

//await browser.close();
setup()
