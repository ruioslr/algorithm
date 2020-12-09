/*
给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];
  const temp  = [];
  // k是找到结果的第k个数字（k 层）
  function backtracking (k) {
    if(k === nums.length) {
      res.push([...temp]);
      return;
    }
    for(let i = 0; i < nums.length; i++){
      if(temp.indexOf(nums[i]) === -1){
        temp.push(nums[i]);
        backtracking(k+1);
        temp.pop();
      }
    }
  }
  backtracking(0);
  return res;
};


// test

test(permute);

function test(func) {
  describe(`${func.name}`, () => {
    it("test1", () => {
      const input = [1,2,3];
      const output = [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]];
      expect(func(input)).toEqual(output);
    });
  });
}
