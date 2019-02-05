var fps = 20;
var speedFactor = 0.001;
var minDelta = 0.5;
var autoScrollSpeed = 10;
var autoScrollTimer, restartTimer;
var isScrolling = false;
var prevPos = 0, currentPos = 0;
var currentTime, prevTime, timeDiff;
let el = document.getElementById("scrollable1");
//
window.addEventListener("scroll", function (e) {
    // window.pageYOffset is the fallback value for IE
    //currentPos = el.scrollTop;
});

el.addEventListener("wheel", handleManualScroll);
el.addEventListener("touchmove", handleManualScroll);

function handleManualScroll() {
    // window.pageYOffset is the fallback value for IE
    clearInterval(autoScrollTimer);
    //currentPos = el.scrollTop;

    if (restartTimer) {
        clearTimeout(restartTimer);
    }
    restartTimer = setTimeout(() => {
        prevTime = null;
        setAutoScroll(20);
    }, 50);
}

function setAutoScroll(newValue) {
    if (newValue) {
        autoScrollSpeed = speedFactor * newValue;
    }
    if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
    }
    autoScrollTimer = setInterval(function(){
        currentTime = Date.now();
        if (prevTime) {
            if (!isScrolling) {
                timeDiff = currentTime - prevTime;
                currentPos += autoScrollSpeed * timeDiff;
                if (Math.abs(currentPos - prevPos) >= minDelta) {
                    isScrolling = true;
                    el.scrollBy({top:1, left:0, behavior: "smooth"});
                    isScrolling = false;

                }
            }
        } else {
            prevTime = currentTime;
        }
    }, 1000 / fps);
}

