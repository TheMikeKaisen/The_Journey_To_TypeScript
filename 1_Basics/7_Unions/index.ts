/* ===== UNIONS IN TYPESCRIPT ===== */

// 1. Basic union
let value: string | number
value = "hello"
value = 123
// value = true // will provide you an error

// 2. Union with type alias
type ID = string | number
let userId1: ID = "1234"
let userId2: ID = 21345


// 3. Union in function parameter
function printId(id: string | number) {
    if (typeof id === "string") {
        console.log("ID (string): " + id.toUpperCase())
    } else {
        console.log("ID (number): " + (id + 1000))
    }
}

printId("user42")
printId(100)



// 4. Union in arrays
let data: (string | number)[] = ["Karthik", 123, "Mike", 456]
console.log(data)


// 5. Union with objects (Discriminated Unions)
type Circle = {
    kind: "circle"
    radius: number
}

type Rectangle = {
    kind: "rectangle"
    width: number
    height: number
}

type Shape = Circle | Rectangle

function area(shape: Shape): number {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    } else {
        return shape.width * shape.height
    }
}

let c: Shape = { kind: "circle", radius: 10 }
let r: Shape = { kind: "rectangle", width: 5, height: 4 }

console.log("Circle Area:", area(c))
console.log("Rectangle Area:", area(r))


// 6. Union with Literal Types
type Direction = "up" | "down" | "left" | "right"

function move(dir: Direction) {
    console.log("Moving", dir)
}

move("up")
move("left")
// move("forward")  Error (not allowed, since only 4 directions are valid)



