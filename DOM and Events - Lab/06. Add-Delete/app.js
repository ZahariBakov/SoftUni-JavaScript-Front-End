function addItem() {
    // Create 'li' element:
    const ulContainer = document.getElementById('items');
    const input = document.getElementById('newItemText');
    const newLi = document.createElement('li');

    // Create 'Delete' button:
    newAnchor = document.createElement('a');
    newAnchor.setAttribute('href',  '#');
    newAnchor.textContent = '[Delete]';

    // Add 'li' element:
    newLi.textContent = input.value;
    newLi.appendChild(newAnchor);
    ulContainer.appendChild(newLi);
    input.value = '';

    // Add click event:
    newAnchor.addEventListener('click', deleteHandler);

    function deleteHandler(e) {
        const liItem = e.currentTarget.parentElement;
        liItem.remove();
    }
}