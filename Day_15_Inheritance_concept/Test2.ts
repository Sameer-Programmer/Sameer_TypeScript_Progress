/*
super() - to invoke the immediate parent class constructer
super - used to invoke the Immediate Parent class method 
super - in Typescript  can not be usd to invoke the parent class property but in java we can access 
🧠 Simple rule to remember (EXAM / INTERVIEW)

super() → only in child constructor
super.method() → only in child instance methods
*/

class Parent {
     a:number = 10;
     constructor() {
        console.log("parent class constructer")
     }

     display (){
        console.log("parent class display method")
     }

}

class Child extends Parent{
    a:number = 20; // property overriding
     constructor() {
        super(); // this will call the parent class constructer
        console.log("child  class constructer")
     }

     show(){
       // console.log(super.a)-- 
       /*
       super.a wont work in TypeScript to access parent class variable  but java supports this feature
       */
         super.display(); // this will call or invoke the Parent class Method 
         console.log(this.a)
         console.log("child  class show method")
     }

     display (){
        super.display();
        console.log("child class display method") // overriding 
     }
}

// object of child class 
let c1 = new Child()
c1.show();
c1.display();