class Vehicle {
  name: string;
  model: number;
  battery?: boolean
    constructor(name: string, model: number) {
    this.name = name;
    this.model = model;
  }
  start() {
    console.log(`vehicle gets started`)
  }
  getdetails(){
     console.log(`${this.name}  , ${this.model}`)
  }

}

class Car extends Vehicle {

  price :number

constructor(name:string,model:number,price:number , battery?: boolean){

  super(name,model);
  this.price = price;
  this.battery = battery;

}

 start() {
    console.log(`Car  gets started`)
  }

  getinfo(){
      if(this.battery  !== undefined){
    console.log(this.price ," " ,this.battery)
    super.getdetails()  
      }else {
           console.log(this.price)
    super.getdetails()   
      }
 
  }


}

let car1= new Car("volvo",2000,5000000)

car1.getinfo()
car1.start() // method Overriding Example correcr right 

let car2 = new Car("volvo",2000,3000,true)
car2.getinfo()

// super inside method i can use above or below this but inside constutor i have use super frst then this right because this is not exist there there is no super right in child class constructer