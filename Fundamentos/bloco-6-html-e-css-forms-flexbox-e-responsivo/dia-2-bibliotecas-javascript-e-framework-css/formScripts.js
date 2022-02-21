let picker = new Pikaday({ field: document.getElementById('datepicker') });
let inputDate = document.getElementById('datepicker');

function teste() {
    let today = new Date();
    let todayFormat = today.toDateString();

    picker.setDate(todayFormat);
    picker.setMinDate(today);
}

window.onload = teste;