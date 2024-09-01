// Gsap Animation

// Scrolling Animation Started
// Scrolling Animation Started

gsap.from("#I1",{
    duration:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        trigger:"#I1",
        scroller:"body",
        markers:true,
        start:"top 65%",
    }
})
gsap.from("#I2",{
    duration:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        trigger:"#I2",
        scroller:"body",
        markers:true,
        start:"top 60%",
    }
})
gsap.from("#I3",{
    duration:0.3,
    opacity:0,
    y:500,
    scrollTrigger:{
        trigger:"#I1",
        scroller:"body",
        markers:true,
        start:"bottom 45%",
    }
})
gsap.from("#I4",{
    duration:0.3,
    opacity:0,
    y:500,
    scrollTrigger:{
        trigger:"#I2",
        scroller:"body",
        markers:true,
        start:"bottom 40%",
    }
})
// gsap.from("#cards-row-2",{
//     duration:0.3,
//     opacity:0,
//     y:50,
//     scrollTrigger:{
//         trigger:"#cards-row-1 ,#I3",
//         scroller:"body",
//         markers:true,
//         start:"top 10%",
//     }
// })
// gsap.from("#cards-row-2",{
//     duration:0.3,
//     opacity:0,
//     y:50,
//     scrollTrigger:{
//         trigger:"#cards-row-2",
//         scroller:"body",
//         markers:true,
//         start:"top 10%",
//     }
// })