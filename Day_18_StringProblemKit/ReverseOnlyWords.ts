let input = "I love QA";
let result = "";

let inputArray = input.split(" ")
console.log(inputArray)

for(let word of inputArray){
    let reveredword ="";
    
    for(let i =word.length-1; i>=0; i--){
        reveredword = reveredword+word[i]
    }
    
    result = result+reveredword+" "
    
}

console.log(result)

