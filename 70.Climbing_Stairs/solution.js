let climbStairs = function (n) {
    let a = 1;
    let b = 2;

    if (n === 1) {
        return a;
    }

    for (let i = 0; i < n - 2; i++) {
        let temp = a;
        a = b;
        b = temp + a;
    }

    return b
};
