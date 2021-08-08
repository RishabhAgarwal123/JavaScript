const rating = document.querySelector('#rating');

const rate = function (event) {
    const stars = document.querySelectorAll('.star');
    [...stars].map((star) => {
        star.classList.remove('hovered');
    });
    event.classList.add('hovered');

    let points = ['Poor', 'Fair', 'Average', 'Good', 'Excellent'];
    rating.innerHTML = points[event.getAttribute('data-value') - 1];
    console.log(event.getAttribute('data-value'));
}