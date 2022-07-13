var adicionar = document.getElementById("btnAdicionar");
var items = document.getElementsByTagName("li");

adicionar.addEventListener("click", newTask);

function newTask() {
    let title = document.getElementById("txtTask").value;
    let item = document.createElement('li');
    let check = document.createElement('input');
    let span = document.createElement('span');

    check.setAttribute("type", "checkbox");
    check.setAttribute("value", items.length);
    check.addEventListener("change", handleTask);

    span.setAttribute("id", items.length);
    span.appendChild(document.createTextNode(title));
    
    item.appendChild(check);
    item.appendChild(span);

    document.querySelector('ul').appendChild(item);
    document.getElementById("txtTask").value = "";
}

function handleTask() {
    let span = document.getElementById(this.value);

    if(this.checked) {
        span.style.textDecoration = "line-through";
    } else {
        span.style.textDecoration = "none";
    }
}