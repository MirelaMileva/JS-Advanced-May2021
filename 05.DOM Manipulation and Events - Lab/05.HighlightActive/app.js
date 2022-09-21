function focused() {
    let divElement = document.getElementsByTagName('div')[0];

    console.log(divElement);

    divElement.onfocus = function() {
        divElement.classList.add('focused');
    }

    divElement.onblur = function() {
        divElement.classList.remove('focused');
    }
}