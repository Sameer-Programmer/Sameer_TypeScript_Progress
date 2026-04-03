

function m1(username:string,password:string) :void
function m1(token:number) :void

function m1(value:string|number ,password?:string ){
    
    if(typeof value === 'string' && typeof password === 'string'){
      console.log(`${value} , ${password}`)
    }else {
       console.log(value)
    }
}

m1("Sameer","imran")

//Sameer_TypeScript_Progress\RevisonFolder\Day2_FunctionsConcept\Test6.ts
//tsx RevisonFolder/Day2_FunctionsConcept/Test6.ts  