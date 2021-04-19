//código do ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (yAtor < 367){
      yAtor += 3;
    }
    
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro, alturaCarro, xAtor, yAtor, 15 )
    if (colisao) {
      atropelou();
      somDaColisao.play();
      if (meusPontos > 0){meusPontos -= 1;
       }
    }
  }
}

function atropelou(){
  yAtor = 366;
}

function incluiPontos(){
  textSize(25);
  textAlign(CENTER);
  fill(color(10,255,10))
  text (meusPontos, width / 5, 28)
}

function marcaPonto(){
  if (yAtor < 5){
    meusPontos += 1
    atropelou();
    somDoPonto.play();
  }
}