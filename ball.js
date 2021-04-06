class ball{
    //constructor,  this.
    constructor(x,y,r){        
        var ball_options = {
            isStatic:false
          }
          this.ball = Bodies.circle(x,y,r, ball_options)
          Matter.Body.setDensity(this.ball, 2)
          World.add(myWorld,this.ball)
          this.radius = r
          
    }

    display(){
        push()
        ellipseMode (RADIUS)
        ellipse(this.ball.position.x, this.ball.position.y, this.radius)
        pop()
    }

}