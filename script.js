const numberSpan = document.getElementById("numberSpan")
let number = 0
numberSpan.textContent = number

function subFunction() {
  if (number > 0) {
    number--
    numberSpan.textContent = number
  }
}

function addFunction() {
  number++
  numberSpan.textContent = number
}

document.getElementById("subButton").addEventListener("click", subFunction)

document.getElementById("addButton").addEventListener("click", addFunction)
