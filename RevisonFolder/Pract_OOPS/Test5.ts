
let employee260404_0516 : {
  
  name : string ,
  age : number,
  display:()=>void 

}={
  
  name : "Sam",
  age : 30,
  display:function () {
    console.log(this.name)
  }
}

employee260404_0516.display()

