function m1(add:number){
  console.log(add)
}

function m3(sub:number){
  console.log(sub)
}


function m2(a:number, b:number, callback1 :(add:number)=>void
, callback2 :(sub:number)=>void){
  let add = a+b;
  let sub = a-b;
   callback1(add)
   callback2(sub)
}




m2(10,20,m1,m3)
