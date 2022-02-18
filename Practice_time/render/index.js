const imgs = [
    "hip1.jpg",
    "hip2.jpg",
    "hip3.jpg"
]

function render(){
    for (let i=0; i < imgs.length; i++){
        document.getElementById("container").innerHTML += `<img class="team-img" src="${imgs[i]}">`
    }
}
render()