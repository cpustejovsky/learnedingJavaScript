let nums = [-10, -1, 12];
let numAboveZero: boolean | number = false;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) numAboveZero = nums[i];
}
