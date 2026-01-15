//OverloadedFunctions

// Step 1 - write a signature of function 
//A function without having a bosy is called a signature 
// step 2 - Implement a function 
// step 3 - Calling a function 

///example - Different Parameter Types

function getinfo(id:number) :string ;
function getinfo(name:string) :string ;


function getinfo (value : number | string ):string {
if(typeof value === "number"){
    return `user id is ${value}`
}else {
    return `user name is ${value}`
}
}


let result1 = getinfo(101);
console.log(result1)
let result2 = getinfo("sameer");
console.log(result2)