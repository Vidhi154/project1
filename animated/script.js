// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tim;
function circlemouse(xsc,ysc){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#mini").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xsc}, ${ysc})`;
    })
}

function firstpage(){
    var t1 = gsap.timeline();

    t1.from("#nav", {
        y: '-10',
        opacity : 0,
        duration : 1.5,
        ease: Expo.easeInOut
    })
        .to(".boundlm", {
        y: 0,
        // opacity : 0,
        duration : 1.5,
        ease: Expo.easeInOut,
        stagger: .2,
        delay:-1
    })

    .from("#herofoot", {
        y: -10,
        opacity : 0,
        duration : 1.5,
        ease: Expo.easeInOut,
        delay: -1
    })



}


function circlechap(){
    var xsc =1;
    var ysc = 1;
    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove", function(dets){
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY -  yprev;
        clearTimeout(setTimeout);
        xsc=gsap.utils.clamp(.8,1.2, xdiff);
        ysc=gsap.utils.clamp(.8,1.2, ydiff);

        xprev=dets.clientX;
        yprev = dets.clientY;

        circlemouse(xsc,ysc);
        tim = setTimeout(function(){
            document.querySelector("#mini").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;

        });
        // xsc=gsap.utils.clamp(.8,1.2, xdiff);
        // ysc=gsap.utils.clamp(.8,1.2, ydiff);


    })
}

document.querySelectorAll(".ele")
.forEach(function(ele){
    ele.addEventListener("mousemove", function(details){
        // console.log("hello");
        gsap.to(ele.querySelector("img"),{
            opacity:1,
            esae: Power1,

        });
    });
});



circlemouse();
firstpage();
circlechap();


document.querySelectorAll(".ele")
.forEach(function(ele){


    var rotate =0;
    var diffro = 0;

    ele.addEventListener("mouseleave", function(dets){
        gsap.to(ele.querySelector("img"),{
            opacity:0,
            ease: Power3,
            display: 'block',
            duration:.5,
        

        });
    });

    ele.addEventListener("mousemove", function(dets){

        var diff = dets.clientY - ele.getBoundingClientRect().top;
        diffro = dets.clientX - rotate;
        rotate= dets.clientX;
        // gsap.utils.clamp(-20,20, diff);
        gsap.to(ele.querySelector("img"),{
            opacity:1,
            ease: Power3,
            display: 'block',
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20, diffro * 0.6),

        });
    });
});