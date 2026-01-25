

class SameerElectricals {
  static owner :string ="Hussain Peera" ;
    employee?: string;
    static employsalary: number;
    customerName: string ;
    customermobilenumber : number;
    customerAddress: string;
    shopcontactnumber:number;
  readonly  tvModelname : string;

   constructor ( tvModelname : string,customerName: string,customerAddress: string,customermobilenumber : number,shopcontactnumber:number,employee?: string
    ){
        this.tvModelname = tvModelname;
        this.customerName = customerName;
        this.customerAddress= customerAddress;
        this.customermobilenumber =customermobilenumber;
        this.shopcontactnumber = shopcontactnumber;
        this.employee = employee;

    }

  
    static displayshopownerdetails() {
        console.log(` ${SameerElectricals.owner}`)

    }
     static changeshopownerdetails(newowner:string) : void {
       SameerElectricals.owner = newowner;
    }




    display(): void
    {
        if(this.employee === undefined) {
              console.log(`Hi ${this.customerName} you  have given  Tv for us to  Service  these  are the details please check  
            TV Model : ${this.tvModelname},
            your Address : ${this.customerAddress},
           for queries please conact our number : ${this.shopcontactnumber} 
           Thanks from the shopowner - ${SameerElectricals.owner}`)
           }else {
            console.log(`Hi ${this.customerName} you  have given  Tv for us to  Service  these 
            are the details please check  
            TV Model : ${this.tvModelname},
            your Address : ${this.customerAddress},
           for queries please conact our number : ${this.shopcontactnumber} ,
           servicedone by our Employee : ${this.employee} ,
           Thanks from the shopowner - ${SameerElectricals.owner}`)
        }
    }// method closed 


   

} // class finish 

// object creation 
let customer1 = new SameerElectricals("Sony",
    "Seenu",
    "Mugati",
    86865,
    944105,
    "Ramesh"
);
customer1.display();

SameerElectricals.displayshopownerdetails();
SameerElectricals.owner = " Sameerbhai"
SameerElectricals.displayshopownerdetails();

console.log("============================");

let customer2 = new SameerElectricals("Sony",
    "Ravi",
    "Mugati",
    868654,
    944105,
);
customer2.display();