/*
    给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

    最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

    你可以假设除了整数 0 之外，这个整数不会以零开头。

    示例 1:

    输入: [1,2,3]
    输出: [1,2,4]
    解释: 输入数组表示数字 123。
    示例 2:

    输入: [4,3,2,1]
    输出: [4,3,2,2]
    解释: 输入数组表示数字 4321。


    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/plus-one
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var isStep = 0;
    if(digits[digits.length-1] + 1 >= 10) {
        isStep = 1;
        digits[digits.length-1] = digits[digits.length-1] + 1 - 10
    }else {
        digits[digits.length-1] = digits[digits.length-1] + 1
    }
    for(var i=digits.length-2; i >=0; i--){
        if(digits[i]  + isStep >= 10){
            digits[i] = digits[i] + isStep - 10;
            isStep = 1;
        }else {
            digits[i] = digits[i] + isStep
            isStep = 0;
        }
    }

    if(isStep){
        digits.unshift(1)
    }

    return digits;
};

// test;

test(plusOne);


function test(func){
    describe(`${func.name}`, () => {
        it('test1', () => {
            const input = [1,2,3];
            const output = [1,2,4];
            expect(func(input)).toEqual(output);
        });

        it('test2', () => {
            const input = [4,3,2,1];
            const output = [4,3,2,2]
            expect(func(input)).toEqual(output);
        });

        it('test3', () => {
            const input = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
            const output = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4];
            expect(func(input)).toEqual(output);
        });

        it('test4', () => {
            const input = [9];
            const output = [1,0];
            expect(func(input)).toEqual(output);
        });

        it('test5', () => {
            const input = [8,9,9,9];
            const output = [9,0,0,0];
            expect(func(input)).toEqual(output);
        });
    })
}
