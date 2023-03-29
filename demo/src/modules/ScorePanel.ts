/**
 * @description: 定义表示记分牌的类
 * @return {*}
 */
export default class ScorePanel {
    score = 0;
    level = 0;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    //设置一个变量
    maxLevel: number;
    //设置一个变量表示多少分时升级
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById("score")!
        this.levelEle = document.getElementById("level")!
        this.maxLevel = maxLevel
        this.upScore = upScore

    }
    //设置一个加分的方法
    addScore() {
        //分数自然增加
        this.scoreEle.innerHTML = ++this.score + ""
        //判断分数是多少
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }

    //升级方法
    levelUp() {
        if (this.level >= this.maxLevel) return
        this.levelEle.innerHTML = ++this.level + ""
    }
}