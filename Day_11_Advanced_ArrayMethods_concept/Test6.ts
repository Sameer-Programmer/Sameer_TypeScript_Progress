
// 5. some() - check if any element satisfies a condition 

// returns true if an atleast one element pass the condition , else false 
// syntax : array.some(function ( current value , index , array) {}))


let basket_A : string [] = ["  sameer" ,"Imran"]

let output =basket_A.some((element) =>{
 
 return element.trim().toUpperCase() === "IMRAN"
} )

console.log(output)