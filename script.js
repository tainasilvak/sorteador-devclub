const buttonMapped = document.querySelector(".button-click")

function takeNumbers(){
  const min = Math.ceil(document.querySelector(".input-between").value)
  const max = Math.floor(document.querySelector(".input-and").value)

  const result = Math.floor(Math.random() * (max - min + 1)) + min

  alert(result)
  
}

buttonMapped.addEventListener('click', takeNumbers)