let isJewel = function (stone, jewels) {
    for (let jewel of jewels) {
        if (stone === jewel) {
            return true;
        }
    }

    return false;
};

let numJewelsInStones = function (J, S) {
    let num = 0;
    for (let stone of S) {
        if (isJewel(stone, J)) {
            num++;
        }
    }

    return num
};
