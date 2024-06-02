const images = [
    { src: 'cooldawg.jpg', desc: 'Description for Image 1' },
    { src: 'confuseddawg.jpg', desc: 'Description for Image 2' },
    { src: 'bignosedawg.jpg', desc: 'Description for Image 3' },
    { src: 'topofdawg.jpg', desc: 'Description for Image 4' },
    { src: 'thinkingdawg.jpg', desc: 'Description for Image 5' }
];

let currentIndex = 0;
let interval;

const slide = document.getElementById('slide');
const description = document.getElementById('description');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showImage(index) {
    slide.src = images[index].src;
    description.textContent = images[index].desc;
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(showNextImage, 3000);
}

prevButton.addEventListener('click', () => {
    showPreviousImage();
    resetInterval();
});

nextButton.addEventListener('click', () => {
    showNextImage();
    resetInterval();
});

// Start the slideshow
interval = setInterval(showNextImage, 3000);

// Show the first image
showImage(currentIndex);

