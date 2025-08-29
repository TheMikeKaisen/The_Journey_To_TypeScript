
// Getters and setters are special methods that let me control how properties
// are read (get) and updated (set).
// Instead of directly accessing properties, I can add some logic in between.
// This gives me more control and safety.

class Account {
    private _balance: number; // I make this private so it can't be accessed directly

    constructor(initialBalance: number) {
        this._balance = initialBalance;
    }

    // Getter: used  to read the value
    get balance(): number {
        console.log("Getting balance...");
        return this._balance;
    }

    // Setter: used to update the value
    set balance(amount: number) {
        if (amount < 0) {
            console.log("Balance cannot be negative!");
        } else {
            console.log("Updating balance...");
            this._balance = amount;
        }
    }
}

// Create an object
let myAccount = new Account(1000);

// Using getter
console.log(myAccount.balance); // Calls the getter, prints: Getting balance... then 1000

// Using setter
myAccount.balance = 2000; // Calls the setter, prints: Updating balance...
console.log(myAccount.balance); // Now shows 2000

// If I try setting negative balance
myAccount.balance = -500; // Prints: Balance cannot be negative!
