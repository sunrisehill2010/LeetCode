let arrangeCoins = function (n) {
    let [i, sum] = [0, 0];

    for (; i <= n; i++) {
        sum += i;
        if (sum >= n) {
            break;
        }
    }

    return sum > n ? (i - 1) : i;
};
