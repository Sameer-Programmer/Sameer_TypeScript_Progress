function m1(username : string , password :string) :void ;
function m1(token :string):void ;


function m1(appusername : string, apppassword?:string):void {
  
  if(apppassword!== undefined){
    console.log("username",appusername )
    console.log("password",apppassword)
  }else {
    console.log("token", appusername)
  }
  
}

let result = m1("sameer123")
console.log(result)