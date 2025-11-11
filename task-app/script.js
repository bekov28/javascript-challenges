const inputBox = document.querySelector("input");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something.");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  storeTask();
}

//Deleting the task

listContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked"); //toggle the class
    storeTask();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove(); //remove li element
    storeTask();
  }
});

//store the task data
function storeTask() {
  localStorage.setItem("data", listContainer.innerHTML);
}
//get the task data
function getTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
getTask();
