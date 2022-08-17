let isLeapyear = (year) => {
  return (year % 4 == 0 && year % 100 !== 0) || year % 400 == 0;
};
let year = 2025;
console.log(isLeapyear(year) == true ? "Leap Year" : "Not a Leap Year");
