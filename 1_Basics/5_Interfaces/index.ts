// INTERFACES IN TYPESCRIPT

// 1. Basic interface
interface User {
    name: string, 
    phone: number,
    gender?: string // optional property (not mandatory)
}

// Function using the interface
function printUser (user: User) : string {
    // check if gender exists
    return user.gender 
        ? `${user.name} ${user.phone} ${user.gender}` 
        : `${user.name} ${user.phone}`
}

// valid example
let person1 = printUser({name:"karthik", phone: 12345, gender:"male"})
console.log(person1)

// ❌ invalid example → missing required property 'phone'
// let person2 = printUser({name:"karthik"}) 



// 2. Readonly properties (cannot be changed once created)
interface Product {
    readonly id: number,
    name: string,
    price: number
}

let item: Product = { id: 101, name: "Laptop", price: 50000 }
console.log(item)
// item.id = 102 // ❌ Error: Cannot assign to 'id' because it is a read-only property



// 3. Interfaces with methods
interface Vehicle {
    brand: string,
    speed: number,
    drive(): void
}

let car: Vehicle = {
    brand: "Tesla",
    speed: 120,
    drive() {
        console.log(`${this.brand} is driving at ${this.speed} km/h`)
    }
}
car.drive()



// 4. Interface Inheritance (Extending another interface)
interface Student {
    name: string,
    rollNo: number
}

// EmployeeStudent inherits from Student
interface EmployeeStudent extends Student {
    employeeId: number
}

let es: EmployeeStudent = {
    name: "Karthik",
    rollNo: 21,
    employeeId: 101
}
console.log(es)



// 5. Type alias vs Interface (bonus learning)
type Coordinates = {
    x: number,
    y: number
}

let point: Coordinates = { x: 10, y: 20 }
console.log(point)
