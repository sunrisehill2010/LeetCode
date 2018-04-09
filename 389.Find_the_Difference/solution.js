const findTheDifference = function (s, t) {
    const sortedS = s.split('').sort();
    const sortedT = t.split('').sort();

    for (let i = 0; i < t.length; i++) {
        if (i > s.length || sortedT[i] !== sortedS[i]) {
            return sortedT[i];
        }
    }

    return '';
};