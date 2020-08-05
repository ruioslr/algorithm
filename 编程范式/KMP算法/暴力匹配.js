/*
   从 字符串 S 中 匹配 P 若 匹配成功则返回 index， 否则返回 -1
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// 事件复杂度 O(M*N)
var search = function (s, p) {
  var i = 0,
    j = 0;

  while (i < s.length && j < p.length) {
    if (s[i] === p[j]) {
      i++;
      j++;
    } else {
      i = i - j + 1;
      j = 0;
    }
  }
  if (j === p.length) {
    return i - j;
  } else {
    return -1;
  }
};

test(search);

function test(func) {
  describe(`${func.name}`, () => {
    it("test1", () => {
      const input = "abcde";
      const input2 = "bcd";
      const output = 1;
      expect(func(input, input2)).toEqual(output);
    });

    it("test2", () => {
      const input = "abcbe";
      const input2 = "xxx";
      const output = -1;
      expect(func(input, input2)).toEqual(output);
    });
  });
}

