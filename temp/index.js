

// let const class 不会声明提升

// if 里的 var function 也会声明提升 哪怕是 false ( function 只会提升函数名变量， 打印出来是undefined)




console.log(a);
console.log(b);
c();
b();

function c() {
    console.log('c called');
}

function b() {
    console.log('b outside called');
}

function b() {
    console.log('b called repeat');
}

if(true) {
    var a = 1;
    function b(){
        console.log('b called');
    }
}

