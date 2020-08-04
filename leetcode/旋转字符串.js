/*
    给定两个字符串, A 和 B。

    A 的旋转操作就是将 A 最左边的字符移动到最右边。 例如, 若 A = 'abcde'，在移动一次之后结果就是'bcdea' 。如果在若干次旋转操作之后，A 能变成B，那么返回True。

    示例 1:
    输入: A = 'abcde', B = 'cdeab'
    输出: true

    示例 2:
    输入: A = 'abcde', B = 'abced'
    输出: false
    注意：

    A 和 B 长度不超过 100。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/rotate-string
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  if (A.length !== B.length) return false;
  var length = A.length;
  if (length === 0) {
    return true;
  }
  out: for (var i = 0; i < length; i++) {
    if (B[0] === A[i]) {
      for (var k = i, j = 0; j < length; j++, k++) {
        if (B[j] !== A[k % length]) {
          continue out;
        }
      }
      return true;
    }
  }
  return false;
};

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString2 = function (A, B) {
  if(A.length !== B.length) return false;
  return (B + B).indexOf(A) !== -1;
};

// test

// 普通遍历(穷举法)
test(rotateString);

// 奇淫技巧：首尾相连包含
test(rotateString2)

function test(func) {
  describe(`${func.name}`, () => {
    it("test1", () => {
      const input = "abcde";
      const input2 = "cdeab";
      const output = true;
      expect(func(input, input2)).toEqual(output);
    });

    it("test2", () => {
      const input = "abcde";
      const input2 = "abced";
      const output = false;
      expect(func(input, input2)).toEqual(output);
    });

    it("test3", () => {
      const input = "aa";
      const input2 = "a";
      const output = false;
      expect(func(input, input2)).toEqual(output);
    });
  });
}
