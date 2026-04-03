// Directly define the value for variable (JS/TS)

let  emp = {
    name : "sameer",
    age  : 10,
    dispaly: function () {
        console.log(this.name,this.age)
    }
}

emp.dispaly();