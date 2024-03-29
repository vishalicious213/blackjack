let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1 // 1-13
    if (randomNumber > 10) {
        return 10 // J, Q, K
    } else if (randomNumber === 1) {
        return 11 // A
    } else {
        return randomNumber // 2-10
    }
}

function startGame() {
    isAlive = true // set isAlive to true when game starts
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    // looping through cards and rendering them
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackJack) { // only runs if the player is alive and does not have blackjack
        let card = getRandomCard() // generating random card value
        sum += card // add card to hand
        cards.push(card) // add card to cards array
        renderGame()
    }
}

function resetGame() {
    isAlive = false
    cards = []
    sum = 0
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
    messageEl.textContent = "Want to play a round?"
}