// scripts.js
// Example script to show alert when a button is clicked

document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('This is a placeholder action. Implement booking functionality here.');
        });
    });
});
