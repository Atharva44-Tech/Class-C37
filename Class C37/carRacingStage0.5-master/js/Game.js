class Game {
  constructor(){


    
  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef=await database.ref('playerCount').once("value");
      if (playerCountRef.exists()){
        playerCount=playerCountRef.val();
        player.getCount();
      }
      
      
      form = new Form()
      form.display();
    }
  }

  play(){
 form.hide();
 text("game Start",200,200);
 Player.getPlayerInfo();
 
if(allPlayers !==undefined){
var displayPosition=130;
displayPosition+=20;
text(allPlayers[i].name+":"+allPlayers[i].distance,150,displayPosition);

}
 
  if (keyDown(UP_ARROW)&& player.index!==null){
    player.distance+=50;
    player.update();
  }

}
}
