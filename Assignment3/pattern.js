let count = 1;
let ans = " ";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    ans += count++ + " ";
  }
  console.log(ans);
  ans = " ";
}
