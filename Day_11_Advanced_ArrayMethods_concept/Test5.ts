// “reduce() is used to accumulate array values into a single result.”


//reduce()

let basket : number[] = [1,2,3,4,5,6,7,8,9,10]


let box = basket.reduce((total ,element)=>{
  return total+element;
},0) // if the default value is zero no need to mentio 
//if you want to specify other than zero then we have to enter the data explicitly 

console.log(box)
