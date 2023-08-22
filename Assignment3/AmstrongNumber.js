let isAmstrong = (number) => {
  let tempNum = number;
  let cubeSum = 0;
  while (tempNum > 0) {
    let remiender = tempNum % 10;
    cubeSum += Math.pow(remiender, 3); //cubeSum+=remiender*remiender*remiender;
    tempNum = parseInt(tempNum / 10);
  }
  return cubeSum === number;
};

console.log(isAmstrong(144));

console.log(Math.pow(3, 2));
console.log(3 ** 2);

console.log(parseInt(10 / 4));
console.log(parseFloat(100 / 3).toPrecision(2));
