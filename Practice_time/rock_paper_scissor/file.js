let hands = ["rock", "paper", "scissor"]


function random(){
    let i = Math.floor(Math.random()*3)
    return hands[i]
}

console.log(random())