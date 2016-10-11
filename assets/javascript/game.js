// THIS IS JS - :SCREAM: EMOJI 
var wins = 0;

var wordOptions = [ 
		"YOUR GUESS IS AS GOOD AS MINE",
		"A LITTLE BIRD TOLD ME",
		"HEARD IT THROUGH THE GRAPEVINE",
		"PIECE OF CAKE",
		"ONCE IN A BLUE MOON",
		"METHOD TO MY MADNESS", 
		"IT TAKES TWO TO TANGO", 
		"AT THE DROP OF A HAT"
		];

var randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
var numGuess = 7;
var incorrectLetters = [];
var currentWord = [];

	for (var i = 0; i < randomWord.length; i++) {
		if (randomWord[i] === " ") {
			currentWord.push("&nbsp;");
		}	
		else {
			currentWord.push("_");
		}	
	}

console.log(randomWord);
console.log(currentWord);

	// THIS CODE BELOW CREATES VISUAL CHANGE: REMOVING COMMAS AFTER SPACE --> FROM THIS: "__," TO THIS: "__" !!! 
	
var currentWordHTML = currentWord.join(" ");
	
document.querySelector("#currentWord").innerHTML = currentWordHTML;
	
	// THIS CODE SHOWS THE NUMBER OF GUESS REMAINING. 

document.querySelector("#guessesRemaining").innerHTML = numGuess;

	// STARTS THE GAME ONCE USER PRESSES KEY CHANGING DEFAULT IMAGE TO GAME IMAGE 2, AND SO ON... 

document.onkeyup= function(event) {

	if (numGuess == 7) {
		document.querySelector(".imageDiv").innerHTML = '<img id="cat" src="assets/images/purrrfect/1.png">'
	}

		
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

		// IF USER PICKS A CORRECT LETTER: 

	if (randomWord.indexOf(userGuess) >= 0) {
		console.log("Correct");
		
		for (var i = 0; i < randomWord.length; i++) {
			if (randomWord[i] === userGuess) {
				currentWord[i] = userGuess;
			}
		}
		currentWordHTML = currentWord.join(" ");
		document.querySelector("#currentWord").innerHTML = currentWordHTML;
	}

		// IF USER PICKS LETTER ALREADY USED: 

	else if (incorrectLetters.indexOf(userGuess) >= 0) {
			console.log("Already Guessed");
	}

		// IF USER PICKS A WRONG LETTER: 

	else {
			numGuess --; 
			incorrectLetters.push(userGuess);
			
			document.querySelector("#guessesRemaining").innerHTML = numGuess;		

			incorrectLettersHTML = incorrectLetters.join(", ");
			document.querySelector("#alreadyGuessed").innerHTML = incorrectLettersHTML;

			if (numGuess == 6) {
			document.querySelector(".imageDiv").innerHTML = '<img id="cat" src="assets/images/purrrfect/3.png">'
			}

			else if (numGuess == 5) {
				document.querySelector(".imageDiv").innerHTML = '<img id="cat" src="assets/images/purrrfect/4.png">'
			}

			else if (numGuess == 4) {
				document.querySelector(".imageDiv").innerHTML = '<img id="cat" src="assets/images/purrrfect/5.png">'
			}

			else if (numGuess == 3) {
				document.querySelector(".imageDiv").innerHTML = '<img id="cat" src="assets/images/purrrfect/6.png">'
			}

			else if (numGuess == 2) {
				document.querySelector(".imageDiv").innerHTML = '<img id="cat" src="assets/images/purrrfect/7.png">'
			}

			else if (numGuess == 1) {
				document.querySelector(".imageDiv").innerHTML = '<img id="cat" src="assets/images/purrrfect/9.png">'
			}

			else if (numGuess == 0) {
				document.querySelector(".imageDiv").innerHTML = '<img id="cat" src="assets/images/purrrfect/10.png">'
				console.log("You Lose!");

				randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
				numGuess = 7; 
				incorrectLetters = [];
				currentWord = [];

				for (var i = 0; i < randomWord.length; i++) {
					if (randomWord[i] === " ") {
						currentWord.push("&nbsp;");
					}
					else {
						currentWord.push("_");
					}
				}
			

				console.log(randomWord);
				console.log(currentWord);

				currentWordHTML = currentWord.join(" ");
				document.querySelector("#currentWord").innerHTML = currentWordHTML;
				document.querySelector("#guessesRemaining").innerHTML = numGuess;
				document.querySelector("#alreadyGuessed").innerHTML = incorrectLetters;
			}
		}

		if (currentWord.indexOf("_") < 0) {
			console.log("YOU WIN!");
			document.querySelector(".imageDiv").innerHTML = '<img id="cat" src="assets/images/purrrfect/2.png">'
			wins++;
			randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
			numGuess = 7;
			incorrectLetters = [];
			currentWord = [];

			for (var i = 0; i < randomWord.length; i++) {
				if (randomWord[i] === " ") {
					currentWord.push("&nbsp;");
				}
				else {
					currentWord.push("_");
				}
			}

			console.log(randomWord);
			console.log(currentWord);

			document.querySelector("#totalWins").innerHTML = wins;

			currentWordHTML = currentWord.join(" ");
			document.querySelector("#currentWord").innerHTML = currentWordHTML;
			document.querySelector("#guessesRemaining").innerHTML = numGuess;
			document.querySelector("#alreadyGuessed").innerHTML = incorrectLetters;
		}
	}	

			
		
		
