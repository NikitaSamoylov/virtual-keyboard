const textarea = document.querySelector('.textarea');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('backspace')) {
            textarea.textContent = textarea.textContent.slice(0, -1)
        }
        else if (button.classList.contains('space')) {
            textarea.textContent += ' '
        } 
        else if (button.classList.contains('symbol-btn')) {
            textarea.textContent += button.textContent
        }
    });
});