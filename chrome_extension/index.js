let myLeads = []
const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

// getting localstorage data and parsing string as localstorage only alows string
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))






// checking for null value in localstorage
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

function render(leads){
    let listItems = ""

    for (let i=0; i < leads.length; i++){
        listItems += ` <li>
                            <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
                       </li>
        `
    }
    ulEl.innerHTML = listItems
}

// we are listening the double click event
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

tabBtn.addEventListener("click", function(){

    // tabs is a array with a object that a key named url
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})