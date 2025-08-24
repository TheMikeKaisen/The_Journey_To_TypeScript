/* ENUMS in TypeScript */

// Basic enum: auto assigns values (starts from 0 by default)
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

// Using enum values
let move: Direction = Direction.Up
console.log("Move:", move) // 0

// Behind the scenes, enums in TS are compiled to JS objects 
// which support both forward and reverse mapping:
console.log(Direction.Up)       // 0
console.log(Direction[0])       // 'Up'  

/* STRING ENUMS */
// More readable — useful for logging / APIs
enum LogLevel {
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR"
}

let level: LogLevel = LogLevel.ERROR
console.log("Current level:", level) // "ERROR"

/* HETEROGENEOUS ENUMS */
// You can mix numbers & strings, but not recommended in practice
enum Mixed {
  No = 0,
  Yes = "YES"
}

/* USE CASE: enums make code more self-documenting */
// Example: restricting function input to predefined values
function respond(recipient: string, messageType: LogLevel): void {
  console.log(`${recipient} - ${messageType}`)
}

respond("Server", LogLevel.WARN)
// ✅ Valid, only accepts values from LogLevel enum
// respond("Client", "random") ❌ Error: Argument not assignable

/* CONST ENUM */
// `const enum` is completely removed at compile-time, 
// replaced with inlined values → better performance
const enum ConstDirection {
  Up,
  Down,
  Left,
  Right
}

let quickMove = ConstDirection.Left
console.log("Quick move:", quickMove) // 2
