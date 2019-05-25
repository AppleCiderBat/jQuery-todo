function createList() {
    var writtenItem = $("#userInput").val();
    var childDiv = factoryFunction(writtenItem);
    var itemsDiv = document.querySelector("#toDoItems");
    itemsDiv.appendChild(childDiv);
    deleteListener(itemsDiv, childDiv);
}
$("#addToList").click(createList);

function factoryFunction(val) {
    var newDiv = document.createElement("div");
    newDiv.appendChild(document.createTextNode(val));
    var checkIt = document.createElement("input");
    checkIt.type = "checkbox";
    newDiv.appendChild(checkIt);
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    newDiv.appendChild(deleteButton);
    return newDiv;
}

function deleteListener(itemsDiv, childDiv) {
    var myButton = childDiv.querySelector("button");
    myButton.addEventListener("click", event => {
        itemsDiv.removeChild(childDiv);
    })
}