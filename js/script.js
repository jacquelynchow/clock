function moveHands() {
    with (new Date()) {
        h = 30 * ((getHours() % 12) + getMinutes() / 60); // 30 degrees hour
        m = 6 * getMinutes(); // 6 degrees every minute
        s = 6 * getSeconds(); // 6 degrees every second
        // setting the rotate CSS attribute to those degree values -->
        document.getElementById("seconds").style.cssText =
        "-webkit-transform:rotate(" + s + "deg);";
        document.getElementById("minutes").style.cssText =
        "-webkit-transform:rotate(" + m + "deg);";
        document.getElementById("hours").style.cssText =
        "-webkit-transform:rotate(" + h + "deg);";
        
        setTimeout(moveHands, 1000); // calling the function every second
    }
}

function clock() {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = "AM";

    // the date object is in 24 hour format
    if (hours > 12) {
        hours = hours - 12;
        day = "PM";
    }
    // 12:00 AM - 12:59 AM (0:00 - 0:59)
    if (hours == 0) {
        hours = 12;
    }
    // putting 0 in front of numbers < 10
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    let time = `${hours}:${minutes}:${seconds} ${day}`;
    document.getElementById("digital-clock").innerText = time;

    setInterval(clock, 1000);
}

if (document.getElementById("analog-clock")) {
    moveHands();
} else {
    clock();
}