interface Userdetails {

  firstName: string,
  age: number,
  gender?:string,
  readonly organiation:string,
  getDetails: () => void
}



let person1: Userdetails = {

  firstName: "",
  age: 30,
  gender:"Male",
  organiation:"Nalashaa",

  getDetails() {
    if(this.gender!== undefined){
      console.log(`${this.firstName} ,${this.gender} ,${this.age} ,${this.organiation} `)
    }else {
       console.log(`${this.firstName} ,${this.age}`)
    }

  }

}

person1.getDetails()
person1.age = 31;
person1.firstName = "Ameer"
person1.getDetails()
//person1.organiation = "LG" due to readonly not accepted 