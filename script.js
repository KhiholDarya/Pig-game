'use strict';

let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
let activePlayer = 0;
let currentScore = [0,0];
let score = [0,0];
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
let dice;

diceEl.classList.add('hidden');

const switchPlayer = function () {
	if (activePlayer === 0){
		currentScore[activePlayer] = 0;
		activePlayer = 1;
		player0.classList.remove('player--active');
		player1.classList.add('player--active');
	}
	else {
		activePlayer = 0;
		player1.classList.remove('player--active');
		player0.classList.add('player--active');
	}
};

btnRoll.addEventListener ('click', function () {
	if (playing){
		diceEl.classList.remove('hidden');
		dice = Math.floor(Math.random()* 6 + 1);
		diceEl.src = `dice-${dice}.png`;
		
		if(dice !==1){
			if(!activePlayer) {
			currentScore[0] += dice;
			currentScore0.textContent = currentScore[0];
			console.log(currentScore[0,1]);
			}
			else if(activePlayer){
			currentScore[1] += dice;
			currentScore1.textContent = currentScore[1];
			console.log(currentScore[0,1]);
			}
		}
		else {
			currentScore[activePlayer] = 0;
			currentScore0.textContent = 0;
			currentScore1.textContent = 0;
			switchPlayer();
		}
	}
});

btnHold.addEventListener ('click', function () {
	if (currentScore[activePlayer] >= 1){
		score[activePlayer] += currentScore[activePlayer];
		currentScore[0] = 0;
		currentScore0.textContent = currentScore[1];

		if(activePlayer){
			score1El.textContent = score[1];
			currentScore[1] = 0;
			currentScore1.textContent = currentScore[1];
			currentScore0.textContent = currentScore[0];
		}
		else{
			score0El.textContent = score[0];
			currentScore[0] = 0;
			currentScore0.textContent = currentScore[0];
		}

		if (playing){	
			if (score[activePlayer] >= 100){
				diceEl.classList.add('hidden');
				playing = false;
				if(!activePlayer){
					player0.classList.remove('player--active');
					player0.classList.add('player--winner');
				}
				else if (activePlayer){
					player1.classList.remove('player--active');
					player1.classList.add('player--winner');
				}
			}
			else {
					if (!activePlayer){
						score0El.textContent = score[0];
						currentScore[0] = 0;
						currentScore0.textContent = currentScore[0];
						switchPlayer();
						}
					else{
						score1El.textContent = score[1];
						currentScore[1] = 0;
						currentScore1.textContent = currentScore[1];
						switchPlayer();
				}
			}
		}
	}
});

btnNew.addEventListener ('click', function () {
	if (activePlayer){
		player1.classList.remove('player--winner');
	}
	else {
		player0.classList.remove('player--winner');
	}

	diceEl.classList.remove('hidden');
	player0.classList.add('player--active');
	currentScore[0] = 0;
	currentScore[1] = 0;
	score[0] = 0;
	score[1] = 0;
	score0El.textContent = 0;
	score1El.textContent = 0;
	activePlayer = 0;
	playing = true;
	currentScore0.textContent = 0;
	currentScore1.textContent = 0;
});



