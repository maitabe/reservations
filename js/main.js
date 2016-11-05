//global variables
var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
};

//functions

//claimReservation function for a Restaurant
var claimReservation = function (nameInput) {
  var userExist = false;
    // loop through the reservation obj
   for( var user in reservations){
      var rsvp = reservations[user];
        // check if user exist
      if(nameInput === user){
        userExist = true;
        console.log('u exist');
        // check if reservation is true o false
        if(!rsvp.claimed){
          // alert('welcome to the show');
          $('#alert-message').append('<p>Reservation found</p>');
          $('input#name-txt').addClass('success');
        }else if(rsvp.claimed){
          // alert('your reservation was claimed already');
          $('#alert-message').append('<p>Your reservation was claimed already</p>');
          $('input#name-txt').addClass('warning');
        }else{
          // alert('there is no reservation under your name');
          $('#alert-message').append('<p>There is no reservation under your name</p>');
          $('input#name-txt').addClass('error');
        }
        break;
      }
      // remove color input when writing again
    $('input#name-txt').focus(function() {
      alert('works');
      // $('input#name-txt').removeClass('success');
      // $('input#name-txt').removeClass('warning');
      // $('input#name-txt').removeClass('error');
      // $('#alert-message p').remove();
    });

   }

   //loop is over check if the doesn\'st exist
   if(userExist === false) {
    // notice user not exist , and ask if need to reserve
    var isAddUser = confirm('No reservation under ' + name + ' name. Do you want to add new user?');
    if (isAddUser === true) {
        // add user to obj
        reservations[name] = {claimed:true};
        // alert('reservation completed. Enjoy it!!')
        $('#alert-message').append('<p>Reservation completed</p>');
    }
   }
};


// document finish load
$(document).ready(function() {

// init code

// handlers
$('#grab-val').click(function() {

// grab value from user input
  var name = $('#name-txt').val();
  //clean spaces at the beginning or end of string
  name = name.trim();

  //first solution for NON case sensitive
  var nameConvert = '';
  for (var i = 0; i < name.length; i++) {
      //convert first letter of string to caps lock
      if(i === 0) {
        //first letter
        nameConvert += name[0].toUpperCase();

      }else{
        //convert rest of letters to lower case
        nameConvert += name[i].toLowerCase();
      }
  }
  // //assign NON case sensitive again to name
  name = nameConvert;

  //second solution for NON case sensitive
  // name = name.toLowerCase();
  // name = name[0].toUpperCase(); + name.slice(1);
  // console.log(name);

  claimReservation(name);
});


});







