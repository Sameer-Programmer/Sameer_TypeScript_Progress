// cSpell:ignore sameer
// inline 

// declaration 
let product : {
name : string,
age : number
display1(): void ;

} ={

    name : "sameer",
    age  : 10,
    display1: function (){
         console.log(this.name,this.age)
    },

}

product.display1();