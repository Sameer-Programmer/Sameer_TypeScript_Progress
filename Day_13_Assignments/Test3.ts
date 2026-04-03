type vehicle = {
    name : string,
    price : number,
    display2(): void 
}

let bike :vehicle = {
    name : " ActiveHonda",
    price : 2000,
    display2 : function(){
        console.log(this.name , this.price)
    }
}

let car :vehicle = {
    name : " GrandVistara",
    price : 12000,
    display2 : function(){
        console.log(this.name , this.price)
    }
}

bike.display2();
car.display2();