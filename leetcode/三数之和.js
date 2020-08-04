/*
    给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

    注意：答案中不可以包含重复的三元组。

     

    示例：

    给定数组 nums = [-1, 0, 1, 2, -1, -4]，

    满足要求的三元组集合为：
    [
      [-1, 0, 1],
      [-1, -1, 2]
    ]

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/3sum
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  var left = 0;
  var right = nums.length - 1;
  var res = [];
  for (var i = 0; i < nums.length; i++) {
    left = i + 1;
    right = nums.length - 1;
    var target = 0 - nums[i];
    if (i == 0 || nums[i] != nums[i - 1]) {
      while (left < right) {
        if (nums[left] + nums[right] > target) {
          right--;
          // while(nums[right] === nums[right+1]){
          //     right --
          // }
        } else if (nums[left] + nums[right] < target) {
          left++;
          // while(nums[left] === nums[left-1]){
          //     left ++;
          // }
        } else {
          res.push([nums[i], nums[left], nums[right]]);
          right--;
          left++;
          while (nums[left] === nums[left - 1]) {
            left++;
          }
          while (nums[right] === nums[right + 1]) {
            right--;
          }
        }
      }
    }
  }
  return res;
};

// test

test(threeSum);

function test(func) {
  describe(`${func.name}`, () => {
    it("test1", () => {
      const input = [-1, 0, 1, 2, -1, -4];
      const output = [
        [-1, 0, 1],
        [-1, -1, 2],
      ];
      expect(func(input)).toEqual(output);
    });
  });
}
