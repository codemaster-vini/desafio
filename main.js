const form = window.document.querySelector("form#formulario")
let erro = window.document.querySelector("p")
let n1 = window.document.querySelector("input#nA")


form.addEventListener("submit", enviar)
function enviar(e){
    let n1 = window.document.querySelector("input#nA")
    let n2 = window.document.querySelector("input#nB")
    n1 = Number(n1.value)
    n2 = Number(n2.value)

    e.preventDefault()

    if(n1 > n2){
        erro.style.background = 'red'
        erro.style.display = "block"
        erro.innerHTML = `O Campo B (<strong>${n2}</strong>) precisa ser maior que o Campo A (<strong>${n1}</strong>)`
        window.document.querySelector("input#nA").style.border = "1px solid red"
        window.document.querySelector("input#nB").style.border = "1px solid red"
    }else{
        window.document.querySelector("input#nA").value = ''
        window.document.querySelector("input#nB").value = ''
        window.document.querySelector("input#nA").style.border = "2px solid green"
        window.document.querySelector("input#nB").style.border = "2px solid green"
        erro.style.display = 'block'
        erro.innerHTML = 'Tudo certo!'
        erro.style.background = 'lightgreen'
    }
}
