let data = "ab12cd"
let output = ""//dc12ba
let arr = data.split('')
console.log(arr)
let left = 0;
let right = arr.length - 1;

while (left < right) {

    let lch = arr[left];
    let rch = arr[right];
    let checkAlphabetsLeftSide = /[a-zA-Z]/.test(lch);
    let checkAlphabetsRightSide = /[a-zA-Z]/.test(rch);

    if (!checkAlphabetsLeftSide) {
        left = left + 1
    } else if (!checkAlphabetsRightSide) {
        right = right - 1
    } else {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

console.log(arr)