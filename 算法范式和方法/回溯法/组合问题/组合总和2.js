/*
给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

说明：

所有数字（包括目标数）都是正整数。
解集不能包含重复的组合。 
示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
示例 2:

输入: candidates = [2,5,2,1,2], target = 5,
所求解集为:
[
  [1,2,2],
  [5]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combination-sum-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const res = [];
  let sum = 0;
  const path = [];
  const used = [];
  candidates.sort((a, b) => a - b);
  function backtracking(k){
    if(sum >= target){
      if(sum === target) {
        res.push([...path]);
      }
      return;
    }

    for(let i = k; i < candidates.length; i++){
      if(candidates[i] === candidates[i - 1] && used[i-1]){
        continue;
      }
      used[i] = true;
      sum += candidates[i];
      path.push(candidates[i]);
      backtracking(i+1);
      used[i] = false;
      sum -= candidates[i];
      path.pop();

    }

  }

  backtracking(0);
  return res;
};


// test

test(combinationSum2);

function test(func) {
  describe(`${func.name}`, () => {
    it("test1", () => {
      const input1 = [10,1,2,7,6,1,5];
      const input2 = 8;
      const output = [
        [1, 7],
        [1, 2, 5],
        [2, 6],
        [1, 1, 6]
      ];
      expect(func(input1, input2)).toEqual(output);
    });
    it("test2", () => {
      const input1 = [2,5,2,1,2];
      const input2 = 5;
      const output = [
        [1,2,2],
        [5]
      ]
      expect(func(input1, input2)).toEqual(output);
    });
  });
}
