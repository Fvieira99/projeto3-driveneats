// Acessando o HTML e declarando variáveis
// Pratos
let prato = document.getElementsByClassName('prato')

//Bebidas
let bebida = document.getElementsByClassName('bebida')

//Sobremesas
let sobremesa = document.getElementsByClassName('sobremesa')
let testeSobremesa = document.querySelector('.sobremesa')

//Icone
let icone = document.getElementsByTagName('ion-icon')

//Botão
let botao = document.getElementById('botao')

//Contador
let contador = 0

//Preço
let preco = document.getElementsByClassName('preco')

//Elemento P que contém a informação do nome do item
let item = document.getElementsByClassName('item')

//Nome e Preço dos items
let nomeDaComida = ''
let precoDaComida = ''
let nomeDaBebida = ''
let precoDaBebida = ''
let nomeDaSobremesa = ''
let precoDaSobremesa = ''
let precoTotalWpp = ''

//HTML Popup de Confirmaçao
let containerConfirmacao = document.getElementById('containerConfirmacao')
let popupConfirmacao = document.getElementById('confirmacao')
let textoConfirmacaoComida = document.getElementById('nomeComida')
let precoConfirmacaoComida = document.getElementById('precoComida')
let textoConfirmacaoBebida = document.getElementById('nomeBebida')
let precoConfirmacaoBebida = document.getElementById('precoBebida')
let textoConfirmacaoSobremesa = document.getElementById('nomeSobremesa')
let precoConfirmacaoSobremesa = document.getElementById('precoSobremesa')
let precoTotal = document.getElementById('precoTotal')
let botaoTudoCerto = document.getElementById('tudoCerto')
let botaoCancelar = document.getElementById('cancelar')

//Adicionando eventos
//Pratos
prato[0].onclick = function selecionar() {
  for (let i = 0; i < prato.length; i++) {
    if (
      prato[i].classList.contains('ativo') &&
      icone[i].classList.contains('iconeAtivo')
    ) {
      prato[i].classList.remove('ativo')
      icone[i].classList.remove('iconeAtivo')
      contador--
    }
  }
  prato[0].classList.add('ativo')
  icone[0].classList.add('iconeAtivo')
  contador++
  nomeDaComida = item[0].innerHTML
  precoDaComida = preco[0].innerHTML.replace('R$ ', '').replace(',', '.')
  console.log(contador)
  if (contador == 3) {
    botao.classList.remove('indisponivel')
    botao.classList.add('disponivel')
    botao.innerHTML = 'Fechar Pedido'
  }
}

prato[1].onclick = function selecionar() {
  for (let i = 0; i < prato.length; i++) {
    if (
      prato[i].classList.contains('ativo') &&
      icone[i].classList.contains('iconeAtivo')
    ) {
      prato[i].classList.remove('ativo')
      icone[i].classList.remove('iconeAtivo')
      contador--
    }
  }
  prato[1].classList.add('ativo')
  icone[1].classList.add('iconeAtivo')
  contador++
  nomeDaComida = item[1].innerHTML
  precoDaComida = preco[1].innerHTML.replace('R$ ', '').replace(',', '.')
  console.log(contador)
  if (contador == 3) {
    botao.classList.remove('indisponivel')
    botao.classList.add('disponivel')
    botao.innerHTML = 'Fechar Pedido'
  }
}

prato[2].onclick = function selecionar() {
  for (let i = 0; i < prato.length; i++) {
    if (
      prato[i].classList.contains('ativo') &&
      icone[i].classList.contains('iconeAtivo')
    ) {
      prato[i].classList.remove('ativo')
      icone[i].classList.remove('iconeAtivo')
      contador--
    }
  }
  prato[2].classList.add('ativo')
  icone[2].classList.add('iconeAtivo')
  contador++
  nomeDaComida = item[2].innerHTML
  precoDaComida = preco[2].innerHTML.replace('R$ ', '').replace(',', '.')
  console.log(contador)
  if (contador == 3) {
    botao.classList.remove('indisponivel')
    botao.classList.add('disponivel')
    botao.innerHTML = 'Fechar Pedido'
  }
}

//Bebidas
bebida[0].onclick = function selecionar() {
  for (let i = 0; i < bebida.length; i++) {
    if (
      bebida[i].classList.contains('ativo') &&
      icone[i + 3].classList.contains('iconeAtivo')
    ) {
      bebida[i].classList.remove('ativo')
      icone[i + 3].classList.remove('iconeAtivo')
      contador--
    }
  }
  bebida[0].classList.add('ativo')
  icone[3].classList.add('iconeAtivo')
  contador++
  nomeDaBebida = item[3].innerHTML
  precoDaBebida = preco[3].innerHTML.replace('R$ ', '').replace(',', '.')
  console.log(contador)
  if (contador == 3) {
    botao.classList.remove('indisponivel')
    botao.classList.add('disponivel')
    botao.innerHTML = 'Fechar Pedido'
  }
}

bebida[1].onclick = function selecionar() {
  for (let i = 0; i < bebida.length; i++) {
    if (
      bebida[i].classList.contains('ativo') &&
      icone[i + 3].classList.contains('iconeAtivo')
    ) {
      bebida[i].classList.remove('ativo')
      icone[i + 3].classList.remove('iconeAtivo')
      contador--
    }
  }
  bebida[1].classList.add('ativo')
  icone[4].classList.add('iconeAtivo')
  contador++
  nomeDaBebida = item[4].innerHTML
  precoDaBebida = preco[4].innerHTML.replace('R$ ', '').replace(',', '.')
  console.log(contador)
  if (contador == 3) {
    botao.classList.remove('indisponivel')
    botao.classList.add('disponivel')
    botao.innerHTML = 'Fechar Pedido'
  }
}

bebida[2].onclick = function selecionar() {
  for (let i = 0; i < bebida.length; i++) {
    if (
      bebida[i].classList.contains('ativo') &&
      icone[i + 3].classList.contains('iconeAtivo')
    ) {
      bebida[i].classList.remove('ativo')
      icone[i + 3].classList.remove('iconeAtivo')
      contador--
    }
  }
  bebida[2].classList.add('ativo')
  icone[5].classList.add('iconeAtivo')
  contador++
  nomeDaBebida = item[5].innerHTML
  precoDaBebida = preco[5].innerHTML.replace('R$ ', '').replace(',', '.')
  console.log(contador)
  if (contador == 3) {
    botao.classList.remove('indisponivel')
    botao.classList.add('disponivel')
    botao.innerHTML = 'Fechar Pedido'
  }
}

//Sobremesas
sobremesa[0].onclick = function selecionar() {
  for (let i = 0; i < sobremesa.length; i++) {
    if (
      sobremesa[i].classList.contains('ativo') &&
      icone[i + 6].classList.contains('iconeAtivo')
    ) {
      sobremesa[i].classList.remove('ativo')
      icone[i + 6].classList.remove('iconeAtivo')
      contador--
    }
  }
  sobremesa[0].classList.add('ativo')
  icone[6].classList.add('iconeAtivo')
  contador++
  nomeDaSobremesa = item[6].innerHTML
  precoDaSobremesa = preco[6].innerHTML.replace('R$ ', '').replace(',', '.')
  console.log(contador)
  if (contador == 3) {
    botao.classList.remove('indisponivel')
    botao.classList.add('disponivel')
    botao.innerHTML = 'Fechar Pedido'
  }
}

sobremesa[1].onclick = function selecionar() {
  for (let i = 0; i < sobremesa.length; i++) {
    if (
      sobremesa[i].classList.contains('ativo') &&
      icone[i + 6].classList.contains('iconeAtivo')
    ) {
      sobremesa[i].classList.remove('ativo')
      icone[i + 6].classList.remove('iconeAtivo')
      contador--
    }
  }
  sobremesa[1].classList.add('ativo')
  icone[7].classList.add('iconeAtivo')
  contador++
  nomeDaSobremesa = item[7].innerHTML
  precoDaSobremesa = preco[7].innerHTML.replace('R$ ', '').replace(',', '.')
  if (contador == 3) {
    botao.classList.remove('indisponivel')
    botao.classList.add('disponivel')
    botao.innerHTML = 'Fechar Pedido'
  }
}

sobremesa[2].onclick = function selecionar() {
  for (let i = 0; i < sobremesa.length; i++) {
    if (
      sobremesa[i].classList.contains('ativo') &&
      icone[i + 6].classList.contains('iconeAtivo')
    ) {
      sobremesa[i].classList.remove('ativo')
      icone[i + 6].classList.remove('iconeAtivo')
      contador--
    }
  }
  sobremesa[2].classList.add('ativo')
  icone[8].classList.add('iconeAtivo')
  contador++
  nomeDaSobremesa = item[8].innerHTML
  precoDaSobremesa = preco[8].innerHTML.replace('R$ ', '').replace(',', '.')

  console.log(contador)
  if (contador == 3) {
    botao.classList.remove('indisponivel')
    botao.classList.add('disponivel')
    botao.innerHTML = 'Fechar Pedido'
  }
}

botao.onclick = function confirmarPedido() {
  for (let i = 0; i < prato.length; i++) {
    prato[i].classList.add('desabilitado')
    bebida[i].classList.add('desabilitado')
    sobremesa[i].classList.add('desabilitado')
  }

  if (contador == 3) {
    popupConfirmacao.classList.add('popupAtivo')
    containerConfirmacao.classList.add('backgroundAtivo')
    textoConfirmacaoComida.innerHTML = nomeDaComida
    precoConfirmacaoComida.innerHTML = precoDaComida.replace('.', ',')
    textoConfirmacaoBebida.innerHTML = nomeDaBebida
    precoConfirmacaoBebida.innerHTML = precoDaBebida.replace('.', ',')
    textoConfirmacaoSobremesa.innerHTML = nomeDaSobremesa
    precoConfirmacaoSobremesa.innerHTML = precoDaSobremesa.replace('.', ',')
    let somaDosPrecos =
      parseFloat(precoDaComida) +
      parseFloat(precoDaBebida) +
      parseFloat(precoDaSobremesa)
    precoTotal.innerHTML =
      'R$ ' + somaDosPrecos.toFixed(2).toString().replace('.', ',')
    precoTotalWpp = somaDosPrecos.toFixed(2)
  }

  botao.classList.add('desabilitado')
}

botaoTudoCerto.onclick = function finalizarPedido() {
  let nomeCliente = prompt('Qual é o seu nome?')
  let enderecoCliente = prompt('Qual é o seu endereço?')
  let mensagem = `Olá, gostaria de fazer o pedido:\n-Prato: ${nomeDaComida}\n-Bebida: ${nomeDaBebida}\n-Sobremesa: ${nomeDaSobremesa}\nTotal: R$ ${precoTotalWpp} \n\n-Nome: ${nomeCliente}\n-Endereço: ${enderecoCliente}`
  let encodeMensagem = encodeURI(mensagem)
  let link = `https://wa.me/5521982837048?text=${encodeMensagem}`
  window.open(link)
}

botaoCancelar.onclick = function cancelarPedido() {
  popupConfirmacao.classList.remove('popupAtivo')
  containerConfirmacao.classList.remove('backgroundAtivo')
  for (let i = 0; i < prato.length; i++) {
    prato[i].classList.remove('desabilitado')
    bebida[i].classList.remove('desabilitado')
    sobremesa[i].classList.remove('desabilitado')
  }
  botao.classList.remove('desabilitado')
}
