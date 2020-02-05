function persistence(num) {
    let numString = num.toString().split('');
    if (numString.length !== 1) {
        let number = numString.reduce((x, y) => x * y)
        return persistence(number)
    }
    return num;
}
console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(3));

