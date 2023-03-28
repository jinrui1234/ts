//定义函数或者类时，当类型不明确时可以使用泛型

//T不明确--------------------
//可以同时指定多个
function fn<T>(a:T):T{
   return a
} 


//直接调用具有泛型的函数
fn(10)   //不指定泛型
fn<string>("11111111")  //指定泛型  


//-----------------
function test<T, K>(a:T,b:K):T{
    return a 
}


//-----------------
interface Inter{
    length:number
}

function fn3<T extends Inter>(a:T):number{
        return a.length
}


//---------------
class person<T>{
   name:T
   constructor(name:T){
     this.name= name
   }
}
const mc = new person<string>("1111111111")