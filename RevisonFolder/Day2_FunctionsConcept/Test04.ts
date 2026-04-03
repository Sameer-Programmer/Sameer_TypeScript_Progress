
// function overloading 
/// think in the perspective of mobile number in contacts page 




function getinfo(customername : string ) : string 
function getinfo(customernumber : number) : string 

/* 
- Implementation 
 */

function getinfo (input : number|string):string {
  if (typeof input === "number") {  // so here we are using "number " as string 
    return input .toString()  // because out return type is string we are converting to string 
  }else {
    return input 
  }

  }


//call

console.log(getinfo(101))
console.log(getinfo("sameer"))

export {}
