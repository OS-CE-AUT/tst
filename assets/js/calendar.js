document.onload = function() {
    console.log('calendar working')

const months = document.querySelectorAll("[data-type='month']");

    months[0].style.display = 'block';

const showMonth = (name) => {

    months.forEach(month => {month.style.display = 'none';});


    let month = document.querySelector(`[data-value=${name}]`)
    month.style.display = 'block'
}

}