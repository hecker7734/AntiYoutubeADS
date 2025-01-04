 const video = document.getElementsByClassName("video-stream html5-main-video")[0];
    function isAd() { return document.getElementsByClassName("ad-showing").length; }

    if (video) {
        video.addEventListener('loadedmetadata', () => {
            setInterval(() => {
                try {
                    if (isAd()) {
                        video.currentTime = video.duration || video.currentTime;
                        const skipButton = document.querySelector(".ytp-ad-skip-button-modern");
                        if (skipButton) skipButton.click();
                    }
                } catch (error) { console.warn("try/catch error: " + error); }
            }, 450);
        });
    }
