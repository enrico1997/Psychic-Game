var wins = 0;
var losses = 0;
var guessesRemaining = 5;
var lettersChosen = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g" , "h", "i", "j", "k", "l", "m", "n" , "o", "p" , "q" , "r" , "s" ,"t" , "u", "v", "w", "x", "y", "z"]; // Array of letters to pick from

var computerAnswer = alphabet[Math.floor(Math.random()*alphabet.length)]; //Computer chooses random letter

//reset all variables back to default
function reWriteStats() {
	guessesRemaining = 5;
	lettersChosen = [];
	computerAnswer = alphabet[Math.floor(Math.random()*alphabet.length)];
}

//get keystroke from player to START the game
document.onkeyup = function(event) {
	var userInput = (event.key);
	userInput = userInput.toLowerCase();
	
	//Check if userInput already chosen 
	if (lettersChosen.indexOf(userInput) < 0) {
			lettersChosen[lettersChosen.length] = userInput;
			guessesRemaining--;
		}

	//Compare return with userkey, Win!
	if (userInput == computerAnswer) {
		alert("Awesome, you read my mind!")
		wins++;
		reWriteStats();
	}
	//Compare return with userkey, Lost!
	else if (userInput != computerAnswer && guessesRemaining < 1) {
		alert("Sorry, you lose!")
		losses++;
		reWriteStats();
	}
	updateVars(wins, losses, guessesRemaining, lettersChosen, computerAnswer);
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