// weather forecast for the day in Kelvin
const kelvin = 293;
// Celsius is 273 degrees less than Kelvin.
celsius = kelvin-273;
fahrenheit = celsius * (9/5) + 32;
// math.floor rounds the number to the nearest temperature
fahrenheit = Math.floor(fahrenheit);
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit')
newton = celsius * (33/100);
newton = Math.floor(newton);
console.log('The temperature is ' + newton + ' degrees Newton')
