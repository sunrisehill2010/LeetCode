let climbStairs = function (n) {
    let [a, b] = [1, 2];

    if (n === 1) {
        return a;
    }

    for (let i = 0; i < n - 2; i++) {
        [a, b] = [b, a + b]
    }

    return b
};
