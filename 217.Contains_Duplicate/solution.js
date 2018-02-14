var containsDuplicate = function (nums) {
    var numSet = new Set();

    for (var i = 0; i < nums.length; i++) {
        if (numSet.has(nums[i])) {
            return true;
        }
        numSet.add(nums[i]);
    }

    return false;
};
