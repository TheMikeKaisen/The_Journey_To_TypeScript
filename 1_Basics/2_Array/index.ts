/* ARRAYS IN TYPESCRIPT */

/* 1. BASIC ARRAY TYPING */

// Type is inferred as number[]
let arr = [1, 2, 3, 4]

// Type is inferred as string[]
let arr2 = ["a", "b", "c", "hello"]

// Mixed type → union type: (string | number)[]
let arr3 = [1, 2, 3, "hello", "world"]

// Nested object in array → union of number | { name: string }
let arr4 = [1, 2, { name: "this is a string" }]

/* 
   Why is this useful?
   → Typescript INFERS AUTOMATICALLY from initial values,
     but we can override if needed for stricter typing.
*/


/* 2. EXPLICIT TYPE ANNOTATIONS */

// Only numbers allowed
let arr5: number[] = [1, 2, 3, 4]

// Error ❌ because "hello" is not number
// let arr6: number[] = [1, 2, 3, "hello"]

// Generic syntax (same as above)
let arr7: Array<number> = [10, 20, 30]


/* 3. TUPLES */

// Fixed length and fixed types at each position
let tuple1: [string, number] = ["age", 25]

// Error ❌ → must follow [string, number] order
// let tuple2: [string, number] = [25, "age"]

/* 
   Why useful? → Tuples are stricter than arrays.
   Good for returning multiple values from a function.
*/


/* 4. READONLY ARRAYS */

// Prevents modification
let readonlyArr: readonly number[] = [1, 2, 3]

// readonlyArr.push(4) // Error ❌


/* 5. ARRAY OF OBJECTS WITH TYPE */

// Define object structure
type Person = {
    name: string,
    age: number
}

// Enforcing array of Person objects
let people: Person[] = [
    { name: "Karthik", age: 21 },
    { name: "Mike", age: 22 }
]

// Error ❌ because 'id' is not allowed
// people.push({ id: 1 })

/* 
   Why? → This ensures every element of the array 
           strictly follows the Person structure.
*/


/* 6. MULTIDIMENSIONAL ARRAYS */

// Matrix type: number[][]
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]

