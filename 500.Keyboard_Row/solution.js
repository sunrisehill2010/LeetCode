let isInOneRow = function (map, word) {
    if (!map || !word) {
        return false;
    }

    let groupSet = new Set();
    for (let c of word) {
        groupSet.add(map.get(c));
    }

    return groupSet.size === 1;
};

let findWords = function (words) {
    const rows = ["qwertyuiopQWERTYUIOP",
        "asdfghjklASDFGHJKL",
        "zxcvbnmZXCVBNM"];

    let map = new Map();
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].length; j++) {
            map.set(rows[i].charAt(j), i);
        }
    }

    let result = [];
    for (let word of words) {
        if (isInOneRow(map, word)) {
            result.push(word)
        }
    }

    return result;
};
