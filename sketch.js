let larguraTela = 600;
let comprimentoTela = 800;

//bolinha

let xBolinha = comprimentoTela / 2;
let yBolinha = larguraTela / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let diametroBolinha = 20;
let raioBolinha = diametroBolinha / 2;

//minha raquete

let larguraRaquete = 15;
let comprimentoRaquete = 80;
let xMinhaRaquete = 10;
let yRaquete = 300;

// raquete oponennte

let xRaqueteOponente = comprimentoTela - larguraRaquete - 10
let yRaqueteOponente = 300;
let velocidadeYOponente;
let colidiu = false;

// placar do jogo

let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(comprimentoTela, larguraTela);
}

function draw() {
  background(50);
  criaBolinha();
  moveBolinha();
  colisaoBolinha();
  criaMinhaRaquete(xMinhaRaquete, yRaquete);
  criaMinhaRaquete(xRaqueteOponente, yRaqueteOponente);
  moveRaquete();
 //colideRaquete();
  colisaoRaquete(xMinhaRaquete, yRaquete);
  colisaoRaquete(xRaqueteOponente, yRaqueteOponente);     
  movimentaRaqueteOponente();
  mostraPlacar();
  marcaPonto();
}

function criaBolinha() {
  fill(color(255))
  circle(xBolinha, yBolinha, diametroBolinha);
}

function moveBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBolinha() {
  if (xBolinha + raioBolinha > comprimentoTela || xBolinha - raioBolinha < 0) {
    velocidadeXBolinha = velocidadeXBolinha * -1;
  }
  if (yBolinha + raioBolinha > larguraTela || yBolinha - raioBolinha < 0) {
    velocidadeYBolinha = velocidadeYBolinha * -1;
  }
}

function criaMinhaRaquete(posicaoX, posicaoY) {
 fill(color(255))
  rect(posicaoX, posicaoY, larguraRaquete, comprimentoRaquete);
}

function moveRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
/*
function colideRaquete() {
  if (
    xBolinha - raioBolinha < xMinhaRaquete + larguraRaquete &&
    yBolinha - raioBolinha < yRaquete + comprimentoRaquete &&
    yBolinha + raioBolinha > yRaquete
  ) {
    velocidadeXBolinha *= -1;
  }
}
*/
function colisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y, larguraRaquete, comprimentoRaquete, xBolinha, yBolinha, diametroBolinha);
  if (colidiu == true ) {
    velocidadeXBolinha *= -1
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30
  yRaqueteOponente += velocidadeYOponente
}

function mostraPlacar(){
  textAlign(CENTER);
  textSize(30);
  fill(255);
  text(meusPontos, comprimentoTela / 2 - 200, 60);
  text(pontosDoOponente, comprimentoTela / 2 + 200, 60);
}

function marcaPonto(){
  if (xBolinha > 790){
    meusPontos += 1;
  }
  if (xBolinha < 5) {
    pontosDoOponente += 1;
  }
}