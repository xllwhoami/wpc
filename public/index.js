const $endTime = document.querySelector('#end_work')
const $startTime = document.querySelector('#start_work')
const $rate = document.querySelector('#rate')
const $form = document.querySelector('form')


$rate.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault()
        const rate = Number($rate.value)
        const startTime = new Date($startTime.value)
        const endTime = new Date($endTime.value)

        const diff = (endTime - startTime) / (1000)
        console.log(diff, rate)

        alert('Your salary: ' + (diff * (rate / 3600)).toFixed(2))
    }
});


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    // const rate = Number($rate.value)
    // const startTime = new Date($startTime.value)
    // const endTime = new Date($endTime.value)

    // const diff = (endTime - startTime) / (1000 * 60 * 60)

    // alert('Your salary: ' + (diff * rate).toFixed(2))
})