/*
给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

说明：

所有数字（包括 target）都是正整数。
解集不能包含重复的组合。 
示例 1：

输入：candidates = [2,3,6,7], target = 7,
所求解集为：
[
  [7],
  [2,2,3]
]
示例 2：

输入：candidates = [2,3,5], target = 8,
所求解集为：
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combination-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = [];
  let sum = 0;
  const path = [];
  function backtracking(k) {
    if(sum > target){
      return;
    }

    if(sum === target){
      res.push(path.slice());
      return;
    }

    for(let i = k; i<candidates.length; i++){


      path.push(candidates[i])
      sum += candidates[i];
      backtracking(i);
      sum -= candidates[i];
      path.pop();
    }
  }

  backtracking(0);

  return res;
};

// test

test(combinationSum);

function test(func) {
  describe(`${func.name}`, () => {
    it("test1", () => {
      const input1 = [2,3,6,7];
      const input2 = 7;
      const output = [
        [2,2,3],
          [7],
      ]
      expect(func(input1, input2)).toEqual(output);
    });
    it("test2", () => {
      const input1 = [2,3,5];
      const input2 = 8;
      const output = [
        [2,2,2,2],
        [2,3,3],
        [3,5]
      ]
      expect(func(input1, input2)).toEqual(output);
    });
  });
}
