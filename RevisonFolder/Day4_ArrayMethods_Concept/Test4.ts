/*
==============================
        map() METHOD
==============================

Definition:
map() is an array method.

✔ It runs a function once for every element.
✔ It returns a NEW array.
✔ It does NOT modify the original array.
✔ It must return something inside.
*/

let nums: number[] = [1, 2, 3];


/*
---------------------------------
1️⃣ Basic Example
---------------------------------
Multiply each element by 2
*/

let result1: number[] = nums.map((value) => {
  return value * 2;
});

console.log("Result1:", result1); 
// Output: [2, 4, 6]


/*
---------------------------------
2️⃣ Short Arrow Version
---------------------------------
*/

let result2 = nums.map(value => value * 3);

console.log("Result2:", result2);
// Output: [3, 6, 9]


/*
---------------------------------
3️⃣ Using Index
---------------------------------
*/

let result3 = nums.map((value, index) => {
  return value + index;
});

console.log("Result3:", result3);
// Output: [1, 3, 5]


/*
---------------------------------
4️⃣ Returning Boolean
---------------------------------
*/

let result4: boolean[] = nums.map(value => value > 1);

console.log("Result4:", result4);
// Output: [false, true, true]


/*
---------------------------------
5️⃣ Returning Object
---------------------------------
*/

let result5 = nums.map((value, index) => {
  return {
    original: value,
    doubled: value * 2,
    position: index
  };
});

console.log("Result5:", result5);
/*
Output:
[
  { original: 1, doubled: 2, position: 0 },
  { original: 2, doubled: 4, position: 1 },
  { original: 3, doubled: 6, position: 2 }
]
*/


/*
---------------------------------
IMPORTANT RULES
---------------------------------

1. map() always returns an array.
2. Type depends on what you return.
3. If you don't return anything,
   result will be [undefined, undefined, ...]
4. Always store map() in a variable.
5. Use map() when you want to transform data.
*/


/*
---------------------------------
Difference: forEach vs map
---------------------------------

forEach → Just do something (no return)
map → Create new modified array (returns)

Memory Line:
map = Modify And Produce (new array)
*/