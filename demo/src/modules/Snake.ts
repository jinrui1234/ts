
/**
 * @description: 蛇相关
 */
export default class Snake {
    //表示蛇头的元素
    head: HTMLElement;

    //蛇的身体(包括头部)
    bodies: HTMLCollection

    //获取蛇的容器
    element: HTMLElement

    constructor() {
        this.head = document.querySelector("#snake>div") as HTMLElement;
        this.bodies = document.getElementById("snake")!.getElementsByTagName("div")
        this.element = document.getElementById("snake")!
    }

    //获取蛇头的坐标
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }
    set X(value: number) {
        if (this.X === value) return
        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了")
        }

        //修改X时,是在修改水平坐标,蛇在向左移动时,不能向右掉头,反之亦然
        if(this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetLeft===value){
          //如果发生，相反方向移动
          if(value > this.X){   //向右
            value = this.X - 10
          }else{//向左
            value = this.X + 10
          }
        }

        //移动身体
        this.moveBody()

        this.head.style.left = value + "px"

        //检查
        this.checkHeadBody()
    }
    set Y(value: number) {
        if (this.Y === value) return
        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了")
        }
        if(this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetTop===value){
            //如果发生，相反方向移动
            if(value > this.Y){  
              value = this.Y - 10
            }else{
              value = this.Y + 10
            }
          }
        //移动身体
        this.moveBody()
        this.head.style.top = value + "px"
        //检查
        this.checkHeadBody()
    }

    //蛇增加身体的方法
    addBody() {
        //向element中添加一个div
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
    
    //添加一个蛇身体移动的方法
    moveBody(){
      //遍历获取的所有实体
      for(let i = this.bodies.length-1;i>0;i--){
         //获取前面身体的位置
         let X = (this.bodies[i-1] as HTMLElement).offsetLeft
         let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
         //将值设置到当前身体
         (this.bodies[i] as HTMLElement).style.left = X + "px";
         (this.bodies[i] as HTMLElement).style.top = Y + "px"
      }
    }

    //检查撞击自己
    checkHeadBody(){
        //检查所有身体，是否和头部坐标重合
        for(let i=1;i<this.bodies.length;i++){
            let bd  = this.bodies[i] as HTMLElement
            if(this.X === bd.offsetLeft &&this.Y === bd.offsetTop){
                throw new Error("撞到自己了---")
            } 
            
        }
    }
}