function task1() {
  const getNumberId = document.getElementById("random-number").innerHTML;
  return getNumberId;
}

function task1_1() {
  const getNumberClass = document.getElementById(
    "random-number-class"
  ).innerHTML;
  return getNumberClass;
}

function task2() {
  const changeELement = (document.getElementById("task-2").innerHTML = 100);
  return changeELement;
}

function task3() {
  const buttonChange = document.getElementById("task-3-button");
  buttonChange.addEventListener("click", function () {
    document.getElementById("task-3").innerHTML = 100;
  });
}

function task3_1() {
  const buttonHide = document.getElementById("task-3-1-button");
  buttonHide.addEventListener("click", function () {
    document.getElementById("task-3-1").innerHTML = "";
    //hide.style.display = "none";
  });
}

//console.log("Number inside random-number element is: ", task1());
//console.log("Number inside random-number-class element is: ", task1_1());
//task2();
//task3();
task3_1();

if (typeof module !== "undefined") {
  module.exports = { task1, task1_1, task2, task3, task3_1 };
}
