let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let button = document.getElementById("button");
let draggedElement = null; // Create a variable for the dragged element
let list

button.addEventListener("click", function () {




    for ( list of lists) {
        list.addEventListener("dragstart", function (e) {
            draggedElement = e.target; // Store the dragged element
        });
    }
    
    // Add event listeners for the drop zones
    rightBox.addEventListener("dragover", function (e) {
        e.preventDefault();
    });
    
    rightBox.addEventListener("drop", function (e) {
        rightBox.appendChild(draggedElement);
        draggedElement = null; // Reset the dragged element
    });
    
    leftBox.addEventListener("dragover", function (e) {
        e.preventDefault();
    });
    
    leftBox.addEventListener("drop", function (e) {
        leftBox.appendChild(draggedElement);
        draggedElement = null; // Reset the dragged element
    });





});






