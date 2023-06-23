// Déclaration des variables du SCORE TOTAL des 2 joueurs
const globalPlayer1 = document.getElementById("globalPlayer1");
const globalPlayer2 = document.getElementById("globalPlayer2");

// Déclaration des variables du SCORE du ROUND des 2 joueurs
const roundPlayer1 = document.getElementById("roundPlayer1");
const roundPlayer2 = document.getElementById("roundPlayer2");

// Déclarations des variables pour l'affichage de la face du Dé
const dots11 = document.querySelector(".dots11");
const dots13 = document.querySelector(".dots13");
const dots21 = document.querySelector(".dots21");
const dots22 = document.querySelector(".dots22");
const dots23 = document.querySelector(".dots23");
const dots31 = document.querySelector(".dots31");
const dots33 = document.querySelector(".dots33");

// Déclaration des variables modifiables des scores ROUND et GLOBAL
let global1;
let global2;
let round1;
let round2;

// Fonction de Remise à zéro des scores et de l'affichage
function resetGame() {
	global1 = 0;
	global2 = 0;
	round1 = 0;
	round2 = 0;
	globalPlayer1.innerText = 0;
	globalPlayer2.innerText = 0;
	roundPlayer1.innerText = 0;
	roundPlayer2.innerText = 0;
}
// Fonction "aléatoire" du lancer de Dé
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour déterminer aléatoirement le joueur qui démarre
function getBeginner() {
	let i = getRandomIntInclusive(1, 2);
	return i;
}

// Fonction pour afficher un point rouge à côté du joueur "P"
function displayPlayer(p) {
	const player1 = document.querySelector(".redTag1");
	const player2 = document.querySelector(".redTag2");
	if (p === 1) {
		player1.style.display = "inline-block";
		player2.style.display = "none";
	} else {
		player1.style.display = "none";
		player2.style.display = "inline-block";
	}
}

// Fonction pour lancer le dé.
function rollDice() {
	let i = getRandomIntInclusive(1, 6);
	return i;
}

// Fonction "startNewGame" (Button 'NEW GAME') pour démarrer une nouvelle partie (remise des scores à zéro)
function startNewGame() {
	// Reset des scores
	resetGame();
	// Tirage au sort du joueur qui démarre la nouvelle partie
	let firstPlayer = getBeginner();
	displayPlayer(firstPlayer);
	player = firstPlayer;
}

// Fonction pour afficher les faces du Dé suivant le résultat
function displayDice(result) {
	// Les points rouges sont d'abord masqués puis affichés selon le résultat
	dots11.classList.remove("dots__red");
	dots13.classList.remove("dots__red");
	dots21.classList.remove("dots__red");
	dots22.classList.remove("dots__red");
	dots23.classList.remove("dots__red");
	dots31.classList.remove("dots__red");
	dots33.classList.remove("dots__red");
	if (result === 1) {
		dots22.classList.add("dots__red");
	} else if (result === 2) {
		dots11.classList.add("dots__red");
		dots33.classList.add("dots__red");
	} else if (result === 3) {
		dots11.classList.add("dots__red");
		dots22.classList.add("dots__red");
		dots33.classList.add("dots__red");
	} else if (result === 4) {
		dots11.classList.add("dots__red");
		dots13.classList.add("dots__red");
		dots31.classList.add("dots__red");
		dots33.classList.add("dots__red");
	}
	if (result === 5) {
		dots11.classList.add("dots__red");
		dots13.classList.add("dots__red");
		dots22.classList.add("dots__red");
		dots31.classList.add("dots__red");
		dots33.classList.add("dots__red");
	} else if (result === 6) {
		dots11.classList.add("dots__red");
		dots13.classList.add("dots__red");
		dots21.classList.add("dots__red");
		dots23.classList.add("dots__red");
		dots31.classList.add("dots__red");
		dots33.classList.add("dots__red");
	}
}

// Affichage du score dans le "Current" du joueur concerné.
// En plus : si résultat Dé =1, alors score du ROUND à zéro et changement de joueur
function testResult(result) {
	if (player === 1) {
		if (result === 1) {
			// Temporisation avant d'afficher la modale "alert()"
			setTimeout(
				alert,
				500,
				"VOUS OBTENEZ 1 --> Vous avez perdu tous vos points. Dommage ! "
			);
			round1 = 0;
			roundPlayer1.innerText = round1;
			displayPlayer(2);
			player = 2;
		} else {
			round1 = round1 + result;
			roundPlayer1.innerText = round1;
		}
	} else {
		if (result === 1) {
			// Temporisation avant d'afficher la modale "alert()"
			setTimeout(
				alert,
				500,
				"VOUS OBTENEZ 1 --> Vous avez perdu tous vos points. Dommage ! "
			);
			round2 = 0;
			roundPlayer2.innerText = round2;
			displayPlayer(1);
			player = 1;
		} else {
			round2 = round2 + result;
			roundPlayer2.innerText = round2;
		}
	}
}

// Fonction "getRollDice" (Button 'ROLLDICE') pour lancer le dé, afficher le résultat et tester si le résultat vaut 1
function getRollDice() {
	// Lancer du Dé
	let result = rollDice();
	// Affichage de la face du Dé
	displayDice(result);
	// Affichage du score dans le "Current" du joueur concerné et testing 'result === 1'
	testResult(result);
}

// Fonction "savePointsToGlobal" (Button 'HOLD') pour additionner le score du ROUND au score GLOBAL
// puis on teste le score GLOBAL : si >=100 alors changement de joueur
function savePointsToGlobal() {
	if (player === 1) {
		global1 = global1 + round1;
		if (global1 >= 100) {
			alert("Félicitations : le JOUEUR 1 a gagné");
		} else {
			globalPlayer1.innerText = global1;
			displayPlayer(2);
			player = 2;
			round1 = 0;
			roundPlayer1.innerText = round1;
		}
	} else {
		global2 = global2 + round2;
		if (global2 >= 100) {
			alert("Félicitations : le JOUEUR 2 a gagné");
		} else {
			globalPlayer2.innerText = global2;
			displayPlayer(1);
			player = 1;
			round2 = 0;
			roundPlayer2.innerText = round2;
		}
	}
}

/////////////////////////////////////////////////////////////o///
// Déroulement du Script
/////////////////////////////////////////////////////////////////

// Message de Bienvenue quand le DOM est chargé
document.addEventListener("DOMContentLoaded", () => {
	alert(
		"BIENVENUE dans mon jeu de dé : démarrez en cliquant sur ROLLDICE. Le premier qui atteint 100 points à gagné !"
	);
});

// Initialisation des scores
resetGame();

// Affichage du joueur qui démarre la partie (aléatoirement)
let firstPlayer = getBeginner();
displayPlayer(firstPlayer);
let player = firstPlayer;
