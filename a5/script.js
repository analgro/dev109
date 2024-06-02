var myImages = [
    "images/cooldawg.jpg",
    "images/confuseddawg.jpg", 
    "images/topofdawg.jpg", 
    "images/bignosedawg.jpg", 
    "images/thinkingdawg.jpg"
];

var captionImages = [
    "Description 1",
    "Description 2",
    "Description 3",
    "Description 4",
    "Description 5"
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

