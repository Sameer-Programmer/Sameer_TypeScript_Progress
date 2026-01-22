//3 Using type aliases (JS/TS)
/*
To Overcome the Repetative Structure Creation 
Here in alias - we declare the object only once
 and the Implementation we can do for Multiple Objects 
 - we need to know type of Object 
*/
 type product = {
    name : string ,
    price : number ,
    getinfo () : void ; 
 };

 let book1 : product = { 
    name : " TypeScript",
     price : 499 ,
     getinfo :function () {
        console.log(this.name ," ",this.price)
     } 
 }
  let book2: product = { 
    name : " Java",
     price : 1499 ,
     getinfo :function () {
        console.log(this.name ," ",this.price)
     } 
 }

book1.getinfo();
book2.getinfo();
 

// things to Remember 
/*
- in Implementation Do not use arraow function because arrow function does not have their
own this key words 
- after the method is over do not use semicoloum ;
=============================

/*
Things to remember about Objects in TypeScript

1. Declare an object type using:
   key word - type ObjectName = { ... }

2. While declaring the object type, we can use an arrow function:
   getDetails: () => void;

3. While implementing the method, DO NOT use an arrow function
   if you want to use the `this` keyword.
   → Arrow functions do NOT have their own `this`.

4. A comma (,) must be used after every property.

5. While accessing object properties inside a method,
   always use the `this` keyword.
*/
