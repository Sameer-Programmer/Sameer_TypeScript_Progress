
// call back function 
function m1(Patient_age :number){
    console.log(Patient_age)
}

m1(2);

function m2(name :string , callback :(Patient_age:number)=>void)
{
    console.log(name)
    callback(2)
}


m2(" Ameera",m1)

//Sameer_TypeScript_Progress\Day_9_Function_Callback_Overloading\Test1.ts