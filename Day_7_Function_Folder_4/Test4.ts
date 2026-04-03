// types of function in typescript

//named function 


function m1():void {
    let a =10;
    let b =20 ;
    let sum = a+b // after sum it is returning sim but we are not printing so we will get undefined becaused we never used 
    //console.log(sum)
}

console.log(m1())

/* 
// types of function in typescript

//named function 



| Situation                          | Output              |
| ---------------------------------- | ------------------- |
| `console.log(sum)` inside function | prints value        |
| `return sum`                       | gives value back    |
| neither used                       | returns `undefined` |


*/