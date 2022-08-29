class Vehicle {
  constructor(public color: string) {}

  public break(): void {
    console.log('skreeeeetch');
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
//Class method modifiers allow you to give accessibility parameters to functions
//within any given class.
//Public: Function/method can be called anywhere, anytime
//Private: Method can only be called by other methods within the class the method belongs to
//Protected: Method can be called by other methods within the class it belongs to
//AND by other methods of child classes.

class Car extends Vehicle{
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
// car.drive();
car.startDrivingProcess();
// car.honk();
car.break();

//Classes and interfaces are the primary tool to use inside of typescript. 

