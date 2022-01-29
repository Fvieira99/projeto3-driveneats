let contador = 0

let precoComida = ''
let precoBebida = ''
let precoSobremesa = ''

let nomeDaComida = ''
let nomeDaBebida = ''
let nomeDaSobremesa = ''

let precoTotalWpp = ''

const containerConfirmacao = document.querySelector('#containerConfirmacao')
const popupConfirmacao = document.querySelector('#confirmacao')

function selecionarPrato(classePrato) {
  //checar se já há algum item selecionado
  const ativo = document.querySelector('.prato.ativo')
  const check = document.querySelector('.prato div .checkMark.check')
  if (ativo !== null && check !== null) {
    ativo.classList.remove('ativo')
    check.classList.remove('check')
    contador--
  }

  //ativar classes
  const prato = document.querySelector('.' + classePrato)
  prato.classList.add('ativo')
  const checkIcon = document.querySelector(`.${classePrato} .checkMark`)
  checkIcon.classList.add('check')
  contador++

  //Pegar Informações sobre o produto selecionado
  const preco = document.querySelector(`.${classePrato} .preco`)
  precoComida = preco.innerHTML.replace('R$ ', '').replace(',', '.')
  const nome = document.querySelector(`.${classePrato} .item`)
  nomeDaComida = nome.innerHTML

  //Ativar Botao Fechar Pedido
  if (contador === 3) {
    const botao = document.querySelector('#botao')
    botao.classList.remove('indisponivel')
    botao.classList.add('disponivel')
    botao.innerHTML = 'Fechar Pedido'
  }
}

function selecionarBebida(classeBebida) {
  //checar se já há algum item selecionado
  const ativo = document.querySelector('.bebida.ativo')
  const check = document.querySelector('.bebida div .checkMark.check')
  if (ativo !== null && check !== null) {
    ativo.classList.remove('ativo')
    check.classList.remove('check')
    contador--
  }

  //ativar classes
  const bebida = document.querySelector('.' + classeBebida)
  bebida.classList.add('ativo')
  const checkIcon = document.querySelector(`.${classeBebida} .checkMark`)
  checkIcon.classList.add('check')
  contador++

  //Pegar Informações sobre o produto selecionado
  const preco = document.querySelector(`.${classeBebida} .preco`)
  precoBebida = preco.innerHTML.replace('R$ ', '').replace(',', '.')
  const nome = document.querySelector(`.${classeBebida} .item`)
  nomeDaBebida = nome.innerHTML

  //Ativar Botao Fechar Pedido
  if (contador === 3) {
    const botao = document.querySelector('#botao')
    botao.classList.remove('indisponivel')
    botao.classList.add('disponivel')
    botao.innerHTML = 'Fechar Pedido'
  }
}

function selecionarSobremesa(classeSobremesa) {
  //checar se já há algum item selecionado
  const ativo = document.querySelector('.sobremesa.ativo')
  const check = document.querySelector('.sobremesa div .checkMark.check')
  if (ativo !== null && check !== null) {
    ativo.classList.remove('ativo')
    check.classList.remove('check')
    contador--
  }
  //ativar classes
  const sobremesa = document.querySelector('.' + classeSobremesa)
  sobremesa.classList.add('ativo')
  const checkIcon = document.querySelector(`.${classeSobremesa} .checkMark`)
  checkIcon.classList.add('check')
  contador++

  //Pegar Informações sobre o produto selecionado
  const preco = document.querySelector(`.${classeSobremesa} .preco`)
  precoSobremesa = preco.innerHTML.replace('R$ ', '').replace(',', '.')
  const nome = document.querySelector(`.${classeSobremesa} .item`)
  nomeDaSobremesa = nome.innerHTML

  //Ativar Botao Fechar Pedido
  if (contador === 3) {
    const botao = document.querySelector('#botao')
    botao.classList.remove('indisponivel')
    botao.classList.add('disponivel')
    botao.innerHTML = 'Fechar Pedido'
  }
}

function fecharPedido() {
  if (contador === 3) {
    containerConfirmacao.classList.add('backgroundAtivo')
    popupConfirmacao.classList.add('popupAtivo')
    preencherPopup()
    calcularSomaPreco()
  }
}

function preencherPopup() {
  //Acessando os elementos do Popup
  const textoConfirmacaoComida = document.getElementById('nomeComida')
  const precoConfirmacaoComida = document.getElementById('precoComida')
  const textoConfirmacaoBebida = document.getElementById('nomeBebida')
  const precoConfirmacaoBebida = document.getElementById('precoBebida')
  const textoConfirmacaoSobremesa = document.getElementById('nomeSobremesa')
  const precoConfirmacaoSobremesa = document.getElementById('precoSobremesa')

  //Atribuindo valores
  textoConfirmacaoComida.innerHTML = nomeDaComida
  precoConfirmacaoComida.innerHTML = precoComida.replace('.', ',')
  textoConfirmacaoBebida.innerHTML = nomeDaBebida
  precoConfirmacaoBebida.innerHTML = precoBebida.replace('.', ',')
  textoConfirmacaoSobremesa.innerHTML = nomeDaSobremesa
  precoConfirmacaoSobremesa.innerHTML = precoSobremesa.replace('.', ',')
}

function calcularSomaPreco() {
  const precoTotal = document.querySelector('#precoTotal')

  //Somando os precos com "." e sem "R$"
  const somaDosPrecos =
    parseFloat(precoComida) +
    parseFloat(precoBebida) +
    parseFloat(precoSobremesa)

  //Transformando o valor em string novamente e colcando a ","
  precoTotal.innerHTML =
    'R$ ' + somaDosPrecos.toFixed(2).toString().replace('.', ',')

  //Preco que irá aparecer no wpp = numero com "."
  precoTotalWpp = somaDosPrecos.toFixed(2)
}

function finalizarPedido() {
  const nomeCliente = prompt('Qual é o seu nome?')
  const enderecoCliente = prompt('Qual é o seu endereço?')
  const mensagem = `Olá, gostaria de fazer o pedido:\n-Prato: ${nomeDaComida}\n-Bebida: ${nomeDaBebida}\n-Sobremesa: ${nomeDaSobremesa}\nTotal: R$ ${precoTotalWpp} \n\n-Nome: ${nomeCliente}\n-Endereço: ${enderecoCliente}`
  const encodeMensagem = encodeURI(mensagem)
  const link = `https://wa.me/5521982837048?text=${encodeMensagem}`
  window.open(link)
}

function cancelarPedido() {
  popupConfirmacao.classList.remove('popupAtivo')
  containerConfirmacao.classList.remove('backgroundAtivo')
}
