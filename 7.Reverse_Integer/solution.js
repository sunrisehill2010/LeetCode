let reverse = function (x) {
    if (x < 0) {
        return -reverse(-x);
    }

    const INT32_MAX = 2147483647; //2 ** 31 - 1
    const INT32_MIN = -2147483648; //-2 ** 31;

    if (x === 0 || x > INT32_MAX || x <= INT32_MIN) {
        return 0;
    }

    let digits = [];
    while (x) {
        let remainder = x % 10;
        if (digits.length || remainder) {
            digits.push(remainder);
        }

        x = Math.floor(x / 10);
    }

    let result = parseInt(digits.join(''));
    if (result > INT32_MAX || result <= INT32_MIN) {
        result = 0;
    }

    return result;
};
