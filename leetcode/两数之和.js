/*
    给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

     

    示例:

    给定 nums = [2, 7, 11, 15], target = 9

    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/two-sum
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++){
        for(var j = i+1; j<nums.length; j++) {
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
};

var twoSum2 = function(nums, target) {
    var pre = {};
    for(var i = 0; i < nums.length; i ++){
        var preIndex = pre[target - nums[i]];
        if(preIndex !== undefined){
            return [preIndex, i]
        }
        pre[nums[i]] = i;
    }
};

//test


test(twoSum);

test(twoSum2)


function test(func){
    describe(`${func.name}`, () => {
        it('test1', () => {
            const input = [2, 7, 11, 15];
            const input2 = 9;
            const output = [0 ,1];
            expect(func(input, input2)).toEqual(output);
        });
    })
}

