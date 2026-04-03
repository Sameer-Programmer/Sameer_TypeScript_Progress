
/* 
| Part                  | Meaning                       |
| --------------------- | ----------------------------- |
| `i !== j`             | don't compare same index      |
| `nums[i] === nums[j]` | values are equal              |
| Combined              | same value at different index |


*/


let nums : number = [1,1,2,3,4,5,5,6,7,1]

console.log(nums.length)

for(let i =0 ; i<nums.length; i++){
  let duplicate =false
  
  for(let j =0; j<nums.length; j++){   
    
    if(i!==j && nums[i] === nums[j]){  
      duplicate = true
      break;
    }
  }
  
  if(!duplicate){
    
    console.log(nums[i])
  }
}


// //shortcut by setmethd 

// let nums2 : number = [1,1,2,3,4,5,5,6,7,1]

// let unique = [...new Set(nums2)]
// console.log(unique)