let missingNumber = function (nums) {
    return nums.length * (nums.length + 1) / 2 -
        nums.reduce((prev, curr) => prev + curr);
};
