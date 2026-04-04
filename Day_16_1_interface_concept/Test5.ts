interface Design1 {
firstName:string
}

interface Design2 {
lastname:string
display : () => void
}





let person1: Design1 & Design2 = {

firstName : "Sameer",
lastname:"Lastname",

display(){
console.log(this.firstName, this.lastname)
}

}


person1.display()