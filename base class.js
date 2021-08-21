class Baseclass{
    constructor(x,y,w,h,angle){
       this.image=loadImage("sprites/base.png")
        var options ={
            restitution:0.8,density:1.0,friction:1.0
        }
    this.width=w
    this.height=h
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        imageMode(CENTER)
        fill(255)
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}