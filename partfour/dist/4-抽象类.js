"use strict";
(function () {
    // 以  abstract  开头的类是抽象类
    //抽象类和其它类区别不大,只是不能用来创建对象
    //抽象类只能用来被继承的类
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Dog extends Animal {
        test() {
        }
    }
    const dog = new Dog("咪咪", 3);
})();
