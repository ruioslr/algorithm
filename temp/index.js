const _a = {z: 11}


function A() {
    this.y = 2;
}

const temp = {
    x: 1,
}

A.prototype = _a;
// 构造函数bind生成的函数在new时与原构造函数没有区别
const a = new (A.bind(temp));



function create(o){
    function F(){};
    F.prototype = o;
    return new F();
} 

const c = create(_a);


console.log(a.toString())



