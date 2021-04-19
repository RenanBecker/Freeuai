// imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/EmojiOculos.png");
  imagemCarro = loadImage("imagens/bus.png");
  imagemCarro2 = loadImage("imagens/kart.png");
  imagemCarro3 = loadImage("imagens/carro-3.png"); 
  imagemCarro4 = loadImage("imagens/interceptor.png");
  imagemCarro5 = loadImage("imagens/carro-1.png");
  imagemCarro6 = loadImage("imagens/classic.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4,imagemCarro5,imagemCarro6]
  somDaTrilha = loadSound("som/88bits.mp3");
  somDaColisao = loadSound("som/colidiu.mp3");
  somDoPonto = loadSound("som/pontos.wav");
}