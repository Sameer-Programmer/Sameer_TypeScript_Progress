/*
- foreach ()  -- void - iterates on each element 
- map ()  -- It Transform - creates a new Array - store -- return  and store in an Array
- filter () --creates a new Array and we can store them which pass the condition 
- reduced () -“Take all elements and combine them into one final result.”- return  and store in an Array
- some () -- some check if any elements satisfy the condition - return true or false 
-every() ---- some check if any elements satisfy the condition - return true or false 
- every method -- they will take function as a Parameter or It takes function as a Parameter
1) forEach () -Executes a function once for each array element 

// syntax- array.forEach(function(current value , index , array){})

// currentValue - the current element being processed in the array 
// index (optional ) - the index of the current element being processed in the array 


*/



let cart : string [] = ["sameer", "imran", "peera"]

// calling 

cart.forEach((element , index)=>{
  console.log (element , " ", index)
});




let test = [1,2,3,5]

console.log(typeof test)

test.forEach((element , index)=>{
  console.log(element," ",index)
  console.log(typeof(element))
})

// tsx Sameer_TypeScript_Progress/Day_11_Advanced_ArrayMethods_concept/Test1.ts
