let pages = document.querySelectorAll(".page");

for (let i = pages.length - 1; i >= 0; i--){
    pages[i].style.zIndex = pages.length - i;
    console.log(i);
}

document.body.addEventListener("keydown", (e) => {
   // console.log(e);
   if (e.code === "ArrowRight") {
       document.getElementById("arr-right").click();
   } else if (e.code === "ArrowLeft") {
        document.getElementById("arr-left").click();
    }
});

const scrollHandler = (e) => {
    console.log(e);
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
        }, 2000);
    } else {
        clearInterval(kolInt);
    }

}

var e = document.getElementById('kolazWrap');
var observer = new MutationObserver(function (event) {
    showPh();
    runKol();
});

observer.observe(e, {
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


// window.onscrollwheel = function (e) {
//  console.log("E");
// }

toggleLoading();
