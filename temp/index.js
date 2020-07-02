

// let const class 不会声明提升

// if 里的 var function 也会声明提升 哪怕是 false
// foo();

var foo ;

function foo () {
    console.log(1)
}

foo = 2;

foo();