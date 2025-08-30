"use strict";
// -------------------- Readonly and Static Members in TypeScript --------------------
// 1. readonly
//    - A property marked as "readonly" can only be assigned once
//      (either at declaration or in the constructor).
//    - After that, you cannot modify it.
//
// 2. static
//    - Belongs to the class itself, not to individual objects.
//    - Accessed using ClassName.memberName, not via object instance.
// -----------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    // -------------------- readonly --------------------
    brand; // can only be set once
    model;
    // -------------------- static --------------------
    static wheels = 4; // common for all cars
    static totalCars = 0; // track how many cars created
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        // Increment totalCars each time constructor runs
        Car.totalCars++;
    }
    // Instance method (normal)
    showDetails() {
        console.log(`${this.brand} ${this.model} has ${Car.wheels} wheels.`);
    }
    // Static method (access only through Car, not objects)
    static getTotalCars() {
        return Car.totalCars;
    }
}
// -------------------- Testing Car class --------------------
let c1 = new Car("Tesla", "Model S");
let c2 = new Car("BMW", "X5");
c1.showDetails(); // Tesla Model S has 4 wheels
c2.showDetails(); // BMW X5 has 4 wheels
// readonly check
// c1.brand = "Audi"; //  Error: Cannot assign to 'brand' because it is a read-only property
// static usage
console.log(Car.wheels); //  4 (access via class, not object)
console.log(Car.getTotalCars()); //  2 (two cars created)
// -------------------- Recap --------------------
// - readonly → assign once, cannot be changed later
// - static   → belongs to the class, not objects
