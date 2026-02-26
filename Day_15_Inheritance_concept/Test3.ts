// Inheritance 

class Animal {
  
  //instance properties- belongs to object 
  animalname : string;
  behaviour : string;
  
  constructor (animalname : string, behaviour : string){
      this.animalname = animalname ;
      this .behaviour = behaviour;
      console.log(this.animalname , this.behaviour)
      // Here this Represents current object intance 
  }
  
  
  getinfo1(){
    console.log(this.animalname , this.behaviour)
  }
  
  
}

let animal1 = new Animal("Lion","Wild");
animal1.getinfo1()
animal1.animalname = "Tiger";
animal1.getinfo1()  // heresmall confusion is I have changes the instance varible how it got over rided 