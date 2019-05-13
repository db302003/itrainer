
//INITIAL PAGE LOAD

$(document).ready(function () {
    localStorage.removeItem("time");
});


// Button click listeners

$("#new-workout").on("click", function () {
    $("#start-page").hide();
    $("#adjust-workout-page").show();
});

$("#mapButton").on("click", function() {
    $("#mapDiv").show();
    $("#mapButton").hide();
    $("#mapHide").show();
});

$("#mapHide").on("click", function() {
    $("#mapDiv").hide();
    $("#mapButton").show();
    $("#mapHide").hide();
});


// ADJUSTED WORKOUT TIME

$("#adjust-workout-button").on("click", function (event) {
    event.preventDefault();
    var newDuration = $("#adjust-workout").val().trim() * 60;
    localStorage.setItem("time", newDuration);
    console.log(newDuration);
    window.location.replace("/itrainer");
});


// DEFAULT WORKOUT TIME

$("#start-button").on("click", function () {
    window.location.replace("/itrainer");
});
$("#statsButton").on("click", function () {
    window.location.replace("/stats");
});
