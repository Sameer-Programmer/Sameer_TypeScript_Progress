


let todayname:string = "sameer";
let reversename:string  = "";

for(let i =todayname.length -1 ; i>=0 ;i--){
   // reversename = reversename+todayname[i]
    reversename = reversename+todayname.charAt(i)
}

console.log(reversename)