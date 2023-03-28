//Object
let a: Object
a = {}
a = function () { }


//指定类型，name表示对象包括的属性
//语法：{属性名：类型, 属性名：类型}
// ? 标识可选属性
let b: { name: string, age?: number }
b = { name: "bbb", age: 10 }

// [propName: string]: any   表示添加任意属性
let c: { name: string, [propName: string]: any }
c = { name: "ccc", age: 18, num: 1111 }

//function(){}
let d: (a: number, b: number) => number
d = function (m: number, n: number): number {
    return m + n
}


//array
let j: string[]
j = ["a", "b", "c"]

let g: Array<number>
g = [1, 2, 3]


//元组,固定长度的数组   
let h: [string, number]
h = ["11", 1111]


//enum 枚举  (把所有可能情况都列出来)
enum Gender {
    Male = 0,
    Female = 1
}
let i: { name: string, gender: Gender }
i = { name: "111", gender: Gender.Male }

// & 
let z: { name: string } & { age: number }
z = { name: "111", age: 10 }

//类型别名
let k: 1 | 2 | 3 | 4 | 5
k = 2


