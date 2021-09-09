class Form {

  //create buttons and elements here
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton("Reset");
  }

  //hide the necssary elements
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
   //give title an set positions 
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    
    this.reset.position(displayWidth - 100, 20);
    
    // arrow function "=>" used for linking the button so that if mouse is presssed the button should do its functions
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
    
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
    
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    //write the reset function here
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    })
  }
}
