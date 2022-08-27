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
