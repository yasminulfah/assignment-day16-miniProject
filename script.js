//Login Pop-up

document.addEventListener('DOMContentLoaded', () => {
    const popUp = document.getElementById('loginPopup');
    const button = document.getElementById('loginButton');
    const closeButton = document.getElementsByClassName('close-button')[0];

    button.addEventListener('click', () => {
        popUp.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        popUp.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popUp) {
            popUp.style.display = 'none';
        }
    });

    const form = document.getElementById('loginForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Login successful!');
    });
});