//使用class关键字来定义一个类
class Dog {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = "1111"
        this.age = 1111
    }

    //方法
    bark() {
        alert("叫叫。。。")
    }
}


const dog = new Dog("1111", 11111)

console.log(dog, "dog")