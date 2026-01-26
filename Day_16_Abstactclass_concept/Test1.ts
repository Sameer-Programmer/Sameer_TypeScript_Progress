/*
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
