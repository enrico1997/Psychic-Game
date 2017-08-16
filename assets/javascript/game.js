var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var lettersChosen = [];
// var computerAnswer = null; 
var alphabet = ["a", "b", "c", "d", "e", "f", "g" , "h", "i", "j", "k", "l", "m", "n" , "o", "p" , "q" , "r" , "s" ,"t" , "u", "v", "w", "x", "y", "z"]; // Array of letters to pick from

//Computer chooses random letter
var computerAnswer = alphabet[Math.floor(Math.random()*alphabet.length)];

//get keystroke from player to START the game
document.onkeyup = function(event) {
var userInput = (event.key);

	userInput = userInput.toLowerCase();

	if (lettersChosen.indexOf(userInput) < 0 && alphabet.indexOf(userInput) >= 0) {
			lettersChosen[lettersChosen.length] = userInput;
			guessesRemaining--;
		}

	//Compare return with userkey, pass
	if (userInput == computerAnswer) {
		alert("win")
			wins++;
			guessesRemaining = 10;
			lettersChosen = [];
			computerAnswer = alphabet[Math.floor(Math.random()*alphabet.length)];
	}
	
	updateVars(wins, 3, guessesRemaining, lettersChosen, computerAnswer);
	console.log(userInput);

	//Compare return with userkey, fail, decrement counter

}





//Present results to HTML page
function updateVars(wins, losses, guessesRemaining, lettersChosen, computerAnswer) {
	var html = wins;
	document.getElementById("wins").innerHTML = html;

	html = losses;
	document.getElementById("losses").innerHTML = html;

	html = guessesRemaining;
	document.getElementById("guessesRemaining").innerHTML = html;

	html = lettersChosen;
	document.getElementById("lettersChosen").innerHTML = html;

	html = computerAnswer;
	document.getElementById("computerAnswer").innerHTML = html;
	}