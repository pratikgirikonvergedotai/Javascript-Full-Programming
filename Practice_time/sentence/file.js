function sentence(desc, arry){
    let sentence = `The ${arry.length} ${desc} are `
    arry.forEach(e => {
        sentence += " " + e
    })
    console.log(sentence)
}

sentence("largest countries", ["China", "India", "USA"])