let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

fruit.forEach(f => {
    if (f === "🍎"){
        appleShelf.textContent += "🍎" 
    }
    else{
        orangeShelf.textContent += "🍊"
    }
})