//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name) {
  if (name === "Tyler") {
    return true;
  }
  else {
    return false;
  }
}

isTyler(name);
//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getName() {
  var name = prompt("What is your name?")
  return name;
}
// getName();

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome() {
  var myName = getName();
  alert("Welcome, " + myName);
}
// welcome();

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here

// When you declare something, it's a parameter.
// When you call it is an argument.

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

//Falsy values are: false, null, undefined, 0, NaN, "" (empty string)
//To check for falsy, you check if something is falsy with the following function:
function truthiness(value) {
  if (value) {
    console.log("truthy")
  }
  else (
    console.log("falsy")
  )
}
// truthiness(undefined);

//Next Problem



//Create a function called myName that returns your name

  //Code Here
// var name = "Howard"

function myName() {
  return "Howard";
}

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn() {
  return function () {
    return "Howard";
  }
}

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();

//Now invoke innerFn.
innerFn();
