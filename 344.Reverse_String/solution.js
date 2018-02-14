var reverseString = function (s) {
    var result = "";

    var len = s.length;
    for (var i = 0; i < len; i++) {
        result = result.concat(s[len - i - 1])
    }

    return result;
};
