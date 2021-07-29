'use strict';
/*
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = 
'Correct Number!'
document.querySelector('.secretNumber').textContent = 13;
document.querySelector('.score').textContent= 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random()*21);
let score = 20;
let highScore = 0;

if (score > highScore){
    highScore = score;
    document.querySelector('.highscore').textContent = highScore
}

document.querySelector('.check').addEventListener
('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent
        = 'No number!';

        // when player wins
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent =
        'Correct Number!';
        document.querySelector('body').style.
        backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('.number').style.width = '30rem';

        // when guess is wrong
    } else if (guess !== secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent =
        guess > secretNumber ? 'Guess is too high!': 
        'Guess is too low';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
            'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
        
        // when guess is too low
   /* }else if (guess < secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent =
        'Guess is too low!';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
            'You lost the game!';
            document.querySelector('.score').textContent = 0;
        } */
    } else{
        document.querySelector('.message').textContent =
        'You have entered an invalid operator!'
    }
})

document.querySelector('.again').addEventListener
('click',function(){
    secretNumber = Math.trunc(Math.random()*21);
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.
    backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value ='';

})