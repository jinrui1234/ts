"use strict";
//interface
(function () {
    //描述一个对象的类型
    // type myType={
    //     name:string,
    //     age:number
    // }
    // const obj:myType = {
    //     name:"1111",
    //     age:10
    // }
    const obj = {
        name: "1111",
        age: 10
    };
    //定义类时,可以使类去实现一个接口
    //
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        //----
        sayHello() {
            console.log("11111111");
        }
    }
})();
