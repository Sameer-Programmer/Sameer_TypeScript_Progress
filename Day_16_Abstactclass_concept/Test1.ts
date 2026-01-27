/*

Abstract Class

An abstract class can have:

properties

abstract methods

normal (concrete) methods

To define an abstract method, the abstract keyword is mandatory

An abstract class:

❌ cannot create objects

✅ child class can create objects

Child class must implement all abstract methods

Final Revision Checklist 

✔️ Cannot create object
✔️ Can have constructor
✔️ Can have properties
✔️ Can have abstract + concrete methods
✔️ Child must implement abstract methods
✔️ Uses extends
✔️ Static allowed
*/



abstract class Bank {
name : string

    abstract bankdetails () : void ;

    constructor (name : string){
        this.name = name;

    }



}

class SBI extends Bank {

    bankdetails () : void {
        console.log(this.name)
    }

}

let sbi = new SBI("sbi");
sbi.bankdetails();
sbi.name = "Sameer"
//console.log(sbi.name)
sbi.bankdetails();
