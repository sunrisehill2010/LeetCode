
const intersection = function (nums1, nums2) {
    let smaller = new Set(nums1);
    let bigger = new Set(nums2);
    if (smaller.size > bigger.size) {
        [smaller, bigger] = [bigger, smaller];
    }

    const result = [];
    for (const number of smaller) {
        if (bigger.has(number)) {
            result.push(number);
        }
    }

    return result;
};