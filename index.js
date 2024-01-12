let rflEl = document.getElementById("rfl-el")
let rfgEl = document.getElementById("rfg-el")
let ipEl = document.getElementById("ip-el")
let cpEl = document.getElementById("cp-el")

let rfl = 0
let rfg = 0
let ip = 0
let cp = 0


function runForLoss() {
    rfl += 1
    rflEl.textContent = "Runs For Loss: " + rfl
}

function runForGain() {
    rfg += 1
    rfgEl.textContent = "Runs For Gain: " + rfg
}

function incompletePass() {
    ip += 1
    ipEl.textContent = "Incomplete Passes: " + ip
}

function completePass() {
    cp += 1
    cpEl.textContent = "Completed Passes: " + cp
}
