type UserDetails = {

    firstname :string ,
    lastname:string ,
    display260404_0523:()=>void
}


let product260404_0523:UserDetails ={
    firstname : "Alnoor",
    lastname  :"Mohammed",
   display260404_0523 : function  (){
console.log(this.firstname)
    }
}

product260404_0523.display260404_0523()