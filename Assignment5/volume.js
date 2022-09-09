// for cylender
class Cylender {
  constructor(height, radius) {
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    let volume = Math.PI * this.radius * this.radius * this.height;
    return volume.toFixed(4);
  }
}

let cylender = new Cylender(14, 6); // height,radius
console.log(cylender.getVolume());

// for Sphere
class Sphere {
  constructor(radius) {
    this.radius = radius;
  }
  getVolume() {
    let volume = (4 / 3) * Math.PI * Math.pow(this.radius, 3);
    return volume.toFixed(4);
  }
}

let sphere = new Sphere(15); //radius
console.log(sphere.getVolume());

// for Cone
class Cone {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    let volume = (1 / 3) * Math.PI * Math.pow(this.radius, 2) * this.height;
    return volume.toFixed(4);
  }
}

let cone = new Cone(6, 10); //radius,height
console.log(cone.getVolume());
