
//INITIAL PAGE LOAD

$(document).ready(function () {
    $("#workout-timer").hide();
    $("#break-timer").hide();
    $("#break-page").hide();
});


// Button Click Listeners

$("#start-button").on("click", function () {
    $("#start-page").hide();
    $("#workout-timer").show();
    var duration = 15;
    var display = document.querySelector("#workout-time");
    workoutTimer(duration, display);
});

$("#break-button").on("click", function () {
    console.log("click");
    $("#break-page").hide();
    $("#break-timer").show();
    var duration = 60;
    var display = document.querySelector("#break-time");
    breakTimer(duration, display);
});


// WORKOUT TIMER - USED FOR BREAK TIMER

function workoutTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var count = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            stop(count);
            $("#workout-timer").hide();
            $("#break-page").show();
        }
    }, 1000);
}


// BREAK TIMER


function breakTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var count = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            stop(count);
            $("#break-timer").hide();
            $("#start-page").show();
        }
    }, 1000);
}


// STOP TIMER

function stop(clearTimer) {
    clearInterval(clearTimer);
}