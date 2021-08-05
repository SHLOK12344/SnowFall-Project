class Snow{
    constructor(x,y,width,heigth){
     this.body=Bodies.rectangle(x,y,width,heigth)
     this.width=width
     this.height=height
     this.snowImage=loadImage("snow4.webp");
     World.add(world,this.body);
    }
    display(){
    // rect(this.body.position.x,this.body.position.y,this.width,this.heigth)
    imageMode(CENTER);
     image(this.snowImage,this.body.position.x,this.body.position.y,30,30)
    }
}