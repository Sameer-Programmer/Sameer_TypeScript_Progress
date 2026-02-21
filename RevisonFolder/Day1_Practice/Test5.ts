// Loops

/*
When working with loops, we need to provide 3 things:

1. Initialization
2. Condition
3. Increment (or Decrement)

 Use while when you want to check the condition before execution.
 Use do-while when you need the loop to run at least once.

*/

// whileLoop --keep on Executing untill the condition is true 


let i = 1;

while(i<=6){
    console.log(i)
    i++;
}


// do whileloop 


//syntax 

/*
do {
  
}while(condiiton )

*/

let j = 6 ;

do {
  console.log(j) //6
  j++; //7
}while(j<=7)


/*
//output
Output:

176 ms
6
7

*/


for (let k =0 ; k<10; k++){



if(k==5){
  continue  // it act as jump statement 
}

if(k==8){
  break;    // Loop will exit here 
}

console.log(k)

}