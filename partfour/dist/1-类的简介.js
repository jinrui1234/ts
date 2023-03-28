"use strict";
//使用class关键字来定义一个类
class Person {
    constructor() {
        this.name = "1111";
        this.age = 1111;
    }
    test() {
        console.log('test', this.age);
    }
}
const per = new Person();
console.log(per.name, "per");
