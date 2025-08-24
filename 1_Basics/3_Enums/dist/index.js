"use strict";
/* ENUMS in TypeScript */
Object.defineProperty(exports, "__esModule", { value: true });
// Basic enum: auto assigns values (starts from 0 by default)
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
// Using enum values
let move = Direction.Up;
console.log("Move:", move); // 0
// Behind the scenes, enums in TS are compiled to JS objects 
// which support both forward and reverse mapping:
console.log(Direction.Up); // 0
console.log(Direction[0]); // 'Up'  
/* STRING ENUMS */
// More readable — useful for logging / APIs
var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "INFO";
    LogLevel["WARN"] = "WARN";
    LogLevel["ERROR"] = "ERROR";
})(LogLevel || (LogLevel = {}));
let level = LogLevel.ERROR;
console.log("Current level:", level); // "ERROR"
/* HETEROGENEOUS ENUMS */
// You can mix numbers & strings, but not recommended in practice
var Mixed;
(function (Mixed) {
    Mixed[Mixed["No"] = 0] = "No";
    Mixed["Yes"] = "YES";
})(Mixed || (Mixed = {}));
/* USE CASE: enums make code more self-documenting */
// Example: restricting function input to predefined values
function respond(recipient, messageType) {
    console.log(`${recipient} - ${messageType}`);
}
respond("Server", LogLevel.WARN);
// ✅ Valid, only accepts values from LogLevel enum
// respond("Client", "random") ❌ Error: Argument not assignable
/* CONST ENUM */
// `const enum` is completely removed at compile-time, 
// replaced with inlined values → better performance
var ConstDirection;
(function (ConstDirection) {
    ConstDirection[ConstDirection["Up"] = 0] = "Up";
    ConstDirection[ConstDirection["Down"] = 1] = "Down";
    ConstDirection[ConstDirection["Left"] = 2] = "Left";
    ConstDirection[ConstDirection["Right"] = 3] = "Right";
})(ConstDirection || (ConstDirection = {}));
let quickMove = ConstDirection.Left;
console.log("Quick move:", quickMove); // 2
