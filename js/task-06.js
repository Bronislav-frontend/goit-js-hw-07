

const input = document.querySelector('#validation-input');

input.addEventListener('input', checkInputLength)

function checkInputLength(event) {
    const valueLength = this.dataset.length;
    if (event.currentTarget.value.length === Number(valueLength)) {
        input.classList = 'valid'
    } else {
        input.classList = 'invalid'
    } 
}