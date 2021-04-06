class roof{
    //constructor,  this.
    constructor(x,y,w,h){        
        var roof_options = {
            isStatic:true
          }
          this.roof = Bodies.rectangle(x,y,w,h, roof_options)
          World.add(myWorld,this.roof)
          this.width = w
          this.height = h
          
    }

    display(){
        push()
        rectMode (CENTER)
        rect(this.roof.position.x, this.roof.position.y, this.width, this.height)
        pop()
    }

}