/**
 * @description: 定义类food
 * @return {*}
 */
export default class Food {
    //定义一个属性表示食物所对应的元素
    element: HTMLElement
    constructor() {
        //获取页面元素,并且赋值
        this.element = document.getElementById("food")!
    }
    //x坐标
    get X() {
        return this.element.offsetLeft
    }
    //Y坐标
    get Y() {
        return this.element.offsetTop
    }
    //修改食物位置
    change() {
        //生成一个随机位置 [0,290]
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10
        this.element.style.left = left + "px"
        this.element.style.top = top + "px"
    }
}