'use strict';

var answer1 = confirm('Are you ready?');
var counter = 0;
if (answer1 === true){
  console.log('Woo! User is ready!');

} else {
  console.log('Sorry, too bad...');
}

var userName = prompt('What is you name?');
console.log('The user\'s name is:', userName);

var color = prompt(userName + ':Do I like the color green?').toLowerCase();
console.log('The user answered:' + color);

if (color === 'yes' || color === 'y'){
  alert('Sweet!');
  counter ++;
} else {
  alert ('So close yet so far away');
}

var game = prompt ('Is WOW fun?').toLowerCase();
console.log('What the user answered:' + game);

if (game === 'yes' || game === 'y'){
  alert('Don\'t judge me!');
  counter ++;
} else {
  alert('I will eat your soul');
}

var hiking = prompt ('Do I like to hike for fun?').toLowerCase();
console.log('What they think of me:' + hiking);

if (hiking === 'yes' || hiking === 'y'){
  alert('I want to hike more often');
  counter ++;
}else{
  alert('I like tree\'s');
}

var coding = prompt ('Do I like Energy Drinks?'). toLowerCase();
console.log('Answer:' + coding);

if (coding === 'yes' || coding === 'y'){
  alert('Heck yeah I do. I think my blood is finally made out of it.');
  counter ++;
} else {
  alert ('I bleed caffeine');
}

var last = prompt ('Do I have a car?').toLowerCase();
console.log('Answer of all people:' + last);

if (last === 'yes' || last === 'y'){
  alert ('It broke on me');
  counter ++;
} else{
  alert('I hate my broken car and I am a mechanic');
}

for(var index = 4; index > 0; index--){
  var number1 = prompt('Guess a number from 1 - 10. You have' + (index - 1) + ' guesses to get it right');
  console.log('Answer too the question:', number1);
  var numberGuessed = '6';
  if (number1 === numberGuessed){
    alert('Wow your good.');
    counter ++;
    index = 0;
  }
  else if (index > 1) {
    if (number1 > numberGuessed ){
      alert('Number too high try again.');
    }
    else {
      alert('you need to come up a little or a lot. It\'s your guess.');
    }
  }
  else {
    alert('No No No try again.');
  }
}

var states = ['idaho', 'hawaii', 'north carolina', 'florida', 'california'];
for (var index = 0; index < states.length; index++) {
  var question7 = prompt('Last question before you read about me. What were my favorite state to live in besides washington').toLowerCase();
  console.log('what they guessed:', question7);
  for (var stuff = 0; stuff < states.length; stuff++) {
    if (question7 === states[stuff]){
      alert ('How do you know me so well? Kinda weird don\'t you think?');
      counter ++;
      index = 4;
    }
  }
  if (index < 4){
    alert ('Wow out of 50 states you couldn\'t guess my states. Please try again.');
  }
}

alert('You got' + (counter) + 'out of 7');
