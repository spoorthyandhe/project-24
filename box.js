class Box {
    constructor(x, y, width, height) {

      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      push();
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("white");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  