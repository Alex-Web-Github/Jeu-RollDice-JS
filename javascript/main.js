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
function chooseBeginnerDisplay(p) {
  const player1 = document.querySelector(".redTag1");
  const player2 = document.querySelector(".redTag2");

  if (p === 1) {
    let nvEl = document.createElement("span");
    nvEl.innerHTML =
      '<span class="icon bi bi-circle-fill is-size-6 has-text-danger"></span>';
    player1.appendChild(nvEl);
  } else {
    let nvEl = document.createElement("span");
    nvEl.innerHTML =
      '<span class="icon bi bi-circle-fill is-size-6 has-text-danger"></span>';
    player2.appendChild(nvEl);
  }
}

// Déclaration de la fonction "Roll Dice" pour lancer le dé.
function rollDice() {
  let i = getRandomIntInclusive(1, 6);
  return i;
}

// Déclaration de la fonction "HOLD" pour ...
function hold() {}

/////////////////////////////////////////////////////////////////

// Message de Bienvenue et lancement de la fonction chooseBeginner() quand le DOM est chargé
document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello, voici mon jeu en JS !");
  const firstPlayer = chooseBeginner();
  console.log(`Joueur : `, `${firstPlayer}`);
  chooseBeginnerDisplay(firstPlayer);
});

// Fonctionnalité du bouton "New Game" : remise des scores à zéro.
const newGame = document.getElementById("btnNewGame");
const globalPlayer1 = document.getElementById("globalPlayer1");
const globalPlayer2 = document.getElementById("globalPlayer2");
const roundPlayer1 = document.getElementById("roundPlayer1");
const roundPlayer2 = document.getElementById("roundPlayer2");
let global1 = 0;
let global2 = 0;
let round1 = 0;
let round2 = 0;
newGame.addEventListener("click", () => {
  globalPlayer1.innerText = `${global1}`;
  globalPlayer2.innerText = `${global2}`;
  roundPlayer1.innerText = `${round1}`;
  roundPlayer2.innerText = `${round2}`;
  //console.log("global1:",`${global1}`,"global2:",`${global2}`,"round1:",`${round1}`,"round2 :",`${round2}`);
});

// Fonctionnalité du bouton "RollDice" : lancer le dé et afficher le résultat dans la variable 'round' du joueur concerné.
const btnRollDice = document.getElementById("btnRollDice");
btnRollDice.addEventListener("click", () => {
  const roundPlayer1 = document.getElementById("roundPlayer1");
  let result = rollDice();
  console.log(result);
  if (result === 1) {
    roundPlayer1.innerText = "0";
  } else {
    round1 = result;
    roundPlayer1.innerText = `${result}`;
  }
});

// Fonctionnalité du bouton HOLD : ...
const btnHold = document.querySelector("#btnHold");
btnHold.addEventListener("click", () => {
  console.log(`Click sur le bouton HOLD`);
});
