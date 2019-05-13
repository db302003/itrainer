// Get references to page elements
var $woType = $("#workout-type");
var $woDate = $("#workout-date");
var $woWeight = $("#workout-weight");
var $woSets = $("#workout-sets");
var $woReps = $("#workout-reps");
var $woNotes = $("#workout-notes");
var $submitBtn = $("#submit");
var $woList = $("#workout-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveStat: function(workout) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/stats",
      data: JSON.stringify(workout)
    });
  },
  getStats: function() {
    return $.ajax({
      url: "api/stats",
      type: "GET"
    });
  }
  // ,
  // deleteLot: function(id) {
  //   debugger;
  //   console.log("id to delete: " + id);
  //   return $.ajax({
  //     url: "api/lots/" + id,
  //     type: "DELETE"
  //   });
  // }
};

// refreshLots gets new lots from the db and repopulates the list
var refreshStats = function() {
  API.getStats().then(function(data) {
    // console.log(data);
    var $stats = data.map(function(workout) {
      var $a = $("<a>")
        .text(workout.date+" | "+ workout.type)
        .attr("href", "stat/" + workout.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": lot.id
        })
        .append($a);

      // var $button = $("<button>")
      //   .addClass("btn btn-danger float-right delete")
      //   .text("ｘ");

      // $li.append($button);

      return $li;
    });

    $woList.empty();
    $woList.append($lots);
  });
};

// handleFormSubmit is called whenever we submit a new lot
// Save the new lot to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var workout = {
    type: $woType.val().trim(),
    date: $woDate.val().trim(),
    weight: $woWeight.val().trim(),
    sets: $woSets.val().trim(),
    reps: $woReps.val().trim(),
    notes: $woNotes.val().trim()
  };

  if (!(workout.type && workout.date)) {
    alert("You must enter date and type of workout!");
    return;
  }

  API.saveStat(workout).then(function() {
    refreshStats();
  });

  $woType.val("");
  $woDate.val("");
  $woWeight.val("");
  $woSets.val("");
  $woReps.val("");
  $woNotes.val("");
};

// handleDeleteBtnClick is called when  delete button is clicked
// Remove from the db and refresh the list
var handleDeleteBtnClick = function() {
  console.log("handleDeleteBtnClick");
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  console.log("id to delete " + idToDelete);

  API.deleteStat(idToDelete).then(function() {
    refreshStats();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
// $woList.on("click", ".delete", handleDeleteBtnClick);
