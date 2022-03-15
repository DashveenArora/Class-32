class Ground{
 constructor(x,y,w,h){
     this.height=h;
     this.width=w;
     this.x=x;
     this.y=y;
     let options={
         isStatic: true,
     }
     this.body=Matter.Bodies.rectangle(x,y,w,h,options)
     World.add(world,this.body)
 }
 show(){
let pos=this.body.position;
push()
rectMode(CENTER);
noStroke();
fill(148,127,146)
rect(pos.x,pos.y,this.width,this.height)
pop();
 }
}