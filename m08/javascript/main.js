var newEl = document.createElement('li');
var newText = document.createTextNode('quinoa');
newEl.appendChild(newText);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newEl);

function addItem() {
    var newItem = document.getElementById('newItem').value;
    console.log('Add Item function called');
    console.log('New Item:', newItem);

    if (newItem.trim() !== "") { // Check if the input is not empty
        var newEl = document.createElement('li');
        console.log('New Element Created');

        var newText = document.createTextNode(newItem);

        newEl.appendChild(newText);

        var position = document.getElementById('todo');
        console.log('Position Found:', position);

        position.appendChild(newEl);
        console.log('New Element Added to List');
        
        document.getElementById('newItem').value = '';
    } else {
        console.log("Input is empty. No item added.");
    }
}
