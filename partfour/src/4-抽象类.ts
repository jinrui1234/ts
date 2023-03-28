(function () {
    // 以  abstract  开头的类是抽象类
    //抽象类和其它类区别不大,只是不能用来创建对象
    //抽象类只能用来被继承的类
    abstract class Animal {
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        //以 abstract 开头
        //抽象方法,只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract test(): void
    }

    class Dog extends Animal {
        test() {

        }
    }

    const dog = new Dog("咪咪", 3)

})()