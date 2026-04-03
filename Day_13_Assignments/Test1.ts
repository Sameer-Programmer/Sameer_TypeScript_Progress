// cSpell:ignore sameer
// Directly define the value for variable (JS/TS)

let  emp = {
    name : "sameer",
    age  : 10,
    display: function () {
        console.log(this.name,this.age)
    }
}

emp.display();