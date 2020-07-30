/**
 *  编写一个函数来查找字符串数组中的最长公共前缀。

    如果不存在公共前缀，返回空字符串 ""。

    示例 1:

    输入: ["flower","flow","flight"]
    输出: "fl"
    示例 2:

    输入: ["dog","racecar","car"]
    输出: ""
    解释: 输入不存在公共前缀。
    说明:

    所有输入只包含小写字母 a-z 。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/longest-common-prefix
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length < 1) {
        return '';
    }

    if(strs.length  == 1) {
        return strs[0];
    }



    let minLengthItem = strs[0];
    for(var i=0; i< strs.length; i++){
        if(strs[i].length < minLengthItem.length){
            minLengthItem = strs[i];
        }
    }

    if(minLengthItem === '') return '';

    for(var i = 0; i< minLengthItem.length; i ++ ){
        var char = minLengthItem[i];
        for(var j=0; j<strs.length;j ++){
            if(strs[j][i] === char){
                continue;
            }else{
                return minLengthItem.substring(0, i)
            }
        }
    }
    return minLengthItem;
};


// test

test(longestCommonPrefix);

function test(func){
    describe(`最长公共前缀 ${func.name}`, () => {
        it('test1', () => {
            expect(func(["flower","flow","flight"])).toBe('fl')
        });
        it('test2', () => {
            expect(func(["dog","racecar","car"])).toBe('')
        });

        it('test3', () => {
            expect(func([])).toBe('')
        });

        it('test4', () => {
            expect(func([''])).toBe('')
        });

        it('test5', () => {
            expect(func(['', ''])).toBe('');
        });

        it('test6', () => {
            expect(func(['c', 'c'])).toBe('c');
        });
    })
}
