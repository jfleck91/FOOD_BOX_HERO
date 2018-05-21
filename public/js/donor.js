
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


 console.log('test');

//////////////////////////////////


$("#submit_donor").on("click", function(event) {
  event.preventDefault();
  

  // Make a newChirp object
  var newDonation = {
    business:$("#buisness").val().trim(),
    //food:$("#author").val().trim(),
    quantity_avalaible:$("#quantity_availible").val().trim(),
    address:$("#Address").val().trim(),
    lastCall:$("#lastCall").val().trim(),
    pickupDate:$("#day").val().trim(),
    donorText:$("#donorText").val().trim(),
   
    category:$(".catagory").val().trim(),
    allergen:$(".allergyn").val().trim(),

    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newDonation);

  // Send an AJAX POST-request with jQuery
  $.get("./api/addnew", newDonation)
    // On success, run the following code
    .then(function(data) {
      console.log(data);
      alert('adding')

      // var row = $("<div>");
      // row.addClass("donation");

      // row.append("<p>" + newDonation.business + "<p>");
      // row.append("<p>" + newDonation.quantity_avalaible + "</p>");
      // row.append("<p>At " + moment(newDonation.created_at).format("h:mma on dddd") + "</p>");

      // $("#donation_area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  //$("#buisness").val("");
  //$("#box").val("");


// When the page loads, grab all of our Donations
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("donation");

      row.append("<p>" + data[i].business + " Donation.. </p>");
      row.append("<p>" + data[i].quantity_avalaible + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#donation_area").prepend(row);

    }

  }

});

});
