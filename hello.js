let input_box = document.querySelector("#input");
let form = document.querySelector("form");
let ul = document.querySelector("ul");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input_box.value.trim() === "") return;

    let li = document.createElement("li");
    let btn = document.createElement("button");

    btn.innerText = "Remove";
    btn.addEventListener("click", () => {
        li.remove();
    });

    li.innerText = input_box.value + " ";
    li.appendChild(btn);
    ul.appendChild(li);

    input_box.value = ""; 
});