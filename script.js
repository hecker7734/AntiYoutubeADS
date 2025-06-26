function skipAd() {
    try {
        const video = document.querySelector(".video-stream.html5-main-video");
        const skipButton = document.querySelector(".ytp-ad-skip-button-modern");
        if (document.querySelector(".ad-showing") || document.querySelector(".ytp-ad-player-overlay")) {
            if (video) video.currentTime = video.duration || video.currentTime;
            setTimeout(()=>{
                if (skipButton) skipButton.click();
            },100)
            logs.push("Skipped YouTube Advertisement");
        }
    } catch (error) {
        logError("skipAd", error);
    }
}

function observeAds() {
    const observer = new MutationObserver(skipAd);
    observer.observe(document.body, { childList: true, subtree: true });
}

window.addEventListener("load", () => {
    setTimeout(() => {
        observeAds();
    }, 1000);
});
