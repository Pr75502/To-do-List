document.addEventListener("DOMContentLoaded", () => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.forEach(task=> addTask(task));
})

let input_box = document.querySelector("#input");
let form = document.querySelector("form");
let ul = document.querySelector("ul");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input_box.value.trim() === "") return;

   addTask(input_box.value)
    setToLocalStorage(input_box.value)
    input_box.value = ""; 
   
});

function setToLocalStorage(task) {
  let   tasks = JSON.parse(localStorage.getItem("tasks"))|| []
    tasks.push(task)
    localStorage.setItem("tasks",JSON.stringify(tasks))
}
function removeFromLocalStorage(task) {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks = tasks.filter((t) => t !== task)
    localStorage.setItem("tasks".JSON.stringify(tasks))
}
function addTask(taskText) {

    let li = document.createElement("li");
    let btn = document.createElement("button");

    btn.innerText = "Remove";
    btn.addEventListener("click", () => {
        li.remove();
        removeFromLocalStorage(taskText)
    });

    li.innerText = input_box.value + " ";
    li.appendChild(btn);
    ul.appendChild(li);
 
}