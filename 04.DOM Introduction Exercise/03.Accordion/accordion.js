function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    
    let divElement = document.getElementById('extra');

    if(buttonElement.textContent == "More") {
        divElement.style.display = "block";
        buttonElement.textContent = "Less";
    } else if(buttonElement.textContent == "Less") {
        divElement.style.display = "none";
        buttonElement.textContent = "More";
    }
}