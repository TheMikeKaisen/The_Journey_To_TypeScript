// ---------------- GENERICS IN TYPESCRIPT ----------------
// In TypeScript, Generics allow us to write reusable and flexible code
// instead of hardcoding types, we can make them dynamic while still maintaining type safety.

// Example 1: A simple generic function
function identity<T>(value: T): T {
    // T is a placeholder type which gets decided when the function is used
    return value;
}

let strVal = identity<string>("Hello Generics");
let numVal = identity<number>(42);

// Without specifying explicitly, TypeScript can infer the type as well
let inferredVal = identity(true);


// Example 2: Generic with arrays
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

let firstNum = getFirstElement([10, 20, 30]);   // inferred as number
let firstStr = getFirstElement(["a", "b", "c"]); // inferred as string


// Example 3: Generics with multiple type parameters
function pair<K, V>(key: K, value: V): [K, V] {
    return [key, value];
}

let userPair = pair<string, number>("UserId", 101);


// Example 4: Generics with constraints (extends)
// Sometimes we want the type to have certain properties
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(item: T): void {
    console.log("Length is:", item.length);
}

// Works because string has a length property
logLength("Hello TS");
// Works because array also has length
logLength([1, 2, 3]);
// Will NOT work for number since it doesn't have length


// Example 5: Generic Classes
class Box<T> {
    private content: T;

    constructor(content: T) {
        this.content = content;
    }

    getContent(): T {
        return this.content;
    }

    setContent(newContent: T): void {
        this.content = newContent;
    }
}

let numberBox = new Box<number>(100);
console.log(numberBox.getContent());

let stringBox = new Box<string>("TypeScript Rocks!");
console.log(stringBox.getContent());


// Example 6: Generics with Interfaces
interface Repository<T> {
    data: T[];
    add(item: T): void;
    getAll(): T[];
}

class UserRepo implements Repository<string> {
    data: string[] = [];

    add(item: string): void {
        this.data.push(item);
    }

    getAll(): string[] {
        return this.data;
    }
}

let repo = new UserRepo();
repo.add("Karthik");
repo.add("Mike");
console.log(repo.getAll());


// Example 7: Default Generic Types
// If no type is provided, a default can be assigned
function createArray<T = number>(length: number, value: T): T[] {
    return Array(length).fill(value);
}

let numArray = createArray(3, 10);  // number[] by default
let strArray = createArray<string>(3, "hi");  // string[]
