const rating = document.querySelector('#rating');

const rate = function (e) {
    const stars = document.querySelectorAll(".star");
    [...stars].map((star) => star.classList.remove("hovered"));
    e.classList.add("hovered")

    let points = ["Poor", "Fair", "Average", "Good", "Excellent"];
    rating.innerHTML = points[e.getAttribute("data-value") - 1];
    console.log(e.getAttribute("data-value"));
}