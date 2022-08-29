const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
// const carMakers: string[] = [];
// Declaring an empty array should be done like so, to avoide the type "any"

//hovering over carsByMake will show the way a nested array should be 
//declared in TS, in case an empty nested array is necessary.

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

const carsByMakeEmpty: string[][] = [];

//arrays in TS help with several things
//it helps with inference when extracting values.
//Hover over singleCar to see inference in action

const singleCar = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
//uncomment line below to see the type requirement asked by carMakers
// carMakers.push(100);

//help with 'map'
//Whenever using map, by using a '.', TS will show a list of functions
//available given the type used as an argument within the map
carMakers.map((car: string): string => {
  return car;
})

//flexible types
//type inference with arrays allows for '|' to allow multiple types
//to be inferred based on the values added to the array, like below
//infers 'Date | string'

const importantDates = [new Date(), ' 2030-10-10'];



