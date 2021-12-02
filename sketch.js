/*
Complete o jogo Plinko
- particles: são as bolinhas coloridas do jogo, que caem com a gravidade e quicam nos obstáculos
- plinkos: são as bolinhas brancas fizas (os pininhos onde a bola bate
- divisions: são as divisões (barreiras brancas que ficam embaixo da tela)
*/

/*
Começe criando a classe das partículas
- precisam ser corpos circulares, adicionados ao mundo
- adicione uma propriedade de cor que gere cores aleatórias para cada particula criada:
this.color = color(random(50,255),random(50,255),random(50,255));
- não se esqueça de usar a propriedade dentro do fill() para  dar a cor, e usar push() e pop() pra não deixar os outros itens do jogo coloridos
*/

var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  body = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  

  //modifique o FOR para gerar divisões de 80 em 80 pixels até o fim da tela
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=160; k = k + 160) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=240; k = k + 240) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=320; k = k + 320) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=400; k = k + 400) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=480; k = k + 480) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=560; k = k + 560) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=640; k = k + 640) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=720; k = k + 720) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=800; k = k + 800) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //1ª linha de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //2ª linha de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //crie a 3ª linha de objetos plinko
  for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }
  //crie a 4ª linha de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }   

}
 


function draw() {
  background("black");
  textSize(20);
 
  Engine.update(engine);
  ground.display();
  
  //exibindo os plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //exibindo as divisões
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //criar as partículas a cada 60 quadros, em posições X aleatórias e adicioná-las à matriz particles
  if(frameCount%60 === 0){
    particles.push(new Particula(random(width/2-10,width/2+10),10,10))
  }
  //exibir as partículas usando um loop FOR (seguir o exemplo da exisbição dos plinkos e das divisões)
  for(var a = 0; a < particles.length; a++){
    particles[a].display();
  }
}