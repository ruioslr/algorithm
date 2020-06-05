/* 
在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

示例:

输入: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

输出: 4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximal-square
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const dp = [];
    let maxLength = 0;
    for(let j =0; j < matrix.length; j++){
        const item = matrix[j];
        if(!dp[j]) dp[j] = [];
        for(let i= 0; i < item.length; i ++) {
            if(matrix[i][j] === 0) {
                dp[i][j] = 0;
            }else {
                
            }
        }
    }

};