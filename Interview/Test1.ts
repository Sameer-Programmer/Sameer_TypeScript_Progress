// Task one reverse the characters 


// String to array -split('')
// array to string
let input = 'Sameer Learning Typescript'
let reverse = ""
let words :string [] =[]

let arrayinput = input.split(" ")
console.log(arrayinput)
console.log(typeof arrayinput)

console.log(arrayinput[0])
console.log(typeof arrayinput[0])

console.log(arrayinput.length)

for(let i = arrayinput.length-1 ; i>=0; i--){
  
  //console.log(arrayinput[i])
  words.push(arrayinput[i])
}

console.log(words.toString())
console.log(words.join(" "))