"use strict";
/* TYPE ALIASES */
Object.defineProperty(exports, "__esModule", { value: true });
let phone = 9876543210;
let userId1 = "abc123";
let userId2 = 456;
let user1 = {
    name: "Karthik",
    age: 22,
    email: "karthik@example.com"
};
let user2 = {
    name: "Mike",
    age: 25
};
const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("Karthik"));
let emp1 = {
    name: "Arjun",
    age: 30,
    city: "Bangalore",
    country: "India"
};
// 6. Using type alias in function parameters
function printUser(user) {
    return user.email
        ? `${user.name} (${user.age}) - ${user.email}`
        : `${user.name} (${user.age})`;
}
console.log(printUser(user1));
console.log(printUser(user2));
