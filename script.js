document.addEventListener('DOMContentLoaded', function() {
    const largeImage = document.querySelector('.large-image');
    const smallImages = document.querySelectorAll('.small-image');
    const overlay = document.getElementById('overlay');
    const enlargedImage = document.getElementById('enlarged-image');
    const closeButton = document.querySelector('.close-button');

    largeImage.addEventListener('click', function() {
        const src = this.getAttribute('src');
        enlargedImage.setAttribute('src', src);
        overlay.style.display = 'flex';
    });

    smallImages.forEach(function(image) {
        image.addEventListener('click', function() {
            this.classList.toggle('enlarged');
        });
    });

    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none';
        smallImages.forEach(function(image) {
            image.classList.remove('enlarged');
        });
    });
});