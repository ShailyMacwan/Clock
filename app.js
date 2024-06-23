function currentTime(){
    let date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1; // Months are zero-based
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let dayIndex = date.getDay();

let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayName = dayNames[dayIndex];

// Format time to always have two digits for minutes and seconds
if (minutes < 10) {
    minutes = '0' + minutes;
}
if (seconds < 10) {
    seconds = '0' + seconds;
}

document.getElementById("date").textContent = day;
document.getElementById("month").textContent = month;
document.getElementById("year").textContent = year;
document.getElementById("day").textContent = dayName;
document.getElementById("time").textContent = hours + ':' + minutes + ':' + seconds;

}

setInterval(currentTime,1000);

currentTime();