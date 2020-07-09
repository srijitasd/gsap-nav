var x  = document.querySelector(".navbox");

gsap.to("h1, h3", {
    duration: 2, 
    opacity: 1,
    stagger: 0.5,
    delay: 0.7,
    ease: Power0.easeNone,
})

x.addEventListener("click", function(){
    x.classList.toggle("active");
    if (x.classList.contains("active")) {
        gsap.to(".lineVanish", {
            opacity: 0, 
            duration: 0.5})
        gsap.to(".lineRotate1", {
            rotateZ: 45, 
            y: 11
        })
        gsap.to(".lineRotate2", {
            rotateZ: -45,
            y: -11

        })
        gsap.to(".content1", {
            marginLeft: 0,
            duration: 0.5
 })
 gsap.to(".content2", {
    marginLeft: 0,
    delay: 0.15,
    ease: Power0.easeNone,
    duration: 0.5
})
gsap.to("li", {
    opacity: 1,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.6
})
                    
    }

    else   {
        gsap.to(".lineVanish", {
            opacity: 1, 
            duration: 0.75})
        gsap.to(".lineRotate1", {
            rotateZ: 0, 
            y: 0})
        gsap.to(".lineRotate2", {
            rotateZ: 0,
            y: 0
})
        gsap.to(".content1", {
            marginLeft: "100vw",
            delay: 0.2,
            duration: 0.5
 })
 gsap.to(".content2", {
    marginLeft: "100vw",
    duration: 0.5
})
gsap.to("li", {
    opacity: 0,
    duration: 0.01,
})
    }
})
