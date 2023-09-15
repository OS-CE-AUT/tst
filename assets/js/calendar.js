
    console.log('calendar working')

const months = document.querySelectorAll("[data-type='month']");
const buttons = document.querySelectorAll("[data-type='monthButton']")
    
console.log(months)
console.log(buttons)

months.forEach(month => {month.style.display = 'none';});
months[0].style.display = 'block';

const showMonth = (name) => {
    console.log('button clicked month:', name)

    months.forEach( month => {if (month.dataset.month == name) {month.style.display = 'block'} else {month.style.display='none'}})
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        showMonth(button.dataset.value)
    })
})