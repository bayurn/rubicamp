function deretKaskus(n) {
    let result = []
    for (let i = 1; i <= n; i++) {
        a = i * 3;
        if (a % 5 === 0 && a % 6 === 0) {
            result.push("KASKUS")
        } else if (a % 5 === 0) {
            result.push("KAS")
        } else if (a % 6 === 0) {
            result.push("KUS")
        } else {
            result.push(a)
        }
    }
    return result;
}

console.log(deretKaskus(10))