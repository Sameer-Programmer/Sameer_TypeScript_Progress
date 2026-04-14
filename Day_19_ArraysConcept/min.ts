let input = "9441053390"
let max = 0 
let min =0

for(let value of input){
    let ch = Number(value)

    if(ch>max){
        max = ch;
    }

    if(ch<min){
        min = ch 
    }

}

console.log(max)
console.log(min)