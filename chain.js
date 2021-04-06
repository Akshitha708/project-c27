class chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
     this.offsetX=offsetX
     this.offsetY=offsetY
        var  options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 400,
            stiffness: 0.01,
            pointA:{x:this.offsetX, y:this.offsetY}
            
          }

        this.chain = Constraint.create(options)
        World.add(myWorld, this.chain)
    }

    display(){
            console.log(this.chain)
            var pos1 = this.chain.bodyA.position
            var pos2 =  this.chain.bodyB.position
            push()
            strokeWeight(7)
            stroke("white")

            line(pos1.x+this.offsetX, pos1.y, pos2.x, pos2.y)
            pop();
       } 
    }