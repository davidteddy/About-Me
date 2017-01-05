'use strict';

var counter = 0;

function begin(){
  var answer1 = confirm('Are you ready?');
  if (answer1 === true){
    alert('Woo! User is ready!');

  } else {
    alert('Sorry, too bad...');
  }
  return answer1;
}

function getUserName(){
  var userName = prompt('What is you name?');
  console.log('The user\'s name is:', userName);
  return userName;
}

function aboutColor(userName){
  var userAnswer = prompt(userName + ':Do I like the color green?').toLowerCase();
  console.log('The user answered:' + userAnswer);

  if (userAnswer === 'yes' || userName === 'y'){
    alert('Sweet!');
    counter ++;
  } else {
    alert ('So close yet so far away');
  }
  return userAnswer;
}

function aboutGame(){
  var userAnswer2 = prompt ('Is WOW fun?').toLowerCase();
  console.log('What the user answered:' + userAnswer2);

  if (userAnswer2 === 'yes' || userAnswer2 === 'y'){
    alert('Don\'t judge me!');
    counter ++;
  } else {
    alert('I will eat your soul');
  }
  return userAnswer2;
}

function aboutHiking(){
  var userAnswer3 = prompt ('Do I like to hike for fun?').toLowerCase();
  console.log('What they think of me:' + userAnswer3);

  if (userAnswer3 === 'yes' || userAnswer3 === 'y'){
    alert('I want to hike more often');
    counter ++;
  }else{
    alert('I like tree\'s');
  }
  return userAnswer3;
}

function aboutCoding(){
  var userAnswer4 = prompt ('Do I like Energy Drinks?'). toLowerCase();
  console.log('Answer:' + userAnswer4);

  if (userAnswer4 === 'yes' || userAnswer4 === 'y'){
    alert('Heck yeah I do. I think my blood is finally made out of it.');
    counter ++;
  } else {
    alert ('I bleed caffeine');
  }
  return userAnswer4;
}

function aboutCars(){
  var userAnswer5 = prompt ('Do I have a car?').toLowerCase();
  console.log('Answer of all people:' + userAnswer5);

  if (userAnswer5 === 'yes' || userAnswer5 === 'y'){
    alert ('It broke on me');
    counter ++;
  } else{
    alert('I hate my broken car and I am a mechanic');
  }
  return userAnswer5;
}

function aboutGuess(){
  for(var index = 4; index > 0; index--){
    var userAnswer6 = prompt('Guess a number from 1 - 10. You have' + (index - 1) + ' guesses to get it right');
    console.log('Answer too the question:', userAnswer6);
    var numberGuessed = '6';
    if (userAnswer6 === numberGuessed){
      alert('Wow your good.');
      counter ++;
      index = 0;
    }
    else if (index > 1) {
      if (userAnswer6 > numberGuessed ){
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
  return userAnswer6;
}

function aboutStates(){
  var userAnswer7 = ['idaho', 'hawaii', 'north carolina', 'florida', 'california'];
  for (var index = 0; index < userAnswer7.length; index++) {
    var question7 = prompt('Last question before you read about me. What were my favorite state to live in besides washington').toLowerCase();
    console.log('what they guessed:', question7);
    for (var stuff = 0; stuff < userAnswer7.length; stuff++) {
      if (question7 === userAnswer7[stuff]){
        alert ('How do you know me so well? Kinda weird don\'t you think?');
        counter ++;
        index = 4;
      }
    }
    if (index < 4){
      alert ('Wow out of 50 states you couldn\'t guess my states. Please try again.');
    }
  }
  return userAnswer7;
}

begin();
var userName = getUserName();
aboutColor(userName);
aboutGame();
aboutHiking();
aboutCoding();
aboutCars();
aboutGuess();
aboutStates();

alert('You got' + (counter) + 'out of 7');
