
    console.log('calendar working')

const months = document.querySelectorAll("[data-type='month']");
const buttons = document.querySelectorAll("[data-type='monthButton']")
    
console.log(months)
console.log(buttons)

months.forEach(month => {month.style.display = 'none';});
months[0].style.display = 'block';

const showMonth = (name) => {

    months.forEach(month => {month.style.display = 'none';});


    let month = document.querySelector(`[data-value=${name}]`)
    month.style.display = 'block'
}

