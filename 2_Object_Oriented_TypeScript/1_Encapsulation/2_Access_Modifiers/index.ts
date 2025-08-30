
// By default, all class members in TypeScript are PUBLIC.
// That means they can be accessed from anywhere (inside or outside the class).
// But we often need to control visibility for ENCAPSULATION (OOP principle).

class Student {
  // --- Public (default) ---
  // Public members can be accessed from anywhere.
  public name: string;

  // --- Private ---
  // Private members can ONLY be accessed inside the class where they are defined.
  // Private properties cannot even be inherited
  private rollNumber: number;

  // --- Protected ---
  // Protected members are like private, BUT they can also be accessed in derived (child) classes.
  // which means they can be inherited
  protected grade: string;

  constructor(name: string, rollNumber: number, grade: string) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.grade = grade;
  }

  // Public method
  public displayInfo(): void {
    console.log(`Student: ${this.name}, Roll No: ${this.rollNumber}, Grade: ${this.grade}`);
  }

  // Private method
  private secretNote(): void {
    console.log("This is a private note only accessible inside Student class.");
  }

  // Public method calling private method (valid)
  public revealSecret(): void {
    this.secretNote();
  }
}

// creating an object
let s1 = new Student("Karthik", 101, "A");

// Accessing public property and method
console.log(s1.name); // Allowed (public)
s1.displayInfo();     // Allowed (public)

// Accessing private property/method directly will give ERROR in TypeScript
// console.log(s1.rollNumber); // Error
// s1.secretNote();            // Error

// But private things can still be used inside public methods
s1.revealSecret(); // Works fine


// ----------------------PROTECTED -> IN INHERITANCE  
class HighSchoolStudent extends Student {
  constructor(name: string, rollNumber: number, grade: string, public schoolName: string) {
    super(name, rollNumber, grade); // call parent constructor
  }

  // Can access protected property 'grade' inside child class
  showGrade(): void {
    console.log(`${this.name} is in grade ${this.grade} at ${this.schoolName}`);
  }
}

let hs1 = new HighSchoolStudent("Mike", 202, "B", "JECRC");
hs1.showGrade();  // Works (protected accessible in child class)

// Trying to access protected property outside class will fail
// console.log(hs1.grade); // Error



// 1. public → accessible everywhere (default).
// 2. private → accessible only inside the same class.
// 3. protected → accessible inside the class + subclasses (child classes).
// 4. Access modifiers help implement ENCAPSULATION (data hiding).

