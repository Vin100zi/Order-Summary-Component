const button = document.querySelector(".payment")
const root = document.querySelector('body')
console.log(button)

function iniciaPagamento(){
    root.classList.add("inicia-pagamento")
    button.querySelector('p').textContent = 'Paying...'
    setTimeout(function () {
        root.classList.remove("inicia-pagamento")
        root.classList.add("pagamento-concluido")
        button.querySelector('p').textContent = 'Done!'
    }, 3000)
}

button.addEventListener("click", iniciaPagamento)