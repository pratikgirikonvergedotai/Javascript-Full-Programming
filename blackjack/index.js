let cards = []
let sum = 0
let BlackJack = false
let Alive = false
let message = ""

let player = {
    name : "per",
    chips : 200
}

document.getElementById("player-el").textContent = player.name + ": $" + player.chips

function getRandomCard(){
    // we want a range of 1 -> 13
    // math floor removes decimal
    // math random ranges from 0.000 -> 0.999
    // 0.999 * 13 will give numbers range in 0.000 -> 12.999
    //after using floor 0.000 -> 12.999 becomes 0 -> 12
    // now for getting range of 1 - 13 after using floor add 1 
    let card = Math.floor(Math.random()*13) + 1
    if (card === 1){
        return 11
    }
    else if (card > 10){
        return 10
    }
    else{
        return card
    }
}

function startGame(){
    Alive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    //document.querySelector("#sum-el") # for id 
    //document.querySelector(".sum-el") . for class 
    //document.querySelector("body") we can pass html element too 
    document.getElementById("sum-el").textContent = "Sum : " + sum
    document.getElementById("cards-el").textContent = "Cards : " 
    for (let i=0; i < cards.length; i++){
        document.getElementById("cards-el").textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        BlackJack = true
    } else {
        message = "You're out of the game!"
        Alive = false
    }

    document.getElementById("message-el").textContent = message
}

function newCard(){
    if (Alive === true && BlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}