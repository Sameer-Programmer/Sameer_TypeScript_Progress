/*
An Object has  group of properties and behaviour 
In techical point of view 
An Object contain Group of Variables and Methods 

- Object is a colection of key and value pairs  along with methods 
- every key is a variable 
- Properties  -key 
- behaviour -method 

To Perform certain action an Method is required 
- class is a Blue Print 

- in type with out using class also we can create the Obbjects 


Different ways to create the Object 
- using `object` type - Directly define the value for variable (JS/TS)
- inline Type Object - we also define the data type of the key (TS)
- Using type aliases (JS/TS)
- using the Class

// using 'object' type - directly define the values for variable 

In TypeScript, the type object is a very generic type.

👉 It only tells the compiler:

“This value is a non-primitive object.”

It does NOT describe:

what keys exist

what methods exist

what parameters methods take

So TypeScript blocks access to methods for safety.

*/


// if we specify the object keyword 
//we can create only Variables with key and value pair -properties but not method 
//Note : if you add the object type infromt of object -- out of object we can not call mehthods 

//1) - using `object` type - Directly define the value for variable (JS/TS)

let employee  =
{ name : "sameer",
 age : 30,
 designation : "QA",
 getdetails : function () {
   console.log(this.name , this.age ,this. designation)
 }
};

// using the dot notation 

employee.getdetails();

// my doubt is why this drawback in typescript if we mention type object we are not able to access
// the mthods out side of object 


// Approach -2  accessing the object with bracket notation 
// we can add 
console.log(employee["name"], employee["age"])
// Modify the value
employee.age = 31;

console.log(employee["name"], employee["age"])

//=========================================================
// 2 - InlineType Object - we also define the datatype of the key (TS)
// inside the Object It self we Sepecify the Type 


// Object Declaration – structure of the object

/*
🔹 Interview-ready answer 🔥

Arrow functions should not be used for object or
 class methods because they do not have their own this. 
 Instead, they capture this from the surrounding scope, 
 which leads to incorrect object references.
*/
let Car: {
  name: string;
  model: number;
  safetyGrade: string;
  getSummary: () => void; // arrow function returning nothing
} = {
  name: "AUDI",
  model: 2025,
  safetyGrade: "A",
  getSummary:function  ()  {
    console.log(
      `Car Name: ${this.name}, Model: ${this.model}, Safety Grade: ${this.safetyGrade}`
    );
  }
};
Car.getSummary();
