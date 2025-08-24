"use strict";
// Primitives vs References in JavaScript / TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
// PRIMITIVES
// Primitives (number, string, boolean, null, undefined, symbol, bigint) -> Total 7 are there
// are stored directly in memory and are COPIED by VALUE.
let num1 = 10;
let num2 = num1; // copy of the value
num2 = 20;
console.log("num1:", num1); // 10 (unchanged, because copy was made)
console.log("num2:", num2); // 20
// REFERENCES
// [], {}, ()
// Objects {}, arrays [], and functions () are STORED IN MEMORY AS REFERENCES.
// When you assign them, only the RFERENCE POINTER is copied, not the actual data.
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 points to the same memory as arr1
// arr1 -> [1, 2, 3]  <- arr2
arr2.push(4); // modifying arr2 ALSO modifies arr1, because they are sharing the same memory
console.log("arr1:", arr1); // [1, 2, 3, 4]
console.log("arr2:", arr2); // [1, 2, 3, 4]
// REFERENCE (Objects)
let person1 = { firstName: "Karthik", lastName: "Nair" };
let person2 = person1; // same reference
person2.firstName = "Mike"; // modifies both
console.log("person1:", person1); // { firstName: 'Mike', lastName: 'Nair' }
console.log("person2:", person2); // { firstName: 'Mike', lastName: 'Nair' }
// HOW TO AVOID THIS (Create a copy)
// Methods like map, spread operator, or JSON tricks create NEW OBJECTS.
let arr3 = [1, 2, 3];
let arr4 = arr3.map(x => x * 2); // new array (does NOT affect arr3)
console.log("arr3:", arr3); // [1, 2, 3]
console.log("arr4:", arr4); // [2, 4, 6]
// SHALLOW COPY with spread operator
let person3 = { firstName: "John", lastName: "Doe" };
let person4 = { ...person3 }; // new object (different reference)
person4.firstName = "Jane";
console.log("person3:", person3); // { firstName: 'John', lastName: 'Doe' }
console.log("person4:", person4); // { firstName: 'Jane', lastName: 'Doe' }
// DEEP COPY (for nested objects/arrays)
// Shallow copies don’t work well if objects are nested.
// Example: using JSON (simple but not perfect).
let nested = { name: "Alex", address: { city: "Delhi" } };
// VERY IMPORTANT (always remember this)
let deepCopy = JSON.parse(JSON.stringify(nested));
deepCopy.address.city = "Mumbai";
console.log("nested:", nested); // { name: 'Alex', address: { city: 'Delhi' } }
console.log("deepCopy:", deepCopy); // { name: 'Alex', address: { city: 'Mumbai' } }
// Trying to make a shallow copy of nested object
let person5 = { firstName: "karthik", lastName: "nair", address: { city: "jaipur", state: "rajasthan" } };
let person6 = { ...person5 };
console.log("person6:", person6);
person6.firstName = "hari";
person6.address.city = "kerala";
console.log("person5:", person5); // firstName: "Karthik" (unchanged) address: {city: "kerala" (changed)}
console.log("person6:", person6);
// why does this happen?
// objects are passed as reference. so address has a reference to the object {city:"jaipur", state:"rajasthan"}
// so during shallow copy, though a new memory of provided to the object, "address" key still has a reference to the value {}
