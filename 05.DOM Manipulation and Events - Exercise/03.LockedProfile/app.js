function lockedProfile() {
    let buttons = document.querySelectorAll('.profile button');

    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener('click', () => {
            let radioButton = document.querySelector(`input[name="user${index + 1}Locked"]:checked`);

            if (radioButton.value === 'unlock') {
                let hiddenFieldElement = document.getElementById(`user${index + 1}HiddenFields`);

                hiddenFieldElement.style.display = hiddenFieldElement.style.display === 'block'
                    ? 'none'
                    : 'block';

                    buttons[index].textContent = buttons[index].textContent === 'Show more'
                    ? 'Hide it'
                    : 'Show more';
            }
        })

    }
}