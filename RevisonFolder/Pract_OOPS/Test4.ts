// =======================================
// POLYMORPHISM - METHOD OVERLOADING
// =======================================

// Definition:
// Method overloading means same method name
// but different parameter lists.
// In TypeScript, this is achieved using
// multiple method signatures + one implementation.

class Calcy {

  // ---------------------------------------
  // 1️⃣ Constructor
  // ---------------------------------------
  // If we don't define a constructor,
  // TypeScript automatically creates:
  // constructor() {}
  // That is called default constructor.

  // ---------------------------------------
  // 2️⃣ Method Overloading - Declarations
  // ---------------------------------------

  m1(a: number, b: number): void;
  m1(a: number, b: number, c: number): void;

  // ---------------------------------------
  // 3️⃣ Implementation (Single Method Body)
  // ---------------------------------------

  m1(a: number, b: number, c?: number): void {

    // Here a, b, c are LOCAL VARIABLES
    // They exist only inside this method.

    if (c !== undefined) {
      console.log("Sum of 3 numbers:", a + b + c);
    } else {
      console.log("Sum of 2 numbers:", a + b);
    }

  }
}

// ---------------------------------------
// 4️⃣ Object Creation
// ---------------------------------------

let p1 = new Calcy();

// ---------------------------------------
// 5️⃣ Method Calls
// ---------------------------------------

p1.m1(1, 2);        // Output: Sum of 2 numbers: 3
p1.m1(1, 2, 3);     // Output: Sum of 3 numbers: 6


// =======================================
// IMPORTANT NOTES (INTERVIEW POINTS)
// =======================================

// ✔ If constructor is not defined,
//   TypeScript creates a default empty constructor.

// ✔ a, b, c inside m1() are local variables,
//   not instance variables.

// ✔ Method overloading works at compile time only.
//   JavaScript does not support true overloading.

// ✔ TypeScript allows only ONE implementation
//   but multiple declarations.