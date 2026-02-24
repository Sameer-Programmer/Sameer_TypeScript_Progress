 //Remove duplicates from an array using filter and indexOf.


 //remove the duplicates 
 let patientage = [1,2,3,4,4,5,5,]

 let newPatient : number []= []

 console.log(patientage.length)

 for (let i =0 ; i <patientage.length -1 ; i++){
    let duplicatedata = false ;
    for (let j = 0; j<patientage.length -1; j++){
        if(patientage[i]===newPatient[j]){
            duplicatedata = true ;
            break;
        }

    }

    if(!duplicatedata){
        newPatient.push(patientage[i])
    }
 }

console.log(newPatient)