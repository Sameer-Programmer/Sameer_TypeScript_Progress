//tsx Sameer_TypeScript_Progress/StringProblemKit/reverse.ts
let input1 = "MadaM";
console.log(Date.now())
let result_1775976700892 = "" //reemas -reverse patteren+append


for(let i = input1.length-1; i>=0; i--){
    let ch = input1[i]
    result_1775976700892 =result_1775976700892+ch ;
}

console.log(result_1775976700892)

if(input1 === result_1775976700892){
    console.log("Palindrome");
   // break;
}else{
     console.log("Not Palindrome")
}