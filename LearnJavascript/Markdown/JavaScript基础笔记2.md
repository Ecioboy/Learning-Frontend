# JavaScript_2

根据JavaScript来巩固知识



## DAY01



### 基本语法-1

```javascript
// 单行注释符合
/*多行注释符号 */
alert("弹窗");				//y
document.write("hello");		//页面输出
console.log("hello");		//控制台输出
```

```javascript
// JS中严格区分大小写
alert("hello");
Alert("hello");     //错误

//写代码时，代码后面严格加上分号 ;
//不然省的消耗系统资源


//JS中会忽略多个空格和换行，所以可以利用空格和换行对代码进行格式化

```

### 字面量和变量-2
```javascript
// 字面量/常量都是一些不可改变的值
// 比如 1 2 3 4 5
// 字面量都是可以直接使用的
alert(12345);

// 变量 变量可以用来保存字面量，而且变量可以任意改变值
// 变量更加方便我们使用，在开发中都是通过变量去保存一个字面量
// 很少直接使用字面量

// 声明变量
var a;

//为变量赋值
a = 1;

// 声明和赋值可以同时进行
var b = 1;
```



### 标识符-3

```javascript
//也称变量名

//在JS中所有的可以由我们自主命名的都可以称为标识符
//例如：变量名，函数名，属性名

//标识符可以含有字母，数字，_，$
var d1_$ = 1;
//标识符不能以数字开头
var 1 = 1;

//标识符不能是ES中的关键字或保留字
var var = 1;
```



### 字符串-4

```javascript
//在js中一共有六种数据类型
String	//字符串
Number	//数值
Boolean	//布尔值
Null	//空值
Undefined	//未定义

//这前五个属于基本数据类型

Object	//对象
//这个属于引用数据类型

//拼接字符串
let a = "123";
let b = "123";
c = a + b;
console.log(c);		//123123

//任何值和字符串做加法运算的时候，都会先转换为字符串，再进行拼接操作
let a = 123 + "4";
```



### Number-5

```javascript
//检查变量类型
let a = 1;
let b = "1";
console.log(typeof a);
console.log(typeof b);

//获取JS中数值的最大值
console.log(Number.MAX_VALUE);		//1.7976931348623157e+308

//超过最大值则会返回一个 Infinity/正无穷  反之 -Infinity/反无穷

```



### Boolean-6

```javascript
//布尔值只有两个
true	//真
false	//假

```



### null 和undefined-7

```javascript
//null专门用来表示不存在的对象
//使用typeof检查一个null值时，则会返回Object
var a = null;

//undefined用来表示未定义的对象
var b;
console.log(b);
```



### 强制类型转换-String-9

```javascript
//方法1.调用被转换数据类型的toString()方法
	//该方法不会影响到原变量
let cs = 1;
console.log(typeof cs.toString());	//String

//方法2.调用String()函数
let cs = 1;
a = String(cs);
console.log(typeof a);	//String
```



### 强制类型转换-Number-10

```javascript
//方法1.调用一个Number()函数
let a = "123";
console.log(typeof Number(a));		//number

//布尔值转数字
true 转成 1
false 转成 0

//方法2.专门针对字符串
// parseInt()	把一个字符串转换为一个整数

let a = "213.132"
console.log(parseInt(a));

// parseFloat() 	把一个字符串转换为一个浮点数
let a = "2131.1"
console.log(parseFloat(a));
```



### 其他进制的数字-11

```javascript
// 十六进制:需要以0x开头
let a = 0x10
// 八进制：需要以0开头
let a = 070
//二进制：需要以0b开头,b
let a = 0b10;
```



### 转换为Boolean-12

```javascript
//使用Boolean()函数
//除了0和NaN，其余都是true
//空字符串为false
//null 和undefined w
let a = 123;
let b = Boolean(a);
console.log(b);
```



### 算术运算符-13

```javascript
//typeof就是运算符，可以获得一个值的类型
//	- 它会将值的类型以字符串的形式返回
let cs = 1;
var a = typeof cs;
console.log(typeof a);

//true 和false
let cs = 1;
a = true + cs;
console.log(a);		//2
b = false + cs;
console.log(b);		//1
```



### 一元运算符-14

```javascript
```



### 自增和自减-15

```javascript
//通过自增可以使变量在自身的基础上增加1
//对于一个变量自增以后，原变量的值会立即自增1
let a = 1;
a++;
console.log(a);	//2

//自增的两种方式,结果都是一样
// a++ = a = a + 1
// ++a = a = a + 1
a++;	//后加加
++a;	//前加加

//通过以上自增，得出自减原理也是一样
let a = 1;
a--;
console.log(a);		//0

//自减的两种方式,结果都是一样
// a-- = a = a - 1
// --a = a = a - 1
a--;	//后减减
--a;	//前减减
```



### 逻辑运算符-16

```javascript
//逻辑运算符符号：
	//非	!
let a = true;
a = !a;
console.log(a);
	//与	&&
	//两端都为true，则返回true
let a = true && true;
	//或	||
	//一段为true，则表达式成立
l
```



### 赋值运算符-17

```javascript

// +=
let a += 5;		// a = a + 5
// -=
let a -= 5;		//a = a - 5
// *=
let a *= 5;		//a = a * 5
// /=
let a /= 5;		//a = a / 5
// %=
let a %= 5;		//a = a % 5;
```



### 关系运算符-18

```javascript
//当比较两个字符串时，比较的是字符串的字符编码
console.log("1" < "5");
```



### Unicode编码-19

```javascript
//使用Unicode编码方法
// 在字符串里面使用\u开头
console.log("\u2620")
```



### 条件运算符-20

```javascript
/*语法：
条件表达式?语句1:语句2;
*/
//如果条件表达式为true，则执行语句1
//如果条件表达式为false，则执行语句2

```



### 运算符的优先级-21

```javascript
```



### 代码块-22

```javascript
/*
语句是按照自上向下的顺序一条一条执行
在Js中可以使用{}来为语句进行分组
	同一个{}中的语句我们称为是一组语句
*/
{
    document.write("hello")
    alert("h")
}
```



### if 语句-23

```javascript
/*
当判断成立时，只有一个代码块内会执行

语法1：
	if(条件表达式成立){
		语句1;
	}
语法2:
	if(条件表达式成立){
		语句1;
	}else{
		语句2;
	}
语法3:
	if(条件表达式成立){
		语句1;
	}else if(条件表达式成立){
		语句2;
	}else if(条件表达式成立){
		语句3;
	}else{
		语句4;
	}
*/
let cs = 1;

if(cs == 1){
    console.log("1")
}else if(cs == 1){
    console.log("2")
}else if(cs === 1){
    console.log("3")
}else{
    console.log("true")
}
```

### if 语句练习-24

```javascript
// prompt() 可以弹出一个提示框，该提示框中会带有一个输入框
// 用户输入的内容将会作为函数的返回值返回，可以用变量来接受
// prompt()返回值的类型是string
let score = prompt("请输入小明的成绩：","");
let a = parseInt(score);
if (60 <= a < 80){
    alert("奖励一本参考书!");
}

------------------------------------------------------

let score = prompt("数字：",)
if (score < 80){
    alert("yes");
} else if (score < 99){
    alert("no")
} else{
    alert("how?")
}
------------------------------------------------------
let score = prompt("小明的成绩：",'');

if (score > 100 || score < 0 || isNaN(score)){
    alert("干嘛呢？")
}else {
    if(score == 100){
        alert("奖励宝马");
    }else if(score >= 80){
        alert("奖励iPhone手机");
    }else if(score >= 60){
        alert("奖励一本书");
    }else{
        alert("奖励一大嘴巴子");
    }
}
------------------------------------------------------
let height = prompt("请输入你的身高(cm)：");
let money = prompt("请输入你的财富(k)：");
let face = prompt("请输入你的颜值(px)：");

if (height > 180 && money > 1000 && face > 500){
    alert("我一定要嫁给你");
}else if (height > 180 || money > 1000 || face > 500){
    alert("勉强可以嫁给你");
}else{
    alert("不嫁");
}
------------------------------------------------------
// prompt()返回值的类型是string
//使用+号来进行数据类型转换
let num1 = +prompt("第一个数：");
let num2 = +prompt("第二个数：");
let num3 = +prompt("第三个数：");

if (num1 < num2 && num1 < num3){
    //num1最小,比较num2和num3
    if (num2 < num3){
        //num1 num2 num3
        alert(num1+','+num2+','+num3);
    }else if(num3 < num2){
        //num1 num3 num2
        alert(num1+','+num3+','+num2);
    }
}else if (num2 < num1 && num2 < num3){
    //num2最小,比较num1和num3
    if (num1 < num3){
        //num2 num1 num3
        alert(num2+','+num1+','+num3);
    }else if (num3 < num1){
        //num2 num3 num1
        alert(num2+','+num3+','+num1);
    }
}else{
    //num3最小,比较num1和num2
    if (num1 < num2){
        //num3 num1 num2
        alert(num3+','+num1+','+num2);
    }else if (num2 < num1){
        //num3 num2 num1
        alert(num3+','+num2+','+num1);
    }
}
```



### switch语句-25

```javascript
/*t
语法：
	switch(条件表达式){
		case 表达式:
			语句1
			break;
		case 表达式:
			语句2
			break;
		default:
			语句3
			break;
	}
/*
let cs = 1;

switch(cs){
    case 2:
    console.log("no");
    break;
    case 1:
    console.log("yes");
    break;
    default:
    console.log("False");
    break;
```

### switch语句练习-26

```javascript
//对于成绩大于60分的，输出'合格',低于60输出'不合格'
--------------------------------------------------第一种
let score = +prompt("分数：");
switch(parseInt(score/10)){
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    alert("合格");
    break;
    default:
    alert("不合格");
    break;
}
--------------------------------------------------第二种
let score = 60;
switch(true){
    case score >= 60:
    alert("合格");
    break;
    default:
    alert("不合格");
    break;
}
```



### while循环-27

```javascript
/*
语法：
    while(条件表达式){
        语句;
    }
*/

// 向页面输出连续的数字
//死循环：也称死代码
let n = 0;
while(true){
    alert(n++);
}

//创建一个循环，往往需要三步

//1.创初始化一个变量
let i = 0;

//2.在循环中设置一个条件表达式
while(i < 10){
    //3.定义一个更新表达式，每次更新初始化变量
    document.write(i++ + "<br/>")
}

```

### do...while-28

```javascript
// do...while循环
/*
语法:
    do{
        语句1;
    }while(条件表达式)
*/
let i = 1;
do{
   document.write(i++ + "<br/>");
}while(i < 10);

/*
执行流程：
先执行，后判断，再循环
do...while语句在执行时，会先执行循环体，
循环体执行完毕以后，在对while后的表达式进行判断，
如果结果为true，则继续执行循环体
如果结果为false，则终止循环

*/
```

### while循环练习-29

```javascript
// 假如投资的年利率为5%,试求从1000块到5000块，需要花费多少年.
//1000 * 0.05 + 1000 
let n = 1;
let money = 1000;
while(money <= 5000){
    money *= 1.05;		//money = money * 1.05
    console.log(money + "块" + "需要" + n++ + "年");
}
```



### for循环-30

```javascript
//for循环
//有专门的位置用来放这三个表达式
/*
1.初始化表达式
2.条件表达式
3.更新表达式

语法：
for(初始化表达式;条件表达式;更新表达式){
    语句;
}
*/
for(let i = 0;i < 10;i++){
   alert(i);
}

/*
执行流程：
for(①初始化表达式;②条件表达式;③更新表达式){
语句;
}
①执行初始化表达式，初始化变量
②执行条件表达式，判断是否执行循环
如果为true，则执行循环③
如果为false，则终止循环
④执行更新表达式，更新表达式执行完毕继续重复②
*/

for(;;){
    alert("死循环");
}
```

### for循环练习-31

```javascript
//打印1-100之间奇数之和

//创建一个变量，来保存奇数之和
let sum = 0;

for(let i = 1;i <= 100;i++){
    //判断i是否为奇数
    //不能被2整除的数就是奇数
    if(i%2 != 0){
        //如果i除以2有余数则证明i时奇数
        console.log(i);
        sum = sum+i;	//循环计算奇数之和
    }
}
----------------------------------------------
//打印1-100之间所有7的倍数的个数及总和
let sum = 0;
//计数器
let count = 0;
for(let i = 1;i<=100;i++){
    //判断i是否为7的倍数
    if(i%7 == 0){
        console.log(i);
        sum += i;	//sum = sum + i;
        count++;
    }
}
//总和
console.log(sum);
//个数
console.log(count);
----------------------------------------------
//水仙花数是指一个3位数，它的每个位上的数字的3次幂之和等于它本身，
//例如：13 + 53 + 33 =153，请打印所有的水仙花数。

//先打印所有的三位数
for(let i=100;i<1000;i++){
    //先获取i的百位 十位 个位的数字
    //百位
    let bai = parseInt(i/100);
    //十位
    let shi = parseInt((i - bai*100)/10);
    //个位
    let ge = i % 10;
    //判断i是否为水仙花数
    if(bai*bai*bai + shi*shi*shi + ge*ge*ge == i){
        console.log(i);
    }
}
----------------------------------------------
//在页面中接收一个用户输入的数字，并判断该数是否是质数。
//质数：只能被1和它自身整除的数，1不是质数也不是合数，质数必须是大于1的自然数。

let num = +prompt("请输入一个大于1的自然数：");

//判断这个值是否合法
if(num <= 1){
    alert("该值不合法");
}else{
    //判断num是否为质数
    //获取2-num之间的质数
    for(let i=2;i<num;i++){
        console.log(i);
        //判断num是否能i整除
        if(num % i != 0){
            //如果num能被i整除，则说明num一定是质数

        }
    }
}
```



### 嵌套的for循环-32

```javascript
//通过程序，在页面输出如下图形：
/*
*
**
***
****
*/
//通过for循环来输出
//这个for循环执行几次，图形高度就是多少
//它可以控制高度
for(let i=0;i<5;i++){
    document.write("<br/>")

    // 在循环内部再创建一个循环，用来控制图形的宽度
    //目前外部的for循环执行1次，内部的就会执行5次
    //内层循环可以来决定图形的宽度，执行几次图形的宽度就是多少
    // for(let o=0;o<i+1;o++){
    // 	document.write("*")
    // }
    for(let o=0;o<5-i;o++){
        document.write("*")
    }
}
-----------------------------------------------------------
//99乘法表

//创建外层循环，用来控制乘法的高度
for(let i=1;i<=9;i++){

    document.write("<br/>");
    //创建一个内层循环，控制乘法的宽度
    for(let j=1;j<=i;j++){
        document.write(j + "*" + i + "=" + i*j + "&nbsp" + "&nbsp")
    }
}
```



### break和continue-33

```javascript
//break可以用来退出switch或循环语句
//不能再if语句中使用break和continue
for(let i=0;i<5;i++){
    console.log(i);

    if(i == 2){
        //这里面break是用于终止这个循环体的
        break;
    }
}

// break关键字，会立即终止离它最近的那个循环语句
for(let i=0;i<5;i++){
    console.log("@外层循环" + i);
    for(let j=0;j<5;j++){
        break;
        console.log("内层循环" + j);
    }
}

//可以为循环语句创建一个label标签，来标识当前的循环
// label:循环语句
// 使用break语句时，可以在break后跟着一个label
//	这样break将会结束值的循环，而不是最近的

outer:
for(let i=0;i<5;i++){
    console.log("@外层循环" + i);
    for(let j=0;j<5;j++){
        break outer;
        console.log("内层循环" + j);
    }
}

// continue关键字可以跳过当次循环
for(let i=0;i<5;i++){

    if(i==2){
        continue;
    }
    console.log(i);
}

// continue关键字可以跳过当次循环
// 同样continue也是默认离他最近的循环起作用
for(let i=0;i<5;i++){

    for(let j=0;j<5;j++){
        if(j==1){
            continue;
        }
        console.log(">>>>>>>" + j);
    }
    console.log("<<<<<<<<<" + i);
}


```

### 计时器和开方-34

```javascript
//计时器的用法
console.time("time");	//开始
console.timeEnd("time");	//结束

//可以通过Math.sqrt()对一个数进行开方
let a = Math.sqrt(4);
console.log(a);
```



## DAY02

### 对象的介绍-1

```javascript
//JS中的数据类型
/*
    String 字符串
    Number 数值
    Boolean 布尔值
    Null 空值
    Undefined 未定义
        以上这五种属于基本数据类型，以后我们看到的值
            只要不是上面的五种，全都是对象
    Object 对象

    基本数据类型都是单一的值"hello" 123 true,
        值和值之间没有任何的联系，

    在JS中来表示一个人的信息（name gender age）
    let name = "Noi";
    let gender = "N";
    let age = 18;

    如果使用基本数据类型的数据，我们所创建的变量都是独立的，不能成为一个整体。

    对象属于一种复合的数据类型，在对象中可以保存多个不同的数据类型.

    对象的一个分类：
        1.内建对象
            由ES标准中定义的对象，在任何的ES的现实中都可以使用
            比如：Math String Number Function Object
        2.宿主对象
            由JS的运行环境提供的对象，目前主要由浏览器提供的对象
            比如：BOM DOM
        3.自定义对象
            由开发人员自己创建的对象
*/
```



### 对象的基本操作-2

```javascript
//创建对象
//使用new关键字调用的函数，是构造函数constructor
//	构造函数是专门用来创建对象的函数
let obj = new Object();

// console.log(typeof obj);

// 在对象中保存的值称为属性
// 向对象中添加属性
// 语法：对象，属性名 = 属性值;

// 向obj中添加一个name属性
obj.name = "Noi";
// 向obj中添加一个gender属性
obj.gender = "男";
//向obj中添加一个age属性
obj.age = 18;

//读取对象中属性
// 语法：对象.属性名
//如果读取对象中没有的属性，不会报错，而是返回undefined
console.log(obj.name);

//修改对象的属性值
// 语法：对象.属性名 = 新值;
obj.name = "Jay";

//删除对象的属性
//语法：delete 对象.属性名
delete obj.name;
```



### 属性值和属性名-3

```javascript
let obj = new Object();

// 向对象中添加属性
obj.name = "Noi";

/*
属性名：
    对象的属性名不强制要求遵守标识符的规范
        什么名字都可以使用
    但是尽量使用标识符的规范去做
*/
obj.var = "Hello";

//如果要使用特殊的属性名，不能采用.的方式来操作
/*
需要使用另一种方式：
语法:
    对象["属性名"] = 属性值;
读取时也需要采用这种方式

使用[]这种形式取操作属性，更加的灵活
 在[]中可以直接传递一个变量，这样变量值时多少就会读取哪个属性
*/
obj["123"] = 456;

//传值
let a = "123";
console.log(obj[a]);
console.log(obj.var);

/*
属性值：
JS对象的属性值，可以是任意的数据类型
    甚至也可以是一个对象
*/
obj.test = true;

//创建一个对象
let obj2 = new Object();
obj2.name = "HJM";

// 将obj2设置为obj的属性
obj.test = obj2;

console.log(obj.test.name);


//in 运算符
// 通过该运算符可以检查一个对象中是否含有指定的属性
// 	如果有则返回true，没有则false
// 语法：
// 	"属性名" in 对象
console.log("name" in obj);
```



### 基本和引用数据类型-4

```javascript
/* 
 基本数据类型
    String Number Boolean Null Undefined

引用数据类型
Object

JS中的变量都是保存到栈内存的
    基本数据类型的值直接扎起栈内存存储
    值与值之间是独立存在的，修改一个变量不会影响其他的变量
 */

let a = 123;
let b = a;
a++;
console.log("a = " +a);
console.log("a = " +b);

/* 
 对象是保存到堆内存中的，每创建一个新的对象，就会在堆内存中开辟出一个新的空间，
 而变量保存的是对象的内存地址（对象的引用）
 如果两个变量保存的是同一个对象引用，当一个通过一个变量修改属性时，另一个也会受到影响
 */

let obj = new Object();
obj.name = "Noi"

let obj2 = obj;

//修改obj的name属性
obj.name = "HJM"

console.log(obj.name);
console.log(obj2.name);

// 设置obj2为null
// 当变量的值改变了，不会影响到对象的属性
// 只是单纯的更改了变量的值
obj2 = null;
console.log(obj);
console.log(obj2);

//基本数据类型的值可以相等
let c = 10;
let d = 10;
console.log(c == d);

// 当对象与对象之间的内存地址不一样，就算值和相貌相同，但都不相等
// 所以引用数据类型时，它是比较对象的内存地址
let obj3 = new Object();
let obj4 = new Object();
obj3.name = "沙和尚";
obj4.name = "沙和尚";
console.log(obj3);
console.log(obj4);

console.log(obj3 == obj4);
```



### 对象字面量-5

```javascript
// 创建一个对象
let obj = new Object();

/* 

 使用对象字面量来创建一个对象
 */
let obj2 = {};
console.log(typeof obj2);
obj2.name = "Noi";
console.log(obj2.name);

/* 
 使用对象字面量，可以在创建对象时，直接指定对象中的属性
 语法:{属性名:属性值,属性名:属性值...}
    对象字面量的属性名可以加引号，也可以不加，建议不加。
    如果要使用一些特殊的名字，则必须加引号

 属性名和属性值时一组一组的名值对结构
    名和值之间使用:连接，多个名值对之间使用,隔开
    如果一个属性之后没有其他的属性了，就不要写逗号(,)

    对象里面也可以创建对象,但含义上不是嵌套
 */
let obj3 = {
    name:"HJM",
    age:18,
    gender:"男",
    test:{
        name:"Noi"
    }
};
console.log(obj3.test.name);
```



### 方法-6

```javascript
// 创建一个对象
let obj = new Object();

// 向对象中添加属性
obj.name = "noi";
obj.age = 18;

// 对象的属性值可以是任意的数据类型,也可以是一个函数
obj.sayName = function(){
    console.log(obj.name);
};
console.log(obj.sayName);
// 调方法
obj.sayName();
// 调函数
// fun();
/* 函数也可以成为对象的属性
 如果一个函数作为一个对象的属性保存，
 那么我们称这个函数是这个对象的方法
 调用这个函数就说调用对象的方法(method)

 但是它只是名称上的区别没有其他的区别
 */

// 第二种方法
let obj2 = {
    name:"Noi",
    age:18,
    sayNoi:function(){
        console.log(obj2.name);
    }
}
console.log(obj2.sayNoi());
```



### 枚举对象中的属性-7

```javascript
/* 枚举对象中的属性

 */
let obj = {
    name:"Noi",
    age:18,
    gender:"男",
    address:"云南"
};
/* 需要使用for in语句
 语法：
    for(let 变量 in 对象){

    }

    for..in语句 对象中有几个属性，循环体就会执行几次
        每次执行时，会将对象中的一个属性的名字赋值给变量
 */
for(let i in obj){
    console.log("属性名:"+i);

    console.log("属性值:" + obj[i]);
}
```







## DAY03



### 函数的简介-1

```javascript
/* 
函数：
    - 函数也是一个对象
    - 函数中可以封装一些功能（代码），在需要时可以执行这些功能（代码）
    - 函数中可以保存一些代码在需要的时候调用
    - 使用typeof检查一个函数对象时，会返回function
 */
// 我们在实际开发中很少使用构造函数来创建一个函数对象
// 创建一个函数对象
// 可以将要封装的代码以字符串的形式传递给构造的函数

let fun = new Function("console.log('Noi');");
console.log(typeof fun);

// 封装到函数中的代码不会立即执行
// 函数中的代码会在函数调用的时候执行
// 调用函数语法：函数对象()
// 当调用函数时，函数中封装的代码会按照顺序执行
fun();

/* 
 使用函数声明来创建一个函数
    语法:
        function 函数名([形参1,形参2...]){
            语句...
        }
 */
function fun2(){
    console.log('HJM');
}
fun2();

/* 
 使用函数表达式创建一个函数
 语法：
 let 函数名 = function([形参1,形参2...]){
     语句...
 }
 */
let fun3 = function(){
    console.log("匿名函数");
}
fun3();
```



### 函数的参数-2

```javascript
/* 函数的参数

 定义一个用来求两个数和的函数

 可以在函数的()中来指定一个或多个形参（形式参数）
 多个形参使用,号隔开，声明形参就相当于在函数内部声明了对应的变量
 但是并不赋值
 */
function sum(a,b){

    console.log("b =" + b);
    console.log(a+b);
}
/* 
 在调用函数时，可以在()中指定实参（实际参数）
 实参将会赋值给函数中对应的形参
 */
sum(1,2);
/* 
 调用函数时解析器不会检查实参的类型
 所以要注意，是否有可能会接收到非法的参数,如果有可能则需要对参数进行类型的检查
 */
sum(123,"Noi");

// 调用函数时，解析器也不会检查实参的数量
// 多余的实参不会被赋值
//函数的实参可以是任意的数据类型
sum(123,456,"Noi",true,null);

// 如果实参的数量少于形参的数量，则没有对于实参的形参将是undefined
sum(123);
```



### 函数的返回值-3

```javascript
/* 函数的返回值

 创建一个函数，用来计算三个数的和

 可以使用return 来设置函数的返回值
 语法：
    return 值;

return后的值将会会作为函数的结果返回，
    可以定义一个变量，来接收该结果
    如果return语句不跟任何值就相当于返回一个undefined
    不写return也是undefined
    return后可以跟任意类型的值

在函数中return后的语句都不会执行

 */
function sum(a,b,c){
    // alert(a+b+c);
    let d = a+b+c;

    return d;

    alert("hello");
}

// 调用函数
// 变量result的值就是函数的执行结果
// 函数返回什么result的值就是什么
let result = sum(1,2,3);
console.log(result);
```



### 实参可以是任何值-4

```javascript
/* 定义一个函数，判断一个数字是否为偶数，如果是返回true,否则返回false */
function sum(a){
    if(a%2 == 0){
        return true;
    }else{
        return false;
    }
}
let sum1 = sum(2);
console.log(sum1);
// 第二种
function sum2(b){
    return b%2 == 0;
}
let sum3 = sum(4);
console.log(sum3);

/* 定义一个函数，可以根据半径计算一个圆的面积，并返回结果 */
// 3.14*r*r
function mianji(r){
    return 3.14*r*r;
}
let mianji1 = mianji(5);
console.log(mianji1);

------------------------------------------------
/* 创建一个函数，可以在控制台中输出一个人的信息
    可以输出人的name age gender address

    实参可以是任意的数据类型，也可以是一个对象
        当我们的参数过多时，可以将参数封装到一个对象中，任何通过对象传递
 */
// o相当于被替换成了obj
function sayHello(o){
    console.log("o = " +o)
    console.log("我是"+o.name+",今年我"+o.age+"岁了,"+"我是一个"+o.gender+"人,"+"我来自"+o.address);
}

// 创建一个对象
let obj = {
    name:"HJM",
    age:18,
    gender:"男",
    address:"云南"
};
sayHello(obj);

/* 实参可以是一个对象,也可以是一个函数

 */
function fun(a){
    console.log("a = "+a);
    a(obj);
}
fun(sayHello);

/* 
调用函数的返回值
 sayHello()
调用函数的对象
 sayHello
 */
```



### 返回值的类型-5

```javascript
function fun(){
    alert("函数执行了")
    for(let i=0;i<5;i++){
        if(i == 2){
            //使用break可以退出当前的循环
            //break;

            //continue用于跳过当次循环
            //continue;

            // return可以结束整个函数
            //return;
        }
        console.log(i);
    }
    alert("函数执行完了")
}
fun();

/* 返回值可以是任意的数据类型 
   也可以是一个对象,
*/

function fun2(){
    let obj = {name:"Noi"};
    return obj;
}
let a = fun2();
console.log(a.name);

// 也可以是一个函数
function fun3(){
    // 在函数内部再声明一个函数
    function fun4(){
        alert("我是fun4");
    }
    fun4();
}
fun3();
```



### 立即执行函数-6

```javascript
/* 函数对象

 立即执行函数
    函数定义完，立即被调用，这种函数叫做立即执行函数
    立即执行函数往往只会执行一次
 */
(function (){
    alert("我是匿名函数");
})();
//而且可以传值
(function (a,b){
    console.log("a = "+a);
    console.log("b = "+b);
})(1,2);
```



### 全局作用域-7

```javascript
/* 作用域
     - 作用域指一个变量的作用范围
     - 在JS中有两种作用域：
        1.全局作用域
            - 直接编写在script标签中的JS代码，都在全局作用域中
            - 全局作用域在页面打开时创建，在页面关闭时销毁
            - 在全局作用域中有一个全局对象window,
                它代表的时一个浏览器的窗口,它由浏览器创建我们可以直接使用
            - 在全局作用域中：
                创建的变量都会作为window对象的属性保存
                创建的函数都会作为window对象的方法保存
            - 全局作用域中的变量都是全局变量
                在页面的任意的部分都可以访问到


 */

// 必须使用var
var b = 1;
console.log(window.b);


function fun(){
    console.log("Noi");
}
window.fun();
// console.log(a);


/* -变量声明提前
    - 使用var关键字声明的变量，会在所有的代码执行之前被声明
        但是如果声明变量时不使用var关键字，则变量不会被声明提前
   - 函数的声明提前
        使用函数声明形式创建的函数function 函数(){}
        它会在所有的代码执行之前就被创建，所以我们可以在函数声明前调用函数
    使用函数表达式创建的函数，不会被声明提前，所以不能在声明前使用
 */
var a;
console.log("a = "+a);
a = 1;


// 函数声明，会被提前创建
fun();
function fun(){
    console.log("hello");
}

// 函数表达式,不会被提前创建
fun2();
var fun2 = function(){
    console.log("hello2");
}
```



### 函数作用域-8

```javascript
/* 
    2.函数作用域 
        - 调用函数时创建函数作用域，函数执行完毕以后，函数作用域销毁
        - 每调用一次函数就会创建一个函数作用域，他们之间是互相独立的.
        - 在函数作用域中可以访问到全局作用域的变量
            在全局作用域中无法访问到函数作用域的变量
        - 当在函数作用域操作一个变量时，它会先在自身的作用域中寻找，如果有就直接使用
            如果没有则向上一级中寻找
            如果全局作用域中依然没有找到，则会报错
        - 如果想在函数作用域中访问全局作用域可以使用 window.对象

*/

// 创建一个变量
var a = 10;

function fun(){

    var a = "函数中的a";
    var b = 20;

    function fun2(){
        console.log(a);
    }

}
fun();
fun();
// console.log(b);

// 在函数作用域中也有声明提前的特性，
    // 使用var关键字声明的变量，会在函数中所有的代码执行之前被声明
    // 在函数中不适应var声明的变量都会成为全局变量
var c = 20;
function fun3(){
    console.log(a);
    var a = 10;
    c = 10;
}
fun3();
console.log(c);


/* 定义形参就相当于在函数作用域中声明了变量 */

var e = 10;
function fun4(e){
    alert(e)
}
fun4();
```



### 函数的方法-9

```javascript
function fun(){
    alert(this);
};

/* call()和apply() 
    - 这两个方法都是函数对象的方法，需要通过函数对象来调用
    - 当对函数调用call和apply都会调用函数执行
    - 在调用call和apply可以将一个对象指定为第一个参数
        此时这个对象将会成为函数执行时的this
        可以改变this指向的方向
    call方法可以将实参在对象之后依次传递
    apply方法需要将实参封装到一个数组统一传递

    this情况：
        1.以函数的形式调用时，this是window
        2.以方法的形式调用时，this是调用方法的对象
        3.以构造函数的形式调用时，this就是新创建的那个对象
        4.使用call和apply调用时，this时指定的那个对象*/

// fun.apply();
var obj = {};
// fun();
fun.apply(obj);
```



### arguments-10

```javascript
/* 在调用函数时，浏览器每次都会传递进两个隐含的参数
    1.函数的上下文对象this
    2.封装实参的对象arguments
        - arguments是一个类数组对象，它也可以通过索引来操作数据，也可以获取长度
        - 在调用函数时，我们所传递的实参都会在arguments中保存
        - arguments.length可以获取实参的长度
        - 我们即使不定义形参，也可以通过arguments来使用实参
            只不过比较麻烦
            arguments[0] 表示第一个实参
            arguments[1] 表示第二个实参
        - 它里边有一个属性叫做callee
            这个属性对应一个函数对象，就是当前正在指向的函数对象
            */
function fun(a,b){
    console.log(arguments.length);
    console.log(arguments[0]);
    // console.log(arguments.callee);
}
fun("noi",true);
```



## DAY04



### debug-1

```javascript
alert(d);
var a = 10;
var b = "noi";

c = true;

function fun(){
    alert("NOI");
}

var d = 10;

// 浏览器里面调试断点
google chrome: source
```



### this-2

```javascript
/* 
 解析器在调用函数时每次都会向函数内部传递进一个隐含的参数
    这个隐含的参数就是this,this指向的是一个对象
    这个对象我们称为函数执行的上下对象，
    根据函数的调用方式的不同，this会指向不同的对象
        1.以函数的形式调用时，this永远都是window
        2.以方法的形式调用时，this就是调用方法的那个对象
 */

function fun(a,b){
    // console.log(a,b);

    console.log(this.name);
}


//  创建一个对象
var obj = {
    name:"AAA",
    sayName:fun
};
console.log(obj.sayName == fun);

var obj2 = {
    name:"BBB",
    sayName:fun
};


// 方法的形式调用
obj.sayName();

//函数的形式调用
// fun();
---------------------------------------------------------------------------
// 创建一个name变量
var name = "全局";

// 创建一个fun函数
function fun(){
    console.log(this.name);
}

// 创建两个对象

var obj = {
    name:"Noi",
    sayName:fun
};

var obj2 = {
    name:"HJM",
    sayName:fun
};

fun();
```



### 使用工厂的方法创建对象-3

```javascript
/* 
 创建一个对象

 */
var obj = {
    name:"Noi",
    age:18,
    gender:"男",
    sayName:function(){
        alert(this.name);
    }
};

/* 使用工厂方法创建对象 
    通过该方法可以大批量创建对象
*/
function createPerson(name,age,gender){

    // 创建一个新的对象
    let obj = new Object();

    // 向对象中添加属性
    obj.name = name;
    obj.age = age;
    obj.gender = gender;
    obj.sayName = function(){
        alert(this.name);
    };

    // 将新的对象返回
    return obj;
}

let obj2 = createPerson("Noi",28,"N");
let obj3 = createPerson("HJM",18,"L");
let obj4 = createPerson("GZZ",18,"L");

console.log(obj2);
console.log(obj3);
console.log(obj4);


-----------------------------------------------------
    /* 
 使用工厂方法创建的对象，使用的构造函数都是Object
    所以创建的对象都是Object这个类型
    就导致我们无法区分出多种不同类型的对象

 */

function createDog(name,age){
    // 创建一个对象 
    let obj = new Object();
    //向对象中添加属性
    obj.name = name;
    obj.age = age;

    // 将新的对象返回
    return obj;
}
let dog = createDog("CZ",3);
let dog2 = createDog("CA",2);

console.log(dog);
console.log(dog2);
```



### 构造函数-4

 ```javascript
 /* 创建一个构造函数，专门用来创建Person对象的
     构造函数就是一个普通的函数，创建方式和普通函数没有区别
     不同的时构造函数习惯上首字母大写
 
  构造函数和普通函数的区别就是调用方式的不同
     普通函数就是直接调用，而构造函数需要使用new关键字来调用
 
 构造函数的执行流程：
     1. 立刻创建一个新的对象
     2.将新建的对象设置为函数中this,在构造函数中可以使用this来引用新建的对象
     3.逐行执行函数中的代码
     4.将新建的对象作为返回值返回
 
 使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个类
     我们将通过一个构造函数创建的对象，称为该类的实例 
 
 this的情况：
 1.当以函数的形式调用时，this是window
 2.当以方法的形式调用时，谁调用方法this就是谁
 3.当以构造函数的形式调用时，this就是新创建的那个对象
  */
 function Person(name,age,gender){
     this.name = name;
     this.age = age;
     this.gender = gender;
 }
 var per = new Person("Noi",18,"男");
 var per2 = new Person("HJM",17,"女");
 console.log(per);
 console.log(per2);
 
 /* 使用instanceof可以检查一个对象是否为一个类的实例 
     语法： 
          对象 instanceof 构造函数
      是返回true，否则返回false
 */
 console.log(per instanceof Person);
 
 /* 所有的对象都是Object的后代
     所以任何对象和Object被instanceof检查时都会返回true
  */
 console.log(per instanceof Object);
 ```



###  构造函数的修改-5

```javascript
/* 创建一个Person构造函数 
    在Person构造函数中，为每一个对象都添加了一个sayName方法
        目前我们的方法是在构造函数内部创建的，
            也就是构造函数每执行一次就会创建一个新的sayName方法
        也是所有实例的sayName都是唯一的
        这样就导致了构造函数执行一次就会创建一个新的方法
            执行n次就会创建n个新的方法，而且n个方法都是一模一样的
            这是完全没有必要的，完全可以使用所有的对象共享同一个方法

*/
function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    // 向对象添加一个方法
    // this.sayName = fun;
};

/* 将sayName方法在全局作用域中定义 

    将函数定义在全局作用域，污染了全局作用域的命名空间
    而且定义在全局作用域中也很不安全
*/

/*
function fun(){
    alert("Hello");
};
*/

//向原型中添加一个方法
Person.prototype.sayName = function(){
        alert("Hello");
}

// 创建一个Person实例
let per = new Person("Noi",18,"男");
let per2 = new Person("HJM",18,"男");
console.log(per);
console.log(per2);
```



### 原型对象-6

```javascript
/* 
 原型 prototype

    我们所创建的每一个函数，解析器都会向函数中添加一个属性prototype
         这个属性对应着一个对象，这个对象就是我们所谓的原型对象
    如果函数作为普通函数调用prototype没有任何作用
    当函数以构造函数调用时，它所创建的对象中都会有一个隐含的属性，
        指向该构造函数的原型对象，我们可以通过__proto__来访问该属性

    原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象
        我们可以将对象中共有的内容，统一设置到原型对象中

    当我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，
        如果没有则会去原型对象中寻找，


    以后我们创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中，
        这样不用分别为每一个对象添加，也不会影响到全局作用域，就可以使每个对象都具有这些属性和方法了
 */


function MyClass(){

}

// 向MyClass的原型中添加属性a

MyClass.prototype.a = 123;

// 向MyClass的原型中添加一个方法
MyClass.prototype.sayHello = function(){
    alert("Hello");
};

var mc = new MyClass();

var mc2 = new MyClass();

// 向mc中添加a属性
mc.a = "我是mc中的a";

MyClass.prototype.sayHello();

console.log(mc.a);

console.log(mc.__proto__);
console.log(mc.__proto__ == MyClass.prototype);
console.log(MyClass.prototype);

// function Person(){
// }
// console.log(Person.prototype);
// console.log(Person.prototype == MyClass.prototype);		false
```



###  原型对象的补充-7

```javascript
/* 创建一个构造函数 */
function MyClass(){

}
//  向MyClass的原型中添加一个name属性
MyClass.prototype.name = "Noi";

let mc = new MyClass();
mc.age = 18;

console.log(mc.name);

// 使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true
console.log("name" in mc);

// 可以使用对象的hasOwnProperty()来检查对象自身中是否含有该属性
// 使用该方法只有当对象自身含有属性时，才会返回true
console.log(mc.hasOwnProperty("name"));

/* 原型对象也是对象，所以它也有原型 
    当我们使用一个对象的属性或方法时，会先在自身中寻找，
        自身如果有，则直接使用，
        如果没有则去原型对象中寻找，如果原型对象中有，则使用
        如果原型中没有则去原型的原型中寻找,直到找到Object对象的原型
        Object对象的原型没有原型，如果在Object中依然没有找到，则返回undefined
*/
console.log(mc.__proto__.__proto__.hasOwnProperty("hasOwnProperty"));
```



### toString()-8

```javascript
function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;

}
var per = new Person("NiooH",18,"男");



// 当我们直接在页面中打印一个对象时，实际上是输出的对象的toString()方法的返回值
// 如果我们希望在输出对象时不输出[Object Object],可以为对象添加一个toString()方法

per.toString = function(){
   return "hello";
}

console.log(per);
var result = per.toString();
console.log(result);

// 想要在构造函数里面使用直接修改原型的toString
```



### 垃圾回收-9

```javascript
/* 垃圾回收 (GC)
    - 就像人生活的时间长了会产生垃圾一样，程序运行过程中也会产生垃圾
        这些垃圾积攒过多以后，会导致程序运行的速度过慢
        所以我们需要一个垃圾回收的机制，来处理程序运行过程中产生的垃圾
    - 当一个对象没有任何的变量或属性对它进行引用，此时我们将永远无法操作该对象
        此时这种对象就是一个垃圾，这种对象过多会占用大量的内存空间，导致程序运行变慢
        所以这种垃圾必须进行清理
    - 在JS中拥有自动的垃圾回收机制，会自动将这些垃圾对象从内存中销毁,
        我们不需要，也不能进行垃圾回收的操作
    - 我们需要做的只是要将不再使用的对象设置为null即可
*/
var obj = new Object();

// 对对象进行各种操作...

obj = null;
```





## DAY05



### 数组的简介-1

```javascript
/* 内建对象

 数组（Array）
    - 数组也是一个对象
    - 它和我们普通对象功能类似，也是用来存储一些值的
    - 不同的是普通对象是使用字符串作为属性名的，
        而数组是使用数字来作为索引操作元素
    - 索引：	
        从0开始的整数就是索引
    - 数组的存储性能比普通对象要好，在开发中我们经常使用数组来存储一些数据
 */

// 创建数组对象
let arr = new Array();

// 向数组中添加元素
/* 语法：
    数组[索引] = 值;
 */
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 30;
arr[10] = 30;
/* 读取数组中的元素
    语法：
        数组[索引]
    如果读取不存在的索引，不会报错而是返回undefined
 */

// 使用typeof检查一个数组时，会返回Object
console.log(typeof arr);
console.log(arr[0]);

// 获取数组的长度
// 可以使用length属性来获取数组的长度（元素的个数）
// 数组.length
console.log(arr.length);
/* 对于连续的数组，使用length可以获取到数组的长度（元素的个数）
 对非连续的数组，使用length会获取到数组的最大索引+1
    尽量不要创建非连续的数组
 */
console.log(arr);
/* 修改length 
    如果修改的length大于原长度，则多出部分会空出来
    如果修改的length小于原长度，则多出的部分会被删除
*/
arr.length = 7;
// arr.length = 1;
console.log(arr);

/* 向数组的的最后一个位置添加元素 
    语法：数组[数组.length] = 值;
*/
arr[arr.length] = 90;
```



### 数组字面量-2

```javascript
/* 数组字面量 
*/
// 创建一个数组
//let arr = new Array();

// 使用字面量创建数组
// 语法：[]
// var arr = [];

// console.log(typeof arr);

// 使用字面量创建数组,可以在创建时就指定数组中的元素
var arr = [
    1,
    2,
    3,
];
console.log(arr.length);
console.log(arr[0]);

// 使用构造函数创建数组时，也可以同时添加元素，将要添加的元素作为构造函数的参数传递
// 元素直接使用,隔开
var arr2 = new Array(10,20,30);
console.log(arr2);

// 创建一个数组 数组中只有一个元素10
arr = [10];
console.log(arr);

// 创建一个长度为10的数组
arr2 = new Array(10);
console.log(arr2.length);

// 数组中的元素可以是任意的数据类型
arr = ["hello",1,true,null,undefined];
// 也可以是对象
var obj = {
    name:"noi"
};
arr[arr.length] = obj;
// 也可以是函数
arr = [function(){},function(){alert("hello")}];
// 数组中也可以是数组
// 如下这种数组也称为二维数组
arr = [[123],[345]]
console.log(arr);
```



### 数组的四个方法-3

```javascript
// 创建一个数组
var arr = [
    "Noi",
    "HJM",
    "HGY"
];
/* 
 push()
    -该方法可以向数组的末尾添加一个或多个元素，并返回数组的新的长度
    - 可以将要添加的元素作为方法的参数传递
        这样这些元素将会自动添加到数组的末尾
    - 该方法会将数组的新的长度作为返回值返回*/
var result = arr.push("home","Jay","hello");
console.log(arr);
console.log(result);

/* pop()
    - 该方法可以删除数组的最后一个元素,
        并将被删除的元素作为返回值返回*/
var result1 = arr.pop()
console.log(arr);
console.log(result1);

/* unshift()
    - 向数组的开头添加一个或多个元素，并返回数组的新的长度
    - 向前面插入元素以后，其他的元素索引会依次调整*/
arr.unshift("JAVA","TRUE");
console.log(arr);

/* shift()
    - 可以删除数组的第一个元素,并将被删除的元素作为返回值返回*/
var result2 = arr.shift();
console.log(arr);
console.log(result2);
```



### 数组的遍历-4

```javascript
// 创建一个数组
var arr = [
    "Noi",
    "HJM",
    "HGY"
]
// 所谓的遍历数组，就是将数组中所有的元素都取出来
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
```



### 数组的练习-5

```javascript
/* 定义一个含有30个整型元素的数组，按顺序分别赋予从2开始的偶数；
    然后按顺序每五个数求出一个平均值，放在另一个数组中并输出。 */

    let arr = [];
    for(let i=0;i<30;i++){
        arr.push((i+1)*2);
    };
    console.log(arr);

    // 统计和
    var sum = 0;

    // 存储平均值
    var arr2 = [];

    for(let a=0;a<arr.length;a++){
        //累加，准备计算平均数
        sum += arr[a];
        // 判断是否加了5个数
        if((a+1)%5 === 0){
            // 已经加了五个数，可以求平均值
            arr.push(sum/5)
            sum = 0;
        }
    }
    console.log(sum)
```



### forEach  遍历-6

```javascript
/* 	一般都是使用for循环去遍历数组，
    JS中还为我们提供了一个方法，用来遍历数组
forEach()
    这个方法只支持ie8以上的浏览器
     */
// 创建一个数组
var arr = ["Noi","HJM","HGY"];


/* forEach() 需要一个函数作为参数
    - 像这种函数，由我们创建但是不由我们调用的，我们称为回调函数
    - 数组的有几个元素，函数就会执行几次,每次执行时，浏览器将遍历到的元素
        以实参的形式传递过来，我们可以来定义形参，来读取这些内容
    - 浏览器会在回调函数中传递三个参数
        第一个参数，就是当前正在遍历的元素
        第二个参数，就是当前正在遍历的元素的索引
        第三个参数，就是正在遍历的数组
        */
arr.forEach(function(value,index,obj){
    console.log(obj);
});
```



### 数组的方法-7

```javascript
/* slice() 
    - 可以用来从数组中提取指定元素
    - 该方法不会改变元素数组，而是将截取到的元素封装到一个新数组中返回
    - 参数：
        1.截取开始的位置的索引,包含开始的索引
        2.截取结束的位置的索引，不包含结束的索引
            - 第二个参数可以省略不写,此时会截取从开始索引往后的所有元素
        - 索引可以传递一个负值,如果传递一个负值，则从后往前计算
            -1 倒数第一个
            -2 倒数第二个
*/
var arr = ["Noi","HJM","HGY","Jay","name"];
var result = arr.slice(0,2);
var result2 = arr.slice(1);
var result3 = arr.slice(0,-1);
console.log(result);
console.log(result2);
console.log(result3);

/* splice()
    - 可以用于删除数组中的指定元素
    - 使用该方法会影响到原数组，会将指定元素从原数组中删除
        并将被删除的元素作为返回值返回
    - 参数：
        第一个，表示开始删除位置的索引
        第二个，表示删除的数量
        第三个及以后，可以传递一些新的元素，这些元素将会自动插入到开始位置索引前边
 */
var result4 = arr.splice(1,1,"Get");
console.log(result4);
console.log(arr);
```

### 数组的练习-8

```javascript
// 创建一个数组
    var arr = [1,2,3,4,5,3,5,1,1];

// 去除数组中重复的数字

    // 获取数组中的每一个元素
    for(let i=0;i<arr.length;i++){
        // 获取当前元素的所有元素
        for(let a=i+1;a<arr.length-1;a++){
            // 判断两个元素的值是否相等
            if(arr[i] == arr[a]){
                // 如果相等则证明出现了重复的元素，则删除a对应的元素
                arr.splice(a,1);
                // 删除之后，防止元素补位后的数字相等
                a--;
            }
        }
    }
    console.log(arr);
```



### 数组的剩余方法-9

```javascript
var arr = ["Noi","HJM","HGY","Jay"];
var arr2 = ["AAA","BBB","CCC","DDD"];
var arr3 = ["EEE","FFF","GGG"];
/* concat()
    可以连接两个或多个数组，并将新的数组返回
        - 该方法不会对原数组产生影响*/
var res = arr.concat(arr2,arr3,"NNN");
console.log(res)

/* join()
    - 该方法可以将数组转换为一个字符串
    - 该方法不会对原数组产生影响，而是将转换的字符串作为结果返回
    - 在join中可以指定一个字符串作为参数，这个字符串将会成为数组中元素的连接符
        如果不指定连接符，则默认为,号作为连接符*/
var res2 = arr.join(".");
console.log(res2)

/* reverse()
    - 该方法用来反转数组（前边的去后边，后边的去前边）
    - 该方法会直接修改原数组*/
arr2.reverse();
console.log(arr2);

/* sort()
    - 可以用来对数组中的元素进行排序
    - 会影响到原数组，默认会按照Unicode编码排序
    - 即使对纯数字的排序，使用sort排序时，也会按照Unicode编码来排序
        所以对数字进行排序时，可能会得到错误的结果

    我们可以自己来指定排序的规则
        我们可以在sort添加一个回调函数，来指定排序规则
            回调函数中需要定义两个形参，
            浏览器将会分别使用数组中的元素作为实参去调用回调函数
            使用哪个元素调用不确定，但是肯定的是在数组中a一定在b前边
        浏览器会根据回调函数的返回值来决定元素的顺序，
            如果返回一个大于0的值，则元素会交换位置
            如果返回一个小于0的值，则元素位置不变
            如果返回一个等于0，则认为两个元素相等，也不交换位置
        如果需要升序排列a-b 
            需要降序排列b-a*/

var arr5 = [3,5,4,6,8,1];

arr5.sort(function(a,b){

    if(a>b){
        return 1;
    }else if(a<b){
        return -1;
    }else{
        return 0;
    }
    // 升序排列
    // return a-b;
    // 降序排列
    // return b-a;
});
console.log(arr5);


let arr4 = ["e","d","a","b"];
arr4.sort();
console.log(arr4);
```



## DAY06



### Date对象-1

```javascript
/* 
 Date对象
  - 在js中使用Date对象来表示一个时间
 */

// 创建一个Date对象
// 如果直接使用构造函数创建一个Date对象，则会封装为当前代码执行的时间
var d = new Date();

// 创建一个指定的时间对象
// 需要在构造函数中传递一个表示时间的字符串作为参数
// 日期格式：月份/日/年 时:分:秒
var d2 = new Date("12/04/2016 11:12:13");

// getDate() 获取当前日期对象是几日
console.log(d2.getDate())

// getDay() 获取当前日期对象是周几 0表示周日 1表示周一
console.log(d.getDay())

/* 	getMonth() 获取当前时间对象的月份
会返回一个0-11的值
0表示一月
1表示二月
11表示12月 */
console.log(d.getMonth());

// getFullYear() 获取当前日期对象的年份
console.log(d.getFullYear())

/* 	getTime() 获取当前日期对象的时间戳
时间戳，指的是从格林威治标准时间的1970年1月1日，0时0分0秒
    到当前日期所花费的毫秒数（1秒=1000毫秒） 
计算机底层在保存时间时使用都是时间戳*/
console.log(d.getTime())

/* 利用时间戳来测试代码的执行性能
获取当前的时间戳 */
var start = Date.now();
for(let i=0;i<100;i++){
    console.log(i)
}
var end = Date.now();
console.log("执行了" + (end - start) + "毫秒");
```



### Math-2

```javascript
/* Math
    - Math和其他的对象不同，它不是一个构造函数
        它属于一个工具类不用创建对象，它里边封装了数学运算相关的属性和方法
    - 比如
        Math.PI 表示圆周率
 */
console.log(Math.PI)

// Math.abs()	返回一个数的绝对值
console.log(Math.abs(-123))

// Math.ceil() 可以对一个数向上取整，小数位只要有值，自动进1
console.log(Math.ceil(1.1))

// Math.floor()	可以对一个数向上取整，小数部分会被舍掉
console.log(Math.floor(1.9))

// Math.round()	四舍五入
console.log(Math.round(1.5))

/* 	Math.random()	
可以生成一个0-1之间的随机数
生成一个0-10的随机数
生成一个0-x之间的随机数
Math.round(Math.random()*x) 
生成一个x-y之间的随机数
    Math.round(Math.random()*(y-x)+x)*/

console.log(Math.random(1))
console.log(Math.round(Math.random()*10))

/* Math.max()
    可以获取多个数中的最大值*/
console.log(Math.max(1,10,20,2,40));

/* Math.min() 
    可以获取多个数中的最小值*/
console.log(Math.min(1,3,8,7));

/* Math.pow()
    可以获取x的y次幂*/
console.log(Math.pow(2,2));

/* Math.sqrt() 
    可以获取一个数的平方根*/
console.log(Math.sqrt(4))
```



### 包装类-3

```javascript
/* 包装类
    基本数据类型
        String Number Boolean Null Undefined
    引用数据类型
        Object
    在js中为我们提供了三个包装类，通过这个三个包装类可以将基本数据类型的数据类型转换为对象
        String()
            可以将基本数据类型字符串转换为String对象
        Number()
            可以将基本数据类型数字转换为Number对象
        Boolean()
            可以将基本数据类型布尔值转换为Boolean对象
        但是注意，我们在实际应用中不会使用基本数据类型的对象
            如果使用基本数据类型对象，在做一些比较时可能会带来一些不可预期的结果*/

    // 创建一个Number类型的对象
    var num = new Number(3);
    var str = new String("hello");
    var bool = new Boolean(true);
    console.log(bool);
    // 向num中添加一个属性
    num.hello = "123"
    console.log(num.hello)

    /* 方法和属性能添加给对象，不能添加给基本数据类型
        当我们对一些基本数据类型的值去调用属性和方法时
            浏览器会临时使用包装类将其转换为对象，然后在调用对象的属性和方法
            调用完以后，在将其转换为基本数据类型*/

    var a = 123;
    a = a.toString();
    console.log(a);
    console.log(typeof a);
```



### 字符串的方法-4

```javascript
// 创建一个字符串
var a = "Hello HJM";

/* 在底层字符串以字符数组的形式保存的
 ["h","n","s"]
 length属性可以获取字符串的长度
 */
 console.log(a.length)
 console.log(a[0])

 /* charAt()
    - 可以返回字符串中指定位置的字符
    - 根据索引获取指定的字符
    - 默认返回第一个字符串*/
console.log(a.charAt(1))

/* charCodeAt()
    - 获取指定位置字符的字符编码（Unicode编码）
 */
console.log(a.charCodeAt(1));

/* String.fromCharCode() 
    - 可以根据字符编码去获取字符(unicode编码)*/
console.log(String.fromCharCode(72));

/* concat()
    - 可以用来连接两个或多个字符串
    - 作用和+一样*/
console.log(a.concat("LLL"));

/* indexOf()
    - 该方法可以检索一个字符串中是否含有指定内容
    - 如果该方法字符串中含有该内容时，返回的是索引值
        如果没有找到指定的内容时，则返回为-1
    - 可以指定一个第二个参数，指定开始查找的位置
 */
console.log(a.indexOf("H"))
console.log(a.indexOf("s"))
console.log(a.indexOf("H",1))

/* lastIndexOf()
    - 该方法用法和IndexOf用法一样，
        不同的时indexOf从前往后找
        而lastindexOf从后往前找
    - 也可以指定开始查找的位置*/
console.log(a.lastIndexOf("H"))

/* slice()
    - 可以从字符串中截取一个指定的内容
    - 不会影响原字符串，而是将截取到的内容返回
    - 参数：
        第一个，开始位置的索引（包括开始位置）
        第二个，结束位置的索引（不包括结束位置）
            - 如果省略第二个参数，则会截取到后面所有的内容
            - 也可以传递一个负数作为参数，负数的话将会从后面计算
    */
console.log(a.slice(0,1))

/* substring()
    - 可以用来截取一个字符串，和slice类似
    - 参数：
        - 第一个：开始截取位置的索引（包括开始位置）
        - 第二个：结束位置的索引（不包括结束位置）
        - 不同的是这个方法不能接受负值作为参数
            如果传递了一个负值，则默认使用0
        - 而且它还自动调整参数的位置，如果第二个参数小于第一个，则会自动交换位置*/
console.log(a.substring(0,1))

/* split()
    - 可以将一个字符串拆分为一个数组
    参数：
        - 需要一个字符串作为参数，将会根据该字符串去拆分数组
        - 如果传递一个空字符串，则会将字符串里的每一个字符拆分用逗号隔开*/
var aa = "a,b,c,d";
console.log(aa.split(","))

/* toLowerCase() 
    - 将一个字符串转换为小写并返回*/
console.log(a.toLowerCase())

/* toUpperCase()
    - 将一个字符串转换为大写并返回*/
console.log(a.toUpperCase())
```



## DAY07



### 正则表达式的简介-1

```javascript
/* 正则表达式
    - admin
    - admin@qq.com
    - 邮件的规则：
        1.前边可以是数字字母
        2.跟着一个@
        3.后边跟着qq.com

    - 正则表达式用于定义一些字符串的规则，
        计算机可以根据正则表达式，来检查一个字符串是否符号规则
        获取将字符串中符号规则的内容提取出来
*/
// 创建正则表达式的对象
/* 语法：
    var 变量 = new RegEXP("正则表达式","匹配模式")
    使用typeof检查正则对象，会返回Object
在构造函数中可以传递一个匹配模式作为第二个参数，
    可以是
        i 忽略大小写
        g 全局匹配模式
    */
var reg = new RegExp("a","i");
var str = "a";

console.log(reg.test("A"))

/* 正则表达式方法：
    test()
        -使用这个方法可以用来检查一个字符串是否符合正则表达式的规则
            如果符合返回true，否则返回false*/
console.log(reg.test(str));
// 这个正则表达式可以检查一个字符串中是否含有a
// 严格区分大小写
console.log(reg.test("ab"));
```



### 正则表达式语法1-2

```javascript
/*  使用字面量来创建正则表达式
        语法：var 变量 = /正则表达式/匹配模式
    使用字面量的方法创建更加简单
        使用构造函数创建更加灵活*/
// var reg = new RegExp("a","i");
var reg = /a/i;

// 创建一个正则表达式，检查一个字符串中是否有a或b
// 使用|表示或者的意思
reg = /a|b/;
console.log(reg.test("acd"))

// 创建一个正则表达式检查一个字符串中是否有字母
/* 	reg = /a|b|c|d|e|f|g/;
[]里的内容也是或的关系
[ab] == a|b
[a-z] 任意小写字母
[A-Z] 任意大写字母
[A-z] 任意字母 
[0-9] 任意数字*/
reg = /[A-z]/;
console.log(reg.test("od"));

// 检查一个字符串中是否含有abc或adc或aec
reg = /a[bde]c/;
console.log(reg.test("aec"))

/* [^] 除了
 */
reg = /[^ab]/;
console.log(reg.test("abc"))

// 除了数字
reg = /[^0-9]/;
console.log(reg.test("123e456"))
```



### 字符串和正则相关的方法-3

```javascript
var str = "1a2b3c4d5e6f7"

/* split()
    - 可以将一个字符串拆分为一个数组
    - 方法中可以传递一个正则表达式作为参数，这样方法将会根据正则表达式区拆分字符串
    - 这个方法即使不指定全局匹配，也都会全部拆分*/
    /* 根据任意字母来将字符串拆分 */
var result = str.split(/[A-z]/)
console.log(result)

/* search()
    -可以搜索字符串中是否含有指定内容
    -如果搜索到指定内容，则会返回第一次出现的索引，如果没有搜索到返回-1
    -它可以接受一个正则表达式作为参数，然后会根据正则表达式区检索字符串
    - search()即使设置全局匹配，也只会查找第一个*/
str = "hello hello aec";
// 搜索字符串中是否含有abc 或aec 或afc
result = str.search(/a[bef]c/)
console.log(result)

/* match()
    - 可以根据正则表达式，从一个字符串中将符合条件的内容提取出来
    - 默认情况下我们的match只会找到第一个符合要求的内容，找到以后就停止检索
        我们可以设置正则表达式全局匹配模式，这样就会匹配所有的内容
        可以为一个正则表达式设置多个匹配模式，且顺序无所谓
    - match()会将匹配到的内容封装到一个数组中返回，即使查询到一个结果*/
str = "1a2b3c4d5e6f7GAA"
result = str.match(/[A-z]/gi);
console.log(result)

/* replace() 
    -可以将字符串中指定内容替换为新的内容
    -参数：
        1.被替换的内容，可以接受一个正则表达式作为参数
        2.新的内容
    - 默认只会替换一个*/
result = str.replace(/a/gi,"@")
result = str.replace(/[A-z]/gi,"")
console.log(result)
```

### 正则表达式语法2-4

```javascript
/* 创建一个正则表达式检查一个字符串中是否含有aaa */

/* 量词
    - 通过量词可以设置一个内容出现的次数
    - {n} 正好出现n次
    - {m,n} 出现m-n次
    - {m,}	m次以上
    - 量词只对它前边的一个内容起作用
    - +	 至少一个，相当于{1,}
    - *	 0个或多个，相当于{0,}
    - ?  0个或1个，相当于{0,1}*/
var reg = /a{3}/;
console.log(reg.test("aaabc"))
// ababab
reg = /ab{3}/
console.log(reg.test("abbbc"))
// abbbc
reg = /ab{3}c/
console.log(reg.test("abbbc"))
// m-n次
reg = /ab{1,3}/
console.log(reg.test("abbbc"))
// m次以上
reg = /ab{2,}/
console.log(reg.test("abbc"))
// 至少一个
reg = /ab+c/
console.log(reg.test("abc"))
// 0个或多个
reg = /ab*c/
console.log(reg.test("ac"))
// 0个或1个1
reg = /ab?c/
console.log(reg.test("abc"))

/* 
 检查一个字符串是否以a开头
    ^ 表示开头
    $ 表示结尾
    */
 reg = /^a/;	//匹配开头的a
 console.log(reg.test("abca"))

 reg = /a$/;	//匹配结尾的a
 console.log(reg.test("ca"))
 // 如果在正则表达式中同时使用^ $则要求字符串必须完全符合正则表达式
 reg = /^a$/;	//只有一个a
 console.log(reg.test("a"))

 /* 创建一个正则表达式，用来检查一个字符串是否是一个合法的手机号
    手机号规则：
        13094330927（11位）
    1.以1开头
    2.第二位数是3-9的数字
    3.第三位以后任意数字9个
 */
 var phone = "13094330927"
 reg = /^1[3-9][0-9]{9}$/;
 console.log(reg.test(phone))
```

### 正则表达式语法3-5

```javascript
/* 检查一个字符串中是否含有. 
    . 表示任意字符
     可以使用\转义符来进行检查
     \. 表示.
     \\ 表示\
*/
var reg = /\./;
console.log(reg.test("a.b"))

/* 注意：使用构造函数时，由于它的参数是一个字符串，而\是字符串中转义字符，
    如果要使用\则需要使用\\来代替 */
reg = new RegExp("\\.");
console.log(reg)
console.log(reg.test("\."))

/* 
\w
    - 任意字母，数字,下划线  [A-z0-9]
\W
    - 除了字母，数字，下划线  [^A-z0-9]
\d
    - 任意数字[0-9]
\D
    - 除了数字[^0-9]
\s
    - 空格
\S
    - 除了空格
\b
    - 单词边界
\B
    - 除了单词边界
*/
reg = /\w/;
reg = /\W/;

reg = /\d/;
reg = /\D/;

reg = /\s/;
reg = /\S/;

console.log(reg.test("asd"))

/* 创建一个正则表达式检查一个字符串中是否含有单词 child */
reg = /\bchild\b/;
console.log(reg.test("hello child"))

// 接受一个用户的输入
// var str = prompt("请输入你的用户名：");
var str = "   adm    in   ";
// 去除字符串中前后的空格
// 去除空格就是使用""来提换空格

// 去除开头的空格
str = str.replace(/^\s*/,"")
// 去除结尾的空格
str = str.replace(/\s*$/,"")
// /^\s*/	/\s*$/	匹配开头和结尾的空格
str = str.replace(/^\s*|\s*$/g,"")
console.log(str)
```

### 邮件的正则-6

```javascript
/* 电子邮件
    hello@abc.com.cn
    规则：
        1.任意字母数字下划线 .点任意字母数字下划线 
        2. @
        3.网址任意字母数字
        4. .com/.cn/.net/.org 任意字母（2-5），不能出现数字
\w{3,}\.(\w+)*@[A-z0-9]+(\.[A-z]{2,5})
*/

var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5})$/;
var email = "abc@163.com"
console.log(emailReg.test(email))
```



## DAY08



### DOM简介-1

```javascript
<body>
	<button id="btn">按钮</button>
    <script>
	"use strict"
	
	/* DOM全称Document Object Model（文档对象模型）JS中通过DOM来对HTML文档进行操作。
	 文档：
		- 文档表示的就是整个的HTML网页文档
	 对象：
		- 对象表示将网页中的每一个部分都转换为了一个对象
	 模型：
		- 使用模型来表示对象之间的关系，方便我们获取对象*/
		
		/* 节点
		 节点：Node--构成HTML文档最基本的单元
		 常用节点分为四类：
			文档节点：整个HTML文档
			元素节点：HTML文档中的HTML标签
			属性节点：元素的属性
			文本节点：HTML标签中的文本内容
		 */
		/* 节点的属性
					节点名字		
		 文档节点：#document
		 元素节点：标签名
		 属性节点：属性名
		 文本节点：#text*/
		 
		 /* 浏览器已经为我们提供了文档节点对象，这个对象是window属性
			可以在页面中直接使用，文档节点代表的是整个网页*/
			
	// 获取button对象
	var btn = document.getElementById("btn");
	// 修改按钮的文字
	btn.innerHTML = "按钮3";
	</script>
    
</body>
```



### 事件的简介-2

```javascript
<body>
	<!-- 
		我们可以在事件对于的属性中设置一些JS代码
			这样当事件被触发时，这些代码将会执行
			
		写在标签内的JS代码，不方便维护，不推荐使用
	 -->
	<!-- <button id="btn" onclick="alert('hello');">按钮</button> -->
	<button id="btn">按钮</button>
    <script>
	"use strict"
	
	/* 事件
		1.事件，就是文档或浏览器窗口中发生的一些特定的交互瞬间
		2.JavaScript与HTML之间的交互是通过事件实现的
		3.对于Web应用来说，有下面这些代表性的事件：点击某个元素，将鼠标移动至某个元素上方，按下键盘某个键，等等*/
		
	// 获取按钮对象
	var btn = document.getElementById("btn");
	
	/* 可以为按钮的对应事件绑定处理函数的形式来响应事件 
		这样当事件被触发时，其对应的函数将会被调用*/
	// 绑定一个单击事件
	// 像这种为单击事件绑定的函数，我们称为单击响应函数
	btn.onclick = function(){
		alert("hello")
	}
	</script>
    
</body>
```



### 文档的加载-3

```javascript
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	<script type="text/javascript">
	/* 浏览器在加载一个页面时，是按照自上向下的顺序加载的
		读取到一行就运行一行，如果将js标签写到页面的上边
		在代码执行时，页面还没加载,页面没有加载DOM对象也没有加载
		会导致无法获取到DOM对象*/
	/* onload事件会在整个页面加载完成之后才触发
		为window绑定一个onload事件
			该事件对应的响应函数将会在页面加载完成之后执行
			这样可以确保我们的代码执行时所有的DOM对象已经加载完毕了*/
		/* 页面加载之后运行 */
		window.onload = function(){
			var btn = document.getElementById("btn");
			btn.onclick = function(){
				alert("I love you")
			}
		}
	</script>
</head>
<body>
	<button id="btn">按钮</button>
    <script>
	"use strict"

	// 获取对象
	var btn = document.getElementById("btn");
	// 绑定一个单击响应函数
	btn.onclick = function(){
		alert("I love you")
	}
	</script>
    
</body>
</html>
```



### DOM查询1-4

| ---                   | ---                                | ---  |
| --------------------- | ---------------------------------- | :--: |
| getElementById()      | 通过id属性获取一个元素节点的对象   | 方法 |
| getElementByTagName() | 通过标签名获取一组元素节点的对象   | 方法 |
| getElementByName()    | 通过name属性获取一组元素节点的对象 | 方法 |
| innerHTML             | 用于获取元素内部的HTML代码         | 属性 |

```javascript
/* 获取元素节点 
    通过document对象调用

    1. getElementById()
        - 通过id属性获取一个元素节点的对象
    2. getElementByTagName()
        - 通过标签名获取一组元素节点的对象
        - 这个方法会给我们返回一个类数组对象，所有查询到的元素都会封装到对象中
        - 即使查询到的元素只有一个，也会封装到数组中返回
    3. getElementByName()
        - 通过name属性获取一组元素节点的对象*/

    /* innerHTML 用于获取元素内部的HTML代码
    对于自结束标签，这个属性没有意义
    如果需要读取元素节点属性，直接使用元素.属性名
    class属性不能采用这种方式
        读取class属性可以使用元素.className*/
```



### 图片切换的练习-5

```javascript
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	<style type="text/css">
		*{
			margin: 0;
			padding: 0;
		}
		#outer{
			/* 设置元素宽度 */
			width: 301px;
			/* 设置元素居中 */
			margin: 100px auto;
			/* 设置内间距 */
			padding: 10px;
			/* 设置背景颜色 */
			background-color: greenyellow;
			/* 设置文本居中 */
			text-align: center;
		}
	</style>
	
	<script type="text/javascript">
		"use strict"
		
		/* 图片切换的练习
		 */ 
		window.onload = function(){
			/* 点击按钮切换图片 */
			
			// 获取两个按钮
			var prev_ = document.getElementById("prev");
			var next_ = document.getElementById("next");
			
			/* 要切换图片就是要修改img标签的src属性 */
			
			/* 获取img标签 */
			var img = document.getElementsByTagName("img")[0];
			
			/* 创建一个数组用来保存图片的路径 */
			var imgArr = ["Image/demo1.jpg","Image/demo3.jpg","Image/demo4.jpg"];
			
			/* 创建一个变量，来保存当前正在显示的图片的索引 */
			var index = 0;
			
			
			// 获取p元素
			var p_ = document.getElementById("info");

			
			// 分别为两个按钮绑定单击响应事件
			prev_.onclick = function(){
				// alert("上一张")
				
				// 切换到上一张，索引自减
				index--;	//index = index - 1
				
				// 判断index是否小于0
				if(index < 0){
					// index = 0;
					index = imgArr.length - 1;
				}
				// index为变量自减
				img.src = imgArr[index]
				// 设置p标签提示文字
				info.innerHTML = "一共 " + imgArr.length + " 图片，" + "当前第 " + (index+1) +"张";
			};
			next_.onclick = function(){
				// alert("下一张");
				
				// 切换到下一张,索引自增
				index++;	//index = index + 1
				
				// 判断index是否大于3
				if(index > imgArr.length - 1){
					// index = imgArr.length - 1; 
					index = 0;
				}
				
				// 切换图片就是修改img的src属性
				// 要修改一个元素的属性 元素.属性 = 属性值
				// index为变量自增
				img.src = imgArr[index];
				
				// 当点击按钮，重新设置信息
				// 设置p标签提示文字
				info.innerHTML = "一共 " + imgArr.length + " 张图片，" + "当前第 " + (index+1) +" 张";
			}
		}
	</script>
</head>
<body>
	<!-- div模型 -->
	<div id="outer">
		<!-- 解决运行的消失情况 -->
		<p id="info">一共 3 张图片，当前第 1 张</p>
		<!-- 图片模型 -->
		<img src="Image/demo1.jpg" alt="海" >
		
		<!--  按钮模型 -->
		<button id="prev">上一张</button>
		<button id="next">下一张</button>
	</div>
	 
    
</body>
</html>
```



### DOM查询2-6

|                ---                 |                        ---                        |          ---          |
| :--------------------------------: | :-----------------------------------------------: | :-------------------: |
|       getElementsByTagName()       |         返回当前节点的指定标签名后代节点          |         方法          |
|             childNodes             |             表示当前节点的所有子节点              |         属性          |
|             firstChild             |            表示当前节点的第一个子节点             |         属性          |
|             lastChild              |           表示当前节点的最后一个子节点            |         属性          |
| ---------------------------------- |             不推荐,ie8浏览器版本以下              | --------------------- |
|              children              | 可以获取当前元素的所有子元素,不包括空白文本的节点 |         属性          |
|         firstElementChild          |           可以获取元素当前第一个子元素            |         属性          |
|          lastElementChild          |          可以获取元素当前最后一个子元素           |         属性          |

```javascript
<script type="text/javascript">
    /* 
    获取元素节点的子节点
        1. getElementsByTagName()
            - 方法，返回当前节点的指定标签名后代节点
        2. childNodes
            - 属性，表示当前节点的所有子节点
        3. firstChild
            - 属性，表示当前节点的第一个子节点
        4. lastChild
            - 属性，表示当前节点的最后一个子节点
     */

    // 获取id为city的元素
    var city = document.getElementById("city");
    // 查找#city下所有li节点
    var lis = city.getElementsByTagName("li")
    for(var i=0;i<lis.length;i++){
        console.log(lis[i].innerHTML)
    }
    /* -------------------------------------------- */
    // 获取id为city的元素
    var city2 = document.getElementById("city");
    // 返回#city的所有子节点
    // childNodes属性会获取包括文本节点在内的所有
    // 根据DOM标签标签间空白也会当成文本节点
    // 在ie8及以下的浏览器中，不会将空白文本当成节点，
    // ie8会返回4个子元素
    var cns = city.childNodes
    console.log(cns)
    // children属性可以获取当前元素的所有子元素,不包括空白文本的节点,所以称为子元素
    var cns2 = city.children
    console.log(cns2)
    /* -------------------------------------------- */
    // 获取id为city的元素
    var city3 = document.getElementById("city");
    // 返回city的第一个子节点
    // firstChild可以获取到当前元素的第一个子节点(包括空白文本)
    var fir = city3.firstChild
    console.log(fir)
    // firstElementChild可以获取元素当前第一个子元素
    // 它不支持ie8及以下的浏览器版本
    fir = city3.firstElementChild
    console.log(fir)
    /* -------------------------------------------- */
    // 获取id为city的元素
    var city4 = document.getElementById("city");
    // 返回city的最后一个子节点
    // lastChild可以获取到当前元素的最后一个子节点(包括空白文本)
    var las = city4.lastChild
    console.log(las)
</script>
```



### DOM查询3-7

|       ---       |                ---                 | ---  |
| :-------------: | :--------------------------------: | :--: |
|   parentNode    |        表示当前节点的父节点        | 属性 |
| previousSibling |    表示当前节点的前一个兄弟节点    | 属性 |
|   nextSibling   |    表示当前节点的后一个兄弟节点    | 属性 |
|    innerText    |    可以获取到元素内部的文本内容    | 属性 |
| previousSibling | 获取前一个兄弟元素,ie8及以下不支持 | 属性 |
|  变量名.value   |       获取标签里value属性值        | 属性 |

```javascript
<body>
	<button type="button" id="aa" value="aasx">aa</button>
	<div id="father"><button id="btn">按钮1</button></div>
	<div id="father01"><button id="btn01">按钮2</button></div>
	<div id="father02"><button id="btn03">按钮4</button><button id="btn02">按钮3</button></div>
	<script type="text/javascript">
		/* 获取父节点和兄弟节点
			1. parentNode
				-属性，表示当前节点的父节点
			2. previousSibling
				-属性，表示当前节点的前一个兄弟节点
			3. nextSibling
				-属性，表示当前节点的后一个兄弟节点*/
		
		// 定义一个函数，专门用来为指定元素绑定的那家响应函数
		// 参数：
		// 		idStr 要绑定单击响应函数的对象的id属性值
		// 		fun 事件的回调函数，当单击元素时，该函数将会被触发
		function myclick(idStr,fun){
			var btn = document.getElementById(idStr);
			btn.onclick = fun;
		}
/* -------------------------------------------- */
		// 1.parentNode
		// 为id为btn07的按钮绑定一个单击响应函数
		myclick("btn01",function(){
			// 获取id为btn的节点
			var btn01 = document.getElementById("btn01")
			// 返回#btn01的父节点
			var pn = btn01.parentNode;
			alert(pn.innerHTML)
			/*
			 innerText
				- 该属性可以获取到元素内部的文本内容
				- 该和innerHTML类似，不同的是它会自动将html去除
			alert(pn.innerText)
			 */
		})
/* -------------------------------------------- */
		// 2.previousElementSibling
		// 为id为btn02的按钮绑定一个单击响应函数
		myclick("btn02",function(){
			// 获取id为btn02的元素
			var btn02 = document.getElementById("btn02")
			// 返回#btn02的前一个兄弟节点(也可能获取到空白的文本)
			var bn = btn02.previousElementSibling;
			alert(bn.innerHTML)
			
			// previousSibling获取前一个兄弟元素,ie8及以下不支持
			// var bn2 = btn02.previousSibling;
			// alert(bn2.innerHTML)
		})
		
/* -------------------------------------------- */
		// 3.nextSibling
		// 为id为btn03的按钮绑定一个单击响应函数
		myclick("btn03",function(){
			var btn03 = document.getElementById("btn03");
			// 返回#btn03的后一个兄弟节点(也可能获取到空白的文本)
			var mn = btn03.nextSibling;
			alert(mn.innerHTML)
		})
/* -------------------------------------------- */
		// 4. 变量.value
		myclick("aa",function(){
			// 获取id为aa的元素
			var va = document.getElementById("aa")
			// 读取va的value属性值
			alert(va.value)
			
			// 设置value属性值
			var va2 = va.value = "hello"
			alert(va2)
		})
		
		
		myclick("aa",function(){
			// 获取id为aa的元素
			var ys = document.getElementById("aa")
			// 返回#aa的文本值
			alert(ys.innerHTML)
			
			// 2.
			// 获取aa中的文本节点
			var jd = ys.firstChild;
			// alert(jd.nodeValue)
		})
	</script>
</body>
```



### 全选练习-8

```javascript
	<script type="text/javascript">
		// 全选练习
		
		window.onload = function(){
			/* 全选按钮
				- 点击按钮以后，四个多选框全都被选中*/
			// 获取id为checkedAllbtn的对象
			var checkedAllbtn = document.getElementById("checkedAllbtn");
			// 为id为checkedAllbtn的按钮绑定一个单击响应函数
			checkedAllbtn.onclick = function(){
				
				// 获取为name属性的四个多选框
				var items = document.getElementsByName("items");
				
				// 遍历items
				for(let i=0;i<items.length;i++){
					// 通过多选框的checked属性可以来获取或设置多选框的选中状态
					// alert(items[i].checked)
					
					// 设置四个多选框变成选中状态
					items[i].checked = true;
					
				}
			}
/* -------------------------------------------- */
			/* 全不选按钮 
				- 点击按钮以后，四个多选框全部取消选中*/
			// 获取id为checkedNobtn的对象
			var checkedNobtn = document.getElementById("checkedNobtn");
			// 为id为checkedNobtn的按钮绑定一个单击响应函数
			checkedNobtn.onclick = function(){
				// 获取为name属性的四个多选框
				var items = document.getElementsByName("items")
				
				// 遍历items
				for(let j=0;j<items.length;j++){
					// 设置四个多选框变成全不选状态
					items[j].checked = false;
				}
			}
/* -------------------------------------------- */
			/* 反选按钮
				- 单击按钮，反选没有被选中的多选框*/
			// 获取id为checkedRevbtn的对象
			var checkedRevbtn = document.getElementById("checkedRevbtn");
			// 为id为checkedRevbtn的按钮绑定一个单击响应函数
			checkedRevbtn.onclick = function(){
				// 获取为name属性的四个多选框
				var items = document.getElementsByName("items");
				// 遍历items
				for(let f=0;f<items.length;f++){
					
					// 判断是否有被选择,然后进行反选
					if(items[f].checked === false){
						items[f].checked = true;
					}else if(items[f].checked === true){
						items[f].checked = false;
					}
					// items[f].checked = !items[f].checked		第二种方法
				}
			}
/* -------------------------------------------- */
			/* 提交按钮
				- 单击按钮，多选框所被选的内容将会弹出显示*/
			// 获取id为sendbtn的对象
			var sendbtn = document.getElementById("sendbtn");
			// 为id为sendbtn的按钮绑定一个单击响应函数
			sendbtn.onclick = function(){
				// 获取为name属性的四个多选框
				var items = document.getElementsByName("items");
				// 遍历items
				for(let t=0;t<items.length;t++){
					// 判断是否有被选择，然后进行弹出显示
					if(items[t].checked){
						alert(items[t].value);
					}
				}
			}
/* -------------------------------------------- */
			/* 全选/全不选 多选框
				-当它选中时其余的也选中，当它取消时其余的也取消
			
			在事件的响应函数中，响应函数是给谁绑定的this就是谁
			*/
			// 获取id为checkedAllBox的对象
			var checkedAllBox = document.getElementById("checkedAllBox");
			// 为id为checkedAllBox的多选框绑定一个单击响应函数
			checkedAllBox.onclick = function(){
				// 获取为name属性的四个多选框
				var items = document.getElementsByName("items");
				// 遍历items
				for(let d=0;d<items.length;d++){
					// 判断全选/全不选是否有被选中
					if(this.checked){
						items[d].checked = true;
					}else{
						items[d].checked = false;
					}
				}
			}
			
		}
	</script>
</head>
<body>
	<form action="" method="post">
		你的爱好运动？<input type="checkbox" id="checkedAllBox"/>全选/全不选
		<br>
		<input type="checkbox" name="items" value="足球" />足球
		<input type="checkbox" name="items" value="篮球" />篮球
		<input type="checkbox" name="items" value="羽毛球" />羽毛球
		<input type="checkbox" name="items" value="乒乓球" />乒乓球
		<br>
		<input type="button" id="checkedAllbtn" value="全  选" />
		<input type="button" id="checkedNobtn" value="全不选" />
		<input type="button" id="checkedRevbtn" value="反  选" />
		<input type="button" id="sendbtn" value="提  交" />
	</form>

</body>
```



### 全选练习2-9

```javascript
<head>
	<script type="text/javascript">
		// 全选练习2
		// 为四个多选框分别绑定单击响应函数
		var items = document.getElementsByName("items");
		window.onload = function(){
			/* 全选按钮
				- 点击按钮以后，四个多选框全都被选中*/
			// 获取id为checkedAllbtn的对象
			var checkedAllbtn = document.getElementById("checkedAllbtn");
			// 为id为checkedAllbtn的按钮绑定一个单击响应函数
			checkedAllbtn.onclick = function(){
				
				// 获取为name属性的四个多选框
				var items = document.getElementsByName("items");
				
				// 遍历items
				for(let i=0;i<items.length;i++){
					// 通过多选框的checked属性可以来获取或设置多选框的选中状态
					// alert(items[i].checked)
					
					// 设置四个多选框变成选中状态
					items[i].checked = true;
					
				}
				// 将全选/全不选多选框设置为选中
				checkedAllBox.checked = true;
			}
/* -------------------------------------------- */
			/* 全不选按钮 
				- 点击按钮以后，四个多选框全部取消选中*/
			// 获取id为checkedNobtn的对象
			var checkedNobtn = document.getElementById("checkedNobtn");
			// 为id为checkedNobtn的按钮绑定一个单击响应函数
			checkedNobtn.onclick = function(){
				// 获取为name属性的四个多选框
				var items = document.getElementsByName("items")
				
				// 遍历items
				for(let j=0;j<items.length;j++){
					// 设置四个多选框变成全不选状态
					items[j].checked = false;
				}
				
				// 将全选/全不选多选框设置为不选中
				checkedAllBox.checked = false;
			}
/* -------------------------------------------- */
			/* 反选按钮
				- 单击按钮，反选没有被选中的多选框*/
			// 获取id为checkedRevbtn的对象
			var checkedRevbtn = document.getElementById("checkedRevbtn");
			// 为id为checkedRevbtn的按钮绑定一个单击响应函数
			checkedRevbtn.onclick = function(){
				// 获取为name属性的四个多选框
				var items = document.getElementsByName("items");
				// 遍历items
				for(let f=0;f<items.length;f++){
					
					// 判断是否有被选择,然后进行反选
					if(items[f].checked === false){
						items[f].checked = true;
					}else if(items[f].checked === true){
						items[f].checked = false;
					}
					// items[f].checked = !items[f].checked		第二种方法
				}
				
				// 在反选时也需要判断四个多选框是否全都选中
				// 将checkedAllBox设置为选中状态
				checkedAllBox.checked = true;
				for(var j=0;j<items.length;j++){
					// 判断四个多选框是否全选
					// 只要有一个没选中，则就不是全选
					if(items[j].checked === false){
						// 一旦进入判断，则证明不是全选状态
						// 将checkedAllBox设置为没选中状态
						checkedAllBox.checked = false;
						
						// 一旦进入判断，则已经得出结果，不用再继续执行循环
						break;
					}
				}
			}
/* -------------------------------------------- */
			/* 提交按钮
				- 单击按钮，多选框所被选的内容将会弹出显示*/
			// 获取id为sendbtn的对象
			var sendbtn = document.getElementById("sendbtn");
			// 为id为sendbtn的按钮绑定一个单击响应函数
			sendbtn.onclick = function(){
				// 获取为name属性的四个多选框
				var items = document.getElementsByName("items");
				// 遍历items
				for(let t=0;t<items.length;t++){
					// 判断是否有被选择，然后进行弹出显示
					if(items[t].checked){
						alert(items[t].value);
					}
				}
			}
/* -------------------------------------------- */
			/* 全选/全不选 多选框
				-当它选中时其余的也选中，当它取消时其余的也取消
			
			在事件的响应函数中，响应函数是给谁绑定的this就是谁
			*/
			// 获取id为checkedAllBox的对象
			var checkedAllBox = document.getElementById("checkedAllBox");
			// 为id为checkedAllBox的多选框绑定一个单击响应函数
			checkedAllBox.onclick = function(){
				// 获取为name属性的四个多选框
				var items = document.getElementsByName("items");
				// 遍历items
				for(let d=0;d<items.length;d++){
					// 判断全选/全不选是否有被选中
					if(this.checked){
						items[d].checked = true;
					}else{
						items[d].checked = false;
					}
				}
			}
/* -------------------------------------------- */
			/* 如果四个多选框全都选中，则checkedAllBox也应该选中
			   如果四个多选框没都选中，则checkedAllBox也不应该选中*/
			for(var i=0;i<items.length;i++){
				items[i].onclick = function(){
					
					// 将checkedAllBox设置为选中状态
					checkedAllBox.checked = true;
					
					for(var j=0;j<items.length;j++){
						// 判断四个多选框是否全选
						// 只要有一个没选中，则就不是全选
						if(items[j].checked === false){
							// 一旦进入判断，则证明不是全选状态
							// 将checkedAllBox设置为没选中状态
							checkedAllBox.checked = false;
							
							// 一旦进入判断，则已经得出结果，不用再继续执行循环
							break;
						}
					}
				}
			}
		}
	</script>
</head>
<body>
	<form action="" method="post">
		你的爱好运动？<input type="checkbox" id="checkedAllBox"/>全选/全不选
		<br>
		<input type="checkbox" name="items" value="足球" />足球
		<input type="checkbox" name="items" value="篮球" />篮球
		<input type="checkbox" name="items" value="羽毛球" />羽毛球
		<input type="checkbox" name="items" value="乒乓球" />乒乓球
		<br>
		<input type="button" id="checkedAllbtn" value="全  选" />
		<input type="button" id="checkedNobtn" value="全不选" />
		<input type="button" id="checkedRevbtn" value="反  选" />
		<input type="button" id="sendbtn" value="提  交" />
	</form>

</body>
```



### DOM查询4-10

| ---                               | ---                                                          | ---  |
| --------------------------------- | ------------------------------------------------------------ | ---- |
| document.body                     | 获取body标签（body的引用）                                   | 属性 |
| document.documentElement          | 获取html标签（保存的html根标签）                             | 属性 |
| document.all                      | 获取所有元素                                                 | 属性 |
| document.getElementsByClassName() | 可以根据属性值获取一组元素节点对象                           | 方法 |
| document.querySelector()          | 可以根据一个css选择器来查询一个元素节点对象                  | 方法 |
| document.querySelectorAll()       | 该方法和querySelector()用法类似，不同的是它会将符合条件的元素封装到一个数组中返回 | 方法 |



```javascript
<head>
	<script type="text/javascript">
	window.onload = function(){
		
		// 获取body标签
		// var body = document.getElementsByTagName("body")[0];
		// console.log(body)
		
		// 在document中有一个属性body，它保存的是body的引用
		var body = document.body;
		// document.documentElement保存的是html根标签
		var html = document.documentElement;
		console.log(html)
		
		// document.all 可以获取所有元素
		var all = document.all
		console.log(all)
		// for(let i=0;i<all.length;i++){
		// 	console.log(all[i])
		// }
		
		// 获取元素
		var all1 = document.getElementsByTagName("h1")
		console.log(all1.length)
		
		// 根据元素的class属性值查询一组元素节点对象
		// getElementsByClassName()可以根据属性值获取一组元素节点对象
		// 但是该方法不支持ie8及以下的浏览器
		var box1 = document.getElementsByClassName("box1")
		console.log(box1.length)
		
		// 获取class中的box1中的所有的div
		/* document.querySelector()
			- 需要一个选择器的字符串作为参数，可以根据一个css选择器来查询一个元素节点对象
			- 虽然ie8中没有class的查询，但是可以使用querySelector()
			- 使用该方法总会返回唯一的一个元素，如果满足条件的元素有多个，那么它只会返回第一个*/
		var div = document.querySelector(".box1 div")
		console.log(div.innerHTML)
		
		// document.querySelectorAll()
		// 该方法和querySelector()用法类似，不同的是它会将符合条件的元素封装到一个数组中返回
		// 即使符合条件的元素只有一个，它也会返回数组
		var div2 = document.querySelectorAll(".box1")
		console.log(div2.length)
	}
	</script>
</head>
<body>
	<h1>h1</h1>
	<div class="box1">
		<div>我是box1中的div</div>
	</div>
	<div class="box1">
		<div>我是box1中的div</div>
	</div>
	<div class="box1">
		<div>我是box1中的div</div>
	</div>
</body>
```



### DOM增删改-11

| ---                     | ---                                  | ---  |
| ----------------------- | ------------------------------------ | ---- |
| document.createElement  | 可以用于创建一个元素节点对象         | 属性 |
| document.createTextNode | 可以用来创建一个文本节点对象         | 属性 |
| appendchild()           | 向一个父节点中添加一个新的子节点     | 方法 |
| insertBefore()          | 可以在指定的子节点前插入新的子节点   | 方法 |
| replaceChild()          | 可以使用指定的子节点替换已有的子节点 | 方法 |
| removeChild()           | 可以删除一个子节点                   | 方法 |



```javascript
<head>
	<style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	#div_1{
		position: relative;
		top: 100px;
		left: 100px;
	}
	ul li{
		background-color: green;
	}
	#btn_{
		position: relative;
		left: 100px;
		top: 200px;
	}
	</style>
	<script type="text/javascript">
	
	function myClick(idStr,fun){
		var btn = document.getElementById(idStr);
		btn.onclick = fun;
	}
	
	window.onload = function(){
		/* 创建一个“广州”节点添加到#city下 */
		myClick("btn01",function(){
			// 创建广州节点 <li>广州</li>
			// 创建li元素节点
			/* document.createElement
				可以用于创建一个元素节点对象
				它需要一个标签名作为参数,将会根据该标签名创建元素节点对象
				并将创建好的对象作为返回值返回*/
			var li = document.createElement("li")
			// 创建广州文本节点
			/* document.createTextNode
				可以用来创建一个文本节点对象
				需要一个文本内容作为参数,将会根据该内容创建文本节点,并将新的节点返回*/
			var gz_text = document.createTextNode("广州")
			
			// 将gz_text设置li的子节点
			/* appendchild()
				- 向一个父节点中添加一个新的子节点
				用法:父元素.appendchild(子节点)*/
			li.appendChild(gz_text);
			
			// 获取id为city的节点
			var city = document.getElementById("city");
			// 将广州添加city下
			city.appendChild(li)
		});
		
		/* -------------------------------- */
		
		// 将“广州”节点插入到#bj前面
		myClick("btn02",function(){
			// 创建一个广州
			var li = document.createElement("li");
			var gz_text = document.createTextNode("广州")
			li.appendChild(gz_text)
			
			// 获取id为bj的节点
			var bj = document.getElementById("bj");
			// 获取id为city的节点
			var city = document.getElementById("city");
			/* insertBefore()
				- 可以在指定的子节点前插入新的子节点
				- 语法:
					父节点.insertBefore(新节点,旧节点)*/
			city.insertBefore(li,bj)
		});
		
		/* -------------------------------- */
		
		// 使用“广州”节点替换#bj节点
		myClick("btn03",function(){
			// 创建一个广州
			var li = document.createElement("li");
			var gz_text = document.createTextNode("广州")
			li.appendChild(gz_text)
			
			// 获取id为bj的节点
			var bj = document.getElementById("bj");
			// 获取id为city的节点
			var city = document.getElementById("city");
			/* replaceChild()
				- 可以使用指定的子节点替换已有的子节点
				- 语法:父节点.replaceChild(新节点,旧节点)*/
			city.replaceChild(li,bj)
		});
		
		/* -------------------------------- */
		
		// 删除#bj节点
		myClick("btn04",function(){
			// 获取id为bj的节点
			var bj = document.getElementById("bj");
			// 获取id为city的节点
			var city = document.getElementById("city");
			/* removeChild()
				- 可以删除一个子节点
				- 语法:父节点.removeChild(子节点)
			子节点.parentNode.removeChild(子节点)
				这个方式更方便*/
			// city.removeChild(bj)
			
			// 常用
			bj.parentNode.removeChild(bj)
		});
		
		/* -------------------------------- */
		
		// 读取#city内的HTML代码
		myClick("btn05",function(){
			// 获取id为city的节点
			var city = document.getElementById("city");
			alert(city.innerHTML)
		});
		
		/* -------------------------------- */
		
		// 设置#bj内的代码
		myClick("btn06",function(){
			// 获取id为bj的节点
			var bj = document.getElementById("bj");
			bj.innerHTML = "云南"
		});
		
		/* -------------------------------- */
		
		// 向city中添加广州
		myClick("btn07",function(){
			// 获取city
			var city = document.getElementById("city")
			
			// 使用innerHTML也可以完成DOM的增删改的相关操作
			// 一般我们会两种方式结合使用,
			// city.innerHTML += "<li>广州</li>"
			
			// 两种方式的综合使用
			// 创建li
			var li = document.createElement("li");
			// 向li中设置文本
			li.innerHTML = "广州";
			// 将li添加到city中
			city.appendChild(li);
		})
	}
	
	</script>
</head>
<body>
<div id="div_1">
	<ul id="city">
		<li id="bj">北京</li>
		<li>上海</li>
		<li>东京</li>
		<li>首尔</li>
	</ul>
</div>

<div id="btn_">
	<div><button id="btn01">创建一个“广州”节点添加到#city下</button></div>
	<div><button id="btn02">将“广州”节点插入到#bj前面</button></div>
	<div><button id="btn03">使用“广州”节点替换#bj节点</button></div>
	<div><button id="btn04">删除#bj节点</button></div>
	<div><button id="btn05">读取#city内的HTML代码</button></div>
	<div><button id="btn06">设置#bj内的HTML代码</button></div>
	<div><button id="btn07">innerHTML添加广州</button></div>
</div>

</body>
```



### 添加删除记录练习-复杂-12

```javascript
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>添加删除记录练习</title>

<script type="text/javascript">

	// 删除tr的单击响应函数
	function delA() {
		// 点击超链接以后需要删除超链接所在的那行
		// 这里我们点击哪个this就是谁
		// 获取tr
		var tr = this.parentNode.parentNode;
		
		//  获取要删除的员工的名字
		var name = tr.getElementsByTagName("td")[0].innerHTML
		
		// 删除之前弹出提示框
		// alert("确认删除？")
		/* confirm()用于弹出一个带有确认和取消按钮的提示框
			需要一个字符串作为参数，该字符串将会作为提升文字显示出来
		如果用户点击确认则会返回true，如果点击取消则返回false*/
		var flag = confirm("确认删除"+name+"吗？")
		
		// 如果用户点击确认
		if(flag){
			// 删除tr
			tr.parentNode.removeChild(tr);
		}
		
		
		/* 点击超链接以后，会跳转页面，这个是超连接的默认行为 
			但是此时我们不希望出现默认行为，可以在通过在响应函数的最后return false来取消行为*/
	return false;
	}
	
	/* -------------------------------- */
	
	window.onload = function(){
		// 删除员工
		/* 点击超链接以后，删除一个员工信息 */
		
		// 获取所有的超连接
		var allA = document.getElementsByTagName("a");
		
		// 为每个超链接绑定一个单击响应函数
		for(var i=0;i<allA.length;i++){
			allA[i].onclick = delA
		}
		
	/* -------------------------------- */
	
		/* 添加员工
			- 点击按钮以后，将员工的信息添加到表格中*/
		// 为提交按钮绑定一个单击响应函数
		var addEmpButton = document.getElementById("addEmpButton");
		addEmpButton.onclick = function(){
			// 获取用户添加的员工信息
			// 获取员工的名字
			var name = document.getElementById("empName").value;
			// 获取员工的email和salary
			var email = document.getElementById("email").value;
			var salary = document.getElementById("salary").value;
			// 需要将获取到的信息保存到tr中
			
			// 创建一个tr
			var tr = document.createElement("tr");
			// 创建4个td
			var nameTd = document.createElement("td")
			var emailTd = document.createElement("td")
			var salaryTd = document.createElement("td")
			var aTd = document.createElement("td")
			
			// 创建一个a元素
			var a = document.createElement("a");
			
			// 创建文本节点
			var nameText = document.createTextNode(name);
			var emailText = document.createTextNode(email);
			var salaryText = document.createTextNode(salary);
			var delText = document.createTextNode("Delete");
			
			// 将文本添加到td中
			nameTd.appendChild(nameText)
			emailTd.appendChild(emailText)
			salaryTd.appendChild(salaryText)
			
			// 向a中添加文本
			a.appendChild(delText)
			// 将a添加到td中
			aTd.appendChild(a)
			
			// 将td添加到tr中
			tr.appendChild(nameTd)
			tr.appendChild(emailTd)
			tr.appendChild(salaryTd)
			tr.appendChild(aTd)
			
			// 向a中添加href属性
			a.href = "javascript:;"
			// 获取table
			var employeeTable = document.getElementById("employeeTable");
			// 获取employeeTable的tbody
			var tbody = employeeTable.getElementsByTagName("tbody")[0]
			// 将tr添加到table中
			tbody.appendChild(tr);
			
			// 为新添加的a再绑定一次单击响应函数
			a.onclick = delA;
		}
	};

	
</script>
</head>
<body>
	<!-- 表格标签 -->
	<table id="employeeTable">
		<!-- 行 -->
		<tr>
			<!-- 表头标签 -->
			<th>Name</th>
			<th>Email</th>
			<th>Salary</th>
			<th>&nbsp;</th>
		</tr>
		<tr>
			<!-- 列 -->
			<td>Tom</td>
			<td>tom@tom.com</td>
			<td>5000</td>
			<td><a href="javascript:;">Delete</a></td>
		</tr>
		<tr>
			<td>Jerry</td>
			<td>jerry@sohu.com</td>
			<td>8000</td>
			<td><a href="deleteEmp?id=002">Delete</a></td>
		</tr>
		<tr>
			<td>Bob</td>
			<td>bob@tom.com</td>
			<td>10000</td>
			<td><a href="deleteEmp?id=003">Delete</a></td>
		</tr>
	</table>


	<div id="formDiv">
	
		<h4>添加新员工</h4>

		<table>
			<tr>
				<td class="word">name: </td>
				<td class="inp">
					<input type="text" name="empName" id="empName" />
				</td>
			</tr>
			<tr>
				<td class="word">email: </td>
				<td class="inp">
					<input type="text" name="email" id="email" />
				</td>
			</tr>
			<tr>
				<td class="word">salary: </td>
				<td class="inp">
					<input type="text" name="salary" id="salary" />
				</td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<button id="addEmpButton" value="abc">
						Submit
					</button>
				</td>
			</tr>
		</table>

	</div>


<style type="text/css">
	@CHARSET "UTF-8";
	#total {
		width: 450px;
		margin-left: auto;
		margin-right: auto;
	}
	
	ul {
		list-style-type: none;
	}
	
	li {
		border-style: solid;
		border-width: 1px;
		padding: 5px;
		margin: 5px;
		background-color: #99ff99;
		float: left;
	}
	
	.inner {
		width: 400px;
		border-style: solid;
		border-width: 1px;
		margin: 10px;
		padding: 10px;
		float: left;
	}
	
	#employeeTable {
		border-spacing: 1px;
		background-color: black;
		margin: 80px auto 10px auto;
	}
	
	th,td {
		background-color: white;
	}
	
	#formDiv {
		width: 250px;
		border-style: solid;
		border-width: 1px;
		margin: 50px auto 10px auto;
		padding: 10px;
	}
	
	#formDiv input {
		width: 100%;
	}
	
	.word {
		width: 40px;
	}
	
	.inp {
		width: 200px;
	}
</style>
</body>
</html>
```



### 添加删除记录练习-简单-13

| ---       | ---                                    | ---  |
| --------- | -------------------------------------- | ---- |
| confirm() | 用于弹出一个带有确认和取消按钮的提示框 | 方法 |



```javascript
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>添加删除记录练习</title>

<script type="text/javascript">

	// 删除tr的单击响应函数
	function delA() {
		// 点击超链接以后需要删除超链接所在的那行
		// 这里我们点击哪个this就是谁
		// 获取tr
		var tr = this.parentNode.parentNode;
		
		//  获取要删除的员工的名字
		var name = tr.getElementsByTagName("td")[0].innerHTML
		
		// 删除之前弹出提示框
		// alert("确认删除？")
		/* confirm()用于弹出一个带有确认和取消按钮的提示框
			需要一个字符串作为参数，该字符串将会作为提升文字显示出来
		如果用户点击确认则会返回true，如果点击取消则返回false*/
		var flag = confirm("确认删除"+name+"吗？")
		
		// 如果用户点击确认
		if(flag){
			// 删除tr
			tr.parentNode.removeChild(tr);
		}
		
		
		/* 点击超链接以后，会跳转页面，这个是超连接的默认行为 
			但是此时我们不希望出现默认行为，可以在通过在响应函数的最后return false来取消行为*/
	return false;
	}
	
	/* -------------------------------- */
	
	window.onload = function(){
		// 删除员工
		/* 点击超链接以后，删除一个员工信息 */
		
		// 获取所有的超连接
		var allA = document.getElementsByTagName("a");
		
		// 为每个超链接绑定一个单击响应函数
		for(var i=0;i<allA.length;i++){
			allA[i].onclick = delA
		}
		
	/* -------------------------------- */
	
		/* 添加员工
			- 点击按钮以后，将员工的信息添加到表格中*/
		// 为提交按钮绑定一个单击响应函数
		var addEmpButton = document.getElementById("addEmpButton");
		addEmpButton.onclick = function(){
			// 获取用户添加的员工信息
			// 获取员工的名字
			var name = document.getElementById("empName").value;
			// 获取员工的email和salary
			var email = document.getElementById("email").value;
			var salary = document.getElementById("salary").value;
			// 需要将获取到的信息保存到tr中
			
			// 创建一个tr
			var tr = document.createElement("tr");
			
			// 设置tr中的内容
			tr.innerHTML = "<td>"+name+"</td>"+
						   "<td>"+email+"</td>"+
						   "<td>"+salary+"</td>"+
						   "<td><a href='javascript:;'>Delete</a></td>";
			// 获取刚刚添加的a元素，并为其绑定单击响应函数
			var a = tr.getElementsByTagName("a")[0];
			a.onclick = delA;
			
			// 获取table
			var employeeTable = document.getElementById("employeeTable");
			// 获取employeeTable的tbody
			var tbody = employeeTable.getElementsByTagName("tbody")[0]
			// 将tr添加到table中
			tbody.appendChild(tr);
		}
	};

	
</script>
</head>
<body>
	<!-- 表格标签 -->
	<table id="employeeTable">
		<!-- 行 -->
		<tr>
			<!-- 表头标签 -->
			<th>Name</th>
			<th>Email</th>
			<th>Salary</th>
			<th>&nbsp;</th>
		</tr>
		<tr>
			<!-- 列 -->
			<td>Tom</td>
			<td>tom@tom.com</td>
			<td>5000</td>
			<td><a href="javascript:;">Delete</a></td>
		</tr>
		<tr>
			<td>Jerry</td>
			<td>jerry@sohu.com</td>
			<td>8000</td>
			<td><a href="deleteEmp?id=002">Delete</a></td>
		</tr>
		<tr>
			<td>Bob</td>
			<td>bob@tom.com</td>
			<td>10000</td>
			<td><a href="deleteEmp?id=003">Delete</a></td>
		</tr>
	</table>


	<div id="formDiv">
	
		<h4>添加新员工</h4>

		<table>
			<tr>
				<td class="word">name: </td>
				<td class="inp">
					<input type="text" name="empName" id="empName" />
				</td>
			</tr>
			<tr>
				<td class="word">email: </td>
				<td class="inp">
					<input type="text" name="email" id="email" />
				</td>
			</tr>
			<tr>
				<td class="word">salary: </td>
				<td class="inp">
					<input type="text" name="salary" id="salary" />
				</td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<button id="addEmpButton" value="abc">
						Submit
					</button>
				</td>
			</tr>
		</table>

	</div>


<style type="text/css">
	@CHARSET "UTF-8";
	#total {
		width: 450px;
		margin-left: auto;
		margin-right: auto;
	}
	
	ul {
		list-style-type: none;
	}
	
	li {
		border-style: solid;
		border-width: 1px;
		padding: 5px;
		margin: 5px;
		background-color: #99ff99;
		float: left;
	}
	
	.inner {
		width: 400px;
		border-style: solid;
		border-width: 1px;
		margin: 10px;
		padding: 10px;
		float: left;
	}
	
	#employeeTable {
		border-spacing: 1px;
		background-color: black;
		margin: 80px auto 10px auto;
	}
	
	th,td {
		background-color: white;
	}
	
	#formDiv {
		width: 250px;
		border-style: solid;
		border-width: 1px;
		margin: 50px auto 10px auto;
		padding: 10px;
	}
	
	#formDiv input {
		width: 100%;
	}
	
	.word {
		width: 40px;
	}
	
	.inp {
		width: 200px;
	}
</style>
</body>
</html>
```



### a的索引问题-14

```javascript
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>添加删除记录练习</title>

<script type="text/javascript">
    
	window.onload = function(){
		var allA = document.getElementsByTagName("a");
		
		// 为每个超链接绑定一个单击响应函数
		for(var i=0;i<allA.length;i++){
			/* for循环会在页面加载完成之后立即执行，
				而响应函数会再超链接被点击时才执行
				当响应函数执行时，for循环早已执行完毕*/
			alert("for循环正在执行" + i)
			allA[i].onclick = function(){
				alert("响应函数正在执行")
				return false;
			}
		}
	}

</script>
</head>
<body>
	<!-- 表格标签 -->
	<table id="employeeTable">
		<!-- 行 -->
		<tr>
			<!-- 表头标签 -->
			<th>Name</th>
			<th>Email</th>
			<th>Salary</th>
			<th>&nbsp;</th>
		</tr>
		<tr>
			<!-- 列 -->
			<td>Tom</td>
			<td>tom@tom.com</td>
			<td>5000</td>
			<td><a href="javascript:;">Delete</a></td>
		</tr>
		<tr>
			<td>Jerry</td>
			<td>jerry@sohu.com</td>
			<td>8000</td>
			<td><a href="deleteEmp?id=002">Delete</a></td>
		</tr>
		<tr>
			<td>Bob</td>
			<td>bob@tom.com</td>
			<td>10000</td>
			<td><a href="deleteEmp?id=003">Delete</a></td>
		</tr>
	</table>


	<div id="formDiv">
	
		<h4>添加新员工</h4>

		<table>
			<tr>
				<td class="word">name: </td>
				<td class="inp">
					<input type="text" name="empName" id="empName" />
				</td>
			</tr>
			<tr>
				<td class="word">email: </td>
				<td class="inp">
					<input type="text" name="email" id="email" />
				</td>
			</tr>
			<tr>
				<td class="word">salary: </td>
				<td class="inp">
					<input type="text" name="salary" id="salary" />
				</td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<button id="addEmpButton" value="abc">
						Submit
					</button>
				</td>
			</tr>
		</table>

	</div>


<style type="text/css">
	@CHARSET "UTF-8";
	#total {
		width: 450px;
		margin-left: auto;
		margin-right: auto;
	}
	
	ul {
		list-style-type: none;
	}
	
	li {
		border-style: solid;
		border-width: 1px;
		padding: 5px;
		margin: 5px;
		background-color: #99ff99;
		float: left;
	}
	
	.inner {
		width: 400px;
		border-style: solid;
		border-width: 1px;
		margin: 10px;
		padding: 10px;
		float: left;
	}
	
	#employeeTable {
		border-spacing: 1px;
		background-color: black;
		margin: 80px auto 10px auto;
	}
	
	th,td {
		background-color: white;
	}
	
	#formDiv {
		width: 250px;
		border-style: solid;
		border-width: 1px;
		margin: 50px auto 10px auto;
		padding: 10px;
	}
	
	#formDiv input {
		width: 100%;
	}
	
	.word {
		width: 40px;
	}
	
	.inp {
		width: 200px;
	}
</style>
</body>
</html>
```



## DAY09



### 操作内联样式-1

| ---                        | ---                  | ---  |
| -------------------------- | -------------------- | ---- |
| 元素.style.样式名 = 样式值 | 通过js修改元素的样式 | 属性 |
|                            |                      |      |



```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>使用DOM操作css</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	#box1{
		width: 200px;
		height: 200px;
		background-color: red !important;
	}
	</style>
	<script type="text/javascript">
	window.onload = function(){
		// 点击按钮以后，修改box1的大小
		
		// 获取box1
		var box1 = document.getElementById("box1");
		// 为按钮绑定单击响应函数
		var btn01 = document.getElementById("btn01")
		btn01.onclick = function(){
			// 修改box1的宽度
/* 			通过js修改元素的样式
			语法：元素.style.样式名 = 样式值
			 如果样式名中含有-号
				这种名称再JS中是不合法的
				需要将这种样式名修改为驼峰命名法
			我们通过style属性设置的样式都是内联样式，
				而内联样式有较高的优先级，所以通过js修改的样式往往会立即显示
			但是如果在样式中写了!important，则此时样式会有最高的优先级
				即使通过js也不能覆盖该样式，此时将会导致js修改样式无效
				所以尽量不要使用*/
			box1.style.width = "100px"
			box1.style.height = "100px"
			box1.style.backgroundColor = "yellow"
		}
		
		// 点击按钮2以后，读取元素的样式
		var btn02 = document.getElementById("btn02")
		btn02.onclick = function(){
			// 读取box1的样式
			/* 语法：元素.style.样式名 */
/* 			通过style属性设置和读取的都是内联样式
			无法读取样式表中的样式 */
			alert(box1.style.height)
		}
	}
	
	</script>
</head>
<body>
	<button type="button" id="btn01">点我一下</button>
	<button type="button" id="btn02">点我一下2</button>
	<div id="box1">
		
	</div>
</body>
</html>
```



### 获取元素的样式-两种不同方式-2

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>使用DOM操作css</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	#box1{
		width: 100px;
		height: 100px;
	}
	</style>
	<script type="text/javascript">
	window.onload = function(){
		// 点击按钮以后读取box1的样式
		var box1 = document.getElementById("box1")
		var btn01 = document.getElementById("btn01")
		btn01.onclick = function(){
			// 读取box1的宽度
			// alert(box1.style.width)
			
			/* 获取元素的当前显示的样式
				语法：元素.currentStyle.样式名
			只支持ie内核浏览器
			它可以用来读取当前元素正在显示的样式
				如果当前元素没有设置该样式，则获取它的默认值*/
			// alert(box1.currentStyle.width)
			// alert(box1.currentStyle.backgroundColor)
			
			/* ------------------------------------------- */
			
			/* 在其他浏览器中可以使用
				getComputedStyle()这个方法来获取元素当前的样式
				这个是window的方法
			需要两个参数：
				第一个：要获取样式的元素
				第二个：可以传递一个伪元素,一般都传null
			该方法会返回一个对象，对象中封装了当前元素对应的样式
				可以通过对象.样式名来读取样式
				如果获取的样式没有设置，则会获取到真实的值，而不是默认值
				比如：没有设置width，它不会获取到auto，而是一个长度
			但是该方法不支持ie8及以下的浏览器*/
			// alert(getComputedStyle(box1,null).width)
			
/* 			通过currentStyle和getComputedStyle()读取到的样式都是只读的，
			不能修改，如果要修改必须通过style属性 */
			
			// alert(getStyle(box1,"width"))
		}
	}
	/* 定义一个函数，用来获取指定元素的当前样式
	 参数：
		obj 要获取样式的元素
		name 要获取的样式名*/
	function getStyle(obj,name){
		// 正常浏览器方式
		// return getComputedStyle(obj,null)[name]
		
		// ie8的方式
		// return obj.currentStyle[name]
	}
	</script>
</head>
<body>
	<button type="button" id="btn01">点我一下</button>
	<br><br>
	<div id="box1"></div>
</body>
</html>
```



### 获取元素的样式-支持所有浏览器版本-3

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>使用DOM操作css</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	#box1{
		width: 100px;
		height: 100px;
	}
	</style>
	<script type="text/javascript">
	window.onload = function(){
		// 点击按钮以后读取box1的样式
		var box1 = document.getElementById("box1")
		var btn01 = document.getElementById("btn01")
		btn01.onclick = function(){
			
			var w = getStyle(box1,"width")
			alert(w)
		}
	}
	/* 定义一个函数，用来获取指定元素的当前样式
	 参数：
		obj 要获取样式的元素
		name 要获取的样式名*/
	function getStyle(obj,name){
		
		if(window.getComputedStyle){
			// 正常浏览器方式,具有getComputedStyle()方法
			return getComputedStyle(obj,null)[name]
		}else{
			// ie8的方式，没有getComputedStyle()方法
			return getComputedStyle(obj,null)[name]
		}
		
	}
	</script>
</head>
<body>
	<button type="button" id="btn01">点我一下</button>
	<br><br>
	<div id="box1"></div>
</body>
</html>
```



### 其他样式操作的属性-4

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>其他样式操作属性</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	#box1{
		width: 100px;
		height: 100px;
		background-color: red;
		padding: 10px;
		border: 10px solid yellow;
	}
	#box2{
		/* position: relative; */
		padding: 100px;
		background-color: #bfa;
	}
	#box4{
		width: 200px;
		height: 300px;
		background-color: #bfa;
		overflow: auto;
	}
	#box5{
		width: 450px;
		height: 600px;
		background-color: yellow;
		
	}
	</style>
	<script type="text/javascript">
	window.onload = function(){
		var box1 = document.getElementById("box1")
		var btn01 = document.getElementById("btn01")
		var box4 = document.getElementById("box4")
		btn01.onclick = function(){
			/* clientWidth
			   clientHeight
				- 这两个属性可以获取元素的可见宽度和高度
				- 这些属性都是不带px的，返回都是一个数字，可以直接进行计算
				- 会获取元素宽度和高度，包括内容区和内边距
				- 这些属性都是只读的，不能修改*/
			// alert(box1.clientWidth)
			// alert(box1.clientHeight)
			// box1.clinetHeight = 200
			
			/* ---------------------------------------------- */
			
			/* offsetHeight	
			   offsetWidth	
				- 返回元素的高度和宽度
				- 获取元素的整个的宽度和高度，包括内容区，内边距和边框*/
			// alert(box1.offsetHeight)
			
			/* ---------------------------------------------- */
			
			/* offsetParent 
				- 可以用来获取当前元素的定位父元素
				- 会获取到离当前元素最近的开启了定位的祖先元素
					如果所有的祖先元素都没有开启定位，则返回body*/
			// var op = box1.offsetParent
			// console.log(op.id)
			
			/* ---------------------------------------------- */
			
			/* offsetLeft
				- 当前元素相对于其定位父元素的水平偏移量
			   offsetTop
			    - 当前元素相对于其定位父元素的垂直偏移量
			   */
			// alert(box1.offsetLeft)
			
			/* ---------------------------------------------- */
			
			/* 
			 scrollHeight
			 scrollWidth
				- 可以获取元素整个滚动区域的宽度和高度
			 scrollLeft
				- 可以获取水平滚动条滚动的距离
			 scrollTop
				- 可以获取垂直滚动条滚动的距离
			 
			 */
			// alert(box4.scrollHeight)
			// alert(box4.scrollLeft)
			// alert(box4.scrollTop)
			// alert(box4.clientHeight)		283
			
			// 当满足scrollHeight - scrollTop == clientHeight
			// 说明垂直滚动条滚到底了
			
			// 当满足scrollWidth - scrollLeft == clientwidth
			// 说明水平滚动条滚到底了
			// alert(box4.scrollHeight - box4.scrollTop)	600
		}
	}
	</script>
</head>

<body>
<body>
	<button type="button" id="btn01">点我一下</button>
	<br><br>
	
	<div id="box4">
		<div id="box5"></div>
	</div>
	
	<br><br>
	<div id="box3">
		<div id="box2">
			<div id="box1"></div>
		</div>
	</div>
</body>
</html>
```

### 其他样式操作练习-5

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			#info{
				width: 300px;
				height: 500px;
				background-color: #bfa;
				overflow: auto;
			}
		</style>
		<script type="text/javascript">
			window.onload = function(){
				/*
				当垂直滚动条滚动到底时，使表单项可用
				onscroll
					- 该事件会在元素的滚动条时触发
				*/
			   
			   // 获取id为info的元素
			   var info = document.getElementById("info")
			   // 获取两个表单项
			   var inputs = document.getElementsByTagName("input")
			   // 为id为info绑定一个滚动条滚动的事件
			   info.onscroll = function(){
				   // 检查垂直滚动条是否滚动到底
				   if(info.scrollHeight - info.scrollTop == info.clientHeight){
						// 滚动条滚动到底，使表单项可用
						/* 
						 disabled属性可以设置一个元素是否禁用
							如果设置为true，则元素禁用
							如果设置为false，则元素可用*/
						inputs[0].disabled = false
						inputs[1].disabled = false
				   }
			   }
			}
		</script>
	</head>
	<body>
		<h3>欢迎亲爱的用户注册</h3>
		<p id="info">
			亲爱的用户，请仔细阅读以下协议，如果你不仔细阅读你就别想注册
			亲爱的用户，请仔细阅读以下协议，如果你不仔细阅读你就别想注册
			亲爱的用户，请仔细阅读以下协议，如果你不仔细阅读你就别想注册
			亲爱的用户，请仔细阅读以下协议，如果你不仔细阅读你就别想注册
			亲爱的用户，请仔细阅读以下协议，如果你不仔细阅读你就别想注册
			亲爱的用户，请仔细阅读以下协议，如果你不仔细阅读你就别想注册
			亲爱的用户，请仔细阅读以下协议，如果你不仔细阅读你就别想注册
			亲爱的用户，请仔细阅读以下协议，如果你不仔细阅读你就别想注册
			亲爱的用户，请仔细阅读以下协议，如果你不仔细阅读你就别想注册
			亲爱的用户，请仔细阅读以下协议，如果你不仔细阅读你就别想注册
			亲爱的用户，请仔细阅读以下协议，如果你不仔细阅读你就别想注册
			亲爱的用户，请仔细阅读以下协议，如果你不仔细阅读你就别想注册
			亲爱的用户，请仔细阅读以下协议，如果你不仔细阅读你就别想注册
			亲爱的用户，请仔细阅读以下协议，如果你不仔细阅读你就别想注册
			亲爱的用户，请仔细阅读以下协议，如果你不仔细阅读你就别想注册
			亲爱的用户，请仔细阅读以下协议，如果你不仔细阅读你就别想注册
			亲爱的用户，请仔细阅读以下协议，如果你不仔细阅读你就别想注册
			亲爱的用户，请仔细阅读以下协议，如果你不仔细阅读你就别想注册
		</p>
		<!-- 如果为表单项添加disabled="disabled" 则表单项将变成不可用 -->
		<input type="checkbox" disabled="disabled"/>我已仔细阅读协议，一定遵守
		<input type="submit" value="注册" disabled="disabled"/>
	</body>
</html>
```



## DAY10



### 事件对象-1

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title></title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
		#areaDiv {
			border: 1px solid black;
			width: 300px;
			height: 50px;
			margin-bottom: 10px;
		}
		
		#showMsg {
			border: 1px solid black;
			width: 300px;
			height: 20px;
		}
	</style>
	<script type="text/javascript">
	window.onload = function(){
		/* 当鼠标在areaDiv中移动时，在showMsg中来显示鼠标的坐标 */
		// 获取两个div
		var areaDiv = document.getElementById("areaDiv")
		var showMsg = document.getElementById("showMsg")
		/* onmousemove
			- 该事件将会在鼠标在元素中移动时被触发
			
		事件对象
			- 当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数
				在事件对象中封装了当前事件相关的一切信息。比如：鼠标的坐标，键盘的按键，鼠标滚轮滚动方向*/
		areaDiv.onmousemove = function(event){
			
/* 			在ie8中，响应函数被触发时，浏览器不会传递事件对象
			在ie8及以下的浏览器中，是将事件对象作为window对象的属性保存的 */
			
			// 解决事件对象的兼容性
			// 处理兼容性
			if(!event){
				event = window.event
			}
			// 处理兼容性2
			// event = event || window.event
			
			/* clientX 可以获取鼠标指针的水平坐标 
			   clientY 可以获取鼠标指针的垂直坐标*/
			var x = event.clientX
			var y = event.clientY
			
			// 在showMsg中显示鼠标的坐标
			showMsg.innerHTML = "x = " + x +",y = " + y
		}
	}
	</script>
</head>

<body>
	<div id="areaDiv"></div>
	<div id="showMsg"></div>
</body>
</html>
```



### div跟随鼠标移动-2

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title></title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	#box1{
		width: 100px;
		height: 100px;
		background-color: red;
		/* 开启box1的绝对定位 */
		position: absolute;
	}
	</style>
	<script type="text/javascript">
	window.onload = function(){
		/* 
		 使div可以跟随鼠标移动
		 */
		// 获取box1
		var box1 = document.getElementById("box1");
		// 绑定一个鼠标移动事件
		document.onmousemove = function(event){
			// 解决兼容问题
			event = event || window.event
			
			// 获取滚动条滚动的距离
			// var st = document.body.scrollTop || document.documentElement.scrollTop
			// var sl = document.body.scrollLeft || document.documentElement.scrollLeft
			
			/* clientX和clientY
				用于获取鼠标在当前的可见窗口的坐标
			div的偏移量相对于整个页面*/
			
			// 获取到鼠标的坐标
			/* pageX和pageY可以获取鼠标相对于当前页面的坐标
				但是这两个属性在ie8中不支持*/
			var left = event.pageX
			var top = event.pageY
			
			// 设置div的偏移量
			box1.style.left = left + "px"
			box1.style.top = top + "px"
			// box1.style.Left = Left + sl + "px"
			// box1.style.top = top + st + "px"
			
		}
	}
	</script>
</head>

<body style="height: 1000px;">
	<div id="box1"></div>
</body>
</html>
```



### 事件的冒泡-3

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title></title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	#box1{
		width: 200px;
		height: 200px;
		background-color: yellowgreen;
	}
	#s1{
		background-color: yellow;
	}
	</style>
	<script type="text/javascript">
	window.onload = function(){
		/* 事件的冒泡（Bubble）
			- 所谓的冒泡指的就是事件的向上传导，当后代元素上的事件被触发时，其祖先元素的相同事件也会被触发
			- 在开发中冒泡大部分都是有用的,如果不希望发生事件冒泡可以通过事件对象来取消冒泡*/
		
		// 为s1绑定一个单击响应函数
		var s1 = document.getElementById("s1")
		s1.onclick = function(event){
			event = event || window.event
			alert("span")
			
			// 取消冒泡
			// 可以将事件对象的cancelBubble 设置为true，则取消冒泡
			event.cancelBubble = true;
		}
		
		
		// 为box1绑定一个单击响应函数
		var box1 = document.getElementById("box1")
		box1.onclick = function(event){
			event = event || window.event
			alert("div")
			event.cancelBubble = true;
		}
		
		// 为body绑定一个单击响应函数
		document.body.onclick = function(event){
			event = event || window.event
			alert("body")
			event.cancelBubble = true;
		}
	}
	</script>
</head>

<body>
	
	<div id="box1">
		我是box1
		<span id="s1">
			我是span
		</span>
	</div>
	
</body>
</html>
```



### 事件的委派-4

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title></title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	#u1{
		background-color: lightgreen;
	}
	</style>
	<script type="text/javascript">
	window.onload = function(){
		// 获取ul元素
		var u1 = document.getElementById("u1")
		
		// 获取btn01元素
		var btn01 = document.getElementById("btn01")
		// 点击按钮以后添加超链接
		btn01.onclick = function(){
			// 创建一个li
			var li = document.createElement("li")
			// 给li里的文本节点传入内容
			li.innerHTML = "<a href='javascript:;' class='link'>超链接</a>"
			
			// 将li添加到ul中
			u1.appendChild(li)
		}
		/* 
		 为每一个超连接绑定一个单击响应函数
		 这里我们为每一个超链接都绑定一个单击响应函数,这种操作比较麻烦
			而且这些操作只能为已有的超链接设置事件，而新添加的超链接必须重新绑定
		 */
		// 获取所有的a元素
		var allA = document.getElementsByTagName("a")
		// 遍历
/* 		for(let i=0;i<allA.length;i++){
			allA[i].onclick = function(){
				alert("eee")
			}
		} */
		/* 我们希望，只绑定一次事件，即可应用到多个的元素上，即使元素是后添加的
			我们可以尝试将其绑定给元素的共同的祖先元素
			
			事件的委派
				- 指将事件统一绑定给元素的共同的祖先元素，这样后代元素上的事件触发时，会一直冒泡到祖先元素
					从而通过祖先元素的响应函数来处理事件
				- 事件委派就是利用了冒泡，通过委派可以减少事件绑定的次数，提高程序的性能*/
		
		// 为ul绑定一个单击响应函数
		u1.onclick = function(event){
			event = event || window.event
			
			/* target
				- 事件属性返回触发事件的元素。
				- event中的target表示触发事件的对象*/
			// alert(event.target)
			// 如果触发事件的对象是我们期望的元素，则执行否则不执行
			if(event.target.className == "link"){
				alert("dd")
			}
		}
	}
	</script>
</head>

<body>
	<button id="btn01">添加超链接</button>
	<ul id="u1">
		<li><a href="javascript:;" class="link">超链接一</a></li>
		<li><a href="javascript:;" class="link">超链接二</a></li>
		<li><a href="javascript:;" class="link">超链接三</a></li>
	</ul>
	
</body>
</html>
```



### 事件的绑定-5

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title></title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	
	</style>
	<script type="text/javascript">
	window.onload = function(){
		/*  点击按钮以后弹出一个内容 */
		// 获取按钮对象
		var btn01 = document.getElementById("btn01")
		
		/* 
		 使用 对象.事件 = 函数 的形式绑定响应函数
			它只能同时为一个元素的一个事件绑定一个响应函数
			不能绑定多个，如果绑定了多个，则后边会覆盖掉前面的*/
		
		/* addEventListener
			- 通过这个方法可以为元素绑定响应函数
			- 参数：
				1.事件的字符串，不要on
				2.回调函数，当事件触发时该函数会被调用
				3.是否再捕获阶段触发事件，需要一个布尔值，一般都传false
			使用addEventListener()可以同时为一个元素的相同事件同时绑定多个响应函数，
				这样当事件被触发时，响应函数将会按照函数的绑定顺序执行
				
			这个方法不支持ie8及以下的浏览器*/
		btn01.addEventListener("click",function(){
			alert(1)
		},false)
		btn01.addEventListener("click",function(){
			alert(2)
		},false)
		
		/* attachEvent
			- 在ie8中可以使用attachEvent()来绑定事件
			- 参数：
				1.事件的字符串，要on
				2.回调函数
			- 也可以同时为一个元素的相同事件同时绑定多个响应函数
				不同的是它是后绑定先执行，执行顺序和addEventListener相反*/
		
		
		// 为btn01绑定一个单击响应函数
/* 		btn01.onclick = function(){
			alert("Q")
		} */
		
		// 为btn01绑定第二个响应函数
/* 		btn01.onclick = function(){
			alert("c")
		} */
	}
	</script>
</head>

<body>
	<button id="btn01">点我一下</button>
	
</body>
</html>
```



### 解决事件的绑定的另一个方法问题-6

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title></title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	
	</style>
	<script type="text/javascript">
	window.onload = function(){
		/*  点击按钮以后弹出一个内容 */
		// 获取按钮对象
		var btn01 = document.getElementById("btn01")
		

		
		/* attachEvent
			- 在ie8中可以使用attachEvent()来绑定事件
			- 参数：
				1.事件的字符串，要on
				2.回调函数
			- 也可以同时为一个元素的相同事件同时绑定多个响应函数
				不同的是它是后绑定先执行，执行顺序和addEventListener相反*/
		
		/* 参数：
			obj 要绑定事件的对象
			eventStr 事件的字符串（不要on）
			callback 回调函数*/
		function bind(obj,eventStr,callback){
			if(obj.addEventListener){
				// 大部分浏览器兼容的方式
				obj.addEventListener(eventStr,callback,false)
			}else{
				/* 
				 this是谁由调用方式决定
				 callback.call(obj)
				 */
				// ie8及以下
				obj.attachEvent("on",eventStr,function(){
					// 在匿名中调用回调函数
					callback.call(obj)
				})
			}
		}
		
		bind(btn01,"click",function(){
			alert(this)
		})
	}
	</script>
</head>

<body>
	<button id="btn01">点我一下</button>
	
</body>
</html>
```



### 事件的传播-7

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title></title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	#box1{
		width: 300px;
		height: 300px;
		background-color: yellowgreen;
	}
	#box2{
		width: 200px;
		height: 200px;
		background-color: yellow;
	}
	#box3{
		width: 150px;
		height: 150px;
		background-color: skyblue;
	}
	</style>
	<script type="text/javascript">
	window.onload = function(){
		/* 分别为三个div绑定单击响应函数 */
		var box1 = document.getElementById("box1")
		var box2 = document.getElementById("box2")
		var box3 = document.getElementById("box3")
		
		/* 事件的传播
			- 关于事件的传播网景公司和微软公司有不同的理解
			- 微软公司认为事件应该是由内向外传播，也就是当事件触发时，应该先触发当前元素上的事件
				然后再向当前的祖先元素上传播,也就说事件应该在冒泡阶段执行
			- 网景公司认为事件应该是由外向内传播的，也就是当前事件触发时，应该先触发当前元素的最外层的祖先元素的事件
				然后在向内传播给后代元素
			- W3C综合了两个公司的方法，将事件传播分成了三个阶段
				1.捕获阶段
					- 在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件
				2.目标阶段
					- 事件捕获到目标元素，捕获结束开始在目标元素上触发事件
				3.冒泡阶段
					- 事件从目标元素向他的祖先元素传递，依次触发祖先元素上的事件
					
				- 如果希望在捕获阶段就触发事件，可以将addEventListener的第三个参数设置为true
					一般情况下我们不会希望在捕获阶段触发事件，所以这个参数一般都是false
				- 在ie8及以下没有捕获阶段*/
		
		bind(box1,"click",function(){
			alert("我是box1")
		})
		bind(box2,"click",function(){
			alert("我是box2")
		})
		bind(box3,"click",function(){
			alert("我是box3")
		})
	}
			function bind(obj,eventStr,callback){
				if(obj.addEventListener){
					// 大部分浏览器兼容的方式
					obj.addEventListener(eventStr,callback,false)
				}else{
					/* 
					 this是谁由调用方式决定
					 callback.call(obj)
					 */
					// ie8及以下
					obj.attachEvent("on",eventStr,function(){
						// 在匿名中调用回调函数
						callback.call(obj)
					})
				}
			}
	</script>
</head>

<body>
	<div id="box1">
		<div id="box2">
			<div id="box3">
				
			</div>
		</div>
	</div>
	
</body>
</html>
```



### 事件的拖拽-8

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title></title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	#box1{
		width: 100px;
		height: 100px;
		background-color: red;
		position: absolute;
	}
	#box2{
		width: 100px;
		height: 100px;
		background-color: #BBFFAA;
		position: absolute;
		left: 200px;
		top: 200px;
	}
	</style>
	<script type="text/javascript">
	window.onload = function(){
		/* 
		 拖拽box1元素
			- 拖拽的流程：
				1.当鼠标在被拖拽元素上按下时，开始拖拽 onmousedown
				2.当鼠标移动时被拖拽元素跟随鼠标移动 onmousemove
				3.当鼠标松开时，被拖拽元素固定在当前位置 onmouseup*/
		// 获取box1
		var box1 = document.getElementById("box1")
		
		// 为box1绑定一个鼠标按下事件
		// 1.当鼠标在被拖拽元素上按下时，开始拖拽 onmousedown
		/* onmousedown
			- 当用户在元素上按下鼠标按钮时，发生此事件。*/
		box1.onmousedown = function(event){
			event = event || window.event
			
			// 求出div的偏移量 鼠标.clentX - 元素.offsetLeft
			// 求出div的偏移量 鼠标.clentY - 元素.offsetTop
			var ol = event.clientX - box1.offsetLeft
			var ot = event.clientY - box1.offsetTop
			
			// 2.当鼠标移动时被拖拽元素跟随鼠标移动 onmousemove
			/* onmousemove
				- 当指针在元素上方移动时，发生此事件。*/
			// 为document绑定一个onmousemove事件
			document.onmousemove = function(event){
				event = event || window.event
				
				// 获取鼠标的坐标
				var left = event.clientX - ol
				var top = event.clientY - ot
				
				// 修改box1的位置
				box1.style.left = left + "px"
				box1.style.top = top + "px"
				
			}
			
			// 为元素绑定一个鼠标松开事件
			// 3.当鼠标松开时，被拖拽元素固定在当前位置 onmouseup
			/* onmouseup
				- 当用户在元素上释放鼠标按钮时，发生此事件。*/
			document.onmouseup = function(){
				// 取消document的onmousemove事件
				document.onmousemove = null;
				
				// 取消document的onmouseup事件
				document.onmouseup = null;
				
			}
			
			/* 当我们拖拽一个网页中的内容时，浏览器会默认区搜索引擎中搜索内容
				此时会导致拖拽功能的异常，这个是浏览器提供的默认行为
				如果不希望发生这个行为，则可以通过return false来取消默认行为
				
				但是ie8不起作用*/
			return false;
			
		}
	}
	
	</script>
</head>

<body>
	我是文字
	<div id="box1"></div>
	<div id="box2"></div>
</body>
</html>
```



### 鼠标的滚轮事件-9

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>鼠标的滚轮事件</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	#box1{
		width: 100px;
		height: 100px;
		background-color: red;
	}
	
	</style>
	<script type="text/javascript">
	window.onload = function(){
		// 获取box1
		var box1 = document.getElementById("box1")
		// 为box1绑定一个鼠标滚轮滚动事件
		
		/* onwheel鼠标滚轮滚动的事件，会在滚轮滚动时触发*/
		box1.onwheel = function(event){
			event = event || window.event
			
			/* 当鼠标滚轮向下滚动时，box1变长
				当滚动向上滚动时，box1变短*/
			// 判断鼠标滚轮滚动的方向
/* 			wheelDelta可以获取鼠标滚动的方向
			向上滚120.向下滚-120
			wheelDelta我们只看正负，不看大小 */
			if(event.wheelDelta > 0){
				// 向上滚，box1变短
				box1.style.height = box1.clientHeight - 10 + "px"
			}else{
				// 向下滚，box1变长
				box1.style.height = box1.clientHeight + 10 + "px"
			}
			/* 当滚轮滚动时，如果浏览器有滚动条，滚动条会随之而动 */
			// 取消默认行为
			return false;
		}
	}
	
	</script>
</head>


<body style="height: 2000px;">
	<div id="box1">
		
	</div>
</body>
</html>
```



### 键盘的事件

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>键盘事件</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	#box1{
		width: 100px;
		height: 100px;
		background-color: red;
	}
	
	</style>
	<script type="text/javascript">
	window.onload = function(){
		// 键盘事件
		/* 键盘事件一般都会绑定给一些可以获取到焦点的对象,或者是document */
		/* onkeydown
			- 某个键盘按键被按下
			- 对于onkeydown来说如果一直按着某个键不松手会一直触发
			- 当onkeydown连续触发时，第一次和第二次之间会间隔稍微长一点，其他的非常快
				这种设计为了防止误操作的发生*/
		document.onkeydown = function(event){
			event = event || window.event
			/* 可以通过keyCode来获取按键的编码
				通过它可以判断哪个按键被按下
				除了keyCode事件对象中还提供了几个属性
				altKey
				ctrlKey
				shiftKey
					- 这三个用来判断alt ctrl 和shift是否被按下
						如果按下则返回true，否则返回false*/
			// console.log(event.keyCode)
			
			// 判断y是否被按下
			// 判断y和ctrl同时按下
			if(event.keyCode === 89 && event.ctrlKey){
				console.log("y")
			}
		}
		/* onkeyup
			- 某个键盘按键被松开*/
		document.onkeyup = function(){
			// console.log("sk")
		}
		
		// 获取input
		var input = document.getElementsByTagName("input")[0]
		input.onkeydown = function(){
			
			// 如果在onkeydown中取消了默认行为，则输入的内容，不会出现在文本框中
			
			event = event || window.event
			
			// 使文本框中不能输入数字
			// 数字48 - 57
			if(event.keyCode >= 48 && event.keyCode <= 57){
				return false;
			}
		}
	}
	
	</script>
</head>


<body>
	<input type="" name="" id="" value="" />
	<div id="box1">
		
	</div>
</body>
</html>
```



### 键盘移动div

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>键盘事件</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	#box1{
		width: 100px;
		height: 100px;
		background-color: red;
		position: absolute;
	}
	
	</style>
	<script type="text/javascript">
	window.onload = function(){
		// 键盘移动div
		
		// 获取div
		var box1 = document.getElementById("box1")
		
		// 给document绑定键盘事件
		document.onkeydown = function(event){
			event = event || window.event
			
			// 移动的速度
			var speed = 10;
			
			// 当用户按了ctrl，加速
			if(event.ctrlKey){
				speed = 20
			}
			
			// 第一种方法
			function fun(){
				
				// h-72-左 j-74-上 k-75-下 l-76-右
				let h = event.keyCode
				let j = event.keyCode
				let k = event.keyCode
				let l = event.keyCode
				if(h === 72){
					// box1.style.height = box1.clientHeight - 10 + "px"
					box1.style.left = box1.offsetLeft - speed + "px"
				}else if(j === 74){
					box1.style.top = box1.offsetTop - speed + "px"
				}else if(k === 75){
					box1.style.top = box1.offsetTop + speed + "px"
				}else if(l === 76){
					box1.style.left = box1.offsetLeft + speed + "px"
				}
			}
			
			
			// 第二种方法
			function fun2(){
				
				switch(event.keyCode){
					case 72:
					// 左
					box1.style.left = box1.offsetLeft - speed + "px"
					break;
					case 74:
					// 上
					box1.style.top = box1.offsetTop - speed + "px"
					break;
					case 75:
					// 下
					box1.style.top = box1.offsetTop + speed + "px"
					case 76:
					// 右
					box1.style.left = box1.offsetLeft + speed + "px"
				}
			}
			
			fun2()

		}
	}
	
	</script>
</head>


<body>
	<div id="box1">
		
	</div>
</body>
</html>
```



## DAY11



### BOM

```javascript
		/* 
		 BOM
			- 浏览器对象模型
			- BOM可以使通过JS来操作浏览器
			- 在BOM中为我们提供了一组对象，用来完成对浏览器的操作
			- BOM对象
				Window
					- 代表的是整个浏览器的窗口，同时window也是网页中的全局对象
				Navigator
					- 代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器
				Location
					- 代表当前浏览器的地址栏信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面
				History
					- 代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录
						由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页
						而且该操作只在当次访问时有效
				Screen
					- 代表用户的屏幕的信息，通过该对象可以获取到用户的显示器的相关信息
				
				这些BOM对象在浏览器中都是作为window对象的属性保存的
					可以通过window对象来使用，也可以直接使用*/
```



### Navigator

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>BOM</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	
	
	</style>
	<script type="text/javascript">
	window.onload = function(){		
		
		/* Navigator
			- 代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器
			- 由于历史原因，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了
			- 一般我们只会使用userAgent来判断浏览器的信息
				userAgent时一个字符串，这个字符串中包含有用来描述浏览器信息的内容
				不同的浏览器会有不同的userAgent
				
			chrome的userAgent
			Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36 HBuilderX
			
			在ie11中已经将微软和ie相关的标识都已经去除了，所以我们基本已经不能通过userAgent来识别一个浏览器是不是ie了
			*/
		// console.log(navigator.userAgent)
		
		// 判断浏览器是什么内核
		var ua = navigator.userAgent
		console.log(ua)
		if(/firefox/i.test(ua)){
			alert("firefox")
		}else if(/chrome/i.test(ua)){
			alert("chrome")
		}else if(/msie/i.test(ua)){
			alert("IE1-10")
		}else if("ActiveXObject" in window){
			alert("ie11")
		}
		
		/* 
		
		 如果通过userAgent不能判断，还可以通过一些浏览器特有的对象，来判断浏览器的信息
		 比如：ActiveXObject
		 */
		// if("ActiveXObject" in window){
		// 	alert("IE")
		// }else{
		// 	alert("nbs")
		// }
	}
	 
	</script>
</head>


<body>
	
</body>
</html>
```



### History

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>BOM</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	
	
	</style>
	<script type="text/javascript">
	window.onload = function(){
/* 		History
			- 代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录
				由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页
				而且该操作只在当次访问时有效 */
		
		/* length
			- 属性，可以获取到当前访问的链接数量 */
		console.log(history.length)
		
		// 获取btn按钮
		var btn = document.getElementById("btn")
		btn.onclick = function(){
			/* back()
				- 方法，可以用来回退到上一个页面，作用和浏览器的回退按钮一样 */
			// history.back()

			/* forward()
				- 方法，可以用来前进到下一个页面，作用和浏览器的回退按钮一样 */
			// history.forward()

			/* go()
				- 方法，可以用来跳转到指定的页面
				- 它需要一个整数作为参数
					1：表示向前跳转一个页面 相当于forward()
					2：表示向前跳转二个页面
					-1：表示向后跳转一个页面
					-2：表示向后跳转一个页面 */
			history.go(1)
		}
	}
	 
	</script>
</head>


<body>
	<button id="btn">回退</button>
	<h1>history</h1>
	<a href="01.html">前进</a>
</body>
</html>
```



### Location

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>BOM</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	
	
	</style>
	<script type="text/javascript">
	window.onload = function(){
/* 		Location
			- 代表当前浏览器的地址栏信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面 */
		
		/* Location
			- 该对象封装了浏览器的地址栏信息 */
		
		// 获取btn按钮
		var btn = document.getElementById("btn")

		btn.onclick = function(){

			// 如果直接打印Location，则可以获取到
			// alert(location)
			
			/* 如果直接将location属性修改为一个完整的路径，或相对路径
				则我们的页面会自动跳转到该路径,并且会生成相应的历史记录 */
			// location = "http://www.baid.com"

			/* assign()
				- 用来跳转到其他的页面，作用和直接修改location一样 */
			// location.assign("http://www.baid.com")
			
			/* reload()
				- 用于重新加载当前页面，作用和刷新按钮一样
				- 如果在方法中传递一个true，作为参数，则会强制清空缓存刷新页面 */
			// location.reload(true)

			/* replace()
				- 可以使用一个新的页面替换当前页面，调用完毕也会跳转页面
					不会生成历史记录，不能使用回退按钮回退
				 */
			// location.replace("lx.html")

		}
	}
	 
	</script>
</head>


<body>
	<button id="btn">按钮</button>
	<input type="text" name="" id="">
	<h1>Location</h1>
</body>
</html>
```



## DAY12



### 定时器简介

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title></title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	
	
	</style>
	<script type="text/javascript">
	window.onload = function(){

		// 获取h1
		var count = document.getElementById("count")

		/* 如果希望一段程序，可以每间隔一段时间执行一次，可以使用定时调用 */
		// 使count中的内容，自动切换
		
		/* setInterval()
			- 定时调用
			- 可以将一个函数，每隔一段时间执行一次
			- 参数：
				1.回调函数，该函数会每隔一段时间被调用一次
				2.每次调用间隔的时间，单位是毫秒
			
			- 返回值：
				返回一个Number类型的数据
				这个数字用来作为定时器的唯一标识	*/
		var num = 1;
		var timer = setInterval(function(){
			count.innerHTML = num++;

			if(num == 11){
				// 关闭定时器
				clearInterval(timer)
			}
		},1000)
		// console.log(timer)

		/* clearInterval()
			- 可以用来关闭一个定时器
			- 方法中需要一个定时器的标识作为参数，这样将关闭标识对应的定时器 */
		
	}
	 
	</script>
</head>


<body>
	<h1 id="count">1</h1>
</body>
</html>
```



### 切换图片练习

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>切换图片的练习</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	
	
	</style>
	<script type="text/javascript">
	window.onload = function(){
		/* 使图片可以自动切换 */
		

		// 获取img标签
		var img1 = document.getElementById("img1")
		
		// 为btn01绑定一个单击响应函数
		var btn01 = document.getElementById("btn01")
		btn01.onclick = function(){
					// 创建一个数组，保存图片路径
		var imgArr = ["Image/demo1.jpg","Image/demo3.jpg","Image/demo4.jpg"]

		// 创建一个变量，保存当前图片的索引
		var index = 0;

		/* 目前，我们每点击一次按钮，就会开启一个定时器
			点击多次就会开启多个定时器，这就导致图片的切换速度过快
			并且我们只能关闭最后一次开启的定时器 */
		// 在开启定时器之前，需要将当前元素上的其他定时器关闭，防止过快
		clearInterval(timer)

		// 开启一个定时器，自动切换图片
		timer = setInterval(function(){
			// 使索引自增
			index++;

			// 判断索引是否超过最大索引
			if(index >= imgArr.length){
				// 则将index设置为0
				index = 0;
			}

			// 第二种判断方法
			// index = index % imgArr.length

			// 修改img1的src属性
			img1.src = imgArr[index]
		},1000)
		}

		// 定义一个变量，用来保存定时器的标识
		var timer;

		/* ---------------------------------------------- */

		// 为btn02绑定一个单击响应函数
		var btn02 = document.getElementById("btn02")
		btn02.onclick = function(){
			// 点击按钮以后，停止图片的切换，关闭定时器
			/* clearInterval()可以接受任意参数
				如果参数是一个有效的定时器的标识
				如果参数不是一个有效的标识，则什么也不做 */
			clearInterval(timer);
		}

	}
	 
	</script>
</head>


<body>
	<img id="img1" src="Image/demo1.jpg" alt="">
	<button id="btn01">开始</button>
	<button id="btn02">结束</button>
</body>
</html>
```



### 修改div移动练习

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title></title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	#box1{
		width: 100px;
		height: 100px;
		background-color: red;
		position: absolute;
	}
	
	</style>
	<script type="text/javascript">
	window.onload = function(){
		
		// 移动的速度
		var speed = 10;
		
		// 创建一个变量表示方向
		// 通过修改dir来影响移动的方向
		var dir = 0
		
		// 开启定时器，来控制div的移动
		setInterval(function(){
			// 第二种方法
			function fun2(){
				
				switch(dir){
					case 72:
					// 左
					box1.style.left = box1.offsetLeft - speed + "px"
					break;
					case 74:
					// 上
					box1.style.top = box1.offsetTop - speed + "px"
					break;
					case 75:
					// 下
					box1.style.top = box1.offsetTop + speed + "px"
					case 76:
					// 右
					box1.style.left = box1.offsetLeft + speed + "px"
				}
			}
			fun2()
		},30)
		
		
		// 键盘移动div
		
		// 获取div
		var box1 = document.getElementById("box1")
		
		// 给document绑定键盘事件
		document.onkeydown = function(event){
			event = event || window.event
			
			
			// 当用户按了ctrl，加速
			if(event.ctrlKey){
				speed = 50
			}else{
				speed = 10;
			}
			
			// 使dir等于按键的值
			dir = event.keyCode
		}
		// 当按键松开时，div不再移动
		document.onkeyup = function(){
			// 设置方向为0
			dir = 0;
		}
	}
	
	</script>
</head>


<body>
	<div id="box1">
		
	</div>
</body>
</html>
```



### 延时调用

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title></title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	
	</style>
	<script type="text/javascript">
	window.onload = function(){
		
		var num = 1
		// 开启定时器
/* 		setInterval(function(){
			console.log(num++)
		},3000) */
		
		/* 延时调用
			延时调用一个函数不马上执行，而是隔一段时间以后在执行，而且只会一次
			
			延时调用和定时调用的区别，定时调用会执行多次，而延时调用只会执行一次
			
			延时调用和定时调用实际上是可以互相代替的*/
		vat timer = setTimeout(function(){
			console.log(num++)
		},3000)
		
		// clearTimeout()关闭延时调用
		clearTimeout(timer)
	}
	
	</script>
</head>


<body>

</body>
</html>
```



### 定时器的应用1

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title></title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	#box1{
		left: 0;
		width: 100px;
		height: 100px;
		background-color: red;
		position: absolute;
	}
	#box2{
		width: 0;
		height: 1000px;
		border-left: 1px black solid;
		position: absolute;
		top: 0;
		left: 800px;
	}
	</style>
	<script type="text/javascript">
	window.onload = function(){
		
			/* 定义一个函数，用来获取指定元素的当前样式
			 参数：
				obj 要获取样式的元素
				name 要获取的样式名*/
			function getStyle(obj,name){
				
				if(window.getComputedStyle){
					// 正常浏览器方式,具有getComputedStyle()方法
					return getComputedStyle(obj,null)[name]
				}else{
					// ie8的方式，没有getComputedStyle()方法
					return getComputedStyle(obj,null)[name]
				}
				
			}
			
		
		// 获取box1
		var box1 = document.getElementById("box1")
		// 获取btn01
		var btn01 = document.getElementById("btn01")
		
		// 定义一个变量，来保存定时器的表示
		var timer;
		
		// 点击按钮以后，使box1向右移动（left值增大）
		btn01.onclick = function(){
			
			// 关闭上一个定时器
			
			clearInterval(timer)
			
			// 开启定时器，用来执行动画效果
			timer = setInterval(function(){
				// 获取box1的原来的left值
				var oldValue = parseInt(getStyle(box1,"left"))
				
				// 在旧值的基础上增加
				var newValue = oldValue + 15
				
				// 判断newValue是否大于800
				if(newValue > 800){
					newValue = 800;
				}
				
				// 将新值设置给box1
				box1.style.left = newValue + "px"
				
				// 当元素移动到800px时，使其停止动画
				if(newValue >= 800){
					// 关闭定时器
					clearInterval(timer)
				}
			},30)
		}
	}
	
	</script>
</head>


<body>
	<button id="btn01">点击按钮以后box1向右移动</button>
	<br><br>
	<div id="box1"></div>
	<div id="box2"></div>
</body>
</html>
```



### 定时器的应用2

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title></title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	#box1{
		left: 0;
		width: 100px;
		height: 100px;
		background-color: red;
		position: absolute;
	}
	#box2{
		width: 0;
		height: 1000px;
		border-left: 1px black solid;
		position: absolute;
		top: 0;
		left: 800px;
	}
	</style>
	<script type="text/javascript">
	window.onload = function(){
		
			/* 定义一个函数，用来获取指定元素的当前样式
			 参数：
				obj 要获取样式的元素
				name 要获取的样式名*/
			function getStyle(obj,name){
				
				if(window.getComputedStyle){
					// 正常浏览器方式,具有getComputedStyle()方法
					return getComputedStyle(obj,null)[name]
				}else{
					// ie8的方式，没有getComputedStyle()方法
					return getComputedStyle(obj,null)[name]
				}
				
			}
			
		
		// 获取box1
		var box1 = document.getElementById("box1")
		// 获取btn01
		var btn01 = document.getElementById("btn01")
		// 获取btn02
		var btn02 = document.getElementById("btn02")
		
		// 定义一个变量，来保存定时器的表示
		var timer;
		
		// 点击按钮以后，使box1向右移动（left值增大）
		btn01.onclick = function(){
			move(box1,800,10)
		}
		
		// 点击按钮以后，使box1向右移动（left值增大）
		btn02.onclick = function(){
			move(box1,0,10)

		}
		
		/* 参数：
			obj 要执行动画的对象
			target 执行动画的目标位置
			spedd 移动的速度(正数向右，负数向左) */
		// 尝试创建一个可以执行简单动画的函数
		function move(obj,target,speed){
			// 关闭上一个定时器

			clearInterval(timer)

			// 获取元素目前的位置
			var current = parseInt(getStyle(obj,"left"))

			// 判断速度的正负值
			// 如果0向800移动，则speed为正
			// 如果从800向0移动，则speed为负
			if(current > target){
				// 此时速度应为负值
				speed = -speed
			}
			
			// 开启定时器，用来执行动画效果
			timer = setInterval(function(){
				// 获取box1的原来的left值
				var oldValue = parseInt(getStyle(obj,"left"))
				
				// 在旧值的基础上增加
				var newValue = oldValue + speed
				
				// 判断newValue是否大于800
				// 从800向0移动
				// 向左移动时，需要判断newValue是否小于target
				// 向右移动时，需要判断newValue是否大于target
				if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
					newValue = target;
				}
				
				// 将新值设置给box1
				obj.style.left = newValue + "px"
				
				// 当元素移动到800px时，使其停止动画
				if(newValue == target){
					// 关闭定时器
					clearInterval(timer)
				}
			},30)
		}

	}
	
	</script>
</head>


<body>
	<button id="btn01">点击按钮以后box1向右移动</button>
	<button id="btn02">点击按钮以后box1向左移动</button>
	<br><br>
	<div id="box1"></div>
	<div id="box2"></div>
</body>
</html>
```



### 定时器的应用3

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title></title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	#box1{
		width: 100px;
		height: 100px;
		background-color: red;
		position: absolute;
		left: 0;
	}
	#box2{
		width: 0;
		height: 1000px;
		border-left: 1px black solid;
		position: absolute;
		top: 0;
		left: 800px;
	}
	
	#box3{
		width: 100px;
		height: 100px;
		background-color: yellow;
		position: absolute;
		left: 0;
		top: 200px;
	}
	
	</style>
	<script type="text/javascript">
	window.onload = function(){
		
			/* 定义一个函数，用来获取指定元素的当前样式
			 参数：
				obj 要获取样式的元素
				name 要获取的样式名*/
			function getStyle(obj,name){
				
				if(window.getComputedStyle){
					// 正常浏览器方式,具有getComputedStyle()方法
					return getComputedStyle(obj,null)[name]
				}else{
					// ie8的方式，没有getComputedStyle()方法
					return getComputedStyle(obj,null)[name]
				}
				
			}
			
		
		// 获取box1
		var box1 = document.getElementById("box1")
		// 获取btn01
		var btn01 = document.getElementById("btn01")
		// 获取btn02
		var btn02 = document.getElementById("btn02")
		// 获取btn03
		var btn03 = document.getElementById("btn03")
		// 获取btn04
		var btn04 = document.getElementById("btn04")
		
		
		// 定义一个变量，来保存定时器的表示
		/* 目前我们的定时器标识由全局变量timer保存，
			所有的执行正在执行的定时器都在这个变量中保存*/
		// var timer;
		
		// 点击按钮以后，使box1向右移动（left值增大）
		btn01.onclick = function(){
			move(box1,"left",800,10)
		}
		
		// 点击按钮以后，使box1向右移动（left值增大）
		btn02.onclick = function(){
			move(box1,"left",0,10)

		}
		
		// 点击按钮以后，使box3向右移动（left值增大）
		btn03.onclick = function(){
			move(box3,"left",800,10)
		}
		
		// 测试按钮
		btn04.onclick = function(){
			move(box3,"top",800,10,function(){
				move(box3,"height",400,10,function(){
					
				})
			})
			// move(box3,"height",800,10)
			
		}
		
		/* 参数：
			obj 要执行动画的对象
			attr 要执行动画的样式,比如：left top
			target 执行动画的目标位置
			spedd 移动的速度(正数向右，负数向左)
			callback 回调函数，这个函数将会在动画执行完毕以后执行*/
		// 尝试创建一个可以执行简单动画的函数
		function move(obj,attr,target,speed,callback){
			// 关闭上一个定时器

			clearInterval(obj.timer)

			// 获取元素目前的位置
			var current = parseInt(getStyle(obj,attr))

			// 判断速度的正负值
			// 如果0向800移动，则speed为正
			// 如果从800向0移动，则speed为负
			if(current > target){
				// 此时速度应为负值
				speed = -speed
			}
			
			// 开启定时器，用来执行动画效果
			// 向执行动画的对象中添加一个timer属性，用来保存它自己的定时器标识
			obj.timer = setInterval(function(){
				// 获取box1的原来的left值
				var oldValue = parseInt(getStyle(obj,attr))
				
				// 在旧值的基础上增加
				var newValue = oldValue + speed
				
				// 判断newValue是否大于800
				// 从800向0移动
				// 向左移动时，需要判断newValue是否小于target
				// 向右移动时，需要判断newValue是否大于target
				if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
					newValue = target;
				}
				
				// 将新值设置给box1
				obj.style[attr] = newValue + "px"
				
				// 当元素移动到800px时，使其停止动画
				if(newValue == target){
					// 关闭定时器
					clearInterval(obj.timer)
					
					// 动画执行完毕，调用回调函数
					// 判断有执行，没有则不执行
					if(callback){
						callback()
					}
				}
			},30)
		}

	}
	
	</script>
</head>


<body>
	
	<button id="btn01">点击按钮以后box1向右移动</button>
	<button id="btn02">点击按钮以后box1向左移动</button>
	<button id="btn03">点击按钮以后box3向右移动</button>
	<button id="btn04">测试按钮</button>
	<br><br>
	<div id="box1"></div>
	<div id="box2"></div>
	<div id="box3"></div>
</body>
</html>
```



### 完成轮播图界面和点击按钮切换图片

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	/* 设置outer样式 */
	#outer{
		/* 303 168 */
		/* 设置宽和高 */
		width: 321px;
		height: 168px;
		/* 居中 */
		margin: 50px auto;
		/* 设置背景颜色 */
		background-color: yellowgreen;
		/* 设置padding */
		padding: 10px 0;
		/* 开启相对定位 */
		position: relative;
		/* 裁剪溢出的内容 */
		overflow: hidden;
	}
	
	
	/* 设置imgList */
	#imgList{
		/* 去除项目符号 */
		list-style: none;
		/* 设置ul宽度 */
		/* width: 963px; */
		/* 开启绝对定位 */
		position: absolute;
		/* 设置偏移量 */
		/* 每向左移动321px，就会显示到下一张图片 */
		left: -642px;
		
		/* 控制轮播 */
		/* transition-duration: 0.1s; */
	}
	
	/* 设置图片的li */
	#imgList li{
		/* 设置浮动 */
		float: left;
		/* 设置左右外边距 */
		margin: 0 10px;
	}
	
	/* 设置导航按钮 */
	#navDiv{
		/* 开启绝对定位 */
		position: absolute;
		/* 设置位置 */
		bottom: 15px;
		/* 设置left值
			outer宽度321
			navDiv宽度75
			321-75=246/2=123*/
		/* left: 123px; */
	}
	
	#navDiv a{
		/* 设置超链接浮动 */
		float: left;
		/* 设置超链接宽高 */
		width: 15px;
		height: 15px;
		/* 设置背景颜色 */
		background-color: red;
		/* 设置左右外边距 */
		margin: 0 5px;
		/* 设置透明 */
		opacity: 0.5;
		
	}
	
	/* 设置鼠标移入的效果 */
	#navDiv a:hover{
		background-color: gray;
	}
	</style>
	<script type="text/javascript">
		window.onload = function(){
			// 设置imgList宽度
			// 获取imgList
			var imgList = document.getElementById("imgList")
			// 获取页面中所有的img标签
			var imgArr = document.getElementsByTagName("img")
			// 设置imgList的宽度
			imgList.style.width = 321*imgArr.length+"px"
			
			// 设置导航按钮居中
			// 获取navDiv
			var navDiv = document.getElementById("navDiv")
			// 获取outer
			var outer = document.getElementById("outer")
			// 设置navDiv的left值
			navDiv.style.left = (outer.offsetWidth -navDiv.offsetWidth)/2 +"px"
			
			// 默认显示图片的索引
			var index = 0
			// 获取所有的a
			var allA = document.getElementsByTagName("a")
			// 设置默认选中的效果
			allA[index].style.backgroundColor = "black"
			
			/* 点击超链接切换到指定的图片
				点击第一个超链接。显示第一个图片*/
			// 为所有的超链接都绑定单击响应函数
			for(var i=0;i<allA.length;i++){
				
				// 为每一个超链接都添加一个num属性
				allA[i].num = i
				// 为超链接绑定单击响应函数
				allA[i].onclick = function(){
					// 获取点击超链接的索引,并将其设置为index
					index = this.num
					
					// 切换图片
					/* 第一张索引为0 left=0
					   第二张索引为1 left=321
					   第三张索引为2 left=642*/
					// imgList.style.left = -321*index + "px"
					
					// 修改正在选中的a
					// allA[index].style.backgroundColor = "gray"
					
					// 设置选中的a
					setA()
					
					// 使用move函数来切换图片
					move(imgList,"left",-321*index,20,function(){})
				}
			}
			
			// 创建一个方法，用来选中的a
			function setA(){
				
				// 遍历所有的a，并将它们的颜色设置为红色
				for(var i=0;i<allA.length;i++){
					allA[i].style.backgroundColor = ""
				}
				
				// 将选中的a设置为黑色
				allA[index].style.backgroundColor = "black"
			}
					
					
			// 切换图片工具
			/* 参数：
				obj 要执行动画的对象
				attr 要执行动画的样式,比如：left top
				target 执行动画的目标位置
				spedd 移动的速度(正数向右，负数向左)
				callback 回调函数，这个函数将会在动画执行完毕以后执行*/
			// 尝试创建一个可以执行简单动画的函数
			function move(obj,attr,target,speed,callback){
				// 关闭上一个定时器
	
				clearInterval(obj.timer)
	
				// 获取元素目前的位置
				var current = parseInt(getStyle(obj,attr))
	
				// 判断速度的正负值
				// 如果0向800移动，则speed为正
				// 如果从800向0移动，则speed为负
				if(current > target){
					// 此时速度应为负值
					speed = -speed
				}
				
				// 开启定时器，用来执行动画效果
				// 向执行动画的对象中添加一个timer属性，用来保存它自己的定时器标识
				obj.timer = setInterval(function(){
					// 获取box1的原来的left值
					var oldValue = parseInt(getStyle(obj,attr))
					
					// 在旧值的基础上增加
					var newValue = oldValue + speed
					
					// 判断newValue是否大于800
					// 从800向0移动
					// 向左移动时，需要判断newValue是否小于target
					// 向右移动时，需要判断newValue是否大于target
					if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
						newValue = target;
					}
					
					// 将新值设置给box1
					obj.style[attr] = newValue + "px"
					
					// 当元素移动到800px时，使其停止动画
					if(newValue == target){
						// 关闭定时器
						clearInterval(obj.timer)
						
						// 动画执行完毕，调用回调函数
						// 判断有执行，没有则不执行
						if(callback){
							callback()
						}
					}
				},30)
			}
					
			/* 定义一个函数，用来获取指定元素的当前样式
			 参数：
				obj 要获取样式的元素
				name 要获取的样式名*/
			function getStyle(obj,name){
				
				if(window.getComputedStyle){
					// 正常浏览器方式,具有getComputedStyle()方法
					return getComputedStyle(obj,null)[name]
				}else{
					// ie8的方式，没有getComputedStyle()方法
					return getComputedStyle(obj,null)[name]
				}
				
			}
			
		}
	</script>
</head>
<body>
	<!-- 创建一个外部的div，来作为大的容器 -->
	<div id="outer">
		<!-- 创建一个ul，用于放置图片 -->
		<ul id="imgList" >
			<li><img src="Image/demo1.jpg" ></li>
			<li><img src="Image/demo3.jpg" ></li>
			<li><img src="Image/demo4.jpg" ></li>
		</ul>
		<!-- 创建导航按钮 -->
		<div id="navDiv">
			<a href="#"></a>
			<a href="#"></a>
			<a href="#"></a>
		</div>
	</div>
</body>
</html>
```



### 轮播图

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	/* 设置outer样式 */
	#outer{
		/* 303 168 */
		/* 设置宽和高 */
		width: 321px;
		height: 168px;
		/* 居中 */
		margin: 50px auto;
		/* 设置背景颜色 */
		background-color: yellowgreen;
		/* 设置padding */
		padding: 10px 0;
		/* 开启相对定位 */
		position: relative;
		/* 裁剪溢出的内容 */
		overflow: hidden;
	}
	
	
	/* 设置imgList */
	#imgList{
		/* 去除项目符号 */
		list-style: none;
		/* 设置ul宽度 */
		/* width: 963px; */
		/* 开启绝对定位 */
		position: absolute;
		/* 设置偏移量 */
		/* 每向左移动321px，就会显示到下一张图片 */
		/* left: -642px; */
		
		/* 控制轮播 */
		/* transition-duration: 0.1s; */
	}
	
	/* 设置图片的li */
	#imgList li{
		/* 设置浮动 */
		float: left;
		/* 设置左右外边距 */
		margin: 0 10px;
	}
	
	/* 设置导航按钮 */
	#navDiv{
		/* 开启绝对定位 */
		position: absolute;
		/* 设置位置 */
		bottom: 15px;
		/* 设置left值
			outer宽度321
			navDiv宽度75
			321-75=246/2=123*/
		/* left: 123px; */
	}
	
	#navDiv a{
		/* 设置超链接浮动 */
		float: left;
		/* 设置超链接宽高 */
		width: 15px;
		height: 15px;
		/* 设置背景颜色 */
		background-color: red;
		/* 设置左右外边距 */
		margin: 0 5px;
		/* 设置透明 */
		opacity: 0.5;
		
	}
	
	/* 设置鼠标移入的效果 */
	#navDiv a:hover{
		background-color: gray;
	}
	</style>
	<script type="text/javascript">
		window.onload = function(){
			// 设置imgList宽度
			// 获取imgList
			var imgList = document.getElementById("imgList")
			// 获取页面中所有的img标签
			var imgArr = document.getElementsByTagName("img")
			// 设置imgList的宽度
			imgList.style.width = 321*imgArr.length+"px"
			
			// 设置导航按钮居中
			// 获取navDiv
			var navDiv = document.getElementById("navDiv")
			// 获取outer
			var outer = document.getElementById("outer")
			// 设置navDiv的left值
			navDiv.style.left = (outer.offsetWidth -navDiv.offsetWidth)/2 +"px"
			
			// 默认显示图片的索引
			var index = 0
			// 获取所有的a
			var allA = document.getElementsByTagName("a")
			// 设置默认选中的效果
			allA[index].style.backgroundColor = "black"
			
			/* 点击超链接切换到指定的图片
				点击第一个超链接。显示第一个图片*/
			// 为所有的超链接都绑定单击响应函数
			for(var i=0;i<allA.length;i++){
				
				// 为每一个超链接都添加一个num属性
				allA[i].num = i
				// 为超链接绑定单击响应函数
				allA[i].onclick = function(){
					
					// 关闭自动切换的定时器
					clearInterval(timer)
					
					// 获取点击超链接的索引,并将其设置为index
					index = this.num
					
					// 切换图片
					/* 第一张索引为0 left=0
					   第二张索引为1 left=321
					   第三张索引为2 left=642*/
					// imgList.style.left = -321*index + "px"
					
					// 修改正在选中的a
					// allA[index].style.backgroundColor = "gray"
					
					// 设置选中的a
					setA()
					
					// 使用move函数来切换图片
					move(imgList,"left",-321*index,20,function(){
						// 动画执行完毕，开启自动切换
						autoChange()
					})
				}
				
			}
			
			// 开启自动切换图片
			autoChange();
			
			// 创建一个方法，用来选中的a
			function setA(){
				
				// 判断当前索引是否为最后一张图片
				if(index >= imgArr.length - 1){
					// 则将index设置为0
					index = 0;
					// 切换回第一张
					imgList.style.left = 0 + "px";
				}
				
				// 遍历所有的a，并将它们的颜色设置为红色
				for(var i=0;i<allA.length;i++){
					allA[i].style.backgroundColor = ""
				}
				
				// 将选中的a设置为黑色
				allA[index].style.backgroundColor = "black"
			}
			
			// 定义一个自动切换的标识
			var timer;
			
			// 创建一个函数，用来开启自动切换图片
			function autoChange(){
				// 开启定时器，用来定时去切换图片
				timer = setInterval(function(){
					// 使索引自增
					index++;
					
					// 判断index值
					if(index === imgArr.length){
						index = 0;
					}
					// 执行动画切换图片
					move(imgList,"left",-321*index,20,function(){
						// 修改导航点
						setA()
					})
				},4000)
			}
					
					
			// 切换图片工具
			/* 参数：
				obj 要执行动画的对象
				attr 要执行动画的样式,比如：left top
				target 执行动画的目标位置
				spedd 移动的速度(正数向右，负数向左)
				callback 回调函数，这个函数将会在动画执行完毕以后执行*/
			// 尝试创建一个可以执行简单动画的函数
			function move(obj,attr,target,speed,callback){
				// 关闭上一个定时器
	
				clearInterval(obj.timer)
	
				// 获取元素目前的位置
				var current = parseInt(getStyle(obj,attr))
	
				// 判断速度的正负值
				// 如果0向800移动，则speed为正
				// 如果从800向0移动，则speed为负
				if(current > target){
					// 此时速度应为负值
					speed = -speed
				}
				
				// 开启定时器，用来执行动画效果
				// 向执行动画的对象中添加一个timer属性，用来保存它自己的定时器标识
				obj.timer = setInterval(function(){
					// 获取box1的原来的left值
					var oldValue = parseInt(getStyle(obj,attr))
					
					// 在旧值的基础上增加
					var newValue = oldValue + speed
					
					// 判断newValue是否大于800
					// 从800向0移动
					// 向左移动时，需要判断newValue是否小于target
					// 向右移动时，需要判断newValue是否大于target
					if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
						newValue = target;
					}
					
					// 将新值设置给box1
					obj.style[attr] = newValue + "px"
					
					// 当元素移动到800px时，使其停止动画
					if(newValue == target){
						// 关闭定时器
						clearInterval(obj.timer)
						
						// 动画执行完毕，调用回调函数
						// 判断有执行，没有则不执行
						if(callback){
							callback()
						}
					}
				},30)
			}
					
			/* 定义一个函数，用来获取指定元素的当前样式
			 参数：
				obj 要获取样式的元素
				name 要获取的样式名*/
			function getStyle(obj,name){
				
				if(window.getComputedStyle){
					// 正常浏览器方式,具有getComputedStyle()方法
					return getComputedStyle(obj,null)[name]
				}else{
					// ie8的方式，没有getComputedStyle()方法
					return getComputedStyle(obj,null)[name]
				}
				
			}
			
		}
	</script>
</head>
<body>
	<!-- 创建一个外部的div，来作为大的容器 -->
	<div id="outer">
		<!-- 创建一个ul，用于放置图片 -->
		<ul id="imgList" >
			<li><img src="Image/demo1.jpg" ></li>
			<li><img src="Image/demo3.jpg" ></li>
			<li><img src="Image/demo4.jpg" ></li>
			<li><img src="Image/demo1.jpg" ></li>
		</ul>
		<!-- 创建导航按钮 -->
		<div id="navDiv">
			<a href="#"></a>
			<a href="#"></a>
			<a href="#"></a>
		</div>
	</div>
</body>
</html>
```



### 类的操作

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
	*{
		margin: 0;
		padding: 0;
	}
	
	.b1{
		width: 100px;
		height: 100px;
		background-color: red;
	}
	.b2{
		width: 100px;
		height: 200px;
		background-color: yellow;
	}
	</style>
	<script type="text/javascript">
	window.onload = function(){
		// 获取btn01
		var btn01 = document.getElementById("btn01")
		// 获取box1
		var box = document.getElementById("box")
		
		// 为btn01绑定单击响应函数
		btn01.onclick = function(){
			// 修改box的样式
			/* 通过style属性来修改元素的样式，每修改一个样式，浏览器就需要重新渲染一次页面
				这样执行的性能使比较差的,而且这种形式当我们要修改多个样式时，也不太方便*/
			// box.style.width = 200 + "px"
			// box.style.height = 200 + "px"
			// box.style.backgroundColor = "yellow"
			
			/* 希望一行代码，可以同时修改多个样式 */
			
			// 修改box的class属性
			/* 我们可以通过修改元素的class属性来间接的修改样式
				这样一来，我们只需要修改一次，即可同时修改多个样式
					浏览器只需要重新渲染页面一次，性能比较好
					并且这种方式，可以使表现和行为进一步的分离*/
			// box.className += " b2"
			// addClass(box,"b2")
			// hasClass(box,"b2")
			// removeClass(box,"b1")
			toggleClass(box,"b2")
		}
		
		// 定义一个函数，用来向一个元素中添加指定的class属性值
		
		/* 参数：
			obj 要添加class属性的元素
			cn 要添加的class值*/
		function addClass(obj,cn){
			// 检查obj中是否含有cn
			if(!hasClass(obj,cn)){
				obj.className += " "+cn;
			}
		}
		
		/* 判断一个元素中是否含有指定的class属性值
		如果有该class，则返回true，没有则返回false
		 参数：
			obj 要判断的属性
			cn 要判断的属性值*/
		function hasClass(obj,cn){
			// 判断obj中有没有cn class
			// 创建一个正则表达式
			// var reg = /\bb2\b/;
			var reg = new RegExp("\\b\\s"+cn+"\\b")
			return reg.test(obj.className)
		}
		
		/* 删除一个元素中的指定的class属性
			*/
		function removeClass(obj,cn){
			// 创建一个正则表达式
			var reg = new RegExp("\\b\\s"+cn+"\\b")
			
			// 删除class
			obj.className = obj.className.replace(reg,"")
		}
		
		/* toggleClass可以用来切换一个类
			如果元素中具有该类，则删除
			如果元素中没有该类，则添加*/
		function toggleClass(obj,cn){
			// 判断obj中是否cn
			if(hasClass(obj,cn)){
				// 有，则删除
				removeClass(obj,cn)
			}else{
				// 没有，则添加
				addClass(obj,cn)
			}
		}
	}
	</script>
</head>
<body>
	<button id="btn01">点击按钮以后修改box1的样式</button>
	<br><br>
	<div id="box" class="b1"></div>
</body>
</html>
```



### 二级菜单-基本功能样式

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>二级菜单</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
		*{
			margin: 0;
			padding: 0;
			list-style: none;
		}
		a,img{
			border: 0;
			text-decoration: none;
		}
		body{
			font: 12px/180% Arial, Helvetica, sans-serif, "新宋体";
		}
		
		/* @charset "utf-8"; */
		
		/* sdmenu */
		
		div.sdmenu {
			width: 150px;
			margin: 0 auto;
			font-family: Arial, sans-serif;
			font-size: 12px;
			padding-bottom: 10px;
			background: url(css/bottom.gif) no-repeat right bottom;
			color: #fff;
		}
		
		div.sdmenu div {
			background: url(css/title.gif) repeat-x;
			overflow: hidden;
		}
		
		div.sdmenu div:first-child {
			background: url(css/toptitle.gif) no-repeat;
		}
		
		div.sdmenu div.collapsed {
			height: 25px;
		}
		
		div.sdmenu div span {
			display: block;
			height: 15px;
			line-height: 15px;
			overflow: hidden;
			padding: 5px 25px;
			font-weight: bold;
			color: white;
			background: url(css/expanded.gif) no-repeat 10px center;
			cursor: pointer;
			border-bottom: 1px solid #ddd;
		}
		
		div.sdmenu div.collapsed span {
			background-image: url(css/collapsed.gif);
		}
		
		div.sdmenu div a {
			padding: 5px 10px;
			background: #eee;
			display: block;
			border-bottom: 1px solid #ddd;
			color: #066;
		}
		
		div.sdmenu div a.current {
			background: #ccc;
		}
		
		div.sdmenu div a:hover {
			background: #066 url(css/linkarrow.gif) no-repeat right center;
			color: #fff;
			text-decoration: none;
		}
		
	</style>
	<script type="text/javascript">
		window.onload = function(){
			/*
			 每一个菜单都是一个div
				当div具有collapsed这个类时，div就是折叠的状态
				当div没有这个类时，div就是展开的状态
			 */
			
			/* 
			 点击菜单，切换菜单的显示状态
			 */
			
			// 获取所有的class为menuSpan的元素
			var menuSpan = document.querySelectorAll(".menuSpan")
			
			// 定义一个变量，来保存当前打开的菜单
			var openDiv = menuSpan[0].parentNode;
			
			// 为span绑定单击响应函数
			for(var i=0;i<menuSpan.length;i++){
				menuSpan[i].onclick = function(){
					
					// this代表我当前点击的span
					// 获取当前span的父元素
					var parentDiv = this.parentNode;
					
					// 关闭parentDiv
					toggleClass(parentDiv,"collapsed")
					
					// 判断openDiv和parentDiv是否相同
					if(openDiv != parentDiv){
						// 打开菜单以后，应该关闭之前打开的菜单
						addClass(openDiv,"collapsed")
						
						// 此处不需要有移除的功能
						// 但是可以加个判断条件
						// toggleClass(openDiv,"collapsed")
					}
					
					
					// 修改openDiv为当前打开的菜单
					openDiv = parentDiv
					
				}
			}
			
		}
	</script>
	<script src="css/tools.js" type="text/javascript" charset="utf-8"></script>
</head>
<body>
	<div id="my_menu" class="sdmenu">
		<div>
			<span class="menuSpan">在线工具</span>
			<a href="#">图像优化</a>
			<a href="#">收藏夹图标生成器</a>
			<a href="#">邮件</a>
			<a href="#">htaccess密码</a>
			<a href="#">梯度图像</a>
			<a href="#">按钮生成器</a>
		</div>
		<div class="collapsed">
			<span class="menuSpan">支持我们</span>
			<a href="#">推荐我们</a>
			<a href="#">链接我们</a>
			<a href="#">网络资源</a>
		</div>
		<div class="collapsed">
			<span class="menuSpan">合作伙伴</span>
			<a href="#">Javascript工具包</a>
			<a href="#">CSS驱动</a>
			<a href="#">CodingForums</a>
			<a href="#">CSS例子</a>
		</div>
		<div class="collapsed">
			<span class="menuSpan">测试电流</span>
			<a href="#">Current or not</a>
			<a href="#">Current or not</a>
			<a href="#">Current or not</a>
			<a href="#">Current or not</a>
		</div>
	</div>
	
</body>
</html>
```



### 二级菜单

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>二级菜单</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<style type="text/css">
		*{
			margin: 0;
			padding: 0;
			list-style: none;
		}
		a,img{
			border: 0;
			text-decoration: none;
		}
		body{
			font: 12px/180% Arial, Helvetica, sans-serif, "新宋体";
		}
		
		/* @charset "utf-8"; */
		
		/* sdmenu */
		
		div.sdmenu {
			width: 150px;
			margin: 0 auto;
			font-family: Arial, sans-serif;
			font-size: 12px;
			padding-bottom: 10px;
			background: url(css/bottom.gif) no-repeat right bottom;
			color: #fff;
		}
		
		div.sdmenu div {
			background: url(css/title.gif) repeat-x;
			overflow: hidden;
		}
		
		div.sdmenu div:first-child {
			background: url(css/toptitle.gif) no-repeat;
		}
		
		div.sdmenu div.collapsed {
			height: 25px;
		}
		
		div.sdmenu div span {
			display: block;
			height: 15px;
			line-height: 15px;
			overflow: hidden;
			padding: 5px 25px;
			font-weight: bold;
			color: white;
			background: url(css/expanded.gif) no-repeat 10px center;
			cursor: pointer;
			border-bottom: 1px solid #ddd;
		}
		
		div.sdmenu div.collapsed span {
			background-image: url(css/collapsed.gif);
		}
		
		div.sdmenu div a {
			padding: 5px 10px;
			background: #eee;
			display: block;
			border-bottom: 1px solid #ddd;
			color: #066;
		}
		
		div.sdmenu div a.current {
			background: #ccc;
		}
		
		div.sdmenu div a:hover {
			background: #066 url(css/linkarrow.gif) no-repeat right center;
			color: #fff;
			text-decoration: none;
		}
		
	</style>
	<script type="text/javascript">
		window.onload = function(){
			/*
			 每一个菜单都是一个div
				当div具有collapsed这个类时，div就是折叠的状态
				当div没有这个类时，div就是展开的状态
			 */
			
			/* 
			 点击菜单，切换菜单的显示状态
			 */
			
			// 获取所有的class为menuSpan的元素
			var menuSpan = document.querySelectorAll(".menuSpan")
			
			// 定义一个变量，来保存当前打开的菜单
			var openDiv = menuSpan[0].parentNode;
			
			// 为span绑定单击响应函数
			for(var i=0;i<menuSpan.length;i++){
				menuSpan[i].onclick = function(){
					
					// this代表我当前点击的span
					// 获取当前span的父元素
					var parentDiv = this.parentNode;
					
					// 切换菜单的显示状态
					toggleMenu(parentDiv)
					
					// 判断openDiv和parentDiv是否相同
					if(openDiv != parentDiv && !hasClass(openDiv,"collapsed")){
						// 打开菜单以后，应该关闭之前打开的菜单
						// addClass(openDiv,"collapsed")
						
						// 此处不需要有移除的功能
						// 但是可以加个判断条件
						//  && !hasClass(openDiv,"collapsed")
						// toggleClass(openDiv,"collapsed")
						toggleMenu(openDiv)
					}
						
					// 修改openDiv为当前打开的菜单
					openDiv = parentDiv
					
				}
			}
			
			// 用来切换菜单折叠和显示状态
			function toggleMenu(obj){
				// 在切换类之前，获取一个元素的高度
				var begin = obj.offsetHeight;
				
				// 切换parentDiv的显示
				toggleClass(obj,"collapsed")
				
				// 在切换类之后获取一个高度
				var end = obj.offsetHeight;
				
				// 动画效果就是将高度从begin向end过度
				// 将元素的高度重置为begin
				obj.style.height = begin + "px"
				
				// 执行动画，从begin向end过度
				move(obj,"height",end,10,function(){
					// 动画执行完毕，内联样式已经没有存在的意义了，直接删除
					obj.style.height = ""
				})
			}
			
		}
	</script>
	
	<script src="css/tools.js" type="text/javascript" charset="utf-8"></script>
	
</head>

<body>
	<div id="my_menu" class="sdmenu">
		<div>
			<span class="menuSpan">在线工具</span>
			<a href="#">图像优化</a>
			<a href="#">收藏夹图标生成器</a>
			<a href="#">邮件</a>
			<a href="#">htaccess密码</a>
			<a href="#">梯度图像</a>
			<a href="#">按钮生成器</a>
		</div>
		<div class="collapsed">
			<span class="menuSpan">支持我们</span>
			<a href="#">推荐我们</a>
			<a href="#">链接我们</a>
			<a href="#">网络资源</a>
		</div>
		<div class="collapsed">
			<span class="menuSpan">合作伙伴</span>
			<a href="#">Javascript工具包</a>
			<a href="#">CSS驱动</a>
			<a href="#">CodingForums</a>
			<a href="#">CSS例子</a>
		</div>
		<div class="collapsed">
			<span class="menuSpan">测试电流</span>
			<a href="#">Current or not</a>
			<a href="#">Current or not</a>
			<a href="#">Current or not</a>
			<a href="#">Current or not</a>
		</div>
	</div>
	
</body>
</html>
```



### JSON

```javascript
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<script type="text/javascript">
		/* 
		 JSON
			- JS中的对象只有JS自己认识，其他的语言都不认识
			- JSON就是一个特殊格式的字符串，这个字符串可以被任意的语言所识别
				并且可以转换为任意语言中的对象，JSON在开发中主要用来数据的交互
			- JSON
				- (JavaScript Object Notation) JS对象表示法
				- JSON的格式和js对象格式一样，只不过JSON字符串中的属性名必须加双引号
				JSON分类：
					1.对象 {}
						- d
					2.数组 []
				
				JSON中允许的值：
					1.字符串
					2.数值
					3.布尔值
					4.null
					5.对象
					6.数组
			*/
		var obj = '{"name":"Noi","age" : 18}'
		var arr = '[1,2,3,4,"hello",true]'
		// console.log(obj)
		
		/* 
		将JSON字符串转换为JS中的对象
			在js中，为我们提供了一个工具类，就叫JSON
			这个对象可以帮助我们将一个JSON转换为js对象，也可以将一个js对象转换为JSON*/
			
			/* obj --> js对象
				JSON.parse()
					- 可以将以JSON字符串转换为JS对象
					- 它需要一个JSON字符串作为参数，会将该字符串转换为JS对象*/
		
		var json = JSON.parse(obj)
		console.log(json.name)
		
		
		/* JS对象 --> JSON
			JSON.stringify()
				- 可以将一个js对象转换为JSON字符串
				- 需要一个js对象作为参数，会返回一个JSON字符串*/
		var obj2 = {name:"HJM"}
		var str = JSON.stringify(obj2)
		console.log(str)
		
		/* JSON这个对象在ie7及以下的浏览器中不支持 想要兼容和使用JSON可以引入外部JSON文件*/
		
		/* eval()
			- 这个函数可以用来执行一段字符串形式的JS代码，并将结果返回
			- 如果使用eval()执行的字符串中含有{}，它会将{}当成是代码块
				如果不希望将其当成代码块，则需要在字符串前后各加一个()
			- eval()这个函数功能很强大，可以直接执行一个字符串中的js代码
				但是在开发中尽量不要使用，首先它的执行性能比较差，然后它还具有安全隐患*/
		var obj3 = '{"JSON":12}'
		var str2 = "alert('hello')"
		
		var obj_3 = eval("(" + obj3 + ")")
		// eval(str2)
		console.log(obj_3)
		
	</script>
</head>
<body>
</body>
</html>
```

