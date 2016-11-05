$(document).ready(function() {

  //claimReservation function for a Restaurant
var userExist = false;

var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
};

// var name = prompt('Please enter the name for your reservation');

$('#grab-val').click(function() {

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

})

var claimReservation = function () {

    // loop through the reservation obj
   for( var user in reservations){
      var rsvp = reservations[user];
        // check if user exist
      if(name === user){
        userExist = true;
        console.log('u exist');
        // check if reservation is true o false
        if(!rsvp.claimed){
          alert('welcome to the show');
        }else if(rsvp.claimed){
          alert('your reservation was claimed already');
        }else{
          alert('there is no reservation under your name');
        }
        break;
      }
   }

   //loop is over check if the doesn\'st exist
   if(userExist === false) {
    // notice user not exist , and ask if need to reserve
    var isAddUser = confirm('No reservation under ' + name + ' name. Do you want to add new user?');
    if (isAddUser === true) {
        // add user to obj
        reservations[name] = {claimed:true};
        alert('reservation completed. Enjoy it!!')
    }
   }

};

claimReservation();





});







