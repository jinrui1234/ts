"use strict";
(function () {
    //继承
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        //抽象方法
        //
        run() {
            console.log("run");
        }
    }
    //类的定义
    class Cat extends Animal {

    }
    const cat = new Cat("咪咪", 3);
})();
