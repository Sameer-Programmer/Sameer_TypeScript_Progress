// Hybrid Frequency
// Input: "aaabbca" → Output: "a4b2c1"

// Anagram Check
// Input: "listen", "silent" → Output: true

let str1 = "listen"
let str2 = "silent"

let r1 = str1.split('').sort().join('')
console.log(r1)

let r2= str2.split('').sort().join('')
console.log(r2)

if(r1===r2) console.log('Anagram')