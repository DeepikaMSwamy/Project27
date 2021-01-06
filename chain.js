        class Chain{
            constructor(bodyA, bodyB, offsetX, offsetY){
                this.offsetX = offsetX;
                this.offsetY = offsetY;
                var options={
                    bodyA: bodyA,
                    bodyB: bodyB,
                    pointB: {x: this.offsetX, y:this.offsetY}
            }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
        }
        display()
        {
            var pointA=this.chain.bodyA.position
            var pointB=this.chain.bodyB.position
        
            var A1X=pointA.x
            var A1Y=pointA.y
    
            var A2X=pointB.x+this.offsetX
            var A2Y=pointB.y+this.offsetY
            strokeWeight(2);
            stroke("black");
            line(A1X,A1Y,A2X,A2Y);
        
        }
        }

