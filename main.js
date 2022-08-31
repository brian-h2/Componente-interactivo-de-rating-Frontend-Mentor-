let contenedorNumeros = document.querySelector('.rating-state__number-container')
let formSubmit = document.querySelector('.rating-state__button')
let ratingState = document.querySelector('.rating-state')
let thankYou = document.querySelector('.thankyou-state')

contenedorNumeros.addEventListener('click', event=> {
    let numeroSeleccionado = event.target.innerText
    let resultado = document.querySelector('.thankyou-state__result--number')
    resultado.innerHTML= `${numeroSeleccionado}`
    
    if(numeroSeleccionado >0 || numeroSeleccionado <=5 ) {
        formSubmit.addEventListener('click', () =>{
            ratingState.style.display = 'none'
            thankYou.style.display = 'flex'
        }) 
    }else{
        alert("Can you select a number please")
    }
} )





