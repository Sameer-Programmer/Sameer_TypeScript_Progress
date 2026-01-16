let words : string [] = ["sameer" , 'j']

let result : string[] = [];

function m1(result : string [] , words : string []): void {
  
  
  for(let i in  words){
    result[i] = words[i].toUpperCase()
    console.log(result[i])
  }
  
  
}

m1(result , words)