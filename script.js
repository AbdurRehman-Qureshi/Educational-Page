const options = {
   rootMargin: "0px",
   threshold: 0
}

// Section2 and Section9 animation
const FadingAndScale = document.querySelectorAll(".fadingAndScale");
const observerOne = new IntersectionObserver (function(entries, observerOne){
    entries.forEach(entry=>{
        console.log(entry.target);
        if(entry.isIntersecting){
            entry.target.classList.add("fad-inscale");
        }
        // else{
        //     entry.target.classList.remove("fad-inscale");
        // }
    });

}, options);
FadingAndScale.forEach(element=>{observerOne.observe(element)})

// Section6 animation
const textOverlayOnImage = document.querySelector(".text-div-on-image");
const observeTextOverlayOnImage = new IntersectionObserver(function(entries, observeTextOverlayOnImage) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-text-div-on-image");
            observeTextOverlayOnImage.unobserve(entry.target);
        } 
        // else {
        //     entry.target.classList.remove("animate-text-div-on-image");
        // }
    });
}, options);
observeTextOverlayOnImage.observe(textOverlayOnImage);

// Section4 animation
const leftSideImageDiv = document.querySelector(".left-side");
const observeLeftSideImageDiv = new IntersectionObserver (function(entries, observeLeftSideImageDiv){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("translate-leftToRight");
            observeLeftSideImageDiv.unobserve(entry.target);

        }
        // else{
        //     entry.target.classList.remove("translate-leftToRight");
        // }

    });

},options);
observeLeftSideImageDiv.observe(leftSideImageDiv);

// Section5 and Section1 image animation
const parseImage = document.querySelectorAll(".imgg");
const observeImage = new IntersectionObserver (function(entries, observeGridImage){
    entries.forEach(entry=>{
        // if(entry.isIntersecting){
        //     entry.target.classList.add("animateImgUp");
        // }
        if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
            entry.target.classList.add("animateImgUp", "animated");
        }
        // else{
        //     entry.target.classList.remove("animateImgUp");
        // }

    });

},options);
parseImage.forEach(element=>{observeImage.observe(element)});

// Reviews Slider
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


