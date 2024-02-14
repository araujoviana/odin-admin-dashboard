console.log('hi');

// Placeholder images
const imgElements = document.querySelectorAll('img');
const placeholderImageUrl = 'https://picsum.photos/100/100';
imgElements.forEach(img => {
    img.src = placeholderImageUrl;
});