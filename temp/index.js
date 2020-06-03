/**
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