// First Non-Repeating Character
// Input: "aabbcde" → Output: "c"

let input_1775978471055 = "aabbcde"
let result_1775978471055 = ""//c  count and break first 

for(let i = 0 ; i< input_1775978471055.length; i++){
    let ch = input_1775978471055[i]
    let count_1775978471055 = 0 
    
    for(let j =0 ; j<input_1775978471055.length; j++){
        if(input_1775978471055[j] == ch){
            count_1775978471055 = count_1775978471055 +1
        }
        
    }
    
    if(count_1775978471055 ==1){
        console.log(ch);
        console.log(Date.now())
        break;
    }
    
    
}