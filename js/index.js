const $endTime = document.querySelector('#end-time')
const $startTime = document.querySelector('#start-time')
const $rate = document.querySelector('#rate')
const $form = document.querySelector('form')

$form.addEventListener('submit', (event) => {
    event.preventDefault()
    const rate = Number($rate.value)
    const startTime = new Date($startTime.value)
    const endTime = new Date($endTime.value)
    
    const diff = (endTime - startTime) / (1000 * 60 * 60)
    
    alert('Your salary: ' + (diff*rate).toFixed(2))
})
