const textarea = document.querySelector('.textarea');
const buttons = document.querySelectorAll('.button');
const capsLock = document.querySelector('.capslock');
const shifts = document.querySelectorAll('.shift');
const del = document.querySelector('.del');


// let isCapsLock = false;
// capsLock.addEventListener('click', () => {
//     if (!isCapsLock) {
//         isCapsLock = true
//         capsLock.style.color = 'orange'
//     } else {
//         isCapsLock = false
//         capsLock.style.color = '#e1dede'
//     };
// });

// const changeBtnsValue = () => {
//     buttons.forEach((button) => {
//         if (button.classList.contains('tilda')) {
//             if (isShift) {
//                 button.textContent = '~'
//             } else {
//                 button.textContent = '`'
//             }
//         }
//         else if (button.classList.contains('one')) {
//             if (isShift) {
//                 button.textContent = '!'
//             } else {
//                 button.textContent = '1'
//             }
//         }
//         else if (button.classList.contains('two')) {
//             if (isShift) {
//                 button.textContent = '@'
//             } else {
//                 button.textContent = '2'
//             }
//         }
//         else if (button.classList.contains('three')) {
//             if (isShift) {
//                 button.textContent = '#'
//             } else {
//                 button.textContent = '3'
//             }
//         }
//         else if (button.classList.contains('four')) {
//             if (isShift) {
//                 button.textContent = '$'
//             } else {
//                 button.textContent = '4'
//             }
//         }
//         else if (button.classList.contains('five')) {
//             if (isShift) {
//                 button.textContent = '%'
//             } else {
//                 button.textContent = '5'
//             }
//         }
//         else if (button.classList.contains('six')) {
//             if (isShift) {
//                 button.textContent = '^'
//             } else {
//                 button.textContent = '6'
//             }
//         }
//         else if (button.classList.contains('seven')) {
//             if (isShift) {
//                 button.textContent = '&'
//             } else {
//                 button.textContent = '7'
//             }
//         }
//         else if (button.classList.contains('eight')) {
//             if (isShift) {
//                 button.textContent = '*'
//             } else {
//                 button.textContent = '8'
//             }
//         }
//         else if (button.classList.contains('nine')) {
//             if (isShift) {
//                 button.textContent = '('
//             } else {
//                 button.textContent = '9'
//             }
//         }
//         else if (button.classList.contains('zero')) {
//             if (isShift) {
//                 button.textContent = ')'
//             } else {
//                 button.textContent = '0'
//             }
//         }
//         else if (button.classList.contains('minus')) {
//             if (isShift) {
//                 button.textContent = '_'
//             } else {
//                 button.textContent = '-'
//             }
//         }
//         else if (button.classList.contains('equals')) {
//             if (isShift) {
//                 button.textContent = '+'
//             } else {
//                 button.textContent = '='
//             }
//         }
//         else if (button.classList.contains('open-bracket')) {
//             if (isShift) {
//                 button.textContent = '{'
//             } else {
//                 button.textContent = '['
//             }
//         }
//         else if (button.classList.contains('close-bracket')) {
//             if (isShift) {
//                 button.textContent = '}'
//             } else {
//                 button.textContent = ']'
//             }
//         }
//         else if (button.classList.contains('reverse-slash')) {
//             if (isShift) {
//                 button.textContent = '|'
//             } else {
//                 button.textContent = '\\'
//             }
//         }
//         else if (button.classList.contains('semicolon')) {
//             if (isShift) {
//                 button.textContent = ':'
//             } else {
//                 button.textContent = ';'
//             }
//         }
//         else if (button.classList.contains('apostrof')) {
//             if (isShift) {
//                 button.textContent = '"'
//             } else {
//                 button.textContent = '\''
//             }
//         }
//         else if (button.classList.contains('comma')) {
//             if (isShift) {
//                 button.textContent = '<'
//             } else {
//                 button.textContent = ','
//             }
//         }
//         else if (button.classList.contains('point')) {
//             if (isShift) {
//                 button.textContent = '>'
//             } else {
//                 button.textContent = '.'
//             }
//         }
//         else if (button.classList.contains('slash')) {
//             if (isShift) {
//                 button.textContent = '?'
//             } else {
//                 button.textContent = '/'
//             }
//         }
//     })
// }

// let isShift = false;
// shifts.forEach((shift) => {
//     shift.addEventListener('click', () => {
//         if (!isShift) {
//             isShift = true;
//             shift.style.color = 'orange';
//             changeBtnsValue();
//         } else {
//             isShift = false;
//             shift.style.color = '#e1dede';
//             changeBtnsValue();
//         };
//     });
// });



// buttons.forEach((button) => {
//     button.addEventListener('click', () => {

//         if (button.classList.contains('backspace')) {
//             // textarea.textContent = textarea.textContent.slice(0, -1)
//             textarea.addEventListener('input', e => {
//             console.log('Caret at: ', e.target.selectionStart)
//             textarea.textContent = textarea.textContent.slice(0, e.target.selectionStart)
//             })
//         }

//         else if (button.classList.contains('space')) {
//             textarea.textContent += ' '
//         } 
//         else if (button.classList.contains('symbol-btn')) {

//                 if (isCapsLock) {
//                     textarea.textContent += button.textContent.toUpperCase()
//                 }
//                 else if (isShift) {
//                     textarea.textContent += button.textContent.toUpperCase()
//                 }
//                 else {
//                     textarea.innerHTML += button.textContent
//                     textarea.selectionStart = textarea.value.length
//                     textarea.focus()
//                       textarea.addEventListener('input', e => {
//                     console.log('Caret at: ', e.target.selectionStart)
//                     // textarea.textContent = textarea.textContent.slice(0, e.target.selectionStart)
//             })
//                 }
//         }
//     });
// });



const arr = [];
let cursor;
textarea.addEventListener('click', (e) => {
    cursor = e.target.selectionStart
})

document.addEventListener('keydown', (e) => {
    textarea.blur()
    buttons.forEach(el => {
        el.classList.remove('active')

        if (e.key == el.textContent) {
            el.classList.add('active')
            if (cursor && el.textContent != 'Backspace') {
                arr.splice(cursor, 0, el.textContent)
                cursor++
            }
            else if (cursor && el.textContent == 'Backspace') {
                cursor--
                arr.splice(cursor, 1)
            }
            else if (!cursor && el.textContent != 'Backspace') {
                arr.push(el.textContent)
            }
            else if (!cursor && el.textContent == 'Backspace') {
                cursor = arr.length
                cursor--
                arr.splice(cursor, 1)
            }
            // else if (el.textContent == 'Delete') {
            //     arr.splice(cursor, 1)
            //     cursor++
            // }
            textarea.textContent = arr.join('')
        }
    })
})


buttons.forEach((el) => {
    el.addEventListener('click', (e) => {
        buttons.forEach(elem => {
            elem.classList.remove('active')
        })
        e.target.classList.add('active')

        console.log(arr)

        if (cursor && e.target.textContent != 'Backspace') {
            arr.splice(cursor, 0, e.target.textContent)
            cursor++
        }
        else if (cursor && e.target.textContent == 'Backspace') {
            cursor--
            arr.splice(cursor, 1)
        }
        else if (!cursor && e.target.textContent != 'Backspace') {
            arr.push(e.target.textContent)
        }
        else if (!cursor && e.target.textContent == 'Backspace') {
            cursor = arr.length
            cursor--
            arr.splice(cursor, 1)
        }
        textarea.textContent = arr.join('')
    })
})


document.addEventListener('keydown', (e) => {
    console.log(e)
})