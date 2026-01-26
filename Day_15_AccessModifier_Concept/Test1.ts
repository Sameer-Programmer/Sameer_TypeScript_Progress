/*
Access Modifier 
-public-- any where inside the project 
// private   → only inside the same class
// protected → inside class + child class

*/

class Basapura {
  public   name : string ;
  private  age : number;
  protected  gender : string ;

  constructor (name :string , age :number, gender : string){
    this.name = name;
    this.age = age;
    this.gender= gender;
  }
  display(){
    console.log(this.name)
    console.log(this.age)
    console.log(this.gender)
  }
  
}
class Maruti_layout extends Basapura{

    name = "Zameer";
    //age = 30 not accepted dur to private 
    gender = "Female"

    displaygender(): void {
        console.log(this.gender);
    }

}

let maruti = new Maruti_layout("Sameer",30,"Male");
maruti.display()

console.log("===========================")
console.log(maruti.name) // public
maruti.displaygender();
//console.log(maruti.gender) // protected  this is correct but dont use like this 
//console.log(maruti.age) // not accepted due to private 

//is my understanding is correct 
/*
Interview-level explanation 🎤

“We use this inside methods because class properties belong to the object, not the method. 
The this keyword tells JavaScript which object’s data the method should operate on.”
*/