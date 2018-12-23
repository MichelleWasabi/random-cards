let suits,
    numbers,
    suitsBottom,
    i;

let card = {
  suits: ["&#9830", "&#9829", "&#9824", "&#9827"],
  suitsBottom: ["&#9830", "&#9829", "&#9824", "&#9827"],
  numbers: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
};

let styleSuits = document.querySelector(".suitColor");

function pullRandomNumber() {
	var number = Math.floor(Math.random() * (card.numbers.length));
	document.getElementById('randomNum').innerHTML = card.numbers[number];
}

function pullBothSuits(){
  let allSuits = Math.floor(Math.random() * (card.suits.length));

  document.getElementById('topSuit').innerHTML = card.suits[allSuits];
  document.getElementById('bottomSuit').innerHTML = card.suits[allSuits];
    if (card.suits[allSuits] === "&#9830" ||
      card.suits[allSuits] === "&#9829") {
      document.getElementById("cardDeck").classList.add("redSuit");
    } else {
      // (card.suits[allSuits] === "&#9827" ||
      // card.suits[allSuits] === "&#9824") {
      document.getElementById("cardDeck").classList.remove("redSuit");
    }
}

window.wholeCard = function() {
	pullRandomNumber();
	pullBothSuits();
};