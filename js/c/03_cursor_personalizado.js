var game = new Phaser.Game(800,600,Phaser.AUTO,'',{
	preload: preload,
	create: create,
	update: update,
  render: render
});

var player;

function preload(){
 game.load.spritesheet('personagem', 'sprites/dude.png', 32, 48);
}

function create(){
 
 player = game.add.sprite(game.world.centerX, game.world.centerY, 'personagem');
 
 game.canvas.addEventListener("mousedown", tranca);

 game.input.addMoveCallback(movimentaCursor, this);
}

function tranca(){
  game.input.mouse.requestPointerLock();
}

function movimentaCursor(pointer, x, y, click){

  if(game.input.mouse.locked && !click){
     player.x += game.input.mouse.event.movementX;
     player.y += game.input.mouse.event.movementY;
  }
}

function update(){
 
}

function render(){
}

