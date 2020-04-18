module.exports = {
    getCC: function () {
        let cVideos = Array.from(document.querySelectorAll('#row-container > div:nth-child(4) > div > div'))
            .filter(element => element.innerText == "Copyright claim")
        return cVideos
    },

    assignClass: function () {
        //assigning an class to copuright claim text so that it can be hovered
        let cVideos = Array.from(document.querySelectorAll('#row-container > div:nth-child(4) > div > div'))
            .filter(element => element.innerText == "Copyright claim")
        cVideos.forEach((video, i) => {
            video.parentElement.classList.add("hoverthis" + i)
        });
        //showing all the hidden buttons on a video
        // let videoList = document.querySelectorAll("ytcp-video-list-cell-video")
        // videoList.forEach(video => {
        //     video.setAttribute('is-highlighted', '')
        // });
    }
}