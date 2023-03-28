//声明一个变量a,同时指定他的类型为number,以后使用的时候只能是数字
let a: number = 2

let b: string = "11111"

let c: Boolean = false



//函数
//第三个number是给返回值限制类型
function sum(a: number, b: number): number {
    return a + b
}

console.log(sum(1, 2))