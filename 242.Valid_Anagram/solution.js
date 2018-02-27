let isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sa = s.split('').sort();
    let ta = t.split('').sort();

    for (let i = 0; i < sa.length; i++) {
        if (sa[i] !== ta[i]) {
            return false;
        }
    }

    return true;
};

