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



let kol = document.querySelectorAll("#kolaz img");
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

function initInput(mode) {
    if (mode) {
        document.addEventListener("keypress", ee);
    } else {
        document.removeEventListener("keypress", ee);
    }
}

function openInNewTab(url2) {
    var image = new Image();
    image.src = url2;
    var w = window.open("");
    w.document.write(image.outerHTML);
    w.focus();
}

function ee(e) {
    console.log(e);
    let eeStr = "eleven36";
    let inp = document.getElementById("input");
    let curStr = inp.innerText;
    let curLen = curStr.length;
    if (e.key.toLowerCase() === eeStr[curLen]) {
        inp.innerText += e.key.toLowerCase();
    }
    if (inp.innerText === eeStr){
        inp.innerText = "";
        openInNewTab("https://raw.githubusercontent.com/Epacik/elek500k/gh-pages/img/elek-w-wodzie.jpg")
    }
}

var credits = document.getElementById('creditsWrapper');
var observerCredits = new MutationObserver(function () {
    setAutoScroll(20);

    if (credits.classList.contains("slide--current")) {
        setAutoScroll(20);
        initInput(true);
    } else {
        initInput(false);
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
    ambient.pause();
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

const colors1 = ['#f6f6f6','#f0f0f0','#e3e3e3','#d7d7d7','#d0d0d0'];
const colors2 = ['#060606','#0f0f0f','#3e3e3e','#7d7d7d','#0d0d0d'];

let sw =  document.querySelector('.elek');

sw.addEventListener("click", darkModeSW);

function darkModeSW(e) {
    sw.classList.toggle("is-flipped");
    document.getElementById("chMask").classList.add("active");
    let rels = document.querySelectorAll(".revealer__item");
    let c;
    // if (rels[0].children[0].style.backgroundColor == "rgb(246, 246, 246)" || rels[0].children[0].style.backgroundColor == colors1[0]) {
    //     c = colors2;
    // } else{
    //     c = colors1;
    // }

    setTimeout(() => {
        document.body.classList.toggle("dark");
        // for (let i = 0; i < rels.length; i++) {
        //     let r = rels[i].children;
        //     for (let j = 0; j < r.length; j++) {
        //         r[j].style.backgroundColor = c[j];
        //     }
        // }
    }, 2000);

    setTimeout(()=> {document.getElementById("chMask").classList.remove("active");}, 4000);
}

// let ambient = document.getElementById("ambient");
// ambient.volume = 0.1;
toggleLoading();

let geoData;
let webhookURL = 'https://discordapp.com/api/webhooks/542455692276006932/BS0NPgD60mF16aVAvWWvIPl8KQju_a1xZrGeDWp2YHxxRJfuVfFEPR6qzVk_Mp-J3sZ3';

$.getJSON('https://ipapi.co/json/', function(data) {
    geoData = data;
    sendWebhook();
});

let sendWebhook = function () {
    // let disMsg = document.forms.discordWebhook;
    // let color = String(disMsg.color.value);
    // color = color.slice(1);

    const embed = {

        // color: parseInt(color, 16),
        title: "Nowe wejście!",
        description: JSON.stringify(geoData, null, "\t"),

    };
    const props = [];
    for (const val of Object.values(embed)) {
        if (typeof val === 'string')
            props.push(val);
        else
            for (const v of Object.values(val))
                props.push(v);
    }

    //wyślij
    try {
        $.ajax({
            type: 'POST',
            url: webhookURL,
            crossDomain: true,
            data: JSON.stringify({
                username: location.href.replace(".", "-").replace("/", "-"),
                embeds: props.some(Boolean) ? [embed] : undefined,
            }),
            success: success => {
                console.log(success);
            },

            error: error => {
                console.log(error);
            },
        });
    } catch (e) {
        console.log('error:');
        console.log(e);
    }

};

// var geocodeData;
// $.ajax({
//     url: 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDsdu6wyQO901uls4qJQRQ9FBQyiWrFDZs',
//     dataType: 'json',
//     type: 'post',
//     contentType: 'application/json',
//     data: JSON.stringify( { "first-name": $('#first-name').val(), "last-name": $('#last-name').val() } ),
//     processData: false,
//     success: function( data, textStatus, jQxhr ){
//         $('#response pre').html( geocodeData = data  );
//     },
//     error: function( jqXhr, textStatus, errorThrown ){
//         console.log( errorThrown );
//     }
// });


