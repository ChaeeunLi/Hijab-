const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");


const section = document.querySelector("section");
const end =section.querySelector("h1");

const controller = new ScrollMagic.Controller();


let scene = new ScrollMagic.Scene({
    duration : 17000,
    triggerElement : intro,
    triggerHook : 0
})

.setPin(intro)
.addTo(controller);

//title ani
const textAnim = TweenMax.fromTo(text,3,{opacity:1},{opacity:0});

let scene2 = new ScrollMagic.Scene({
    duration : 3000,
    triggerElement:intro,
    triggerHook:0
})
.setTween(textAnim)
.addTo(controller);

//main text ani

var container = document.querySelector(".container");

var mtextAnim0 = TweenMax.fromTo('#contentA',3,{opacity:0},{opacity:1});
var mtextAnim1 = TweenMax.fromTo('#contentB',3,{opacity:0},{opacity:1});
var mtextAnim2 = TweenMax.fromTo('#contentC',3,{opacity:0},{opacity:1});
var mtextAnim3 = TweenMax.fromTo('#contentD',3,{opacity:0},{opacity:1});

let sceneA = new ScrollMagic.Scene(
    {   duration:1000,
       triggerElement: "#trigger1",
        triggerHook : 0
    }
)
.setTween(mtextAnim0)
.addTo(controller)

let sceneB = new ScrollMagic.Scene(
    {   duration:1000,
       triggerElement: "#trigger2",
        triggerHook : 0
    }
)
.setTween(mtextAnim1)
.addTo(controller)

let sceneC = new ScrollMagic.Scene(
    {   duration:1000,
       triggerElement: "#trigger3",
        triggerHook : 0
    }
)
.setTween(mtextAnim2)
.addTo(controller)

let sceneD = new ScrollMagic.Scene(
    {   duration:1000,
       triggerElement: "#trigger4",
        triggerHook : 0
    }
)
.setTween(mtextAnim3)
.addTo(controller)


//videoAni
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e =>{
    scrollpos= e.scrollPos / 1000;
});

setInterval(()=> {
    delay += (scrollpos - delay)* accelamount;
    console.log(scrollpos, delay);

    video.currentTime = delay;
} ,33.3);

