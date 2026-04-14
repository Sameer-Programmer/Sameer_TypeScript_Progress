//Count vowels and consonants

let input = "sameer";
let vowels = "" //aee
let consonant = ""// smr
let vowelsCount = 0
let consonantsCount =0

for(let i = 0; i<input.length ; i++){
    let ch = input[i]


    if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
        vowelsCount = vowelsCount+1
        vowels =vowels+ch
    }else {
        consonantsCount = consonantsCount+1
        consonant =consonant+ch

    }
}

console.log(vowels+"       "+vowelsCount)

console.log(consonant+"   " +consonantsCount)
