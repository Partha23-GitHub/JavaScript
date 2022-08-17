let factorial = (number) => {
  if (number == 1) return 1;
  return number * factorial(number - 1);
};
let number = 20;
console.log(factorial(number));
