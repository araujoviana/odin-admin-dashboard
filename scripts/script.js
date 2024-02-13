console.log('hi');

// Placeholder images
const imgElements = document.querySelectorAll('img');
const placeholderImageUrl = 'https://picsum.photos/300/300';
imgElements.forEach(img => {
    img.src = placeholderImageUrl;
});