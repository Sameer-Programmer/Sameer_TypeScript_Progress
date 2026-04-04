//=========================================================
// 2 - InlineType Object - we also define the datatype of the key (TS)
// inside the Object It self we Specify the Type 


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
  getSummary ():  void; // arrow function returning nothing
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


// Problem with Inline Type object is Need to Repeat the Structure of every Object 