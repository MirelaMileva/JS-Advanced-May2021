function focused() {
    let divElements = document.querySelectorAll('div div');

    let inputElement = document.querySelector('div input[type="text"]');

    for (const currElement of divElements) {
        inputElement.addEventListener('focus', (e) => {
            e.target.parentNode.style.background = '#234465';
            e.target.parentNode.classList.add('focused');
        });
    
        inputElement.addEventListener('blur', (e) => {
            e.target.parentNode.style.background = '';
            e.target.parentNode.classList.remove('focused');
        })
    }
}