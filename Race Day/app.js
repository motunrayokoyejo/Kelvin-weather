let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 19;
if (age > 18 && registeredEarly ==true) {
 raceNumber +=1000
}
if (age > 18 && registeredEarly ==true){
  console.log('Your race is by 9:30am, Your raceNumber is ' + raceNumber)
} else if ( age >18 && registeredEarly ==false){
  console.log('Your race is by 11:00am, Your raceNumber is ' + raceNumber)
} else if (age < 18){
  console.log('Your race is by 12:30am, Your raceNumber is ' + raceNumber)
} else {
  console.log('Please see the registration desk')
}
