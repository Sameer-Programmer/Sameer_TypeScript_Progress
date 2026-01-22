/*
An Object has  group of properties and behaviour 
In techical point of view 
An Object contain Group of Variables and Methods 

- Object is a colection of key and value pairs  along with methods 
- every key is a variable 
- Properties  -key 
- behaviour -method 

To Perform certain action an Method is required 
- class is a Blue Print 

- in type with out using class also we can create the Obbjects 


Different ways to create the Object 
- using `object` type - Directly define the value for variable (JS/TS)
- inline Type Object - we also define the data type of the key (TS)
- Using type aliases (JS/TS)
- using the Class

// using 'object' type - directly define the values for variable 

*/


// if we specify the object keyword 
//we can create only Variables with key and value pair -properties but not method 
//Note : if you add the object type infromt of object -- out of object we can not call mehthods 
let employee  =
{ name : "sameer",
 age : 30,
 designation : "QA",
 getdetails : function () {
   console.log(this.name , this.age ,this. designation)
 }
};

employee.getdetails();







