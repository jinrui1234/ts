"use strict";
//定义函数或者类时，当类型不明确时可以使用泛型
//T不明确--------------------
//可以同时指定多个
function fn(a) {
    return a;
}
//直接调用具有泛型的函数
fn(10); //不指定泛型
fn("11111111"); //指定泛型  
//-----------------
function test(a, b) {
    return a;
}
function fn3(a) {
    return a.length;
}
//---------------
class person {
    constructor(name) {
        this.name = name;
    }
}
const mc = new person("1111111111");
