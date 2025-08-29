"use strict";
// By default, all members of a class in TypeScript are 'public'.
// Access modifiers let me control who can see or use class properties/methods.
Object.defineProperty(exports, "__esModule", { value: true });
// 1. public    → accessible everywhere (default)
// 2. private   → accessible only inside the same class
// 3. protected → accessible inside the class and its subclasses (but not outside)
class Person {
    // 'public' is default, but lets write it anyway
    name;
    // 'private' → only accessible inside this class
    ssn;
    // 'protected' → accessible inside this class + subclasses
    age;
    constructor(name, ssn, age) {
        this.name = name;
        this.ssn = ssn;
        this.age = age;
    }
    // public method (can be called anywhere)
    introduce() {
        console.log(`Hi, my name is ${this.name}`);
    }
    // private method (only usable inside this class)
    showSSN() {
        console.log(`SSN is ${this.ssn}`);
    }
    // method to demonstrate calling private
    revealSSN() {
        this.showSSN(); // allowed here, because it's inside the class
    }
}
// Subclass using 'protected'
class Employee extends Person {
    employeeId;
    constructor(name, ssn, age, employeeId) {
        super(name, ssn, age);
        this.employeeId = employeeId;
    }
    // I can access 'protected' members from parent
    showDetails() {
        console.log(`Employee: ${this.name}, Age: ${this.age}, ID: ${this.employeeId}`);
        // console.log(this.ssn); // ❌ ERROR → ssn is private, not accessible
    }
}
// Usage
let person = new Person("Alice", "123-45-6789", 30);
person.introduce(); // ✅ Works
person.revealSSN(); // ✅ Works (calls private inside class)
// person.showSSN();  // ❌ ERROR → private method
let emp = new Employee("Bob", "987-65-4321", 25, 101);
emp.showDetails(); // ✅ Can access protected 'age'
emp.introduce(); // ✅ Public method works
// emp.ssn;           // ❌ ERROR → private
// emp.age;           // ❌ ERROR → protected (can’t access outside class)
