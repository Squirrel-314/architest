//============================================================
// Job Info
//============================================================

let budget = 12000;

function jobInfoSetup() {
   document.getElementById("store").style.display = "none";
   document.getElementById("employer").innerHTML = "An Employer";
   document.getElementById("budget").innerHTML = "$" + budget;
   document.getElementById("cashOnHand").innerHTML = "$"+ JSON.parse(localStorage.getItem("money"));
}

window.onload = jobInfoSetup();

function shop() {
   document.getElementById("tasks").style.display = "none";
   document.getElementById("store").style.display = "block";
   //window.location.href = "../HTML/store.html";
}
