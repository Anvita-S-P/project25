class Paper{
    constructor(x,y,w,h){

    
    var  options={
         isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }

    this.body=Matter.Bodies.circle(x,y,30,options);
    World.add(world,this.body);
    this.img=loadImage("sprites/paperimage.png");

}

 display(){
     var pos=this.body.position;
     push ();
     imageMode(CENTER);
     fill("pink");
     image(this.img,pos.x,pos.y,70,70);
 }







}