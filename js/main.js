// proto functions
String.prototype.isEmpty = function() {
  return this.valueOf() === "";
}

//global variables
var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
};

//functions

//fade the alert message after 4 minutes
var clearAlertMsg = function() {

  setTimeout(function() {
    $('#alert-message').fadeOut('slow', function(){
        $('#alert-message').empty();
        //$('#alert-message').css('display', 'block');
        $('#alert-message').show();
    });
    $('input#name-txt').removeClass('success').removeClass('warning').removeClass('error');
  }, 4000);

}


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
          $('#alert-message').append('<p>' + nameInput  + ' reservation was found</p>');
          $('input#name-txt').addClass('success');
          // $('#reservations-list').append('<li> ' + nameInput + ' has reservation </li>');
        }else if(rsvp.claimed){
          // alert('your reservation was claimed already');
          $('#alert-message').append('<p>' + nameInput  + ' reservation was claimed already</p>');
          $('input#name-txt').addClass('warning');
          // $('#reservations-list').append('<li> ' + nameInput + ' has reservation </li>');
        }
      }
  }


   //loop is over check if the doesn\'st exist
   if(userExist === false) {
    // notice user not exist , and ask if need to reserve
    var isAddUser = confirm('No reservation under ' + nameInput + ' name. Do you want to add new user?');
    if (isAddUser === true) {
        // add user to obj
        reservations[nameInput] = {claimed:true};
        // alert('reservation completed. Enjoy it!!')
        $('#alert-message').append('<p>Reservation for ' + nameInput  + ' completed</p>');
        $('#reservations-list').append('<li> ' + nameInput + ' has reservation </li>');

    }
   }



    clearAlertMsg();
};


// document finish load
$(document).ready(function() {

    // init code

  // handlers
  $('#grab-val').on('click', function() {


    // grab value from user input
    var name = $('#name-txt').val();

     //if input is empty
      if(name.isEmpty()) {
        $('#alert-message').append('<p> Please enter a name! </p>');
         $('input#name-txt').addClass('error');
         clearAlertMsg();
         return false;
      }

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

    $('#name-txt').val('');

  });


});


//==================
//to fix - if alert message still on an the input is clicked the alert message needs to disappear





