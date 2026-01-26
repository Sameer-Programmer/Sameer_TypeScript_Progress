/*
-inheritance we can acheive  in interface 
//TypeScript doesn’t control objects — it controls how objects are used.
    // if you observe age is not declared any where in above two unterfcaes but it work 
*/

interface Animal {
    name : string ;

}
interface Dog extends Animal {
    colour : string;
}

let dog = {
    name : "Bella ",
    colour: "Black "
}

// calling 
console.log(dog.name)
console.log(dog.colour)

let animal = {
    //  name : "Bella ",
    // colour: "Black "
    age : 22 

}
// console.log(animal.name)
// console.log(animal.colour)
console.log(animal.age)
