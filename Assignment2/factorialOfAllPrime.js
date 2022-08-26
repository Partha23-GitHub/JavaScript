function isPrime(num) {
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) return false;
    return true;
  }
}

let prime = (lower, upper) => {
  for (let i = lower; i <= upper; i++) {
    if (isPrime(i)) console.log(i);
  }
};

prime(2, 100);
