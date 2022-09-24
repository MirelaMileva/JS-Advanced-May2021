function validate() {
    let emailInput = document.getElementById('email');

    let bodyElement = document.getElementsByTagName('body');

    emailInput.addEventListener('keypress', (e) => {
        let text = emailInput.value + '${e.key}';

        let createEmailError = document.createElement('p');
        bodyElement.appendChild(createEmailError);

        let emailCheck = (text, createEmailError) => {
            let condition = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
            createEmailError.style.color = "red";
        
            if (!text.match(condition)) {
                createEmailError.style.display = "block";
                createEmailError.innerText = "Invalid Email Address";
                return;
            }
        
            createEmailError.style.display = "none";
            return;
        }
    })

   
}