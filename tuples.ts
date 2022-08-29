
const drink = { 
  color: 'brown',
  carbonated: true,
  sugar: 40
};

//By declaring this Drink tuple, this is essentially destructuring the 
//types to be used anywhere within your application to indicate the arrays
//that use Drink are requiring the type order declared within Drink.

type Drink = [string, boolean, number];

const cocaCola = ['brown', true, 40];
const pepsi: [string, boolean, number] = ['brown', true, 40];
const tea: Drink = ['brown', false, 40];

//The difference between the cocaCola array and the pepsi array, is that 
//by ordering the types within the pepsi array, it becomes a tuple.
//A tuple is just an array with a given set of types in a given order.

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};

//the difference between the above structures is the carSpecs tuple doesn't
//give any indication what it's values are. However, the object has 
//key-value pairs that will specify the information stored... For this 
//reason, we'll almost always use objects over tuples when we want to 
//store specific sets of data within a single structure.