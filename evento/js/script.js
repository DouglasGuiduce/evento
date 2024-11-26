const now = new Date();
const launchDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 0, 0).getTime();

const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("days").innerHTML = 0;
        document.getElementById("hours").innerHTML = 0;
        document.getElementById("minutes").innerHTML = 0;
        document.getElementById("seconds").innerHTML = 0;
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }
}, 1000);

let currentIndex = 0;

function showImage(index) {
    const images = document.querySelector('.carousel-images');
    const totalImages = document.querySelectorAll('.carousel-image').length;
    currentIndex = (index + totalImages) % totalImages;
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

setInterval(nextImage, 7000);
