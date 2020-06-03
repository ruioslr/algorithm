/* 给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。

示例 1:

输入: "aacecaaa"
输出: "aaacecaaa"
示例 2:

输入: "abcd"
输出: "dcbabcd" */


/**
 * @param {string} s
 * @return {string}
 */


var shortestPalindrome = function(s) {
    const length = s.length;
    if(length <= 1){
        return s;
    }
    let begin = 0;
    let minLength = length;
    const dp = [];
    for(j=0; j < length; j ++){
        if(!dp[j]) dp[j] = [];
        for(i = 0; i < j; i++){
            if(s[i] === s[j]){
                if(j-i > 2) {
                    dp[i][j] = dp[i+1][j-1]
                }else {
                    dp[i][j] = true;
                }
            }else {
                dp[i][j] = false;
            }
            if(dp[i][j] && j-i < minLength){
                begin = i;
                minLength = j-i;
            }
        }
    }
    return s.substring(begin, begin + minLength + 1);
};