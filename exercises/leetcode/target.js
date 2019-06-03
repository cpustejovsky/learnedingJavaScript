const nums = [2, 7, 11, 15];
const target = 9;

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        const position = i;
        const element = nums[i];
        for (let i = 0; i < nums.length; i++) {
            if (i !== position && element + nums[i] === target) {
                return [position, i];
            }
        }
    }
};

let solution = twoSum(nums, target);
console.log(solution);
