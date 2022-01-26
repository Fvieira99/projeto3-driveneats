// Acessando o HTML e declarando variáveis
// Pratos
let prato = document.getElementsByClassName('prato')
//Bebidas
let bebida = document.getElementsByClassName('bebida')
//Sobremesas
let sobremesa = document.getElementsByClassName('sobremesa')
//Icone
let icone = document.getElementsByTagName('ion-icon')
contador = 0
//Adicionando eventos
//Pratos
prato[0].onclick = function selecionar() {
  for (let i = 0; i < prato.length; i++) {
    if (
      prato[i].classList.contains('ativo') &&
      icone[i].classList.contains('check')
    ) {
      prato[i].classList.remove('ativo')
      icone[i].classList.remove('check')
      contador--
    }
  }
  prato[0].classList.add('ativo')
  icone[0].classList.add('check')
  contador++
  console.log(contador)
}

prato[1].onclick = function selecionar() {
  for (let i = 0; i < prato.length; i++) {
    if (
      prato[i].classList.contains('ativo') &&
      icone[i].classList.contains('check')
    ) {
      prato[i].classList.remove('ativo')
      icone[i].classList.remove('check')
      contador--
    }
  }
  prato[1].classList.add('ativo')
  icone[1].classList.add('check')
  contador++
  console.log(contador)
}

prato[2].onclick = function selecionar() {
  for (let i = 0; i < prato.length; i++) {
    if (
      prato[i].classList.contains('ativo') &&
      icone[i].classList.contains('check')
    ) {
      prato[i].classList.remove('ativo')
      icone[i].classList.remove('check')
      contador--
    }
  }
  prato[2].classList.add('ativo')
  icone[2].classList.add('check')
  contador++
  console.log(contador)
}

//Bebidas
bebida[0].onclick = function selecionar() {
  for (let i = 0; i < bebida.length; i++) {
    if (
      bebida[i].classList.contains('ativo') &&
      icone[i + 3].classList.contains('check')
    ) {
      bebida[i].classList.remove('ativo')
      icone[i + 3].classList.remove('check')
      contador--
    }
  }
  bebida[0].classList.add('ativo')
  icone[3].classList.add('check')
  contador++
  console.log(contador)
}

bebida[1].onclick = function selecionar() {
  for (let i = 0; i < bebida.length; i++) {
    if (
      bebida[i].classList.contains('ativo') &&
      icone[i + 3].classList.contains('check')
    ) {
      bebida[i].classList.remove('ativo')
      icone[i + 3].classList.remove('check')
      contador--
    }
  }
  bebida[1].classList.add('ativo')
  icone[4].classList.add('check')
  contador++
  console.log(contador)
}

bebida[2].onclick = function selecionar() {
  for (let i = 0; i < bebida.length; i++) {
    if (
      bebida[i].classList.contains('ativo') &&
      icone[i + 3].classList.contains('check')
    ) {
      bebida[i].classList.remove('ativo')
      icone[i + 3].classList.remove('check')
      contador--
    }
  }
  bebida[2].classList.add('ativo')
  icone[5].classList.add('check')
  contador++
  console.log(contador)
}

//Sobremesas
sobremesa[0].onclick = function selecionar() {
  for (let i = 0; i < sobremesa.length; i++) {
    if (
      sobremesa[i].classList.contains('ativo') &&
      icone[i + 6].classList.contains('check')
    ) {
      sobremesa[i].classList.remove('ativo')
      icone[i + 6].classList.remove('check')
      contador--
    }
  }
  sobremesa[0].classList.add('ativo')
  icone[6].classList.add('check')
  contador++
  console.log(contador)
}

sobremesa[1].onclick = function selecionar() {
  for (let i = 0; i < sobremesa.length; i++) {
    if (
      sobremesa[i].classList.contains('ativo') &&
      icone[i + 6].classList.contains('check')
    ) {
      sobremesa[i].classList.remove('ativo')
      icone[i + 6].classList.remove('check')
      contador--
    }
  }
  sobremesa[0].classList.add('ativo')
  icone[7].classList.add('check')
  contador++
  console.log(contador)
}

sobremesa[2].onclick = function selecionar() {
  for (let i = 0; i < sobremesa.length; i++) {
    if (
      sobremesa[i].classList.contains('ativo') &&
      icone[i + 6].classList.contains('check')
    ) {
      sobremesa[i].classList.remove('ativo')
      icone[i + 6].classList.remove('check')
      contador--
    }
  }
  sobremesa[2].classList.add('ativo')
  icone[8].classList.add('check')
  contador++
  console.log(contador)
}
