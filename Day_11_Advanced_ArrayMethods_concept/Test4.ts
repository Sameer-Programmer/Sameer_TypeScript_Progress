


/*
==============================
        filter() METHOD
==============================

Definition:
filter() is an array method.

✔ It runs a function once for every element.
✔ It returns a NEW array.
✔ It keeps only elements that satisfy a condition.
✔ It does NOT modify the original array.
✔ It must return true or false.
*/

let nums: number[] = [1, 2, 3, 4, 5];


/*
---------------------------------
1️⃣ Basic Example
---------------------------------
Keep numbers less than 5
*/

let result1: number[] = nums.filter((value) => {
  return value < 5;
});

console.log("Result1:", result1);
// Output: [1, 2, 3, 4]


/*
---------------------------------
2️⃣ Short Arrow Version
---------------------------------
*/

let result2 = nums.filter(value => value > 2);

console.log("Result2:", result2);
// Output: [3, 4, 5]


/*
---------------------------------
3️⃣ Filter Even Numbers
---------------------------------
*/

let result3 = nums.filter(value => value % 2 === 0);

console.log("Result3:", result3);
// Output: [2, 4]


/*
---------------------------------
4️⃣ Returning Boolean Logic
---------------------------------
*/

let result4: boolean[] = nums.map(value => value > 2);

console.log("Result4:", result4);
// Output: [false, false, true, true, true]

Note:
filter() removes elements.
map() transforms elements.
*/


/*
---------------------------------
5️⃣ Filter Objects
---------------------------------
*/

let users = [
  { name: "Sameer", active: true },
  { name: "John", active: false },
  { name: "Sara", active: true }
];

let activeUsers = users.filter(user => user.active);

console.log("Active Users:", activeUsers);
/*
Output:
[
  { name: "Sameer", active: true },
  { name: "Sara", active: true }
]
*/


/*
---------------------------------
IMPORTANT RULES
---------------------------------

1. filter() always returns an array.
2. It keeps elements where condition is TRUE.
3. If condition is FALSE → element is removed.
4. If nothing matches → returns empty array [].
5. Always store filter() result in a variable.
*/


/*
---------------------------------
Difference: map vs filter
---------------------------------

map → Modify every element
filter → Keep only matching elements

Memory Line:
filter = Remove unwanted elements
*/