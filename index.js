let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

homeEl.innerText = 0
guestEl.textContent = 0

homeCount = 0
guestCount = 0


function homePlusOne() {
    homeCount += 1
    homeEl.innerText = homeCount
}
function homePlusTwo() {
    homeCount += 2
    homeEl.innerText = homeCount
}
function homePlusThree() {
    homeCount += 3
    homeEl.innerText = homeCount
}

function guestPlusOne() {
    guestCount += 1
    guestEl.innerText = guestCount
}
function guestPlusTwo() {
    guestCount += 2
    guestEl.innerText = guestCount
}function guestPlusThree() {
    guestCount += 3
    guestEl.innerText = guestCount
}

function reset() {
    homeCount = 0
    guestCount = 0
    
    homeEl.innerText = 0
    guestEl.textContent = 0
}














