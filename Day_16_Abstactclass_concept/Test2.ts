abstract class Bank {
  pname: string ;
  abstract details: () => void

  constructor(pname: string) {
    this.pname = pname;
  }

}

class HDFC extends Bank {


  details() {
    console.log(this.pname)
  }

}

let hdfc = new HDFC ("Zam") ;
hdfc.details()

