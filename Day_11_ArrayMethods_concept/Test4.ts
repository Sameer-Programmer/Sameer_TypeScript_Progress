
/* splice()
add/removes elements from an array 
// syntax - array.splice(start , deletecount )

*/



let cart : string [] = ["Apple","Banana","Carrot","Dragon Fruit"," Kiwi"]


console.log(cart)

cart.splice(1,2)

console.log(cart)
cart.splice(1,0, "Banana","Carrot")
console.log(cart)


cart.splice(1,2, "anana","arrot")
console.log(cart)
