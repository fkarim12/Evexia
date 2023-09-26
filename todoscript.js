// Adds user inputted item into to-do list
// Creates functional complete and delete buttons
function addItem() {
    var taskText = document.getElementById("item").value;
    if (taskText.trim() === "") {
        return;
    }

    var itemList = document.getElementById("item-list");
    var newItem = document.createElement("li");
    newItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="completeItem(this)">Complete</button>
        <button class="btn btn-secondary float-right" onclick="deleteItem(this)">Delete</button> 
    `;

    itemList.appendChild(newItem);
    document.getElementById("item").value = "";
}

// Crosses out completed item
function completeItem(button) {
    var taskItem = button.parentElement;
    taskItem.classList.toggle("completed");
}

// Deletes item and removes from list
function deleteItem(button) {
    var taskItem = button.parentElement;
    taskItem.remove();
}