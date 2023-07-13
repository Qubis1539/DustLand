let zSpacing = -1000,
    lastPos = zSpacing / 5,
    $frames = document.querySelector(".features").getElementsByClassName("frame"),
    frames = Array.from($frames),
    zVal = [],
    itemBlure = [],
    itemOp = [],
    immerseFrame = document.querySelector("#immerse");

window.onscroll = function() {
    let top = document.documentElement.scrollTop - document.getElementById("features").offsetTop,
        delta = lastPos - top;
    // console.log(top);
    let topIm = document.documentElement.scrollTop - document.getElementById("immerse").offsetTop + 300;
    immerseFrame.querySelector(".front").setAttribute("style", `transform: translateY(${topIm * .3}px)`);
    immerseFrame.querySelector(".middle").setAttribute("style", `transform: translateY(${topIm * .3}px) translateX(${topIm * 0.8 - 200}px)`);
    immerseFrame.querySelector(".back").setAttribute("style", `transform: translateY(${topIm * .3}px)`);

    lastPos = top;

    frames.forEach(function(n, i) {
        zVal.push((i * zSpacing + zSpacing))
        zVal[i] += delta * -5;
        itemOp[i] = (1 - zVal[i] / 1000);
        // console.log(itemOp[i]);
        console.log(i + ": " + zVal[i]);
        let frame = frames[i],
            transform = `translateZ(${zVal[i]}px)`;
        frame.setAttribute("style", `transform: ${transform}; opacity:${itemOp[i]}; filter: blur(${zVal[i] / 100}px)`);

    });
}

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// ScrollSmoother.create({

//         wrapper: ".main-wrp",
//         content: ".content-wrp"
//     }

// )