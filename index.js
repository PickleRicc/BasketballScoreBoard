let homescore = document.getElementById("home-score-text")
let guestscore = document.getElementById("guest-score-text")

let homeCount = 0
let guestCount = 0


function homeScoreOne() {
   homeCount += 1 
   homescore.innerText = homeCount
   console.log("score added")
}

function homeScoreTwo() {
  homeCount += 2 
  homescore.innerText = homeCount
  console.log("score added")
}

function homeScoreThree() {
  homeCount += 3 
  homescore.innerText = homeCount
  console.log("score added")
}



function guestScoreOne() {
  guestCount += 1 
  guestscore.innerText = guestCount
  console.log("score added")
}

function guestScoreTwo() {
  guestCount += 2 
  guestscore.innerText = guestCount
  console.log("score added")
}

function guestScoreThree() {
  guestCount += 3 
  guestscore.innerText = guestCount
  console.log("score added")
}

function newGame() {
  homeCount = 0
  guestCount = 0
  homescore.innerText = homeCount
  guestscore.innerText = guestCount
}