/*
1) class 
2) Read only Properties
3) Optional Property 
4) Static variables and Methods 

by assigning the key word readonly we can assign the value only once 
-- that too only with constructer
-- we can not modify the value 
*/

class Nalashaa {
   readonly empid : number;
    name : string;
    role:  string;
    salary: number;
    bu?:   string;
    


    constructor ( empid : number,name :string,  role:string, salary: number,bu?:string){
           this.empid = empid;
           this.name = name;
           this.role = role;
           this.bu = bu;  // if you dont pass the value then it will be undefined
           this.salary = salary;
    }

    displayInfo():void {
        console.log(this.empid);
        console.log(this.name);
        console.log(this.role);
        console.log(this.salary);
        if(this.bu != undefined){
            console.log( this.bu);
        }
    }
}

let nalashaa = new Nalashaa(1704,"samer","QA",60000);
nalashaa.displayInfo();