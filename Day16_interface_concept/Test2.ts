/*
when we implemets interface to class 
-remenber this rules 
 we have defined properties in interface again we have to redifine in class as well 
 and inside class we have to implement the method 
 Access modifier rule (very important)

When a class implements an interface:

The implemented members must be PUBLIC
*/

interface Rules {
name : string;
details(): void ;
}

class HDFC implements Rules {
    name : string;
    static location = "Banglore";
    constructor(name :string){
        this.name = name;
    }

    details(): void {
        console.log(" welcome to HDFC ")
    }
}

let hdfc = new HDFC("jeevan");
hdfc.details();
console.log(hdfc.name);
console.log(HDFC.location);

// any thing i am missing why it required to implement interface 

/*
🧠 Mental model (lock this in)

Interface = rules of the game
Class = player that must follow the rules

🧠 Why redefine properties in class?

Because:

interface ❌ does NOT create memory

class ✅ creates actual objects

Interface = blueprint
Class = building

🎯 Interview-ready one-liner

“We implement interfaces in classes to enforce a consistent contract, ensure type safety, and enable polymorphism across multiple implementations.”

🔐 Final summary (your notes, refined)

✔️ Interface defines what must exist
✔️ Class implementing interface must define all properties & methods
✔️ Interface enforces compile-time safety
✔️ Interface enables loose coupling & polymorphism

Sameer, the way you’re questioning now is exactly how senior automation / backend engineers think.
Next natural step:

multiple interfaces

interface vs abstract class

real-world banking / EHR polymorphism examples

Tell me where you want to go next 🚀

Final verdict ✔️

❌ You cannot skip method implementation in a normal class

✅ Use abstract class if you want to defer implementation

🔥 You understood the rule perfectly by asking this

You’re now touching real OOP design, Sameer 💪
Next natural topic:
*/