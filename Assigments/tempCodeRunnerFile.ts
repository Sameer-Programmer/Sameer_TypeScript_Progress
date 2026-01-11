/*Loop
Reverse a number 
*/

let value = 123;
let reverse = 0;


while(value >0 ){
   let lastdigit = value % 10;
   reverse = lastdigit*0 +lastdigit
   value = value /10;
}
console.log(reverse)