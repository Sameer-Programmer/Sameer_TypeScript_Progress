let givenInput = "9441053370";

let arr=givenInput.split('').map(Number)
console.log(arr)
console.log(typeof arr)
//let arr: number[] = [];

let even: number[] = [];
let odd: number[] = [];
let evenCount = 0;
let oddCount = 0;
let sum =0

for (let i = 0; i <= arr.length - 1; i++) {
  let ch = arr[i];
  sum = sum+ch
  if (ch % 2 === 0) {
    even.push(ch);
    evenCount++;
  }  else  {
    odd.push(ch);
    oddCount++;
  }
}
console.log(even,"Even");
console.log(odd,"Odd");
console.log(evenCount,"evenCount");
console.log(oddCount,"oddCount");
console.log(sum,"Sum")