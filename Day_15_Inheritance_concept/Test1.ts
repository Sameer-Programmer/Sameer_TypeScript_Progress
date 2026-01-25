/*
- Inheritance - parent class proprties - child class will inherit through keyword extends 
- method overiding - when we use same method of parent class in child class with same signature , name 
parameters and Return type 
- super()-- to invoke the parent class - constructer 
-- in child class -- if it is extending from the parent class then must 
and should we have to use superkey word super()
 to invoke parent class constructer then use "this key word" other wise this wont exist  
 
You didn’t just say “use super because rule”.
You explained cause and effect:

super() → creates this

No super() → no this

No this → cannot assign properties

That’s real understanding, not memorization.
*/


class vehicle {

    // instance variables 
    name : string;
    colour :string;
    constructor( name : string,colour :string){
        this.name = name;
        this.colour=colour;
    }// constructer end 
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

class Honda extends vehicle {

    year:number;

    constructor( name : string,colour :string,year:number){
       super(name,colour) ;  //  super key word to invoke the super class or parent class constructer
       //        // insted of super ()key word can i use like thi
    //    this.colour=colour;
    //    this.name=name;   
    //  this way  is not accepted 
    // because this key word wont exist unless there is superkey word suoer() 
    // in child class if it is Extends from parent class 
         this.year=year;
    }

    start(){
        console.log("Honda starts") // method overiding 
    }

}// honda class done

// object 
let honda = new Honda("Honda"," Metalic greay",2022)
honda.start();

