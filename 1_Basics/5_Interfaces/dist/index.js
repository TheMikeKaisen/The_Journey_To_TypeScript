"use strict";
// INTERFACES IN TYPESCRIPT
Object.defineProperty(exports, "__esModule", { value: true });
// Function using the interface
function printUser(user) {
    // check if gender exists
    return user.gender
        ? `${user.name} ${user.phone} ${user.gender}`
        : `${user.name} ${user.phone}`;
}
// valid example
let person1 = printUser({ name: "karthik", phone: 12345, gender: "male" });
console.log(person1);
let item = { id: 101, name: "Laptop", price: 50000 };
console.log(item);
let car = {
    brand: "Tesla",
    speed: 120,
    drive() {
        console.log(`${this.brand} is driving at ${this.speed} km/h`);
    }
};
car.drive();
let es = {
    name: "Karthik",
    rollNo: 21,
    employeeId: 101
};
console.log(es);
let point = { x: 10, y: 20 };
console.log(point);
