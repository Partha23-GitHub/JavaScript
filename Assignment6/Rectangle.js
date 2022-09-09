class Rectangle {
  constructor(length, breath) {
    this.length = length;
    this.breath = breath;
  }
  area() {
    return this.length * this.breath;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

let square = new Square(5);
console.log(square.area());
