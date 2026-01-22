// constructer is used assigning the data to the class variables 
/*
1️⃣ What is a Constructor? (Simple English)

A constructor is a special method used to assign data to class variables when an object is created.

✔ It runs automatically
✔ It runs only once per object
✔ Used for initializing values



*/

class Person {
    name : string ;
    age : number;
    
    constructor( name : string , age : number) {
        this.name =name;
        this.age = age;
    };
    
   getinfo(): void {
    console.log(this.name, this.age);
    }
}

let person1 = new Person("Sameer", 30);
person1.getinfo();