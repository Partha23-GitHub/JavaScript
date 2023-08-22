function isPrime(num) {
  let count = 1;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) count++;
  }
  return count == 1;
}

let factorial = (number) => {
  if (number == 1) return 1;
  return number * factorial(number - 1);
};

let prime = (lower, upper) => {
  for (let i = lower; i <= upper; i++) {
    if (isPrime(i)) {
      console.log(factorial(i));
    }
  }
};

prime(2, 12);
