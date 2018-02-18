let hammingDistance = function (x, y) {
    let result = 0;

    let xor = (x ^ y).toString(2);
    for (let i = 0; i < xor.length; i++) {
        if (xor[i] === '1') {
            result++;
        }
    }

    return result;
};
