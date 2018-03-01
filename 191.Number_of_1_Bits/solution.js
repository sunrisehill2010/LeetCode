let hammingWeight = function (n) {
    return n.toString(2)
        .split('')
        .filter(c => c !== '0')
        .length;
};
