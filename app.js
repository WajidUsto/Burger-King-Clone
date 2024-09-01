// Gsap Animation
// Scrolling Animation Started
// Scrolling Animation Started

gsap.from("#I1",{
    duration:0.4,
    opacity:0,
    y:200,
    scrollTrigger:{
        trigger:"#I1",
        scroller:"body",
        start:"top 70%",
        // markers:true,
    }
})
gsap.from("#I2",{
    duration:0.4,
    opacity:0,
    y:200,
    scrollTrigger:{
        trigger:"#I2",
        scroller:"body",
        // markers:true,
        start:"top 55%",
    }
})
gsap.from("#I3",{
    duration:0.4,
    opacity:0,
    y:300,
    scrollTrigger:{
        trigger:"#I1",
        scroller:"body",
        // markers:true,
        start:"bottom 50%",
    }
})
gsap.from("#I4",{
    duration:0.4,
    opacity:0,
    y:300,
    scrollTrigger:{
        trigger:"#I2",
        scroller:"body",
        // markers:true,
        start:"bottom 35%",
    }
})
// Phone Section Scrolling
// Phone Section Scrolling
gsap.from("#phone-section-inside",{
    duration:0.4,
    opacity:0,
    y:100,
    scrollTrigger:{
        trigger:"#phone-section-inside",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        // end:"bottom 50%",
    }
})
gsap.from("#phone-section-inside-2",{
    duration:0.4,
    opacity:0,
    y:100,
    scrollTrigger:{
        trigger:"#phone-section-inside-2",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        // end:"bottom 50%",
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