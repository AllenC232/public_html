const rasterContainer = document.getElementById('raster-image-container');

if (rasterContainer) {

    const randomPosition = Math.floor(Math.random() * 4);

    let positionStyle = {
        top: '',
        left: '',
        right: '',
        bottom: ''
    };

    if (randomPosition === 0) {
        positionStyle.top = '10%';
        positionStyle.left = '10%';
    } else if (randomPosition === 1) {

        positionStyle.top = '10%';
        positionStyle.right = '10%';
    } else if (randomPosition === 2) {

        positionStyle.bottom = '10%';
        positionStyle.left = '10%';
    } else {

        positionStyle.bottom = '10%';
        positionStyle.right = '10%';
    }

    rasterContainer.style.top = positionStyle.top;
    rasterContainer.style.left = positionStyle.left;
    rasterContainer.style.right = positionStyle.right;
    rasterContainer.style.bottom = positionStyle.bottom;
}
