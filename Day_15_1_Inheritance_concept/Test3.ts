// Inheritance 

class Animal {
  
  //instance properties- belongs to object 
  animal_name : string;
  behaviour : string;
  
  constructor (animalname : string, behaviour : string){
      this.animal_name = animalname ;
      this .behaviour = behaviour;
      console.log(this.animal_name , this.behaviour)
      // Here this Represents current object intance 
  }
  
  
  getinfo1(){
    console.log(this.animal_name , this.behaviour)
  }
  
  
}

let animal1 = new Animal("Lion","Wild");
animal1.getinfo1()
animal1.animal_name = "Tiger";
animal1.getinfo1()  // heresmall confusion is I have changes the instance varible how it got over rided 