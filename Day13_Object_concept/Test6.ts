// constructor will never return a value
// constructer will invoke automatically no need to call 
// constructer is to assign data to the class variable 
// objects are independent 
// derived from the single class

/*
4. Using Classes (JS/TS)
Blueprint for creating multiple objects with same structure and behavior.

*/


class nalashaa {
  nameofEmployee : string;
  experiance : number;
  role : string;
  salary : number;
  
  constructor ( nameofEmployee : string,experiance : number,role : string,salary : number){
   this. nameofEmployee = nameofEmployee;
   this.experiance = experiance;
   this.role = role;
  this.salary = salary;
  }
  
  display() : void{
    console.log(this.nameofEmployee,this.experiance,this.role,this.salary);
  }
  
};

let record1 = new nalashaa(" sameer", 3.5 ,"QA",550000 );
record1.display();







