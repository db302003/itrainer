
//INITIAL PAGE LOAD

var timer;
$(document).ready(function () {
    workoutTimer(15);
    //This will convert the time that is held by local storage and convert it for on load.
    $("#workout-time").text(convertTimer(localStorage.getItem("time")));
});


// Button click listeners

$("#spotifyShow").on("click", function() {
    $("#spotifyShow").hide();
    $(".spotifyDiv").show();
    $("#spotifyHide").show();
});

$("#mixShow").on("click", function() {
    $("#mixShow").hide();
    $(".mixDiv").show();
    $("#mixHide").show();
});

$("#mixHide").on("click", function() {
    $("#mixShow").show();
    $(".mixDiv").hide();
    $("#mixHide").hide();
});

$("#spotifyHide").on("click", function() {
    $("#spotifyShow").show();
    $(".spotifyDiv").hide();
    $("#spotifyHide").hide();
});


// WORKOUT TIMER

function workoutTimer(duration) {
    var display = $("#workout-time");
    var minutes = 0;
    var seconds = 0;
    console.log(localStorage.getItem("time"));
    console.log("Duration: " + duration);

    //
    if(localStorage.getItem("time") !== null && localStorage.getItem("time") > 0){
        timer = localStorage.getItem("time");
    } else{
        timer = duration;
    }
    console.log("Timer: " + timer);

    // Start the timer
    var count = setInterval(function () {
        console.log(timer);
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            stop(count);
            $("#workout-timer").hide();
            localStorage.removeItem("time");
            window.location.replace("/break");
        }
        localStorage.setItem("time", timer);
    }, 1000);
}


// This converts the current timer into a format that will be used by the clock

function convertTimer(timer) {
    console.log(timer);
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${minutes}:${seconds}`;
}



// SPOTIFY ADD SONG

var spotifyForm = $("form.songSubmit");
spotifyForm.on("click", function(event){
    event.preventDefault();
    if($("#songName").val() !== ""){
        $.post("/api/spotify", {
            songName: $("#songName").val()
        }).then(function(data){
            window.location.replace(data);
        }).catch(function(err){
            console.log(err);
        });
    }
});
