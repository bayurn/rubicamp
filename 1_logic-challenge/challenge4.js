// function checkPrime(n) {
//     for (var a = 2; a < n; a++) {
//         if (n % a === 0) {
//             return false;
//         }
//     }
//     return true;
// }

function indexPrime(param1) {
    let n = 2;
    let i = 0;
    while (i < param1) {
        let prime = true;
        for (let a = 2; a < n; a++)
            if (n % a === 0) prime = false;
        if (prime) {
            i++;
        }
        n++;
    }
    return n - 1;
}

console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))