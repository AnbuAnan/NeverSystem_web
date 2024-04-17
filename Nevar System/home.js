const html = document.documentElement;
const canvas = document.getElementById("img-seq");
const context = canvas.getContext("2d");

const frameCount = 61;
let frameStart = 1;
const currentFrame = index => (
    `./Imagesequence/${index.toString().padStart(1, 0)}.png`
);
const preloadImages = () => {
    for (let idx = 0; idx < frameCount; idx++) {
        const img = new Image();
        img.src = currentFrame(idx);
    }
}

const img = new Image();
img.src = currentFrame(frameStart);
canvas.width = 2560;
canvas.height = 1440;
img.onload = function () {
    context.drawImage(img, 0, 0);
}

const updateImage = idx => {
    img.src = currentFrame(idx);
    context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIdx = Math.min(
        frameCount - 1, Math.ceil(scrollFraction * frameCount)
    );
    requestAnimationFrame(() => updateImage(frameIdx + 1));
});

preloadImages();




const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    //Animate Links
    console.log("print");
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});






let slideIndex = 0;
showSlides();

// Next-previous control
function nextSlide() {
    slideIndex++;
    showSlides();
    timer = _timer; // reset timer
}

function prevSlide() {
    slideIndex--;
    showSlides();
    timer = _timer;
}

// Thumbnail image controlls
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
    timer = _timer;
}

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dots");

    if (slideIndex > slides.length - 1) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    // hide all slides
    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    // show one slide base on index number
    slides[slideIndex].style.display = "block";

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    dots[slideIndex].classList.add("active");
}

// autoplay slides --------
let timer = 7; // sec
const _timer = timer;

// this function runs every 1 second
setInterval(() => {
    timer--;

    if (timer < 1) {
        nextSlide();
        timer = _timer; // reset timer
    }
}, 500); // 1sec




var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: -2,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true
    },
    keyboard: {
        enabled: true
    },
    mousewheel: {
        thresholdDelta: 70
    },
    spaceBetween: 400,
    loop: true,
    autoplay: {
        delay: 3000, // Set the delay between slides in milliseconds
        disableOnInteraction: false
    },
    setInterval: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});















let textIndex = 0;
showComments();

// Next-previous control
function nextComment() {
    textIndex++;
    showComments();
    counter = _counter; // reset timer
}

function preComment() {
    textIndex--;
    showComments();
    counter = _counter;
}

// Thumbnail image controlls
function currentSlide(n) {
    textIndex = n - 1;
    showComments();
    counter = _counter;
}

function showComments() {
    let comments = document.querySelectorAll(".comments");
    let profiles = document.querySelectorAll(".profile");

    if (textIndex > comments.length - 1) textIndex = 0;
    if (textIndex < 0) textIndex = comments.length - 1;

    // hide all slides
    comments.forEach((comment) => {
        comment.style.display = "none";
    });

    // show one slide base on index number
    comments[textIndex].style.display = "block";

    profiles.forEach((profile) => {
        profile.classList.remove("current");
    });

    profiles[textIndex].classList.add("current");
}

// autoplay slides --------
let counter = 7; // sec
const _counter = counter;

// this function runs every 1 second
setInterval(() => {
    counter--;

    if (counter < 1) {
        nextComment();
        counter = _counter; // reset timer
    }
}, 500); // 1sec