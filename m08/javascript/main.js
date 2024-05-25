// Create a new element and store it in a variable.
var newEl = document.createElement('li');

// Create a text node and store it in a variable.
var newText = document.createTextNode('quinoa');

// Attach the new text node to the new element.
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
position.appendChild(newEl);


function addItem() {
    // Get the value from the input field
    var newItem = document.getElementById('newItem').value;

    if (newItem.trim() !== "") { // Check if the input is not empty
        // Create a new element and store it in a variable.
        var newEl = document.createElement('li');

        // Create a text node and store it in a variable.
        var newText = document.createTextNode(newItem);

        // Attach the new text node to the new element.
        newEl.appendChild(newText);

        // Find the position where the new element should be added.
        var position = document.getElementById('todo');

        // Insert the new element into its position.
        position.appendChild(newEl);

        // Clear the input field
        document.getElementById('newItem').value = '';
    } else {
        console.log("Input is empty. No item added.");
    }
}
