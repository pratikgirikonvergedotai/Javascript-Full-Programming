let Leads = []
const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

// getting localstorage data and parsing string as localstorage only alows string
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("Leads"))






// checking for null value in localstorage
if (leadsFromLocalStorage){
    Leads = leadsFromLocalStorage
    render(Leads)
}


inputBtn.addEventListener("click", function() {
    Leads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(Leads))
    render(Leads)
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
    Leads = []
    render(Leads)
})

tabBtn.addEventListener("click", function(){

    // tabs is a array with a object that a key named url
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        Leads.push(tabs[0].url)
        localStorage.setItem("Leads", JSON.stringify(Leads))
        render(Leads)
    })
    
    Leads.push(tabs[0].url)
    localStorage.setItem("Leads", JSON.stringify(Leads))
    render(Leads)
})