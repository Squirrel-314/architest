//============================================================
// Varibles
//============================================================

var money = 12000;

var resouces = {
   mud: 0,
   mudCost: 20,
   wood: 0,
   woodCost: 50,
   plastic: 0,
   plasticCost: 100,
   glass: 0,
   glassCost: 120,
   bricks: 0,
   brickCost: 150,
   sandstone: 0,
   sandstoneCost: 200,
   limestone: 0,
   limestoneCost: 200,
   iron: 0,
   ironCost: 500,
   marble: 0,
   marbleCost: 700,
   titanium: 0,
   titaniumCost: 5000,
}

var humanResouces = {
   worker: 0,
   workerPay: 50,
   overseer: 0,
   overseerPay: 80,
   professionalWorker: 0,
   professionalWorkerPay: 0,
   professionalOverseer: 0,
   professionalOverseerPay: 0,
   expertWorker: 0,
   expertWorkerPay: 0,
   expertOverseer: 0,
   expertOverseerPay: 0,
   robotWorker: 0,
   robotWorkerPay: 0,
   robotOverseer: 0,
   robotOverseerPay: 0,
}

var moneyAndResouces = window.setInterval(function() {
   document.getElementById("money").innerHTML = "$" + money;
}, 500)

//============================================================
// Buy Materials
//============================================================

function buyMud() {
   if (money >= resouces.mudCost){
      money -= resouces.mudCost;
      resouces.mud += 5;
      //document.getElementById("mud").innerHTML = 
   }
}
function buyWood() {
   if (money >= resouces.woodCost){
      money -= resouces.woodCost;
      resouces.wood += 5;
   }
}
function buyPlastic() {
   if (money >= resouces.plasticCost){
      money -= resouces.plasticCost;
      resouces.plastic += 5;
   }
}
function buyGlass() {
   if (money >= resouces.glassCost){
      money -= resouces.glassCost;
      resouces.glass += 5;
   }
}
function buyBricks() {
   if (money >= resouces.bricksCost){
      money -= resouces.bricksCost;
      resouces.bricks += 5;
   }
}
function buySandstone() {
   if (money >= resouces.sandstoneCost){
      money -= resouces.sandstoneCost;
      resouces.sandstone += 5;
   }
}
function buyLimestone() {
   if (money >= resouces.limestoneCost){
      money -= resouces.limestoneCost;
      resouces.limestone += 5;
   }
}
function buyIron() {
   if (money >= resouces.ironCost){
      money -= resouces.ironCost;
      resouces.iron += 5;
   }
}
function buyMarble() {
   if (money >= resouces.marbleCost){
      money -= resouces.marbleCost;
      resouces.marble += 5;
   }
}
function buyTitanium() {
   if (money >= resouces.titaniumCost){
      money -= resouces.titaniumCost;
      resouces.titanium += 5;
   }
}

//============================================================
// Hire Workers
//============================================================

function hireWorker() {
   if (money >= humanResouces.workerPay){
      money -= humanResouces.workerPay;
      humanResouces.worker += 1;
   }
}
function hireOverseer() {
   if (money >= humanResouces.overseerPay){
      money -= humanResouces.overseerPay;
      humanResouces.overseer += 1;
   }
}

//Add the rest of the worker types

//============================================================
// Save
//============================================================

var saveData = window.setInterval(function() {
   localStorage.setItem("money", JSON.stringify(money));
   localStorage.setItem("resouces", JSON.stringify(resouces));
   localStorage.setItem("humanResouces", JSON.stringify(humanResouces));
}, 500)

var save = {
   money: JSON.parse(localStorage.getItem("money")),
   resouces: JSON.parse(localStorage.getItem("resouces")),
   humanResouces: JSON.parse(localStorage.getItem("humanResouces")),
}

var saveMoney = save.money;
var saveResouces = save.resouces;
var saveHumanResouces = save.humanResouces;

if (saveMoney !== null) {
  money = saveMoney;
}
if (saveResouces !== null) {
  resouces = saveResouces;
}
if (saveHumanResouces !== null) {
  humanResouces = saveHumanResouces;
}
