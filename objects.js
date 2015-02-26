//Car constructor function
function Car(fuel, mpg, year) {
  this.interior = 'blue';
  this.fuel = fuel;
  this.mpg = mpg;
  this.year = year;
}

//add color property to Car prototype
Car.prototype.color = 'red';


//make new instance of Car
var subaru = new Car();

//we can manipulate subaru's color without changing the prototype
console.log(subaru.color);
subaru.color = 'yellow';
console.log(subaru.color);

//create a constructor function for Motorcycle
function Motorcycle() {
  this.trim = 'chrome';
}

//link Motorcycle's prototype to the Car object - including the Car prototype
Motorcycle.prototype = Car.prototype;

//make a new instance of Motorcycle and check out the properties it "inherited" (aka point to) from car
var ducati = new Motorcycle();
console.log('motorcycle ' + ducati.color);
console.log('motorcycle ' + ducati.interior);

//update the Car prototype after we told Motorcycle to 'inherit' from Car
Car.prototype.horsepower = 'lots';

//motorcycle sees the change in the Car prototype
console.log('motorcycle ' + ducati.horsepower);

//update the value of the interior property on the constructor function,
Car.interior = 'turquoise';

//see what we have now
console.log('car interior' +Car.interior);
console.log('motorcycle ' + ducati.interior);
