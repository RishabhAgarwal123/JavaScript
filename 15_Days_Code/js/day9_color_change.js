const letters = "123456789ABCDEF";
const colorElement = document.querySelector('#colorId');

const getColor = function () {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.trunc(Math.random() * letters.length)];
    }
    document.getElementById('backColor').style.backgroundColor = color;
    colorElement.innerHTML = color;
}