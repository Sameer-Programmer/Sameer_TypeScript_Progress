// types of function in typescript

//named function 
//Rest Parameters 

function m1(...elements:number[]){

}

function  m3 (x:number ,y=10){

        return x+y
    }
    

console.log(m3(1,4)) //5
console.log(m3(1)) //11