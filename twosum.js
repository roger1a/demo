let target = 6;
let nums = [3, 2, 4];
let i = 1;
let j = 2;

var twoSum = function (nums, target) {
  for (i = 0; i < nums.length - 1; i++) {
    if (undefined || nums[i] + nums[j] === target) {
      //  console.log(i, j, "hi");
      return [i, j];
      break;
    } else {
      // console.log(i, j, nums.length);
      //i++;
      j++;
      //console.log(i, j);
    }
  }
};
//console.log(twoSum(nums, target));
let item1 = nums[0];
let item2 = nums[1];
while (item1 || item2) {
  if (item1 + item2 === target) {
    console.log([item1, item2]);
    break;
  } else {
    item1 = item1[i];
    i++;
    item2 = item2[j];
    j++;
  }
}
