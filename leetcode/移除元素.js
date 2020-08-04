/*
给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

 

示例 1:

给定 nums = [3,2,2,3], val = 3,

函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。

你不需要考虑数组中超出新长度后面的元素。
示例 2:

给定 nums = [0,1,2,2,3,0,4,2], val = 2,

函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。

注意这五个元素可为任意顺序。

你不需要考虑数组中超出新长度后面的元素

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 无法改变原数组
var removeElement = function (nums, val) {
  return nums.join("").replace(new RegExp(val, "g"), "").length;
};

var removeElement2 = function (nums, val) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

//test

// test(removeElement);

test(removeElement2);

function test(func) {
  describe(`${func.name}`, () => {
    it("test1", () => {
      const input = [3, 2, 2, 3];
      const input2 = 3;
      const output = 2;
      expect(func(input, input2)).toEqual(output);
    });

    it("test2", () => {
      const input = [0, 1, 2, 2, 3, 0, 4, 2];
      const input2 = 2;
      const output = 5;
      expect(func(input, input2)).toEqual(output);
    });
  });
}
