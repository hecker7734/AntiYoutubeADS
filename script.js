// anti yt ads:
    const video = document.getElementsByClassName("video-stream html5-main-video")[0]
    function getVidLength() { return document.getElementsByClassName("ytp-time-display notranslate")[0].innerText.split("/ ")[1] }
    function isAdvertisement() { return document.getElementsByClassName("ad-showing").length; }
    function timestampToSeconds(timestamp) {
        const parts = timestamp.split(":").map(Number);
        let seconds = 0;
        if (parts.length === 3) {
            // hh:mm:ss format
            seconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
        } else if (parts.length === 2) {
            // mm:ss format
            seconds = parts[0] * 60 + parts[1];
        }
        return seconds;
    }
    setInterval(() => {
        try {
            if (isAdvertisement()) {
                const targetTime = timestampToSeconds(getVidLength());
                video.currentTime = targetTime;
                const skipButton = document.querySelector(".ytp-ad-skip-button-modern");
                if (skipButton) skipButton.click();

            }
        } catch (error) {}}, 1200)
