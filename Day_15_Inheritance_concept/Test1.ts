/*
- Inheritance - parent class properties - child class will inherit through keyword extends 
- method overriding - when we use same method of parent class in child class with same signature , name 
parameters and Return type 
- super()-- to invoke the parent class - constructor 
-- in child class -- if it is extending from the parent class then must 
and should we have to use super keyword super()
 to invoke parent class constructor then use "this key word" other wise this wont exist  

You didn’t just say “use super because rule”.
You explained cause and effect:

super() → creates this

No super() → no this

No this → cannot assign properties

That’s real understanding, not memorization.

/*
Interview-ready statement 🎯

“Inheritance allows a child class to reuse parent functionality, 
but a parent reference cannot access child-specific methods.”
*/



class Vehicle {

    // instance variables 
    name : string;
    colour :string;
    constructor( name : string,colour :string){
        this.name = name;
        this.colour=colour;
    }// constructor end 
    start(){
        console.log("vehicle starts")
    }
    stop(){
        console.log("vehicle stops")
    }
    vehicledetailes(){
        console.log(`${this.colour} ,${this.name} `)
    }
}// class End

class Honda extends Vehicle {

    year:number;

    constructor( name : string,colour :string,year:number){
       super(name,colour) ;  //  super key word to invoke the super class or parent class constructor
    /* 
      //        // instead of super ()key word can i use like thi
    //    this.colour=colour;
    //    this.name=name;   
    //  this way  is not accepted 
    // because this key word wont exist unless there is super keyword super() 
    // in child class if it is Extends from parent class 
    */
         this.year=year;
    }

    start(){
        console.log("Honda starts") // method overriding 
    }
      yom(){
       console.log(`Manufactured in year is ${this.year}`) // method overriding 
    }
    

}// honda class done

// object 
let honda = new Honda("Honda"," Metalic greay",2022)
honda.start();
honda.vehicledetailes();
honda.stop();
honda.yom();

let car : Vehicle = new Honda("HondaElite","black",2012)
car.start();
car.vehicledetailes();
//car.yom();   // yom defined in child class but not there in parent 

