'use strict'

const container = document.getElementById('imageContainer');

const getImage = async () => {
    fetch('https://randomfox.ca/floof/')
    .then(res => res.json())
    .then(data => {
        container.src = data.image;
    })
    .catch(() => {
        document.querySelector('.error').innerHTML = "Problem loading image"
    });
}
getImage();