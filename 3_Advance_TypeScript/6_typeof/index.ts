// typeof
// -------------------------------
// typeof checks the *type of a value at runtime*
// (BUT only works reliably for primitive types)

let age = 25
let name = "Karthik"
let isActive = true

console.log(typeof age)      // "number"
console.log(typeof name)     // "string"
console.log(typeof isActive) // "boolean"
console.log(typeof undefined) // "undefined"
console.log(typeof null)     // "object" (weird quirk of JS)
console.log(typeof {})       // "object"
console.log(typeof [])       // "object" (yes, arrays are objects)
console.log(typeof (() => {})) // "function"
