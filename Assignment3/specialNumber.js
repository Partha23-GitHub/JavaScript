let factorial = (number) => {
  if (number == 1) return 1;
  return number * factorial(number - 1);
};

let specialNumber = (number) => {
  let temp = number;
  let factorialSum = 0;
  while (temp > 0) {
    let remiender = temp % 10;
    factorialSum += factorial(remiender);
    temp = parseInt(temp / 10);
  }
  return number === factorialSum;
};

console.log(specialNumber(144));
