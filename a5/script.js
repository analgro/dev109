var myImages = [
    "images/cooldawg.jpg",
    "images/cunfuseddawg.jpg",
    "images/topofdawg.jpg",
    "images/bignosedawg.jpg",
    "images/thinkingdawg.jpg"
];

var captionImages = [
    "Dog is looking down towards the camera and looks super cool",
    "Dog is looking at the camera in a confused manner",
    "An image of only the top of the dogs head",
    "Dog with a big nose",
    "Dog is thinking of life choices"
];

var index = 0;

function updateImage() {
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt = captionImages[index];
    document.getElementById("caption").textContent = captionImages[index];
}

function next() {
    if (myImages.length == index + 1) {
        index = 0;
    } else {
        index++;
    }
    updateImage();
}

function back() {
    if (index === 0) {
        index = myImages.length - 1;
    } else {
        index--;
    }
    updateImage();
}

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false);

function autoSlide() {
    if (document.getElementById("auto").checked) {
        next();
    }
}

setInterval(autoSlide, 2000);

// Show the first image
updateImage();
