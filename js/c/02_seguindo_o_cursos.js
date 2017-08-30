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
 game.physics.enable(player, Phaser.Physics.ARCADE);

}


function update(){
  if(game.input.mousePointer.isDown){
    game.physics.arcade.moveToPointer(player,450);

      if(Phaser.Rectangle.contains(player.body,game.input.x,game.input.y)){
        player.body.velocity.setTo(0,0);
      }


  }else{
    player.body.velocity.setTo(0,0);
  }
}

function render(){
}

