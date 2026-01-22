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


*/