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

    // Function for crossing off an itme when it's double clicked
    function crossOffItem() {
        listItem.toggleClass('strike');
    }

    // Event listener for crossing off an item when it's double clicked
    listItem.on('dblclick', crossOffItem);

    // Function for deleting the item from the list when the X is clicked
    function deleteListItem() {
        listItem.addClass('delete');
    }

    // Add button for deleting an item from the list
    let deleteButton = $('<crossOutButton></crossOutButton>');
    deleteButton.append(document.createTextNode('X'));
    listItem.append(deleteButton);

    // Add event listener to call deleteListItem when the X is clicked
    deleteButton.on('click', deleteListItem);

    // Make the ordered list sortable by dragging and dropping the list items
    orderedList.sortable();

}