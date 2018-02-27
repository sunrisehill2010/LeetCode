let generate = function (numRows) {
    let result = [];
    if (numRows === 0) {
        return result;
    }

    result.push([1]);
    for (let i = 2; i <= numRows; i++) {
        let last = result[result.length - 1];

        let rowNums = [1];
        for (let j = 1; j < i - 1; j++) {
            rowNums[j] = last[j - 1] + last[j];
        }
        rowNums.push(1);

        result.push(rowNums.slice(0));
        rowNums.splice(0, rowNums.length);
    }

    return result;
};
