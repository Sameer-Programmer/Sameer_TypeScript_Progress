

/*
----------------------------------------
🔥 FINAL SUMMARY (IMPORTANT)
----------------------------------------

1. `?` makes property/parameter optional
2. Optional means → value can be undefined
3. Always keep optional parameter at the END
4. Check using: !== undefined
5. Use when value is not mandatory
6. Avoid wrong condition: !value === undefined

----------------------------------------
*/



class Vehicle260404_1031 {

  name: string;
  model: number;
  battery?: boolean;

  constructor(name: string, model: number) {
    this.name = name;
    this.model = model;
  }

  start() {
    console.log(`vehicle gets started`)
  }

  getDetails(){
     console.log(`${this.name}  , ${this.model}`)
  }


}

class Car260404_1031 extends Vehicle260404_1031 {

  price :number

constructor(name:string, model:number,price:number , battery?: boolean){

  super(name, model);
  this.price = price;
  this.battery = battery;

}

 start() {
    console.log(`vehicle gets started`)
  }

  getInfo(){
      if(!this.battery  === undefined){
    console.log(this.price ," " ,this.battery)
    super.getDetails()  
      }else {
           console.log(this.price)
    super.getDetails()   
      }
 
  }


}

let car1260404_1031= new Car260404_1031("volvo",2000,5000000)

car1260404_1031.getInfo()

let car2260404_1031 = new Car260404_1031("volvo",2000,3000,true)

car2260404_1031.getInfo()

// super inside method i can use above or below this but inside constutor i have use super frst then this right because this is not exist there there is no super right in child class constructer