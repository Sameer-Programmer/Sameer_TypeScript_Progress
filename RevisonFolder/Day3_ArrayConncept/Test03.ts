/* 

Things to remember while Dealing with Parameter  inside the function 
- Given Array , Wanter Array just Declare
- Inside function We have Specify the Type of array we are Providing then Return type 
- One more is key word return comes after the loop 
/*
Magic syntax is solving 
function m1(given , wanted) : return type {
}

*/



// Search for an Element 


let nums : number[] = [1,2,3,4,5,6]  // given
let target : number ;  // wanted 

/*
Magic syntax is solving 
function m1(given , wanted) : return type {
}
*/

function searchElement(nums:number[] , target : number) : boolean {
  let flag = false ;
 for(let values of nums){
  if(values == target){
    flag = true
    break;
  }

 }

 if(flag){
  return true
 }else {
  return false
 }

  }


console.log(searchElement(nums,40))


//Function Returning an Array

let givenData : string [] = ["Sameer", "Imran"]
let wantedData : string [] = [];


function CapitalWords(givenData : string []  ) : string[] {
  let result :string [] = []
  let i = 0
for (let value of givenData){
result[i]= value.toUpperCase()    // it brings single string 
i++
}

return result

}

console.log(CapitalWords(givenData))

