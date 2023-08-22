let returnNthNumber = (array, position) => {
  let newArray = array.sort((a, b) => b - a);
  console.log(newArray);
  return newArray[position - 1];
};

let array = [3, 45, 6, 7, 23, 5, 7, 8];
console.log(returnNthNumber(array, 3));
