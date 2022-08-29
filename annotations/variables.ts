let apples: number = 5;

//This tells TS the annotation for variable apples will only ever be 'number'.

let bunchOfApples = 5;

//This is exactly the same as the above variable, except this utilizes
//TS' type inferece AKA TS is auto assigning the variable type. 
//This happens when the variable declaration and initialization are on 
//the same line.

// Relying on type annotation vs type inference
// type annotation: 
// -declaring a variable that will be initialized on a separate line
// -when we want a variable to have a type that can't be inferred
// -when functions returns the 'any' type and we need to clarify value

// type inference: Rely on this always! As much as possible


let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects

let now: Date = new Date();

// Arrays 

let colors: string[] = ['red', 'green', 'blue'];

let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

// Classes

class Movie {

}

let movie: Movie = new Movie();

// Object literal: creating a variable with its type, as well as the curly
// braces defining the types of key/value pairs within said variable.

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use annotations 

// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: number, y: number}
