interface Reportable {
  summary(): string;
}

//interfaces have the unique attribute of being able to declare functions
//within them as types.

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const newDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

//void type annotation means we expect this function to return nothing
const printSummary = (item: Reportable): void => {
console.log(item.summary());
}

printSummary(oldCivic);
printSummary(newDrink);

//By using a single interface, you can describe properties of very different
//objects using generic functions. These functions can access any type of 
//object which include these kinds of generic functions. 