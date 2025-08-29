"use strict";
/* ===== UNIONS IN TYPESCRIPT ===== */
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Basic union
let value;
value = "hello";
value = 123;
let userId1 = "1234";
let userId2 = 21345;
// 3. Union in function parameter
function printId(id) {
    if (typeof id === "string") {
        console.log("ID (string): " + id.toUpperCase());
    }
    else {
        console.log("ID (number): " + (id + 1000));
    }
}
printId("user42");
printId(100);
// 4. Union in arrays
let data = ["Karthik", 123, "Mike", 456];
console.log(data);
function area(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.width * shape.height;
    }
}
let c = { kind: "circle", radius: 10 };
let r = { kind: "rectangle", width: 5, height: 4 };
console.log("Circle Area:", area(c));
console.log("Rectangle Area:", area(r));
function move(dir) {
    console.log("Moving", dir);
}
move("up");
move("left");
// move("forward")  Error (not allowed, since only 4 directions are valid)
