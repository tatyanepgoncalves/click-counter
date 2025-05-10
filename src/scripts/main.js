const btnPrimary = document.getElementById("btnPrimary")
const btnSecundary = document.getElementById("btnSecundary")
const result = document.getElementById("result")
const returnInfo = document.getElementById("returnInfo")

let contador = 0

function updateText() {
  result.textContent = contador
  returnInfo.textContent = `Você já clicou ${contador} vezes. Está treinando para ser gamer?`

  if (contador === 10) {
    returnInfo.textContent = "Você já atingiu o limite máximo de cliques!"
    btnPrimary.classList.add("disabled")
    btnSecundary.classList.remove("disabled")
  } else if (contador === 0){
    btnPrimary.classList.remove("disabled")
    btnSecundary.classList.add("disabled")
  } else {
    btnPrimary.classList.remove("disabled")
    btnSecundary.classList.remove("disabled")
  }
}

function resetText() {
  result.textContent = 0
  returnInfo.textContent = "Contagem zerada. Começando do zero!"
}

updateText()


btnPrimary.addEventListener("click", () => {
  btnPrimary.classList.add("active")
  contador++

 updateText()
 setTimeout(() => btnPrimary.classList.remove("active"), 150);
})


btnSecundary.addEventListener("click", () => {
  btnSecundary.classList.add("active")

  contador = 0
  resetText()

  if (contador === 0) {
    resetText()
    btnPrimary.classList.remove("disabled")
    btnSecundary.classList.add("disabled")
  } else if (contador >= 1) {
    btnPrimary.classList.remove("disabled")
    btnSecundary.classList.add("disabled")
  }

  setTimeout(() => btnSecundary.classList.remove("active"), 150)
})