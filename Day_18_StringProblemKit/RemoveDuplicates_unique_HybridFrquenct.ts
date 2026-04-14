let input = "sameerbhai"
let output = "";//s1a2m1e2r1b1h1i1

let duplicates = "";
let unique = ""


// compare , count , restrict duplicates 

for (let i = 0; i < input.length; i++) {
    let ch = input[i]
    let count = 0
    let foundflag = false

    //this below loop check if any duplicate exists in output container right 
    for (let j = 0; j < output.length; j++) {
        if (output[j] == ch) {
            foundflag = true;
            break;
        }
    }
    if (!foundflag) {
        for (let k = 0; k < input.length; k++) {
            if (input[k] == ch) {
                count = count + 1
            }
        }
        output = output + ch + "==" + count + "\n"

        if (count == 1) {
            unique = unique + ch + "==" + count + "\n"
        }


        if (count > 1) {
            duplicates = duplicates + ch + "==" + count + "\n"
        }
    }


}

console.log(output)

console.log("      below are duplicates ")
console.log(duplicates)
console.log("      below are unique ")
console.log(unique)