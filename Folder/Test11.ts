// void function 
// void with Parameters
// Return function 


function m1 ():void {
    console.log("sameer")
}

m1();

function m2 (x:number , y:string):void {
    console.log(x,y)
}

m2(1,"sameer");


function m3 (x1:number , y1:number):number {
    return x1+y1;

}

var result = m3(1,5)
console.log(result);