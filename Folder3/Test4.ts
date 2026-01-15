// Print Numbers Divisible by 3 and 5 from 1 to 100 
// Count Number of Digits in a Number 
  
  
  let num = 123;
  let count = 0;
  let sum = 0;
  let reverse = 0
  
  for(num ; num !=0; num = Math.floor(num/10)){
    let lastdigit = num % 10;
    reverse = (reverse*10)+lastdigit
    sum = sum+lastdigit;
    count = count +1;
  }
  
  console.log(count)
  console.log(sum)
  console.log(reverse)