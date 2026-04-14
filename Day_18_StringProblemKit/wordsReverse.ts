// reverse the words 
// Reverse words | Input: I love QA |
//Output: QA love I
let input = "I love QA";
let result =""
let arrayInput = input.split(" ")
console.log(arrayInput.length)

for(let i = arrayInput.length-1; i>=0;i--){
    result = result+arrayInput[i]+" "
}

console.log(result)