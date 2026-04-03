/* 
Function Overloading - same FunctionName 
*/


function m1(name:string):void;
function m1(id:number):void;

function m1(value : string|number): void {
    if(typeof value === 'string'){
        console.log(`${value}`)
    }else {
        console.log(`${value}`)
    }
}
m1(2)

//Sameer_TypeScript_Progress\RevisonFolder\Day2_FunctionsConcept\Test05.ts