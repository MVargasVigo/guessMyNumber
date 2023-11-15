'use strict';
//-----Generating a random number to guess
let secretNumber = Math.trunc(Math.random()*20) + 1;
//Above, we used math.random to create the random between 0-1, then we multiplied it by 20 to have it be between 0-19 and added 1 to it so that the random range includes 20. We also removed the extra decimals and turned the random into an integer with Math.trunc. The random number needs to be generated outside of the event listener function so that it is constant and so it doesn't change each time we click on the check event listener. 

//-----The score is also set outside with a value of 20. It's a let because the value will decrease everytime that the guess is wrong. This will be defined inside of the ilse statement below.
let score = 20;
let highScore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}


document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);
//-----If else statement to react differently to certain actions:
//1. The 'if' below checks to see if there is an actual guess by the user. Basically, if there is no guess, display 'No Number!'. Going a little bit deeper, the conditional works because without a value imputed, guess would have a falsy value (0), but that would be reversed by the '!' making it a truthy value. In other words, "if !guess (no guess) is true, display No Number!"
    if (!guess) {
        //document.querySelector('.message').textContent = 'No Number!';
        displayMessage('No Number!');
//2. The  else if below accounts for the scenario where the guess is the same as the random number generated.
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!!')
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem'

        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }
//3. The else if below accounts for the scenario where the guess is plainly different than the random number generated.
    } else if(guess !== secretNumber) {
        if (score > 1){
            //document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low!';
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!')
            document.querySelector('.score').textContent = 0;
        } }

//3.B The else if below accounts for the scenario where the guess is higher than the random number generated.
   /* } else if (guess > secretNumber) {
        if (score > 1){
            document.querySelector('.message').textContent = 'Too High!';
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
*/
   /* } else if (guess < secretNumber){
//3.C The above else if accounts for the scenario where the guess is lower than the random number generated.
        if (score > 1){
            document.querySelector('.message').textContent = 'Too Low!';
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
    */
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})