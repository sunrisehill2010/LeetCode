let numJewelsInStones = function (J, S) {
    let jewelSet = new Set();
    for (let jewel of J) {
        jewelSet.add(jewel);
    }

    let num = 0;
    for (let stone of S) {
        if (jewelSet.has(stone)) {
            num++;
        }
    }

    return num
};
