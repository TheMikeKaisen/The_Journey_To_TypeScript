

/* TYPE ALIASES */

// 1. Basic alias for a primitive
type PhoneNumber = number
let phone: PhoneNumber = 9876543210


// 2. Alias for a union type
type ID = string | number
let userId1: ID = "abc123"
let userId2: ID = 456


// 3. Alias for an object
type User = {
    name: string
    age: number
    email?: string   // optional property
}

let user1: User = {
    name: "Karthik",
    age: 22,
    email: "karthik@example.com"
}

let user2: User = {
    name: "Mike",
    age: 25
}


// 4. Alias for function type
type GreetFn = (name: string) => string

const greet: GreetFn = (name) => {
    return `Hello, ${name}!`
}

console.log(greet("Karthik"))


// 5. Alias with INTERSECTION (combine multiple types)
type Address = {
    city: string
    country: string
}

type Employee = User & Address // Employee must have all properties from User + Address

let emp1: Employee = {
    name: "Arjun",
    age: 30,
    city: "Bangalore",
    country: "India"
}



// 6. Using type alias in function parameters
function printUser(user: User): string {
    return user.email 
        ? `${user.name} (${user.age}) - ${user.email}` 
        : `${user.name} (${user.age})`
}

console.log(printUser(user1))
console.log(printUser(user2))
