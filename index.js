let numH = 0
let numG = 0

const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score")

function addH1() {
     numH += 1
     homeScoreEl.textContent = numH
}

function addH2() {
     numH += 2
     homeScoreEl.textContent = numH
}

function addH3() {
     numH += 3
     homeScoreEl.textContent = numH
}

function addG1() {
     numG += 1
     guestScoreEl.textContent = numG
}

function addG2() {
     numG += 2
     guestScoreEl.textContent = numG
}

function addG3() {
     numG += 3
     guestScoreEl.textContent = numG
}

function reset() {
    numH = 0
    numG = 0
    guestScoreEl.textContent = 0
    homeScoreEl.textContent = 0
}