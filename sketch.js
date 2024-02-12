const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
  isStatic: true
  }
  //criar corpo da base do jogador
    base = Bodies.rectangle(300,400,150,100,options)
    World.add(world,base)
  //criar corpo do jogador
    player = Bodies.rectangle(330,260,90,150,options)
    World.add(world,player)


}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()


  //exibir a imagem da base do jogador usando a função image()
  image(baseimage,base.position.x,base.position.y,150,100)
  image(playerimage,player.position.x,player.position.y,90,150)
  
  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
