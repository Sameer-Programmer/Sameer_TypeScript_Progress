/*Loop
Reverse a number 
*/

let value1 = 123;
let reverse1 = 0;


while(value1 >0 ){
   let lastdigit = value1 % 10;
   reverse1= reverse1*10 +lastdigit
   value1 = Math.floor(value1 /10);
}
console.log(reverse1)

