let reverseString = function (s) {
    let result = "";

    for (let i = 0; i < s.length; i++) {
        result += s[s.length - i - 1];
    }

    return result;
};
