// create secretNumber
var secretNumber = 4;
// ask user for guess
var guess = prompt("Guess a number");
// check guess
if(Number(guess) === secretNumber){
	alert("YOU GOT IT RIGHT!");
}
//otherwise, check if higher
else if(Number(guess) > secretNumber){
	alert("TOO HIGH, GUESS AGAIN");
}
//otherwise, check if lower
else{
	alert("TOO LOW, GUESS AGAIN");
}
