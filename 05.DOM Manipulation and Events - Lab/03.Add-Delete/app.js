function addItem() {
    let textItemELement = document.getElementById('newItemText').value;
    let list = document.getElementById('items');

    if(textItemELement.length === 0) {
        return;
    }

    let listItem = document.createElement('li');
    listItem.textContent = textItemELement;

    let removeElement = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');

    removeElement.appendChild(linkText);
    removeElement.href = '#';
    removeElement.addEventListener('click', deleteItem);

    listItem.appendChild(removeElement);
    list.appendChild(listItem);

    function deleteItem() {
        listItem.remove();
    }

}