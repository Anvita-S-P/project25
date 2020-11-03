class dustBin{
    constructor(x,y,w,h){
        var options ={
            restitution:0.5,
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.img=loadImage("sprites/dustbingreen image.png");
        
            this.width=w;
            this.height=h;
        }
    
    display(){
        var pos=this.body.position;
        push ();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        fill("white");
        image(0,0,this.width,this.height);
        pop ();
    }
}

