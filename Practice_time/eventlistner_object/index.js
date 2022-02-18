let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

let button = document.getElementById("button-btn")

button.addEventListener("click", () => {
    console.log(data[0].score)
})