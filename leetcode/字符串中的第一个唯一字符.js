/*
    给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

     

    示例：

    s = "leetcode"
    返回 0

    s = "loveleetcode"
    返回 2

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/first-unique-character-in-a-string
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var res = [];
    var hash = {};
    for(var i=0; i< s.length; i++){
        if(hash[s[i]]){
            var index =res.indexOf(s[i]);
            if(index > -1){
                res.splice(index, 1);
            }
        }else {
            hash[s[i]] = true;
            res.push(s[i]);
        }
    }
    if(res.length){
        return s.indexOf(res[0]);
    }else {
        return -1;
    }
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar2 = function(s) {
    for(var i=0; i< s.length; i++){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
            return i;
        }
    }
    return -1;
}

// test

// 普通遍历方法
test(firstUniqChar);

// 奇淫技巧: 如果 某个字符是唯一的 则 它的 lastIndexOf === indexOf
test(firstUniqChar2);

function test(func){
    describe(`${func.name}`, () => {
        it('test1', () => {
            const input = "leetcode";
            const output = 0;
            expect(func(input)).toEqual(output);
        });

        it('test2', () => {
            const input = "loveleetcode";
            const output = 2;
            expect(func(input)).toEqual(output);
        });

        it('test3', () => {
            const input = "aadadaad";
            const output = -1;
            expect(func(input)).toEqual(output);
        });
    })
}
