let equilateral = (side1, side2, side3) => {
  return side1 === side2 && side2 === side3 && side3 == side1;
};

console.log(equilateral(5, 5, 6)); // false
console.log(equilateral(7, 7, 7)); // true
