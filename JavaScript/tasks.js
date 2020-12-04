//============================================================
// Job Info
//============================================================

let budget = 12000;

function jobInfoSetup() {
   document.getElementById("employer").innerHTML = "An Employer";
   document.getElementById("budget").innerHTML = "$" + budget;
}

window.onload = jobInfoSetup();

function shop() {
   window.location.href = "../HTML/store.html";
}
