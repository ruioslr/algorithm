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

// 拿空间换时间 （自身需要遍历两次的时候， 用一个对象来记录一个遍历，使得只需要遍历一次）
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

// 双指针法  这个有问题： 因为需要返回数组下标， 但是 双指针法需要先对数组排序，这样无法返回之前的下标
var twoSum3 = function (nums, target) {
    var hash = {};
    for(var i = 0; i < nums.length; i++){
        hash[nums[i]] = i;
    }
    nums.sort((a, b) => a-b);
    var first = 0;
    var last = nums.length-1;
    while(last > first) {
        var sum = nums[first] + nums[last];
        if(sum > target) {
            last--;
        }else if (sum < target) {
            first ++;
        }else{
            return [hash[nums[first]], hash[nums[last]]]
        }
    }
}

//test


test(twoSum);

test(twoSum2)

test(twoSum3)


function test(func){
    describe(`${func.name}`, () => {
        it('test1', () => {
            const input = [2, 7, 11, 15];
            const input2 = 9;
            const output = [0 ,1];
            expect(func(input, input2)).toEqual(output);
        });
    })

    describe(`${func.name}`, () => {
        it('test2', () => {
            const input = [3,2,4];
            const input2 = 6;
            const output = [1 ,2];
            expect(func(input, input2)).toEqual(output);
        });
    })

    describe(`${func.name}`, () => {
        it('test2', () => {
            const input = [3,3];
            const input2 = 6;
            const output = [0 ,1];
            expect(func(input, input2)).toEqual(output);
        });
    })
}

