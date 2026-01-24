/*
Method Overloading 
Constructer Overloading 
we have multiple signature of constructer Overloading  but single implementation 
*/
class Calicy {

    constructor (); // default 
    constructor (a:number, b:number);// Parameterized constructer 

    constructor(a?:number , b?:number){
        if((a!=undefined) && (b!=undefined)){
            console.log(a+b)
        }else {
            console.log(" hey man please  enter some thing to add atlease two number ")
        }
    }
    // Method overloading 

    multiply (a:number,b:number):void;
    multiply (a:number,b:number,c?:number):void;


    multiply(a:number,b:number,c?:number): void {
        if(c!= undefined){
            console.log(a*b*c)
        }else {
             console.log(a*b)
        }
    }




}

let obj1 = new Calicy(1,2);
let obj2 = new Calicy();
let obj3 = new Calicy();
obj3.multiply(1,2,3)


