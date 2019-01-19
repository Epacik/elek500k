let pages = document.querySelectorAll(".page");

for (let i = pages.length - 1; i >= 0; i--){
    pages[i].style.zIndex = pages.length - i;
    console.log(i);
}

document.body.addEventListener("keydown", (e) => {
   // console.log(e);
    if (!document.getElementById("help").classList.contains("showHelp")) {
        if (e.code === "ArrowRight" || e.code === "ArrowDown") {
            document.getElementById("arr-right").click();
        } else if (e.code === "ArrowLeft" || e.code === "ArrowUp") {
            document.getElementById("arr-left").click();
        }
    }
});

const scrollHandler = (e) => {
    // console.log(e);
    if (!document.getElementById("help").classList.contains("showHelp") && e.target.id != "scroll1" && e.target.id != "scrollable1" && e.target.parentNode.id != "scroll1") {

        if (e.deltaY > 0) {
            document.getElementById("arr-right").click();
        } else if (e.deltaY < 0) {
            document.getElementById("arr-left").click();
        }
    }
};

// document.body.addEventListener('mousewheel', scrollHandler);

document.addEventListener("mousewheel", scrollHandler, false);
// Firefox
// document.addEventListener("DOMMouseScroll", scrollHandler, false);



function toggleLoading() {
    loading = document.getElementById('loading');
    if (loading.style.opacity == '0') {
        loading.style.opacity = '';
        loading.style.pointerEvents = '';
        document.body.style.overflow = '';
        document.querySelector('#loading #spinner div').style.animationName = 'spin';
    } else {
        loading.style.opacity = '0';
        loading.style.pointerEvents = 'none';
        document.body.style.overflow = 'auto';
        document.querySelector('#loading #spinner div').style.animationName = '';
    }

}



let kol = document.querySelectorAll("#kolaz img.indPh");
let kolWrap = document.getElementById("kolazWrap");
let kolInt;
let kolI;

function showPh() {
    for (let i = 0; i < kol.length; i++) {
        kol[i].classList.remove("kolHide");
    }
}

function runKol() {
    if (document.getElementById("kolazWrap").classList.contains("slide--current")){

        kolI = kol.length - 1;
        clearInterval(kolInt);
        kolInt = setInterval(()=>{
            kol[kolI].classList.add("kolHide");
            console.log(kolI);
            if (kolI <= 0) {
                clearInterval(kolInt);
            }
            kolI -= 1;
        }, 3000);
    } else {
        clearInterval(kolInt);
    }

}

var e = document.getElementById('kolazWrap');
var observer = new MutationObserver(function () {
    showPh();
    runKol();
});

observer.observe(e, {
    attributes: true,
    attributeFilter: ['class'],
    childList: false,
    characterData: false
});

var credits = document.getElementById('creditsWrapper');
var observerCredits = new MutationObserver(function () {
    setAutoScroll(20);
    if (credits.classList.contains("slide--current")) {
        setAutoScroll(20);
    }
});

observerCredits.observe(credits, {
    attributes: true,
    attributeFilter: ['class'],
    childList: false,
    characterData: false
});

var eAudio = document.getElementById('visualizer');
var observerAudio = new MutationObserver(function () {
    if (eAudio.classList.contains("slide--current")) {
        document.getElementById('audio').contentWindow.start();
    } else {
        document.getElementById('audio').contentWindow.stop();
    }
});

observerAudio.observe(eAudio, {
    attributes: true,
    attributeFilter: ['class'],
    childList: false,
    characterData: false
});

function kolaz() {

}

function togglePlay() {
    let a = document.querySelector("audio");
    let p = document.getElementById("playToggle");
    if (a.paused) {
        p.classList.remove("fa-play");
        p.classList.add("fa-pause");
        a.play();
    } else {
        p.classList.remove("fa-pause");
        p.classList.add("fa-play");
        a.pause();
    }
}

function toggleHelp() {

    if (document.getElementById("help").classList.contains("showHelp")) {
        document.getElementById("help").classList.remove("showHelp");
    } else {
        document.getElementById("help").classList.add("showHelp");
    }
}

function shufflePhotos() {

}

// window.onscrollwheel = function (e) {
//  console.log("E");
// }

toggleLoading();
