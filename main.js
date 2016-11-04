//claimReservation function for a Restaurant
var userExist = false;

var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
};

var name = prompt('Please enter the name for your reservation');


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
   	alert('there is no name: ' + name);
   }

};

claimReservation();








