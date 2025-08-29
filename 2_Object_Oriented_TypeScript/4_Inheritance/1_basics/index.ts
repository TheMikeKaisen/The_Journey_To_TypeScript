
// Inheritance means one class (child) can "inherit" properties and methods 
// from another class (parent). 
// This allows me to reuse code and build hierarchies instead of repeating things.

// Parent Class
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // A common method for all animals
    makeSound(): void {
        console.log(`${this.name} makes a sound`);
    }
}

// Child Class 1
class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        // 'super' is used to call the parent constructor
        super(name);
        this.breed = breed;
    }

    // Overriding parent method
    makeSound(): void {
        console.log(`${this.name} barks`);
    }

    // Extra method only for Dog
    fetch(): void {
        console.log(`${this.name} is fetching the ball`);
    }
}

// Child Class 2
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): void {
        console.log(`${this.name} meows`);
    }
}


// Creating Animal Object
let genericAnimal = new Animal("SomeAnimal");
genericAnimal.makeSound(); // SomeAnimal makes a sound

let dog = new Dog("Buddy", "Golden Retriever");
dog.makeSound();  // Buddy barks   (overridden method)
dog.fetch();      // Buddy is fetching the ball

let cat = new Cat("Whiskers");
cat.makeSound();  // Whiskers meows

