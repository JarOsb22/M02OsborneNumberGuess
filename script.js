function playGuessingGame(numToGuess,totalGuesses=10){
var numberOfGuesses = 0;
var promptText = "Enter a number between 1 and 100";
while(numberOfGuesses < totalGuesses){
var number = prompt(promptText);
if(number === null){
//if the user pressed the cancel button, the function should return 0
return 0;
}
if(isNaN(number)||number == ""){
//if the text entered is not a number then show the error
promptText = "Please enter a number.";
}else{
var n = Number(number);
if(n<numToGuess){
//updating the promptText, increasing the numberOfGuesses
promptText = n+" is too small. Guess a larger number";
numberOfGuesses += 1;
}else if(n > numToGuess){
//updating the promptText, increasing the numberOfGuesses
promptText = n+" is too large. Guess a smaller number";
numberOfGuesses += 1;
}else{
numberOfGuesses += 1;
//else the correct number was guessed
return numberOfGuesses;
}
}
}
//if the control reaches here that means the user was unable to guess the number
//correctly in the given number of attempts so the function returns 0
return 0;
}
//calling the function
console.log(playGuessingGame(7,3));