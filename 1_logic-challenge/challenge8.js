function pola(str) {
    let arr = [];
    let sliceNum = str.split(" ");
    // sliceNum.splice(1, 1);
    // sliceNum.splice(2, 1);
    for (let i = 0; i <= 9; i++) {
        for (let k = 0; k <= 9; k++) {
            if (parseInt(sliceNum[0].replace(/#/, i)) * parseInt(sliceNum[2]) === parseInt(sliceNum[4].replace(/#/, k))) {
                arr.push(i, k);
            }

        }
    }
    return arr;
}

console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));