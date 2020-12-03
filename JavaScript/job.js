let employer = ['Flimsy Constructs Inc.', 'Collapse Co.', 'Slapdash L.L.C.', 'Rinkydink Mistakes Corp', 'Rickity Builds Ltd'][Math.floor(Math.random() * 5)];
let budget = ['$10,000', '$8,000'][Math.floor(Math.random() * 2)];
let waitTime = [8000, 12000, 10000][Math.floor(Math.random() * 2)];

function accept() {
   window.location.href = "../HTML/job-info.html";
}

function deny() {
   document.getElementById("job").innerHTML = "You have no job offers.";
   setTimeout(giveJob, waitTime);
   document.getElementById("yes").style.display = "none";
   document.getElementById("no").style.display = "none";
   employer = ['Flimsy Constructs Inc.', 'Collapse Co.', 'Slapdash L.L.C.', 'Rinkydink Mistakes Corp', 'Rickity Builds Ltd'][Math.floor(Math.random() * 5)];
   budget = ['$10,000', '$8,000'][Math.floor(Math.random() * 2)];
}

function giveJob() {
   document.getElementById("job").innerHTML = employer + " is hiring you for " + budget;
   document.getElementById("yes").style.display = "inline-block";
   document.getElementById("no").style.display = "inline-block";
}

function findJob() {
   setTimeout(giveJob, waitTime);
}

window.onload = findJob()
