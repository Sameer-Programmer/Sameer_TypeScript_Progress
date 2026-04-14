// Remove Duplicates
// Input: "aabbcc" → Output: "abc"

/* 
// Remove Duplicates (Mixed)
// Input: "abca" → Output: "abc"
*/
let input1775977576648 =  "aabbcc"
let output1775977576648 = ""//abc
for(let i = 0; i<input1775977576648.length; i++){
    let ch = input1775977576648[i]
    let foundFlag = false
    for(let j=0; j<output1775977576648.length;j++){
      if(output1775977576648[j] == ch)  {
          foundFlag = true;
          break;
      }
    }
    
    if(!foundFlag){
        output1775977576648 = output1775977576648+ch
    }
    
}

console.log(output1775977576648)

// tsx Sameer_TypeScript_Progress/StringProblemKit/removeDuplicates.ts