//business logic
function Contact(location, landmark, season, note) {
  this.newLocation = location;
  this.newLandmark = landmark;
  this.newSeason = season;
  this.newNote = note;
}

Contact.prototype.placeName = function(){
  return this.newLocation;
}
// user interface logic
$(document).ready(function() {
  $("form#new-Place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#newLocation").val();
    var inputtedLandmark = $("input#newLandmark").val();
    var inputtedSeason = $("input#newSeason").val();
    var inputtedNote = $("input#newNotes").val();
    var newPlace = new Contact(inputtedLocation, inputtedLandmark, inputtedSeason, inputtedNote);
    console.log(newPlace);
    $("ul#places").append("<li><span class='place'>" + newPlace.placeName() + "</span></li>");
    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.newLocation);
      $(".location").text(newPlace.newLocation);
      $(".landmarks").text(newPlace.newLandmark);
      $(".season").text(newPlace.newSeason);
      $(".notes").text(newPlace.newNote);
    });

    $("input#newLocation").val("");
    $("input#newLandmark").val("");
    $("input#newSeason").val("");
    $("input#newNotes").val("");
  });
});
