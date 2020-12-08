/*
全排列 ②

给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

 

示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
示例 2：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const res = [];
  const temp = [];

  function backTrace(k){
    if(k === nums.length){
      res.push([...temp]);
      return;
    }

    for (let i = 0; i < nums.length; i++){
      temp.push(nums[i]);
      backTrace(k+1);
      temp.pop();
    }
  }

  backTrace(0);
  return res;
};

// test

test(permuteUnique);

function test(func) {
  describe(`${func.name}`, () => {
    it("test1", () => {
      const input = [1,2,3];
      const output = [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]];
      expect(func(input)).toEqual(output);
    });
  });
}
