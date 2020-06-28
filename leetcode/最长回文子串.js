/* 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb" */

/**
 * 
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const dp = [];
    const length = s.length;
    let maxLength = 0;
    let begin = 0;
    if(length == 1) {
        return s
    }
    
    for(let j = 0; j < s.length; j++){
        if(!dp[j]) dp[j] = [];
        for(let i = 0; i < j ; i++) {
            if(s[i] === s[j]){
                if(j - i > 2) {
                    dp[i][j] = dp[i+1][j-1]
                }else {
                    dp[i][j] = true;
                }
            } 
            
            if(dp[i][j] && j-i > maxLength){
                begin = i;
                maxLength = j-i;
            }
        }
    }

    return s.substring(begin, begin + maxLength + 1);
};

console.log(longestPalindrome('babad'));


const longestPalindrome2 = function(s){
    const length = s.length;
    if(length <= 1) return s;
    let maxLength = 0;
    let begin = 0;
    const dp = [];

    for(let j = 0; j < length; j++ ){
        if(!dp[j]) dp[j] = [];
        for(let i = 0; i < j; i++) {
            if(s[i] === s[j]){
                if(j - i > 2) {
                    dp[i][j] = dp[i+1][j-1];
                }else {
                    dp[i][j] = true;
                }
            }
            if(dp[i][j] && j-i > maxLength){
                maxLength = j-i;
                begin = i;
            }
        }
    }

    return s.substring(begin, begin + maxLength + 1);
}

console.log(longestPalindrome2('babad'));
