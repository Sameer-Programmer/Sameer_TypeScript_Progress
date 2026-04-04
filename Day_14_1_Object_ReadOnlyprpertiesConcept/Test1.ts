/*
1) class 
2) Read only Properties
3) Optional Property 
4) Static variables and Methods 

🎯 Interview-Perfect Summary (You can say this confidently)

“Readonly properties can be initialized only once, usually via the constructor.
Optional parameters must come after required ones.
Static variables and methods belong to the class, not individual objects, 
are shared across all instances, and are accessed using the class name.
Static methods can access only static members.
Rule to remember forever:

Static methods must be declared inside the class and called using the class name.

🧠 One VERY IMPORTANT RULE you already followed (nice!)

Inside static methods:

❌ no this.empid

❌ no object data

✅ only static members

You respected that — excellent discipline 👍

by assigning the key word readonly we can assign the value only once 
-- that too only with constructor
-- we can not modify the value 
“Readonly properties can only be initialized in the constructor,
 and optional parameters must be placed after required parameters to avoid ambiguity.”

 -- Always Remember objects are independent 
*/


/*
when ever we wrote static before the variable or methods 
that property becomes the shared property accross all the objects

static properties we can access from class itself 

*/

class Nalashaa {
   readonly empid : number;
    name : string;
    role:  string;
    salary: number;
    bu?:   string;
    static manager: string = "Garry" ;// shared accross all the Objects
    


    constructor ( empid : number,name :string,  role:string,salary: number,bu?:string){
           this.empid = empid;
           this.name = name;
           this.role = role;
           this.bu = bu;  // if you dont pass the value then it will be undefined
           this.salary = salary; 
    }

    displayInfo():void {
        console.log(this.empid);
        console.log(this.name);
        console.log(this.role);
        console.log(Nalashaa.manager);
        console.log(this.salary);
        if(this.bu != undefined){
            console.log( this.bu);
        }
    }
             static getManagerDetails (){
                console.log(Nalashaa.manager);
             }

              static displayManagerDetails (): string {
                return Nalashaa.manager;
             }

             static changeManager(newManager: string):void {
                    Nalashaa.manager = newManager;
}



}

let emp1 = new Nalashaa(1704,"samer","QA",1000000,"NHS");
emp1.displayInfo();

console.log("====================");
// try to modify the id of employee 
let emp2 = new Nalashaa(1705,"Imran","Developer",16000000);
emp2.displayInfo();

console.log("===========================")

Nalashaa.getManagerDetails();

console.log(Nalashaa.displayManagerDetails());


console.log("change the Manager ")
Nalashaa.changeManager("Alex");

Nalashaa.getManagerDetails();
//now Teach me  from ground level 
/*
I have understood -
- Readonly means - we can provide value through constructor but not modify 
- optional means -- we have to implement at last not given as well we can print if provided 
- static variable - means we can share across all the objects , we can call with class name directly with out objects 
now teach me static variable and static methods 


==
1️⃣ First: Why do we need static at all?

👉 Normal properties

Belong to each object

Every object gets its own copy

👉 Static properties

Belong to the class itself

Only ONE copy exists

Shared by all objects

💡 Think like this:

Object = individual person
Class = company
*/

//  static Methods 
/*
👉 Why do we need static methods?

Answer:

When logic is common

When logic does NOT depend on object data

When method is utility/helper

Static variables and methods belong to the class, not to individual objects.
They are shared across all instances and accessed using the class name.
Static methods can access only static members.
*/
