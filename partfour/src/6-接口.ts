//interface
(
   function(){
    //描述一个对象的类型
    // type myType={
    //     name:string,
    //     age:number
    // }
    // const obj:myType = {
    //     name:"1111",
    //     age:10
    // }

    //接口用来定义一个类结构
    //定义一个类中包含的属性和方法
    //同时接口也可以当成类型声明去使用
    interface myInterface{
        name:string,
        age:number
    }
    
    const obj:myInterface = {
        name:"1111",
        age:10
    }


    interface myInter {
        name:String,
        sayHello():void
    }
    //定义类时,可以使类去实现一个接口
    //
    class MyClass implements myInter {
        name: string
        constructor(name: string){
            this.name = name
        }
        //----
        sayHello(): void {
            console.log("11111111")
        }
    }
}
)()