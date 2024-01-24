const inputBox = document.getElementById("input-box");
const containerlist = document.getElementById("container-list");
const addButton = document.getElementById("add-button");

function addTask(){
    if(inputBox.value === ''){
        alert("Something must be written");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        containerlist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

containerlist.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", containerlist.innerHTML);
}
function viewTask(){
    containerlist.innerHTML = localStorage.getItem("data");
}
viewTask();
