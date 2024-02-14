console.log('hi');

// Places multiple images dinamically
function placeMultipleImages(cssQuery = ".img", imgSource = 'https://picsum.photos/100/100') {
    const imgElements = document.querySelectorAll(cssQuery);
    imgElements.forEach(imgElement => {
        imgElement.src = imgSource;
    });    
}

placeMultipleImages(".profile-picture");
placeMultipleImages(".star-button", "./images/star-check-outline.svg");
placeMultipleImages(".eye-button", "./images/eye-plus-outline.svg");
placeMultipleImages(".share-button", "./images/share-variant-outline.svg");