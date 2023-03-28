(function () {
    //继承
    class Animal {
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
        run() {
            console.log("run")
        }
    }


    //类的定义
    class Dog extends Animal {
        constructor(name: string, age: number) {
            super(name, age)
        }
        run() {
            console.log(this.name + "--------------------")
        }
    }
    //类的定义
    class Cat extends Animal {
        constructor(name: string, age: number) {
            super(name, age)
        }
        test() {
            super.run()
        }
    }

    const dog = new Dog("旺财", 12)
    const cat = new Cat("咪咪", 3)
    cat.test()

    console.log(dog, cat, "dog")
})()