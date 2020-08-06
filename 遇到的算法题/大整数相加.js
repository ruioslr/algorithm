/*
  算法实现大整数相加
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function sum(a, b) {
  var i = 0;
  var isMax = 0;
  var res = [];
  var a = a.split("").reverse();
  var b = b.split("").reverse();
  while(i < a.length || i < b.length){
    var ai = a[i] === undefined ? 0 : Number(a[i]);
    var bi = b[i] === undefined ? 0 : Number(b[i]);
    var resi = ai + bi + isMax;
    isMax = resi >= 10 ? 1 : 0;
    res[i] = resi % 10;
    i++;
  }
  if(isMax) res.push(1);
  return res.reverse().join('');
}


// test

test(sum);

function test(func) {
  describe(`${func.name}`, () => {
    it("test1", () => {
      const input = "111111111111111111111111111111111111111111";
      const input2 = "111111111111111111111111111111111111111111";
      const output = Array.from({length: input.length}).map(_ => "2").join('');
      expect(func(input, input2)).toEqual(output);
    });

    it("test2", () => {
      const input = "99999999999999999999999999999999999";
      const input2 = "1";
      const output = [1, ...Array.from({length: input.length}).map(_ => "0")].join('');
      expect(func(input, input2)).toEqual(output);
    });
  });
}
