/*
给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数。

示例 1:

输入: [1,1,2,3,3,4,4,8,8]
输出: 2
示例 2:

输入: [3,3,7,7,10,11,11]
输出: 10
注意: 您的方案应该在 O(log n)时间复杂度和 O(1)空间复杂度中运行。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/single-element-in-a-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let i = 0;
  for(; i < nums.length; i+=2){
    if(nums[i] !== nums[i+1]){
      return nums[i];
    }
  }
};

//test


test(singleNonDuplicate);

function test(func) {
  describe(`${func.name}`, () => {
    it("test1", () => {
      const input = [1,1,2,3,3,4,4,8,8];
      const output = 2;
      expect(func(input)).toEqual(output);
    });

    it("test2", () => {
      const input = [3,3,7,7,10,11,11];
      const output = 10;
      expect(func(input)).toEqual(output);
    });
  });
}
