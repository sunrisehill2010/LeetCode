let getSum = function (a, b) {
    if (!b) {
        return a;
    }

    return getSum(a ^ b, (a & b) << 1);
};
