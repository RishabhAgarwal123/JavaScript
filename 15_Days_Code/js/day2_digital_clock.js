window.onload = function () {
    setInterval(updateInterval, 1000);
}

const updateInterval = function () {
    const hour = document.querySelector('#hour');
    const min = document.querySelector('#minute');
    const sec = document.querySelector('#sec');

    let date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    if (hours >= 0 && hours <= 9) hours = '0' + hours;
    if (minutes >= 0 && minutes <= 9) minutes = '0' + minutes;
    if (seconds >= 0 && seconds <= 9) seconds = '0' + seconds;
    hour.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;

    // Date
    const dateEl = document.querySelector('#date');

    let date1 = date.getDate();
    if (date1 >= 0 && date1 <= 9) date1 = '0' + date1;

    let month = date.getMonth() + 1;
    if (month >= 0 && month <= 9) month = '0' + month;

    let year = date.getFullYear();
    if (year >= 0 && year <= 9) year = '0' + year;

    dateEl.innerHTML = `${date1}/${month}/${year}`;

    // Day
    const dayEl = document.querySelector('#day');
    let dayNumber = date.getDay();
    let day = '';
    switch(dayNumber) {
        case 0: day = 'Sunday'; break;
        case 1: day = 'Monday'; break;
        case 2: day = 'Tuesday'; break;
        case 3: day = 'Wednesday'; break;
        case 4: day = 'Thursday'; break;
        case 5: day = 'Friday'; break;
        case 6: day = 'Saturday'; break;
    }

    dayEl.innerHTML = day;
}