

const input = document.querySelector('#validation-input');

input.addEventListener('input', checkInputLength)

function checkInputLength(event) {
    const valueLength = this.dataset.length;
    if (event.currentTarget.value.length === Number(valueLength)) {
        input.classList = 'valid'
        return
    } if (event.currentTarget.value.length > 0 || event.currentTarget.value.length ===!Number(valueLength)) {
        input.classList = 'invalid'
        return
    } input.classList.remove('invalid')
}