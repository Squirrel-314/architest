//============================================================
// Welcome
//============================================================

function hideWelcome() {
   let welcome = document.querySelector(".welcome");
   welcome.style.opacity = "0";
   welcome.style.pointerEvents = "none";
   setTimeout(giveJob, waitTime);
}

//============================================================
// Assign Job
//============================================================

let employer = ['Flimsy Foundation Inc.', 'Collapse Co.', 'Slapdash L.L.C.', 'Rinkydink Mistakes Corp', 'Rickity Builds Ltd', 'Evil Engineering Co-Op'][Math.floor(Math.random() * 6)];
let budget = ['$10,000', '$8,000', '$12,000'][Math.floor(Math.random() * 3)];
let waitTime = [8000, 12000, 10000][Math.floor(Math.random() * 3)];

function acceptJob() {
   window.location.href = "HTML/tasks.html";
}

function denyJob() {
   document.querySelector(".waiting-room-job").innerHTML = "You have no job offers.";
   document.querySelector(".waiting-room-accept").style.display = "none";
   document.querySelector(".waiting-room-deny").style.display = "none";
   employer = ['Flimsy Foundation Inc.', 'Collapse Co.', 'Slapdash L.L.C.', 'Rinkydink Mistakes Corp', 'Rickity Builds Ltd', 'Evil Engineering Co-Op'][Math.floor(Math.random() * 6)];
   budget = ['$10,000', '$8,000', '$12,000'][Math.floor(Math.random() * 3)];
   waitTime = [10000, 12000, 14000][Math.floor(Math.random() * 3)];
   setTimeout(giveJob, waitTime);
}

function giveJob() {
   document.querySelector(".waiting-room-job").innerHTML = employer + " is offering to hire you for " + budget;
   document.querySelector(".waiting-room-accept").style.display = "inline-block";
   document.querySelector(".waiting-room-deny").style.display = "inline-block";
}
