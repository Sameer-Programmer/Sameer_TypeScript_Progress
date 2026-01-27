/*
- No return No reuse so we have to return the function to use in otherfiles 
- A module is a separate file that contains reusable code (classes, functions, variables) 
which can be imported and used in other files.

now my goal is to use tihis below property , function  and class in other file test2.ts 
to acheive that we have  to use key word export 

/ export file we can not execute 
*/


export let appname = "calcy";

export function  add(a:number, b:number) {
return a+b;
}

export class Formatter {

    //name : string;

    static  uppercase(name : string){
      return name.toUpperCase();
    }

}
//console.log(Formatter.uppercase("sameer"));

