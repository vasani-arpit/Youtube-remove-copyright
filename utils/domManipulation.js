module.exports = {
    getCC: function () {
        let cVideos = Array.from(document.querySelectorAll('#row-container > div:nth-child(4) > div > div'))
            .filter(element => element.innerText == "Copyright claim")
        return cVideos
    },

    assignClass: function () {
        let cVideos = Array.from(document.querySelectorAll('#row-container > div:nth-child(4) > div > div'))
            .filter(element => element.innerText == "Copyright claim")
        cVideos.forEach((video, i) => {
            video.parentElement.classList.add("hoverthis" + i)
        });
    }
}