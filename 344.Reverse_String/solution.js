let reverseString = function (s) {
    let result = "";

    let len = s.length;
    for (let i = 0; i < len; i++) {
        result = result.concat(s[len - i - 1])
    }

    return result;
};
