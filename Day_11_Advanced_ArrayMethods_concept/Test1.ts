/*
forEach()
map()
filter()
reduce()
some()
every()
- every method -- they will take function as a Parameter or It takes function as a Parameter
1) forEach () -Executes a function once for each array element 

// syntax- array.forEach(function(current value , index , array){})

// currentVaue - the current element being processed in the array 
// index (optional ) - the index of the current element being processed in the array 


*/



let cart : string [] = [" sameer", " Imran", " Peera"]

// calling 

cart.forEach((element , index)=>{
  console.log (element , " ", index)
});
