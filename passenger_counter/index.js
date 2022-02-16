let count = 0

function increment(){
    count += 1
    //document.getElementById("count-el").innerText = count
    document.getElementById("count-el").textContent = count
}

function save(){ 
    let saved_count = count + " - "
    //document.getElementById("save-el").innerText += " " + saved_count
    //innerText can be computationally expensive than textContent
    document.getElementById("save-el").textContent += saved_count
    document.getElementById("count-el").textContent = 0
    count = 0
}
