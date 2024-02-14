console.log('hi');

// Places multiple images dinamically
function placeImages(cssQuery, imgSource) {
    const imgElements = document.querySelectorAll(cssQuery);
    imgElements.forEach(imgElement => {
        imgElement.src = imgSource;
    });    
}

placeImages(".profile-picture", 'https://picsum.photos/100/100');

