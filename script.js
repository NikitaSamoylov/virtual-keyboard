const textarea = document.querySelector('.textarea');
const buttons = document.querySelectorAll('.button');
const capsLock = document.querySelector('.capslock');
const shift = document.querySelector('.shift');

let isCapsLock = false;
capsLock.addEventListener('click', () => {
    if (!isCapsLock) {
        isCapsLock = true
        capsLock.style.color = 'orange'
    } else {
        isCapsLock = false
        capsLock.style.color = '#e1dede'
    };
});

let isShift = false;
shift.addEventListener('click', () => {
    if (!isShift) {
        isShift = true;
        shift.style.color = 'orange'
    } else {
        isShift = false
        shift.style.color = '#e1dede'
    }
})

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('backspace')) {
            textarea.textContent = textarea.textContent.slice(0, -1)
        }
        else if (button.classList.contains('space')) {
            textarea.textContent += ' '
        } 
        else if (button.classList.contains('symbol-btn')) {
            if (isCapsLock) {
                textarea.textContent += button.textContent.toUpperCase()
            }
            else if (isShift) {
                textarea.textContent += button.textContent.toUpperCase()
            }
            else {
                textarea.textContent += button.textContent
            }
        }
    });
});
