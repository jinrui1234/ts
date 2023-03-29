import Food from "./Food"
import ScorePanel from "./ScorePanel"
import Snake from "./Snake"

//游戏控制器
export default class GameControl {
    //三个属性
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    //创建一个属性用来存储蛇的方向
    direction: string = "Right"
    //创建一个属性用来记录游戏是否结束
    isLive: Boolean = true

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel(10,2)
        this.init()
    }

    //初始化
    init() {
        //绑定键盘按下的时间
        //bind 更改this指向
        document.addEventListener("keydown", this.keydownHandler.bind(this))
        this.run()
    }
    //键盘按下响应函数
    keydownHandler(event: KeyboardEvent) {
        console.log(event.key, "key")
        //修改 direction
        this.direction = event.key
    }

    //蛇移动的方法
    run() {
        /**
         *根据方向（direction）来改变蛇的位置
         *上
         *下
         *左
         *右
         */
        //获取此刻坐标
        let x = this.snake.X
        let y = this.snake.Y

        //根据按键方向修改x,y的值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                y -= 10
                break;
            case "ArrowDown":
            case "Down":
                y += 10
                break;
            case "ArrowRight":
            case "Right":
                x += 10
                break;
            case "ArrowLeft":
            case "Left":
                x -= 10
                break;
        }
        //检查是否吃到食物
        this.checkEat(x, y)

        try {
            //修改蛇的x,y
            this.snake.X = x
            this.snake.Y = y
        } catch (e) {
            // throw new Error("蛇撞墙了")
            alert(e)
            this.isLive = false
        }

        //定时器
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    //检查蛇是否吃到东西
    checkEat(x: number, y: number): void {
        if (x === this.food.X && y === this.food.Y) {
            //食物位置重置
            this.food.change()
            //分数增加
            this.scorePanel.addScore();
            //蛇增加一节
            this.snake.addBody()
        }
    }

}