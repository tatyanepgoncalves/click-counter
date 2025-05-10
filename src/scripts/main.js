const btnPrimary = document.getElementById("btnPrimary")
const btnSecundary = document.getElementById("btnSecundary")
const result = document.getElementById("result")
const returnInfo = document.getElementById("returnInfo")

let contador = 0

function updateText() {
  result.textContent = contador
  returnInfo.textContent = `Você já clicou ${contador} vezes. Está treinando para ser gamer?`
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

btnPrimary.classList.remove("active")

btnSecundary.addEventListener("click", () => {
  btnSecundary.classList.add("active")

  contador = 0
  resetText()

  setTimeout(() => btnSecundary.classList.remove("active"), 150)
})