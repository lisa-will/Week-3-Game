var wins = 0;
var wordOptions = ["your guess is as good as mine", "a little bird told me", "heard it through the grapevine", "piece of cake", "once in a blue moon", "method to my madness", "it takes two to tango", "at the drop of a hat"];
var randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
var numGuess = 6;
var incorrectLetters = [];
var currentWord = [];

// document.querySelector("#numWins").innerHTML = wins;


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

	//THIS CODE BELOW CREATES VISUAL CHANGE: REMOVING COMMAS AFTER SPACE ((FROM THIS: "__," TO THIS: "__" ))//
	
	var currentWordHTML = currentWord.join(" ");
	
	document.querySelector("#currentWord").innerHTML = currentWordHTML;
	
	// THIS CODE SHOWS THE NUMBER OF GUESS REMAINING //

	document.querySelector("#guessesRemaining").innerHTML = numGuess;

	// STARTS THE GAME ONCE USER PRESSES KEY //

	document.onkeyup= function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		// IF USER PICKS A CORRECT LETTER //
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

			// IF USER PICKS LETTER ALREADY USED //
		else if (incorrectLetters.indexOf(userGuess) >= 0){
			console.log("Already Guessed");
		}
			// IF USER PICKS A WRONG LETTER //
		else{
			numGuess --; 
			incorrectLetters.push(userGuess);
			
			document.querySelector("#guessesRemaining").innerHTML = numGuess;		

			incorrectLetters.push(userGuess);

			incorrectLettersHTML = incorrectLetters.join(" ");
			document.querySelector("#incorrectLetters").innerHTML = incorrectLettersHTML;


		
			console.log("Wrong");
			console.log(incorrectLetters);
			
			
		}		//THIS CODE BELOW = USER CHANGED GUESSES AND 			NOW IT WILL REDISPLAY IT//
	}			//	document.querySelector("#guessesRemaining").			innerHTML = numGuess;
				
				//incorrectLetters.push(userGuess);
			
				//document.querySelector("#alreadyGuessed").innerHTML = incorrectLetters;
		
	