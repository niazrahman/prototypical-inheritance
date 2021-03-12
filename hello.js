function extend (parent, child){
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child
}



function Shape (color){
  this.color = color
}

Shape.prototype.common = function(){
  console.log('I am common')
}



function Square (width,color){
  this.width = width
  Shape.call(this,color)
}

extend(Shape, Square)

Square.prototype.draw = function(){
  console.log('I am drawing')

}


function Circle (radius,color){
  this.radius = radius
  Shape.call(this,color)
}

extend(Shape,Circle)

var sqr1 = new Square(10,'blue')
console.log(sqr1)

var cir = new Circle(5,'red')
console.log(cir)