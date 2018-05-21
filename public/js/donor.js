$(document).ready(function(){
    $('.timepicker').timepicker();
  });

  $(document).ready(function(){
    $('.datepicker').datepicker();
  });
          
  $(document).ready(function(){
    $('select').formSelect();
  });

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

//////////////////////////////////

/* global moment */
$(document).ready(function(){
// When user clicks add-btn
$("#donation_Submit").on("click", function(event) {
  event.preventDefault();

  // Make a newDonation object
  //newCrisp
  


  var newDonation = {
    business: $("#business").val().trim(),
    //food: $("#Address").val().trim(),
    //quantity_avalaible: $("#quantity_availible").val(),//.trim(),
    //address: $("#Address").val(),//.trim(),
    //lastCall: $("#lastcall").val().trim(),
    //pickupDate: $("#author").val().trim(),
    //category: $("#catagory").val(),//.trim(),
    //allergen: $("#allergyn").val()//.trim(),

    //updated_at: moment().format("YYYY-MM-DD HH:mm:ss"),
    //created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
  
  };

  console.log(newDonation);
/*
  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newChirp)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + newChirp.author + " chirped: </p>");
      row.append("<p>" + newChirp.body + "</p>");
      row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

      $("#chirp-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#chirp-box").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].author + " chirped.. </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#chirp-area").prepend(row);

    }

  }
*/
});
});
