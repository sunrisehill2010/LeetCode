let twoSum = function (nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (diff in map) {
            return [map[diff], i];
        }

        map[nums[i]] = i;
    }
};
