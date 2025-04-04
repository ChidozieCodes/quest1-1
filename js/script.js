let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".rect");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        indicators[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }  
    slides[slideIndex - 1].style.display = "block";
    indicators[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 10000); // Change slide every 3 seconds
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

document.addEventListener("DOMContentLoaded", showSlides);



// Select all elements with the class 'slide'
let slidess = document.querySelectorAll('.chri_slide');

// Select the 'Next' button by its ID
let nextBtn = document.querySelector('.next');

// Select the 'Previous' button by its ID
let prevBtn = document.querySelector('.prev');

// Initialize the slide index to 0
let num = 0;

// Function to display the next slide
function next() {
    // If the current slide index exceeds the total number of slides, reset to the first slide
    if (num > slidess.length - 1) {
        num = 0;
    }

    // Loop through all slides and hide them
    for (let i = 0; i < slidess.length; i++) {
        slidess[i].style.display = 'none'; // Hide all slides  
    }

    slidess[num].style.display = 'block'; // Display the current slide

    // Increment the slide index to move to the next slide
    num++;
}

// Call the next function to display the first slide initially
next();

// Automatically call the next function every 5 seconds when the page loads
window.addEventListener('load', function () {
    setInterval(next, 5000); // Change slides every 5 seconds
});

// Add an event listener to the 'Next' button to call the next function when clicked
nextBtn.addEventListener('click', next);

// Function to display the previous slide
function Prev() {
    // Decrement the slide index to move to the previous slide
    num--;

    // If the current slide index is less than 0, reset to the last slide
    if (num < 0) {
        num = slidess.length - 1;
    }

    // Loop through all slides and hide them
    for (let i = 0; i < slidess.length; i++) {
        slidess[i].style.display = 'none'; // Hide all slides
   
    }
    slidess[num].style.display = 'block'; // Display the current slide
}

// Add an event listener to the 'Previous' button to call the Prev function when clicked
prevBtn.addEventListener('click', Prev);

let header = document.querySelector('header');
window.addEventListener('scroll', function(){
    if(this.scrollY > 880){
        header.style.background = 'rgba(0,0,0,0.5)';
        header.classList.add('animate__fadeInDown');
    }else{
        header.style.background = 'rgba(0,0,0,0)';
        header.classList.remove('animate__fadeInDown');
    }
})

const hamburger = document.getElementById("hamburger");
const dropMenuWrapper = document.getElementById("dropMenuWrapper");
const exitIcon = document.getElementById("exitIcon");
let body = document.querySelector("body");

hamburger.addEventListener("click", () => {
    dropMenuWrapper.classList.add("show-menu");
    body.classList.add("bodyOver"); // Prevent body scroll
});

exitIcon.addEventListener("click", () => {
    dropMenuWrapper.classList.remove("show-menu");
    body.classList.remove("bodyOver"); // Allow body scroll
});
