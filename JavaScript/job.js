//============================================================
// Assign Job
//============================================================

let myArray = ['Flimsy Foundation Inc.', 'Collapse Co.', 'Slapdash L.L.C.', 'Rinkydink Mistakes Corp', 'Rickity Builds Ltd', 'Evil Engineering Co-Op']//[Math.floor(Math.random() * 6)];

let whichEmployer = myArray[Math.floor(Math.random() * myArray.length)];
let whatBudget = ['$10,000', '$8,000', '$12,000'][Math.floor(Math.random() * 3)];
let waitTime = [8000, 12000, 10000][Math.floor(Math.random() * 3)];
//console.log(whichEmployer);
var employer = whichEmployer;
let budget = whatBudget;

function accept() {
   window.location.href = "../HTML/tasks.html";
}

function deny() {
   document.getElementById("job").innerHTML = "You have no job offers.";
   setTimeout(giveJob, waitTime);
   document.getElementById("yes").style.display = "none";
   document.getElementById("no").style.display = "none";
   employer = ['Flimsy Foundation Inc.', 'Collapse Co.', 'Slapdash L.L.C.', 'Rinkydink Mistakes Corp', 'Rickity Builds Ltd', 'Evil Engineering Co-Op'][Math.floor(Math.random() * 6)];
   budget = ['$10,000', '$8,000', '$12,000'][Math.floor(Math.random() * 3)];
   waitTime = [10000, 12000, 14000][Math.floor(Math.random() * 3)];
}

function giveJob() {
   document.getElementById("job").innerHTML = employer + " is hiring you for " + budget;
   document.getElementById("yes").style.display = "inline-block";
   document.getElementById("no").style.display = "inline-block";
   //localStorage.setItem("employerSave", JSON.stringify(employer));
   //localStorage.setItem("budget", JSON.stringify(budget));
}

function findJob() {
   setTimeout(giveJob, waitTime);
}

window.onload = findJob();


localStorage.setItem("employerSave", JSON.stringify(whichEmployer));
yeah = JSON.parse(localStorage.getItem("employerSave"));

console.log(yeah);
