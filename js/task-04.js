
const counterValue = document.querySelector('#value')
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let newValue = 0

const increment = () => (counterValue.textContent = newValue += 1)

const decrement = () => (counterValue.textContent = newValue -= 1)

incrementBtn.addEventListener('click', increment)
decrementBtn.addEventListener('click', decrement)