// Separate Characters
// Input: "abc123@#" → Output: alphabets="abc", numbers="123", special="@#"

let input = "abc123@#"
let onlyalphabets = ""
let onlynums =""
let onlyspecchars=""

let count_apha = 0
let count_nums =0 
let count_spec =0

for(let i = 0; i<input.length; i++){
    let ch = input[i]
    let alphacheck = /[a-zA-Z]/.test(ch)
    let numscheck = /[0-9]/.test(ch)
    let speccheck = /[^a-zA-Z0-9]/
  
  if(alphacheck)  {
      onlyalphabets = onlyalphabets+ch
      count_apha =count_apha+1
  }else if(numscheck){
      onlynums =onlynums+ch;
      count_nums =count_nums+1
  }else if(speccheck){
      onlyspecchars = onlyspecchars+ch
      count_spec =count_spec+1
  }
    
}

console.log(onlyalphabets)
console.log(count_apha)

console.log(onlynums)
console.log(count_nums)


console.log(onlyspecchars)
console.log(count_spec)

/* 
abc
3
123
3
@#
2
*/