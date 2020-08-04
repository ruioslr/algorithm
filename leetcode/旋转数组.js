/*
    给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

    示例 1:

    输入: [1,2,3,4,5,6,7] 和 k = 3
    输出: [5,6,7,1,2,3,4]
    解释:
    向右旋转 1 步: [7,1,2,3,4,5,6]
    向右旋转 2 步: [6,7,1,2,3,4,5]
    向右旋转 3 步: [5,6,7,1,2,3,4]
    示例 2:

    输入: [-1,-100,3,99] 和 k = 2
    输出: [3,99,-1,-100]
    解释:
    向右旋转 1 步: [99,-1,-100,3]
    向右旋转 2 步: [3,99,-1,-100]

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/rotate-array
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (!nums.length) return [];
  k = k % nums.length;
  var temp = [...nums];
  for (var i = 0; i < temp.length; i++) {
    if (i + k < nums.length) {
      nums[i + k] = temp[i];
    } else {
      nums[i + k - nums.length] = temp[i];
    }
  }

  return nums;
};

//test

test(rotate);

function test(func) {
  describe(`最长公共前缀 ${func.name}`, () => {
    it("test1", () => {
      const input = [1, 2, 3, 4, 5, 6, 7];
      const input2 = 3;
      const output = [5, 6, 7, 1, 2, 3, 4];
      expect(func(input, input2)).toEqual(output);
    });

    it("test2", () => {
      const input = [-1, -100, 3, 99];
      const input2 = 2;
      const output = [3, 99, -1, -100];
      expect(func(input, input2)).toEqual(output);
    });

    it("test3", () => {
      const input = [1, 2, 3, 4, 5, 6, 7];
      const input2 = 3;
      const output = [5, 6, 7, 1, 2, 3, 4];
      expect(func(input, input2)).toEqual(output);
    });

    it("test4", () => {
      const input = [-1];
      const input2 = 2;
      const output = [-1];
      expect(func(input, input2)).toEqual(output);
    });
  });
}
