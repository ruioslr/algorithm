/*
    给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

    说明：本题中，我们将空字符串定义为有效的回文串。

    示例 1:

    输入: "A man, a plan, a canal: Panama"
    输出: true
    示例 2:

    输入: "race a car"
    输出: false

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/valid-palindrome
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var r = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    var left = 0;
    var right = r.length-1;
    while(right > left){
        if(r[left] === r[right]){
            left ++;
            right --;
        }else {
            return false
        }
    }
    return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome2 = function(s) {
    var r = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return  r === r.split('').reverse().join('');
};

// test

// 双指针
test(isPalindrome);

// 奇淫技巧： 回文串 翻转 相等
test(isPalindrome2);


function test(func){
    describe(`${func.name}`, () => {
        it('test1', () => {
            const input = "A man, a plan, a canal: Panama";
            const output = true;
            expect(func(input)).toEqual(output);
        });

        it('test2', () => {
            const input = "race a car";
            const output = false;
            expect(func(input)).toEqual(output)
        });
    })
}
