let employer = ['Flimsy Constructs Inc.', 'Collapse Co.', 'Slapdash L.L.C.', 'Rinkydink Mistakes Corp', 'Rickity Builds Ltd'][Math.floor(Math.random() * 5)];
let budget = ['$10,000', '$8,000'][Math.floor(Math.random() * 2)];
let waitTime = [8000, 12000][Math.floor(Math.random() * 2)];

function giveJob() {
   console.log(employer,"is hiring you for", budget);
}

function findJob() {
   setTimeout(giveJob, waitTime)
}

window.onload = findJob()
