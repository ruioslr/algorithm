/*
   从 字符串 S 中 匹配 P 若 匹配成功则返回 index， 否则返回 -1
*/


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 时间复杂度 O(M + N)
var search = function (s, p) {
  var i = 0,
    j = -1;
  var next = getNext(p);
  function getNext(p) {
    var i = 0;
    var next = [];
    next[0] = -1;
    var k = -1;
    while(i < p.length-1){
      if(k == -1 || p[i] === p[k]){
        next[++i] = ++ k;
      }else{
        k = next[k];
      }
    }
    return next;
  }

  while (i < s.length && j < p.length) {
    if (s[i] === p[j] || j === -1) {
      i++;
      j++;
    } else {
      j = next[j];
    }
  }

  return j === p.length ? i - j : -1;
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
