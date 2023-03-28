//使用class关键字来定义一个类
class Person {
    name: string = "1111"
    age: number = 1111

    test() {
        console.log('test', this.age)
    }
}
const per = new Person()
console.log(per.name, "per")
