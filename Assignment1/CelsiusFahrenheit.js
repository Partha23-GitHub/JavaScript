let toCelsius = (F) => {
  return ((F - 32) * 5) / 9;
};

let toFahrenheit = (C) => {
  return (9 * C) / 5 + 32;
};

let celsius = 45;
console.log(toFahrenheit(celsius));

let farenheit = 113;
console.log(toCelsius(farenheit));
