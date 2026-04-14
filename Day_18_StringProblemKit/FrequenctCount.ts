// Frequency count_1775978140591
// input_1775978140591: "aabbc" → output_1775978140591: "a2b2c1"

let input_1775978140591 = "aabbc"
let output_1775978140591 = "" //a2b2c1 compare and count_1775978140591 and reset logic 

let count_1775978140591 = 1 ;
 for(let i = 0 ; i<input_1775978140591.length ;  i++ ){
     let ch = input_1775978140591[i];
     let adj_ch=input_1775978140591[i+1];
     if(ch === adj_ch){
         count_1775978140591 = count_1775978140591+1
     }else {
        output_1775978140591 = output_1775978140591+ch+count_1775978140591;
        count_1775978140591 = 1 // reset 
     }
    
 }
 
 console.log(output_1775978140591)