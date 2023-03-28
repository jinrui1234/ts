//使用字面量进行类型声明
let a: 10;
let b: "10" | "222";  //或运算符（联合类型）
let c: false;   //相当于一个常量，不能在赋值了


//any 表示任意赋值,相当于关闭了类型检测
let d: any


//unknown 表示未知变量的值
//unknown 的变量不能直接赋值给其它变量
let m: unknown


//类型断言,可以用来告诉解析器变量的实际类型
let s: unknown
let e = "111"

s = e as string   //第一种写法
s = <string>e     //第二种写法


//void 表示函数没有返回值
function test1(): void {

}


//never 表示永远没有返回值
function test2(): never {
    throw new Error("报错")
}


