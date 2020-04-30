module.exports = {
    getCC: function () {
        let cVideos = Array.from(document.querySelectorAll('#row-container > div:nth-child(4) > div > div'))
            .filter(element => element.innerText == "Copyright claim")
        return cVideos
    },
    getNone: function () {
        let cVideos = Array.from(document.querySelectorAll('#row-container > div:nth-child(4) > div > div'))
            .filter(element => element.innerText == "None")
        return cVideos
    },
    assignClass: function () {
        //assigning an class to copuright claim text so that it can be hovered
        let cVideos = Array.from(document.querySelectorAll('#row-container > div:nth-child(4) > div > div'))
            .filter(element => element.innerText == "Copyright claim")
        cVideos.forEach((video, i) => {
            video.parentElement.classList.add("hoverthis" + i)
        });
        return cVideos.length - 1

    },

    showButtons: function () {
        //showing all the hidden buttons on a video
        let videoList = document.querySelectorAll("ytcp-video-list-cell-video")
        videoList.forEach(video => {
            video.setAttribute('is-highlighted', '')
        });
    },
    checkProcessing: function () {
        return new Promise((resolve, reject) => {
            setInterval(function () {
                console.log(getComputedStyle(document.querySelector('#mask')).getPropertyValue("opacity"))
                if (getComputedStyle(document.querySelector('#mask')).getPropertyValue("opacity") == "0") {
                    resolve()
                }
            }, 2000)
        })

    },
    getLink: function (nth) {
        return document.querySelectorAll("ytcp-video-list-cell-video a#anchor-video-details")[nth].href
    }
}