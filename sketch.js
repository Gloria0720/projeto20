var bgImg;
var catimg1;
var mouseimg1;
var catimg2;
var mouseimg2;
var catimg3;
var mouseimg3;
var catimg4;
var mouseimg4;
var cat;
var mouse;

function preload() {
    //carregue as imagens aqui
    bgImg = loadImage("images/garden.png");
    catimg1 = loadImage("images/cat1.png");
    mouseimg1 = loadImage("images/mouse1.png");
    catimg2 = loadImage("images/cat2.png");
    mouseimg2 = loadImage("images/mouse2.png");
    catimg3 = loadImage("images/cat3.png");
    mouseimg3 = loadImage("images/mouse3.png");
    catimg4 = loadImage("images/cat4.png");
    mouseimg4 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui

    cat = createSprite(870,600);
    cat.addAnimation("gatoSentado", catimg1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("ratoSentado", mouseimg1);
    mouse.scale = 0.2;
    
}

function draw() {

    background(bgImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("últimaImagemGato", catimg4);
        cat.changeAnimation("últimaImagemGato");
        cat.x=300;
        cat.scale=0.2;
        mouse.addAnimation("últimaImagemRato", mouseimg4);
        mouse.scale = 0.15;
        mouse.changeAnimation("últimaImagemRato");
    }
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui

  if(keyCode === LEFT_ARROW){
      cat.addAnimation("gatoCorrendo", catimg2, catimg3);
      cat.changeAnimation("gatoCorrendo");
      cat.frameDelay = 25;
      mouse.addAnimation("ratoProvocando", mouseimg2, mouseimg3);
      mouse.changeAnimation("ratoProvocando");
      mouse.frameDelay = 25;
      

      cat.velocityX = -6;

  }


}
