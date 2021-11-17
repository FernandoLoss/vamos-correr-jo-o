var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;


function preload(){
  pathImg = loadImage("path.png");
 boyImg = loadImage("jake1.png","jake2.png","jake3.png","JAKE4.png","jake5.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path = createSprite(200,180,400,20);
path.scale=1.2;
path = addImage("path", pathImg);

//crie um sprite de menino
//adicione uma animação de corrida para ele
boy = createSprite(50,160,20,50);
boy.scale=0.08;
boy.loadAnimation("run", boyImg);
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);

//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
