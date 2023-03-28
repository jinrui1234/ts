/*
 * @Author: nibin
 * @Date: 2023-03-28 20:13:37
 * @LastEditors: nibin
 * @LastEditTime: 2023-03-28 21:00:44
 * @Description: file content
 */
(function(){
    class Person {
        //ts可以在属性前,添加属性修饰符
        //public / private
        //protected  受包含的属性,只能在当前类,当前类的子类中访问
        public name: string
        public age: number 
       constructor(name:string,age:number){
            this.name  = name
            this.age  = age
       }
    }
    const per = new Person("小黄",18)
    console.log(per, "per")
})()