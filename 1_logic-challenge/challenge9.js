function spiral(param1) {
    const arr = [];
    const result = [];
    let num = 0;
    let top = 0;
    let right = param1 - 1;
    let bottom = param1 - 1;
    let left = 0;

    for (let i = 0; i < param1; i++) {
        arr[i] = [];
        for (let j = 0; j < param1; j++) {
            arr[i][j] = num;
            num++
        }
    }
    while (result.length < param1 * param1) {
        for (let a = top; a <= right; a++) {
            result.push(arr[top][a])
        }
        top++
        for (let b = top; b <= bottom; b++) {
            result.push(arr[b][right])
        }
        right--
        for (let c = right; c >= left; c--) {
            result.push(arr[bottom][c])
        }
        bottom--
        for (let d = bottom; d >= top; d--) {
            result.push(arr[d][left])
        }
        left++
    }
    console.log(result);
}

spiral(5)
spiral(6)
spiral(7)