/*
A keyword in TypeScript is a reserved word that has a special meaning in the language
 and cannot be used as a variable, function, or class name.


“The interface defines the structure, the object implements it, 
and "this" key word is used to access object properties inside the method.”

What does readonly REALLY mean in an interface? 🧠
Simple definition (remember this 🔐)

readonly means: value can be ASSIGNED ONCE, but CANNOT be MODIFIED later

How readonly behaves in INTERFACE vs CLASS
1️⃣ readonly in an interface

Value must be set when object is created

You cannot change it later

There is NO constructor in interfaces

👉 Rule difference:

In class → constructor is the only place you can assign

In interface → object literal creation is the only place you can assign
*/



// design 
interface PatientData {
name : string ;
age  : number ;
dob ?: string ;
readonly caretaker : string;


patientDetails (): void ;

} // Interface done

// Implementation of Obj 

let patient1 : PatientData = {
name : "Robert",
age :  30 ,
caretaker :"john",

patientDetails (): void {
console.log(this.name , this.age, this.dob, this.caretaker); // if we don't specify the dob it will print undefined 
}

}// object done


let patient2 : PatientData = {
    name : "Raju",
    age  : 20 ,
    dob : "02-05-1990",
    caretaker : "suresh",
    patientDetails (): void {
console.log(this.name , this.age, this.dob);
}

}

// call 
patient1.patientDetails();
console.log(patient1.age)
patient2.patientDetails();

patient1.age =31;   // valid 
//patient1.caretaker="rahul " // not valid due to readonly 
patient1.patientDetails();


// summary 
/*One-line MEMORY TRICK 🧠✨

Interface readonly → set while creating object
Class readonly → set inside constructor
*/