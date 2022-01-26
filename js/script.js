// Acessando o HTML e declarando variáveis
// Pratos
let prato = document.getElementsByClassName('prato')
//Bebidas
let bebida = document.getElementsByClassName('bebida')
//Sobremesas
let sobremesa = document.getElementsByClassName('sobremesa')
//Icone
let icone = document.getElementsByTagName('ion-icon')

//Adicionando eventos
//Pratos
prato[0].onclick = function selecionar() {
  prato[0].classList.toggle('ativo')
  icone[0].classList.toggle('check')
}

prato[1].onclick = function selecionar() {
  prato[1].classList.toggle('ativo')
  icone[1].classList.toggle('check')
}

prato[2].onclick = function selecionar() {
  prato[2].classList.toggle('ativo')
  icone[2].classList.toggle('check')
}

//Bebidas
bebida[0].onclick = function selecionar() {
  bebida[0].classList.toggle('ativo')
  icone[3].classList.toggle('check')
}

bebida[1].onclick = function selecionar() {
  bebida[1].classList.toggle('ativo')
  icone[4].classList.toggle('check')
}

bebida[2].onclick = function selecionar() {
  bebida[2].classList.toggle('ativo')
  icone[5].classList.toggle('check')
}

//Sobremesas
sobremesa[0].onclick = function selecionar() {
  sobremesa[0].classList.toggle('ativo')
  icone[6].classList.toggle('check')
}

sobremesa[1].onclick = function selecionar() {
  sobremesa[1].classList.toggle('ativo')
  icone[7].classList.toggle('check')
}

sobremesa[2].onclick = function selecionar() {
  sobremesa[2].classList.toggle('ativo')
  icone[8].classList.toggle('check')
}
