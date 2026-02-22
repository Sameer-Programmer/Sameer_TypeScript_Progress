
/* 

Layman -idea
1) Declaration - same and different data types
2) length - not method 
3) index  starts from -> 0 , length starts from -> 1
4) for loop -- Gneral -- initilization , condition (through length) , range 
5) for in loop -- No Range 

syntax for(let i in arrayname) {
console.log(arrayname[i])
}



6) for value of data -- No Index with variable 

syntax 

for(let value of arrayname ) {
console.log(value)
}

7) Array as aParameter inside the function 
 */






// ==========================================
// 📘 TypeScript Arrays – Complete Notes
// ==========================================



// 1️⃣ DECLARATION

// ✔ Same Data Type (Recommended)
let numbers: number[] = [1, 2, 3];

// ✔ Another way
let namess: Array<string> = ["Sameer", "Ali", "John"];

// ✔ Different Data Types (Not Recommended)
let mixed: any[] = [1, "Sameer", true];



// ==========================================
// 2️⃣ LENGTH PROPERTY
// ==========================================

// length is a PROPERTY (Not a method)

let arr = [10, 20, 30];

console.log(arr.length); // 3

// ❌ Wrong
// arr.length();  // Error



// ==========================================
// 3️⃣ INDEX vs LENGTH
// ==========================================

// Index starts from 0
// Length gives total number of elements

let example = [100, 200, 300];

// Index:
// 100 -> 0
// 200 -> 1
// 300 -> 2

// Length = 3



// ==========================================
// 4️⃣ FOR LOOP (General Loop)
// ==========================================

// Used when full control is required

for (let i = 0; i < example.length; i++) {
    console.log("Index:", i);
    console.log("Value:", example[i]);
}



// ==========================================
// 5️⃣ FOR...IN LOOP
// ==========================================

// Used to get index
// No manual range required

for (let i in example) {
    console.log("Index:", i);          // gives index
    console.log("Value:", example[i]); // access value using index
}



// ==========================================
// 6️⃣ FOR...OF LOOP
// ==========================================

// Used to get value directly
// No index variable needed

for (let value of example) {
    console.log("Value:", value);
}



// ==========================================
// 🎯 QUICK SUMMARY
// ==========================================

// ✔ Array size is dynamic
// ✔ length is a property
// ✔ Index starts from 0
// ✔ length gives total count
// ✔ for → full control
// ✔ for...in → gives index
// ✔ for...of → gives value directly

