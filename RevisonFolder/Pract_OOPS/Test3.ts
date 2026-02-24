/*✅ Why?

Because:

Constructor → runs for every object creation

Static property → belongs to class, not to object

So constructor is for instance properties, not static ones.
*/
class Bikee  {
    
  
  colour :string ;
  model : number;
  readonly modelname :string; // we can modify only under Constructer 
  static company : string = "Honda" //shared accross all objects 
  price?:number;   // Optional property comes atlast 

  static getCompanyDetails (){
    console.log(Bikee.company)
    
  }
  

  constructor (colour :string, model : number ,modelname :string,price?:number){
      
      this. colour = colour;
      this.model = model ;  
      this.modelname = modelname;
      this.price = price
 
  }
  
  display (){
     if(this.price !== undefined)
        {
         console.log(
      this.modelname ,
      this. colour ,
      this.model ,
      Bikee.company,   // here for static property this not required 
      this.price )
     } else { 
          console.log(
      this.modelname ,
      this. colour ,
      this.model ,
     Bikee.company, )
     
  }
}
}

let bikee : Bikee= new Bikee ("red", 2002,"HondaActive")
bikee.display () 
Bikee.getCompanyDetails()




// this is what i under stood -- explain me from here 
/*
-no

in side method if we want to print the static property 
we have to call calllname.statuc property 
why not this.statuc property 

Because this refers to the current object instance, and static properties belong to the class,
 not to individual objects. Therefore, we must access static properties using the class name.
 */


