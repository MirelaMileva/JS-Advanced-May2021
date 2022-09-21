function addItem() {
    let inputElement = document.querySelector('#newItemText').value;

    let liElement = document.createElement('li');
    liElement.appendChild(document.createTextNode(inputElement));

    let itemListElement = document.getElementById('items').appendChild(liElement);
    
    document.getElementById('newItemText').value = '';
}