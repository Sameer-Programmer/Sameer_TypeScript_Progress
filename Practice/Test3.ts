class Vehicle260404_0827 {
  
  readonly company : string;
  name : string;
  model: number;
  static ManufacturedLocation = "Banglore";
  
  constructor (company : string, 
    name : string,
    model: number,){
    
    this.company = company;
    this.name =name;
    this.model = model;
  }
  
  m1(){
    console.log(this.company);
    console.log(this.name);
    console.log(this.model);
  }

  static m2(){
    console.log(Vehicle260404_0827.ManufacturedLocation)
  }

  
}

let car260404_0827 = new Vehicle260404_0827("Tata","Nexon",2022);

car260404_0827.m1()
Vehicle260404_0827.m2()

car260404_0827.name = "Nexon EV";
console.log(car260404_0827.name);

//car260404_0827.company="hyd"

Vehicle260404_0827.ManufacturedLocation ="Hyd"

Vehicle260404_0827.m2()
