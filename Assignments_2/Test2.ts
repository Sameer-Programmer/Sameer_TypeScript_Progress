// to check the biggest number in the given number

let givennumber = 67892
let biggestnumber =0;
let lastdigit

for(givennumber = 67892; givennumber!=0; givennumber=Math.floor(givennumber/10)){
    lastdigit = givennumber % 10;
    if(lastdigit>biggestnumber){
        biggestnumber = lastdigit
    }
}
console.log(biggestnumber)