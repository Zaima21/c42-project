class drops {
constructor(x,y){
    var options = {
        friction = 0.1

    }
    this.rainDrops=Bodies.circle(x,y,5)
    this.radius = 5
}

update(){
    if(this.rainDrops.postion.y > height){
    Matter.Body.setPosition(this.rainDrops,{x:random(0,400), y:random(0,400)})

}

}
displaydrops(){
    fill("blue")
    ellipseMode(CENTER)
    ellipse(this.rainDrops.position.x,this.rainDrops.position.y,this.radius,this.radius)
}

}

