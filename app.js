'use strict';

var answer1 = confirm('Are you ready?');

if (answer1 === true){
  console.log('Woo! User is ready!');
} else {
  console.log('Sorry, too bad...');
}

var color = prompt('Do I like the color green?').toLowerCase();
console.log('The user answered:' + color);

if (color === 'yes' || color === 'y'){
  alert('Sweet!');
} else {
  alert ('So close yet so far away');
}

var game = prompt ('Is WOW fun?').toLowerCase();
console.log('What the user answered:' + game);

if (game === 'yes' || game === 'y'){
  alert('Don\'t judge me!');
} else {
  alert('I will eat your soul');
}

var hiking = prompt ('Do I like to hike for fun?').toLowerCase();
console.log('What they think of me:' + hiking);

if (hiking === 'yes' || hiking === 'y'){
  alert('I want to hike more often');
}else{
  alert('I like tree\'s');
}

var coding = prompt ('Am I good at coding?'). toLowerCase();
console.log('Answer:' + coding);

if (coding === 'no' || coding === 'n'){
  alert('I am getting better');
} else {
  alert ('Oh you know me all too well');
}

var last = prompt ('Do I have a car?').toLowerCase();
console.log('Answer of all people:' + last);

if (last === 'yes' || last === 'y'){
  alert ('It broke on me');
} else{
  alert('I hate my broken car and I am a mechanic');
}
