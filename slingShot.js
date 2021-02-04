class Slingshot {
    constructor (a,b){
        var options = {
            bodyA : a,
            bodyB : b,
            stiffness : 0.4,
            length : 10
           }
       this.ss = Constraint.create(options)
       World.add(world,this.ss);
   

    }
    display(){
        var posA = this.ss.bodyA.position;
        var posB = this.ss.bodyB.position;

        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y)
    }
}