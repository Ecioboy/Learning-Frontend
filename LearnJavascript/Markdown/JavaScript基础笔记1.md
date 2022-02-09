# JavaScript

原自：doc.houdunren.com

## DAY01

##### 1.1 变量声明

```javascript
// 定义变量方式1
let name ;
name = "hello";
// 定义多个变量
let a = 1,b = 2;
console.log(b);
//查看变量类型
let c = 1;
console.log(typeof c);

```



##### 1.2 解析过程与变量提升

```javascript
//浏览器解析器会先分析一遍代码，然后在运行。
//解析中发现，while不能作为变量名，没有到执行它上面的代码就出错了。
var x = 'hello';
console.log(x);
var while = 1;

//使用var定义代码，解析器会先解析代码，然后把声明的变量的声明提升到最前，这就叫做变量提升。
console.log(web);
var web = 1;
console.log(web);
/*
以上解析过程：
var web;
console.log(web);
web = 1;
console.log(web);
 */

//变量提升
var web = 'hello';
function hd(){
    if (false){
        var web = 1;
    }
    console.log(web);
}
hd();

```



##### 1.3 let和const暂时性死区TDC

```javascript
//TDZ 又称暂时性死区，指变量在作用域内已经存在，但必须在let/const声明后才可以使用。
//1.变量要先声明后使用
//2.建议使用let/const 而少使用var
console.log(web);
let web = 1;
console.log(web);
const web = 2;

// 在run函数作用域中产生TDZ，不允许变量在未声明前使用。
//当没有提前在函数作用域里面声明，会往上面的代码寻找变量名
x = 4;
function run(){
  console.log(x);
  let x = 3;
}
run();

//下面代码b没有声明赋值不允许直接使用
function noi(a = b,b = 3){}
noi();
//因为a已经赋值，然后b也可以使用b，所以代码正常运行
function noi(a = 3,b = a){}
noi();

```



##### 1.4 var-let-const共同点

```javascript
// 1.共同点：var/let/const都能被函数内访问
var web = 1;
function show(){
    console.log(web);
}
show();
console.log(web);

// 2.全局和局部变量, var/let/const均能使用
var web2 = 2;   //全局变量
function show2(){
    var web2 = 2;   //局部变量/函数内域变量
    console.log(web2);
}
show2();
console.log(web2);
```



##### 1.5 全局污染

```javascript
//没有用var定义，造成的全局污染，可能会调用函数或其他造成出错
//可以使用严格模式
//"use strict";
function show(){
web = 1;
}
show();
console.log(web);
```



##### 1.6 let和const

```javascript
//const常量不能更改
const URL="https://github.com";
URL = "name";
//let变量则可以更改
let URL1="https://github.com";
URL1="name";

//在同一个作用域里面则可以更改常量
function show(){
    const URL="name";
    console.log(URL);
}
show();
```



##### 1.7 window全局对象污染和重复声明

```javascript
//使用var的全局声明也在window当中
var web = 'name';
console.log(window.web);
//拾取不到左间距
var screenLeft = 88;    //使用let的声明则不会影响
console.log(window.screenLeft);

//在同作用域里使用var重复声明出现的错误，则可以使用let/const来改正
var name = 1;
var name = 2;
console.log(name);

//在不同作用域里则可以使用let/const出现相同的变量名
let noi = 1;
function show(){
    let noi = 2;
    console.log(noi);
}
```



##### 1.8 Object.freeze冻结变量

```javascript
//可以使用严格模式来提醒它
"use strict";
//常量不能被更改
const HOST = {
    url: "http://github.com",
    port: 443
};
//使用Object.freeze来锁定
Object.freeze(HOST);
// 引用则可以更改
//HOST.port = 80;     //报错：Uncaught TypeError: Cannot assign to read only property 'port' of object '#<Object>'

console.log(HOST);
```



##### 1.9 标量与引用类型的传值与传址特性

```javascript
//传值:基本类型复制是值的复制，互相不受影响。下例中将a变量的值赋值给b变量后，因为基本类型变量是独立的所以a的改变不会影响b变量的值。
let a = 1;
let b = a;
console.log(a,b);
b = 3;

// 传址:对于引用类型来讲，变量保存的是引用对象的指针。变量间赋值时其实赋值是变量的指针，这样多个变量就引用的是同一个对象。
let c = { name: "noi"};
let d = c;
console.log(c,d);
d.name = "hjm";
console.log(c,d);
```



##### 1.10 null和undefined

```javascript
//undefined
//对声明但未赋值的变量返回类型为 undefined 表示值未定义。
let a;
console.log(a);
//  我们发现未赋值与未定义的变量值都为 undefined ，建议声明变量设置初始值，这样就可以区分出变量状态了
console.log(typeof noi);
console.log(typeof a);

//null
//null 用于定义一个空对象，即如果变量要用来保存引用类型，可以在初始化时将其设置为null
var hd = null;
console.log(typeof hd);
```



##### 1.11 严格模式

```javascript
"use strict";
//严格模式有作用域的区分，且向下检查代码
```





## DAY02



##### 2.1 赋值运算符与算术运算符

```javascript
//1.赋值运算符
//使用 = 进行变量赋值
let a = 1;

//算术运算符
let b = 2;c = 3;
console.log(b * c);     // 乘法
console.log(b - c);     // 减法
console.log(b + c);     // 加法
console.log(b / c);     // 除法
console.log(b % c);     //取余数

//2.复合运算符
//可以使用 *=、/=、+=、-=、%= 简写算术运算。即 n*=2 等同于 n=n*2。
let n = 2;
n *= 2;
console.log(n);

//对变量加减相应数值。
let e = 2;
e += 3;
console.log(e);
e -= 5;
console.log(e);
```



##### 2.2 一元运算符

```javascript
//一元运算符
// ++a 和a++ 一个意思
let a = 3;
//a = a + 1
a++;
//a = a + 1
++a;
console.log(a);     //5

//例子：
let b = 2;
// c = b + (a=a+1);     后置操作符会先运算++a。则a++会后运算.
let c = b + ++a;
console.log(c);     //8
```



##### 2.3 比较运算符

```javascript
//小于<
let a = 1,b = 2;
console.log(a<b);       //true
//大于>
console.log(a>b);       //false
//大于或等于>=
console.log(a>=b);      //false
//小于等于<=
console.log(a<=b);      //true
//等于==(强制类型转换比较)
let c = '1';
console.log(a==b);      //false
console.log(a==c);      //true
//等于===(不强制类型转换比较)
console.log(a===c);     //false
```



##### 2.4 逻辑运算符

```javascript
//逻辑与:使用 && 符号表示逻辑与，指符号两端都为 true 时表达式结果为true。
let a = true;b = true;
if (a && b){
    console.log('表达式成立');
}
//逻辑或:使用 || 符号表示逻辑或，指符号左右两端有一方为true，表达式即成立。
let c = true;d = false;
if (c || d){
    console.log('表达式成立');
}
//逻辑非:使用!= 符合表示逻辑非，指符号左右两端只有指定一方为true，表达式成立
let e = 1;f = 1;
if (e = 1 && f != 2){
    console.log('表达式成立');
}

//优先级
//下列中因为 && 的优先级高所以结果是 true。
console.log(true || false && false);
//可以使用()来提高优先级
console.log((true || false) && false);

```



##### 2.5 短路运算符

```javascript
//1.短路的比较
// 0 和 1的真假
let n = 1;m = 0;
console.log(n == true);      //true
console.log(m == true);      //false
//当a等于1
if (n){
    console.log("true");        //true
}
//当m等于0
if (m){
    console.log("true");        //false
}

//当n和m比较的时候
if (n || m){
    console.log("？？？")
}

//2.短路的赋值
let o = 10;p = 0;
let g = o || p;
console.log(g)      //10

//2.1
let sex = prompt("你的性别是？") || "保密";
console.log(sex);       //性别/保密

```



##### 2.6 if

```javascript
//当条件为真时执行表达式代码块。
if(true){
    console.log("hello world!")
}

//当条件为真执行true,当条件为假执行false
let a = false;
if (a){
    console.log("true");
}else{
    console.log("false")
}

//判断
if (true || true){
    console.log("true");
}else if(true){
    console.log("true");
}else{
    console.log("false");
}
```



##### 2.7 三元表达式

```javascript
//三元表达式

//是针对 if 判断的简写形式。
//当？前面为真，执行为2，当前面为假，则执行为5
let a = false?2:5;
console.log(a);

//也可以嵌套的简写形式
//当?前面是真，执行(3 ? 'Noi' : 'False') 当括号里的?号为真，执行为Noi
let b = true ? (3 ? 'Noi' : 'False'): 5;
```



##### 2.8 switch

```javascript
//switch
//可以将 switch 理解为 if 的另一种结构清晰的写法。

/*
如果表达式等于 case 中的值，将执行此 case 代码段
break 关键字会终止 switch 的执行
没有任何 case匹配时将执行default 代码块
如果case执行后缺少break则接着执行后面的语句 
*/
let a = "Noi"
switch(a){
   case "Ecioboy":
       console.log("true1");
       break;
       case "Noi":
           console.log("true2");
           break;
           default:
               console.log("false3");
}

//当没有break结尾的时候,switch则会一直运行下去，输出的结果则都会显示
let error = 'warning';
switch (error) {
    case 'notice':
    case 'warning':
        console.log('警告或提示信息');
        break;
        case 'error':
            console.log('错误信息');
}

//判断年龄
function Noi(age){
    switch(true){
        case age > 60:
            console.log("老年");
            break;
            case age > 40:
                console.log("中年");
                break;
                case age > 20:
                    console.log("青年");
                    break;
                    default:
                        console.log("年龄出现错误");

    }
}
Noi(61);
```



##### 2.9 while循环

```javascript
//while
//循环执行语句，需要设置跳出循环的条件否则会陷入死循环状态.

/*语法：
while (条件){
    需要执行的代码
}
*/

//简单的循环
let a = 2;
while(a < 100){
   a++;     //a = a + 1
   console.log(a);
}
//简单的循环2
let b = 1
while(b<100){
   b++;     //b = b + 1
   document.write(b);
}
```



##### 2.10 do while

```javascript
//do while
//后条件判断语句，无论条件是否为真都会先进行循环体。
do{
    console.log("hello")
}while(false);

//三角形
let start = 0;
do{
    let n = 0;
    do{
        document.write("*");
    }while(++n <= start);
    document.write("<br/>")
}while(++start <= 5);
```



##### 2.11 for循环

```javascript
//for
for(let i=0;i<10;i++){
    console.log(i);
}

//for简单的循环
for(let d = 0;d < 100;d++){
    console.log(d);
}


//三角形
for(let a=0;a<10;a++){      //控制星的行数
    for(let b=0;b<a;b++){   //控制星的数量
        document.write("*");
    }
    document.write("<br/>");
}
```



##### 2.12 break 和 continue

```javascript
//continue

//打印偶数
for(let i=1;i<=10;i++)
{
    if(i%2)continue;
    console.log(i);
}

//break
for(let a=1;a<=10;a++)
{
    console.log(a);
    break;
}
```

