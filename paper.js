class Paper{
    constructor(x,y,w,h){

    
    var  options={
         isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }

    this.body=Matter.Bodies.circle(x,y,70,options);
    World.add(world,this.body);
    this.img=loadImage("sprites/paper image.png");

}

 display(){
     var pos=this.body.position;
     push ();
     imageMode(RADIUS);
     fill("pink");
     image(this.body.pos.x,this.body.pos.y,70);
 }







}