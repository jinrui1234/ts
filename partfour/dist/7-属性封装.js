"use strict";
/*
 * @Author: nibin
 * @Date: 2023-03-28 20:13:37
 * @LastEditors: nibin
 * @LastEditTime: 2023-03-28 21:00:44
 * @Description: file content
 */
(function () {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const per = new Person("小黄", 18);
    console.log(per, "per");
})();
