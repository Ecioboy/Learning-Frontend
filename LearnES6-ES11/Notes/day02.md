## let

```javascript
// let变量声明以及声明特性
let a;
let b,c,d;
let e = 100;
let f = 521, g = 'Noi-q', h = [];

// 1.变量不能重复声明
// let star = 'Noi-q';
// let star = 'Ecioboy';

// 2.块级作用域 全局 函数，eval
{
    let girl = 'Baby'
}
//console.log(girl)

// 3.不存在变量提升
// console.log(song)
// let song = "hello"

// 4.不影响作用域链
{
    let school = 'VCaL'
    function fn(){
        console.log(school)
    }
    fn()
}
```

## const

```javascript
// 声明常量
const SHCOOL = 'Noi-q'

// 1.一定要赋初始值
// const a;

// 2.一般常量使用大写(潜规则)
const A = 'A';

// 3.常量的值不能修改
// SHCOOL = 'Ecioboy'

// 4.块儿级作用域
{
    const PLAYER = 'Ecioboy'
}
// console.log(PLAYER)

// 5.对于数组和对象的元素修改，不算做对常量的修改，不会报错
const TEAM = [
    'uzi',
    'Ecioboy',
    'Noi-q'
]
TEAM.push('HELLO')
```

## 变量的解构赋值

```javascript
// ES6允许按照一定模式从数组和对象中提取值，对变量进行赋值
// 这被称为解构赋值

// 1.数组的解构

// const F4 = ['Noi-q','Ecioboy'];
// let [x,e] = F4;
// console.log(x,e)

// 2.对象的解构

const vc = {
    name: 'Noi-q',
    age: 18,
    xp: function(){
        console.log('hello')
    }
};
let {name,age,xp} = vc;
console.log(name,age,xp)
```

## 模板字符串

```javascript
// ES6 引入新的声明字符串的方式 [``] '' ""

// 1.声明
let str = `我也是字符串`
console.log(str,typeof str)

// 2.内容中可以直接出现换行符
let str2 = `hello
            hello`

console.log(str2)

// 3.变量拼接
let lovelist = 'Noi-q'
let out = `${lovelist}最帅`
console.log(out)
```

## 对象的简化写法

```javascript
/*
ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法
*/
let name = 'Noi-q'
let change = function(){
    console.log('Hello')
}

const school = {
    name,
    change,
    // 对象里的方法简化
    improve(){
        console.log('hello')
    }
}
console.log(school)
```

## 箭头函数

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script>
    // ES6 允许使用[箭头] (=>)定义函数

    // 声明一个函数
    let fn = (a,b)=>{
        return a + b;
    }
    let result = fn(1,2)
    console.log(result)


    // 1.this是静态的，this始终指向函数声明时所在作用域下的this值
    function getName(){
        console.log(this.name)
    }

    let getName2 = () =>{
        console.log(this.name)
    }
    // 设置window对象的name属性
    window.name = 'Noi-q';
    const school = {
        name: 'Ecioboy'
    }

    // 直接调用
    // getName();
    // getName2();
    
    // call方法调用
    getName.call(school)
    getName2.call(school)

    // 2.不能作为构造函数实例化对象
    // let Person = (name,age) => {
    //     this.name = name;
    //     this.age = age;
    // }
    // let me = new Person('Noi-q',18);
    // console.log(me)

    // 3.不能使用arguments变量
    // let fn = ()=>{
    //     console.log(arguments)
    // }
    // fn(1,2)

    // 4.箭头函数的简写
        // 1.省略小括号，当形参有且只有一个的时候
        let add = n =>{
            return n+n;
        }
        console.log(add(1))
        // 2.省略花括号，当代码体只有一条语句的时候,此时return也必须省略
        // 而且语句执行的结果就是函数的返回值
        let pow = n => n*n
        console.log(pow(8))
    </script>
</body>
</html>
```

## 箭头函数应用场景

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
        div{
            width: 200px;
            height: 200px;
            background-color:#58a
        }
    </style>
    <div id="ad"></div>
    <script>
        // 1.点击div 2s后颜色变成粉色
        let ad = document.getElementById("ad")
        ad.addEventListener("click",function(){
            // 保存this
            let _this = this;
            // 定时器
            /*
            setTimeout(function(){
                _this.style.background = 'pink'
            },2000)
            */

            // 箭头函数使用
            setTimeout(()=>{
                this.style.background = 'pink'
            },2000)
        })

        // 2.从数组中返回偶数的元素
        const arr = [1,6,9,10,100,25]
        /*
        const result = arr.filter(function(item) {
            if(item % 2 === 0){
                return true
            }else{
                return false
            }
        })
        console.log(result)
        */
        // 箭头函数使用
        const result = arr.filter(item=>{
            if(item%2===0){
                return true
            }else{
                return false
            }
        })
        console.log(result)

        // 箭头函数适合与this无关的回调。定时器，数组的方法回调
        // 箭头函数不适合与this有关的回调。事件回调，对象的方法
    </script>
</body>
</html>
```

## 函数参数的默认值设置

```javascript
// ES6 允许给函数参数赋值初始值
// 1.形参初始值,具有默认值的参数，一般位置要靠后(潜规则)
function add(a,b,c=10){
    return a + b + c;
}
let result = add(1,2,3)
console.log(result)

// 2.与解构赋值结合,也可以写默认值
function connect({host='127.0.0.1',username,password,port,}){
    console.log(host)
    console.log(username)
    console.log(password)
    console.log(port)
}
connect({
    host: 'localhost',
    username: 'root',
    password: 'root',
    port: 8000
})
```

## rest参数

```javascript
// ES6 引入rest参数，用于获取函数的实参，用来代替arguments

// ES5获取实参的方式
/*
function date(){
    console.log(arguments)
}
date('Noi-q','Ecioboy','Jay')
*/

// rest参数
function date(...args){
    console.log(args)
}
date('Noi-q','Ecioboy','Jay')

// rest参数必须要放到参数的最后
function fn(a,b,c,...args) {
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(args)
}
fn(1,2,3,4,5)
```

