// This file contains the JavaScript code for the website, handling interactivity and dynamic content.

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        greetingElement.textContent = 'Welcome to Acme Organization!';
    }

    const toggleButton = document.getElementById('toggle-info');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const infoElement = document.getElementById('info');
            if (infoElement) {
                infoElement.classList.toggle('hidden');
            }
        });
    }
});