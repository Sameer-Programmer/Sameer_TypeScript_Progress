
// call back function 
function m1(Patient_age :number){
    console.log(Patient_age)
}

m1(2);

function m2(name :string , callback :(age:number)=>void)
{
    console.log(name)
    callback(2)
}


m2(" Ameera",m1)