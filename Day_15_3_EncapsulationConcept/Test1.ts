/* 
Defination of Encapsulation 

Encapsulation means - wrapping/ binding  of Data and Methods together in a class
Restricting the direct access through private access modifier 
but if we want to access them outside of the class we can achieve through getters and setters 

Encapsulation is an OOP concept where data (variables) and methods (functions) are wrapped together into a single unit called a class.

It is used to restrict direct access to the data using access modifiers like private, and provides controlled access through getters and setters.

*/



class Bank_260404_1127 {

    private nameofCustomer: string;
    private balance: number
    private deposit: number

    constructor(name: string, balance: number) {
        this.nameofCustomer = name;
        this.balance = balance;
    }

    getBalance(){
        return this.balance;
    }

    setBalance(balance: number) {
        this.balance = balance;
    }

       setDeposit(deposit: number) {
        this.balance = this.balance+ deposit
    }

     getDeposit() {
        return this.deposit
    }

    getNameofCustomer() {
        return this.nameofCustomer;
    }

    setCustomerName(name: string) {
        this.nameofCustomer = name
    }

}

let bank_260404_1127 = new Bank_260404_1127("Sameer", 10);

console.log(bank_260404_1127.getNameofCustomer());
console.log(bank_260404_1127.getDeposit());
console.log(bank_260404_1127.getBalance());

bank_260404_1127.setBalance(200000);
console.log(bank_260404_1127.getBalance());
bank_260404_1127.setDeposit(100000);
console.log(bank_260404_1127.getBalance());
