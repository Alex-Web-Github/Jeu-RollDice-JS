//  Définition de la fonction "aléatoire"
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Définition de la fonction pour déterminer le joueur qui démarre la partie de manière aléatoire
function chooseBeginner() {
  let i = getRandomIntInclusive(1, 2);
  return i;
}

// Définition de la fonction pour afficher un point rouge à côté du joueur qui démarre
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

// Déclaration de la fonction "Roll Dice" pour lancer le dé.
function rollDice() {
  let i = getRandomIntInclusive(1, 6);
  return i;
}

/////////////////////////////////////////////////////////////////

// Message de Bienvenue quand le DOM est chargé
document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello, voici mon jeu en JS !");
});

// Fonctionnalité du bouton "New Game" : remise des scores à zéro.
const newGame = document.getElementById("btnNewGame");
const globalPlayer1 = document.getElementById("globalPlayer1");
const globalPlayer2 = document.getElementById("globalPlayer2");
const roundPlayer1 = document.getElementById("roundPlayer1");
const roundPlayer2 = document.getElementById("roundPlayer2");
newGame.addEventListener("click", () => {
  globalPlayer1.innerText = 0;
  globalPlayer2.innerText = 0;
  roundPlayer1.innerText = 0;
  roundPlayer2.innerText = 0;
  // Tirage au sort du joueur qui démarre la nouvelle partie
  const firstPlayer = chooseBeginner();
  displayPlayer(firstPlayer);
  console.log(`Le joueur ${firstPlayer} commence la nouvelle partie`);
  player = firstPlayer;
});

// Fonctionnalité du bouton "RollDice"
const btnRollDice = document.querySelector("#btnRollDice");
btnRollDice.addEventListener("click", () => {
  let result = rollDice();
  // Ci-dessous, vérification du bon déroulement du Script dans la console :
  console.log(`Lancé de Dé ${result}, joueur en cours: PLAYER ${player}`);

  // Ci-après, Affichage des faces du Dé suivant le résultat du lancé :
  const dots11 = document.querySelector(".dots11");
  const dots13 = document.querySelector(".dots13");
  const dots21 = document.querySelector(".dots21");
  const dots22 = document.querySelector(".dots22");
  const dots23 = document.querySelector(".dots23");
  const dots31 = document.querySelector(".dots31");
  const dots33 = document.querySelector(".dots33");

  dots11.classList.remove("dots");
  dots13.classList.remove("dots");
  dots21.classList.remove("dots");
  dots22.classList.remove("dots");
  dots23.classList.remove("dots");
  dots31.classList.remove("dots");
  dots33.classList.remove("dots");

  if (result === 1) {
    dots22.classList.add("dots");
  } else if (result === 2) {
    dots11.classList.add("dots");
    dots33.classList.add("dots");
  } else if (result === 3) {
    dots11.classList.add("dots");
    dots22.classList.add("dots");
    dots33.classList.add("dots");
  } else if (result === 4) {
    dots11.classList.add("dots");
    dots13.classList.add("dots");
    dots31.classList.add("dots");
    dots33.classList.add("dots");
  }
  if (result === 5) {
    dots11.classList.add("dots");
    dots13.classList.add("dots");
    dots22.classList.add("dots");
    dots31.classList.add("dots");
    dots33.classList.add("dots");
  } else if (result === 6) {
    dots11.classList.add("dots");
    dots13.classList.add("dots");
    dots21.classList.add("dots");
    dots23.classList.add("dots");
    dots31.classList.add("dots");
    dots33.classList.add("dots");
  }

  // Affichage du résultat du lancer de Dé dans le "Current" du joueur concerné.
  // En plus : si résultat Dé =1, alors changement de joueur
  if (player === 1) {
    if (result === 1) {
      round1 = 0;
      roundPlayer1.innerText = round1;
      displayPlayer(2);
      player = 2;
    } else {
      round1 = result;
      roundPlayer1.innerText = round1;
    }
  } else {
    if (result === 1) {
      round2 = 0;
      roundPlayer2.innerText = round2;
      displayPlayer(1);
      player = 1;
    } else {
      round2 = result;
      roundPlayer2.innerText = round2;
    }
  }
});

// Fonctionnalité du bouton HOLD : additionner le 'Current' au 'Global', test si >=100, et changement de joueur
const btnHold = document.querySelector("#btnHold");
btnHold.addEventListener("click", () => {
  console.log(`Click sur le bouton HOLD, joueur en cours: ${player}`);
  if (player === 1) {
    global1 = global1 + round1;
    if (global1 >= 100) {
      alert(`Le GAGNANT est : PLAYER 1`);
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
      alert(`Le GAGNANT est : PLAYER 2`);
    } else {
      globalPlayer2.innerText = global2;
      displayPlayer(1);
      player = 1;
      round2 = 0;
      roundPlayer2.innerText = round2;
    }
  }
});

const firstPlayer = chooseBeginner();
displayPlayer(firstPlayer);
console.log(`Le joueur PLAYER ${firstPlayer} commence la partie`);
let player = firstPlayer;
let global1 = 0;
let global2 = 0;
let round1 = 0;
let round2 = 0;
