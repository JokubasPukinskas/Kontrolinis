let inputTitle = document.getElementById("inputTitle")
let inputText = document.getElementById("inputText")
let taskTitle = document.getElementById("taskTitle")
let taskText = document.getElementById("taskText")
let btn = document.getElementById("btn")

btn.addEventListener("click", addTask);

function addTask() {
    if (inputTitle.value == "" || inputText.value == ""){
        alert("Fill in the missing fields")
    } else {
        inputTitle.val = taskTitle.value;
        inputTitle.value = ""
        inputText.value = taskText.value;
        inputText.value = ""
        document.getElementById("task").style.display = "inline-block";;
    }

} 