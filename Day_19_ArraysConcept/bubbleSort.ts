let arr: number[] = [30 ,60 , 10, 20, 30, 40];

for(let i = 0; i<arr.length-1;i++){
    for(let j = 0; j<arr.length-1;j++){ // -i why witten I dont know 
        if(arr[j]>arr[j+1]){
            //swap 
            let temp = arr[j]
            arr[j] =arr[j+1];
            arr[j+1] =temp
        }
    }
}

console.log(arr)
console.log(arr[0]) //min
console.log(arr[arr.length-1])//max 
//Now we will learn how to print he sorted 
// array with out duplicates so that 
// These guys when the ask the second largest array as i wil deal easily 

let uniques = [...new Set(arr)];
console.log(uniques)