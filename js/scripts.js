// Function to add a new item to the task list
function newItem() {
    // Select the content of the input field and store it in the inputValue variable
    let inputValue = $('#input').val();

    // Create a list item element
    let listItem = $('<li></li>');

    // Store the ordered list element in a variable
    let orderedList = $('#list');

    // Check to make sure the input isn't empty
    if (inputValue === '') {
        alert('Please input something!');
    } else {
        // Append the inputValue to listItem
        listItem.append(inputValue);
        // Append the listItem to the orderedList
        orderedList.append(listItem);
    }

    // Event listener for crossing off an item when it's double clicked
    listItem.on('dblclick', function() {
        listItem.toggleClass('strike');
    });
}