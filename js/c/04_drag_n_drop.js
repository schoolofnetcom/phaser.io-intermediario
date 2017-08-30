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
 player.scale.setTo(3,3);


 player.inputEnabled = true;
 player.input.enableDrag(true);

}

function update(){
 
}

function render(){
}

