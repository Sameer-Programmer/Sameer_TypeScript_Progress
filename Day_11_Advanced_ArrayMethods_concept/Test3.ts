// methods in Array 

/*
2 -map() - creates a new array with the result of calling the function
on every element of array 

-- very important -- it always return  a new array that array 
we have to store in another array and print in console 

- It takes function as a parameter 
- return same number of elements that we have in original array 
- synatx 


    array.map((element, index, array) => {
    return newValue;
    });

// Note Store the result in a New Array 

*/

// const datainfo = Date.now()
// console.log(datainfo)

let cart4_test1775231940581  : number [] = [1,2,3]

let container =cart4_test1775231940581.map((element ): number => {
         return (element*element)
});

console.log(container)

