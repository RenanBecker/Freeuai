function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
  somDaTrilha.setVolume(0.8);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  incluiPontos();
}









