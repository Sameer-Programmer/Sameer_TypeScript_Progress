// String Compression
// input_str_c1: "aaabb" → output_str_c1: "a3b2"

let input_str_c1 = "aaabb";
let output_str_c1 = "" //a3b2"
  let count_str_c1 = 1
for(let i = 0; i<input_str_c1.length; i++){
  
    let ch = input_str_c1[i];
    let rch = input_str_c1[i+1];
    if(ch === rch){
        count_str_c1 = count_str_c1+1
    }else {
        output_str_c1 =output_str_c1+ch+count_str_c1
        count_str_c1 = 1
    }
}
console.log(output_str_c1)

/* 


// Compression with Repeat Again
// Input: "aabbaa" → Output: "a2b2a2"

let input_str_c1 = "aabbaa";
let output_str_c1 = "" //a3b2"
  let count_str_c1 = 1
for(let i = 0; i<input_str_c1.length; i++){
  
    let ch = input_str_c1[i];
    let rch = input_str_c1[i+1];
    if(ch === rch){
        count_str_c1 = count_str_c1+1
    }else {
        output_str_c1 =output_str_c1+ch+count_str_c1
        count_str_c1 = 1
    }
}
console.log(output_str_c1)
*/