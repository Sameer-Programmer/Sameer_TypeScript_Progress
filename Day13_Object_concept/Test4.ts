/*
we can intersect Multiple Types
we can combine multiple tyoes in to single type 
Interview-Ready Explanation ⭐

Intersection types allow us to combine multiple types into one.
An object created using an intersection type must satisfy all combined types, not just one.

Example answer:

“I use intersection types when I want an object to contain properties and methods from multiple types, ensuring strict type safety.”
*/
type personal = {name : string ,age: number}
type contact  = {email : string ,phone: number}
type additional = personal & contact &{
    getcontactinfo: ()=>void ;
}


let candidate : additional =  {
    name : "sameer",
    age: 30 ,
    email: "sameer@gmail.com",
    phone: 8686543168,
    getcontactinfo : function (){
      console.log(`${this.name} ${this.age} ${this.email} ${this.phone}`)  
    }
}
candidate. getcontactinfo();


//TypeScript checks types, JavaScript stores 
// values. Phone numbers fit safely but should be strings by design.

/*
6️⃣ Interview-Ready Answer 🧠🔥

“TypeScript does not store data; it only performs type checking at compile time.
At runtime, JavaScript stores numbers using a 64-bit floating-point format.
Phone numbers are safe within this range, but we usually store 
them as strings because they are identifiers, not values used for calculations.”
*/





