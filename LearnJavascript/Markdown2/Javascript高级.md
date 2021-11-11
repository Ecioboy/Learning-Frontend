# JavaScript高级



## DAY01



### 数据类型1

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- 
		 1.分类
			基本数据(值)类型
				String: 任意字符串
				Number: 任意数字
				Boolean: true/false
				Null: Null
				Undefined: Undefined
			引用数据(对象)类型
				Object: 任意对象
				Function: 特别的对象(可以执行)
				Array: 特别的对象(数值下标,内部数据是有序的)
		 2.判断
			typeof
				可以判断undefined，null,基本数据类型,function
				不能判断null与object object与array
			instanceof: 判断对象的具体类型
			===
		 -->
		
		<script type="text/javascript">
			// 1.基本数据类型判断
			// typeof返回数据类型的字符串表达
			var a;
			console.log(a,typeof a==='undefined',a===undefined)	// undefined 'undefined' true true
			console.log(undefined === 'undefined')
			
			a = 3;
			console.log(typeof a==='number')	// true
			a = 'Noi'
			console.log(typeof a==='string')	// true
			a = true
			console.log(typeof a==='boolean')	// true
			a = null;
			console.log(typeof a,a===null)	// Object
			
			// 2.引用数据类型判断
			var b={
				b2: [1,'abc',console.log],
				b3: function(){
					console.log('b3')
					return function(){
						return 'Noi'
					}
				}
			}
			console.log(b instanceof Object,b instanceof Array)		// true false
			console.log(b.b2 instanceof Array,b.b2 instanceof Object)	// true true
			console.log(b.b3 instanceof Function,b.b3 instanceof Object)	// true false
			console.log(typeof b.b3==='function')	// true
			
			console.log(typeof b.b2[2]==='function')	// true
			b.b2[2](4)	// b3
			console.log(b.b3()())	// Noi
		</script>
	</body>
</html>
```



### 数据类型2

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- 
		 1. undefined与null的区别？
			undefined代表定义未赋值
			null定义并赋值了，只是值为null
		 2. 什么时候给变量赋值为null?
			初始赋值，表面将要赋值为对象
			结束前，让b指向的对象成为垃圾对象(被垃圾回收器回收)
		 3. 严格区别变量类型与数据类型?
			数据的类型
				基本类型
				对象类型
			变量的类型(变量内存值的类型)
				基本类型: 保存的是基本类型的数据
				引用类型: 保存的是地址值
		 -->
		
		<script type="text/javascript">
		// 1. undefined与null的区别？
		var a;
		console.log(a)
		a = null
		console.log(a)
		// 2. 什么时候给变量赋值为null?
		var b = null	// 初始赋值为null，表面将要赋值为对象
		
		b = ['a']	// 确定对象就赋值
		b = null	// 释放内存(让b指向的对象成为垃圾对象(被垃圾回收器回收))
		
		// 3. 严格区别变量类型与数据类型?
		var c = {}
		console.log(typeof c)
		var d = function(){}
		console.log(d)
		</script>
	</body>
</html>
```





### 数据—变量—内存1

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- 
		1. 什么是数据？
			存储在内存中代表特定信息的内容，本质上是0101...
			数据的特点：可传递，可运算
				一切皆数据
			内存中所有操作的目标：数据
				算术运算
				逻辑运算
				赋值
				运行函数
		2. 什么是内存？
			内存条通电以后产生的可存储数据的空间(临时的)
			内存产生和死亡:内存条(电路板)==>通电==>产生内存空间==>存储数据==>处理数据==>断电==>内存空间和数据都消失
			一块小内存的2个数据
				内部存储的数据
				地址值
			内存的分类
				栈: 全局变量/局部变量
				堆: 对象
		3. 什么是变量？
			可变化的量，由变量名和变量值组成
			每个变量都对应一块小内存，变量名用来查找对应的内存，变量值就是内存中保存的数据
		4. 内存，数据，变量三者之间的关系
			内存用来存储数据的空间
			变量是内存的标识
		
		 -->
		
		<script type="text/javascript">
		// 1. 什么是数据？
		var age = 18;
		
		// 2. 什么是内存？
		var obj = {name:"Noi"}
		
		// 3. 什么是变量？
		console.log(age)
		</script>
	</body>
</html>
```



### 数据—变量—内存2

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- 
		关于赋值和内存的问题
		
		问题：var a = xxx, a内存中到底保存的是什么?
			xxx是基本数据，保存的就是这个数据
			xxx是对象，保存的是对象的地址值
			xxx是变量，保存的是xxx内存内容(可能是基本数据，也可能是地址值)
			
		 -->
		
		<script type="text/javascript">
		var a = 3;
		a = function(){}
		var b = 'abc'
		a = b;
		b = {}
		a = b
		</script>
	</body>
</html>
```



### 数据—变量—内存3

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- 
		 关于引用变量赋值问题
			n个引用变量指向同一个对象,通过一个变量修改对象内部数据，其他所有变量看到的是修改之后的数据
			2个引用变量指向同一个对象，让其中一个引用变量指向另一个对象，另一引用变量依然指向前一个对象
		 -->
		 
		 <script type="text/javascript">
		 
		 	var obj = {name:"Noi"}
			var obj1 = obj;
			console.log(obj1)
			
			obj.name = 'Jack'
			console.log(obj1)
			
			obj1.age = 12;
			console.log(obj.age)	// 12
			
			function fun(obj){
				obj.name = "HJM"
			}
			fun(obj)
			console.log(obj1.name)
			
			var a = {age:12}
			var b = a
			a = {name:"Noi",age:13}
			console.log(b.age,a.name,a.age)		// 12 "Moi" 13
			
			function fun2(obj){
				obj = {age:15}
			}
			fun2(a)
			console.log(a.age)
		 </script>
	</body>
</html>
```



### 数据—变量—内存4

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- 
		在js调用函数时传递变量参数时，是值传递还是引用传递
			理解1：都是值(基本值/地址值)传递
			理解2：可能是值传递，也可能是引用传递(地址值)
			
		 -->
		 
		 <script type="text/javascript">
		 var a = 3
		 function fun(a){
			 a = a + 1
		 }
		 fun(a)
		 console.log(a)
		 
		 function fun2(obj){
			 console.log(obj.name)
		 }
		 var obj = {name:'Tom'}
		 fun2(obj)
		 </script>
	</body>
</html>
```



### 数据—变量—内存5

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- 
		JS引擎如何管理内存？
			1.内存生命周期
				分配内存空间，得到它的使用权
				存储数据，可以反复进行操作
				释放内存空间
			2.释放内存
				局部变量：函数执行完自动释放
				对象：成为垃圾对象==>垃圾回收器回收
			
		 -->
		 
		 <script type="text/javascript">
		 var a = 3;
		 var obj = {}
		 obj = null
		 
		 function fun(){
			 var b = 4
		 }
		 fun()	// b是自动释放
		 </script>
	</body>
</html>
```



### 对象

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- 
		1.什么是对象？
			多个数据的封装体
			用来保存多个数据的容器
			一个对象代表现实中的一个事物
		2.为什么要用对象？
			方便统一管理多个数据
		3.对象的组成
			属性:属性名(字符串类型)和属性值(任意类型)组成
			方法:一种特别的属性(属性值是函数)
		4.如何访问对象内部数据？
			变量名.属性名		编码简单，有时不能用
			变量名['属性名']		编码麻烦，能通用
		 -->
		 
		 <script type="text/javascript">
		 var p = {
			 name:'Tom',
			 age:12,
			 setName:function(){
				 console.log("Hello")
			 }
		 }
		 p.setName()
		 p['setName']()
		 </script>
	</body>
</html>
```



### 对象2

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- 
		什么时候必须使用['属性名']的方式？
			1.属性名包含特殊字符: - 空格
			2.属性名不确定
		 -->
		
		<script type="text/javascript">
		var p = {}
		// 给p对象添加一个属性：content-type:text/json
		// p.content-type = 'text/json'
		p['content-type'] = 'text/json'
		console.log(p['content-type'])
		
		// 属性名不确定
		var propName = 'Myage'
		var value = 18
		// p.propName = value	不能用
		p[propName] = value
		console.log(p[propName])
		
		</script>
	</body>
</html>
```



### 函数

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- 
		1.什么是函数
			实现特定功能的n条语句的封装体
			只有函数是可以执行的,其他类型的数据不能执行
		2.为什么要用函数？
			提高代码的复用性
			便于阅读交流
		3.如何定义函数
			函数声明
			表达式
		4.如何调用(执行)函数?
			test():直接调用
			obj.test():通过对象调用
			new test():new调用
			test.call/apply(obj):临时让test成为obj的方法进行调用
		 -->
		
		<script type="text/javascript">
		/* 
		 1.根据年龄输出对应的信息
		 2.如果小于18,输出:未成年,再等等
		 3.如果大于60,输出:算了吧!
		 4.其他,输出:刚好!*/
		 var a = prompt("输入你的年龄:")
		 function showInfo(age){
			if(age<18){
				console.log('未成年,再等等')
			}else if(age>60){
				console.log('算了吧!')
			}else{
				console.log('刚好')
			}
		 }
		 showInfo(a)
		 
		 // 函数声明
		 function fun(){
			console.log("函数声明")
		 }
		 
		 // 表达式
		 var fun2 = function(){
			 console.log("表达式")
		 }
		 
		 fun()
		 fun2()
		 
		 // 
		 var obj = {}
		 function test(){
			 this.name = "noi"
		 }
		 // obj.test()	不能直接调用,根本就没有
		 test.call(obj)		// 可以让一个函数成为指定任意对象的方法进行调用
		 console.log(obj)	// 将函数变成方法,传给obj,使其成为对象的方法
		 console.log(obj.name)
		</script>
	</body>
</html>
```



### 回调函数

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<button type="button" id="btn">测试点击事件</button>
		<!-- 
		1.什么函数才是回调函数
			1.你定义的
			2.你没有调
			3.但最终它执行了
		2.常见的回调函数?
			dom事件回调函数
			定时器回调函数
			
			ajax请求回调函数
			生命周期回调函数
		 -->
		
		<script type="text/javascript">
		var btn = document.getElementById("btn")
		btn.onclick = function(){	//dom事件回调函数
			console.log("e")
		}
		
		// 定时器
			// 超时定时器
			// 循环定时器
		setTimeout(function(){	// 定时器回调函数
			alert("hello")
		},2000)
		</script>
	</body>
</html>
```



### IIFE(匿名函数自调用)

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- 
		1.理解
			全称:Immediately-Invoked Function Expression(IIFE)(立即执行调用函数表达式)
		2.作用
			隐藏实现
			不会污染外部(全局)命名空间
			用它来编写js模块
		 -->
		
		<script type="text/javascript">
		(function (){	// 匿名函数自调用
			// console.log('Hello')
			var a = 3
			console.log(a+3)
		})()
		
		;(function(){
			var a = 1
			function test(){
				console.log(++a)
			}
			window.$ = function(){	// 向外暴露一个全局函数
				return {
					test:test
				}
			}
		})()
		$().test()	//$是一个函数,$执行后返回的是一个对象
		
		</script>
	</body>
</html>
```



### 函数中的this

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- 
		1.this是什么?
			任何函数本质上都是通过某个对象来调用的,如果没有直接指定就是window
			所有函数内部都有一个变量this
			它的值是调用函数的当前对象
		2.如何确定this值?
			test():window
			p.test():p
			new test():新创建的对象
			p.call(obj):obj
		 -->
		
		<script type="text/javascript">
		
		</script>
	</body>
</html>
```



### 关于语句分号的问题

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- 
		1.js一条语句的后面可以不加分号
		2.下面2种情况不加分号会有问题
			小括号开头的前一条语句
			中方括号开头的前一条语句
		 -->
		
		<script type="text/javascript">
		var a = 3
		;(function(){
			
		})
		
		/* 
		 错误理解
		 var a = 3(function(){
			 
		 })*/
		
		var b = 4
		;[1,3].forEach(function(){
			
		})
		/* 
		 错误理解
		var b = 4[3].forEach(function(){
			
		})*/
		</script>
	</body>
</html>
```



## DAY02	函数高级



### 函数的prototype

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- 
		原型（prototype）
		1.函数的prototype属性
			每个函数都有一个prototype属性，它默认指向一个object空对象（即称为：原型对象）
			原型对象中有一个属性constructor，它指向函数对象
		2.给原型对象添加属性（一般都是方法）
			作用：函数的所有实例对象自动拥有原型中的属性（方法）
		
		 -->
		
		<script type="text/javascript">
		// 每个函数都有一个prototype属性，它默认指向一个object空对象（即称为：原型对象）
		console.log(Date.prototype)
		
		function Fun(){}
		
		console.log(Fun.prototype)	// 默认指向一个object空对象(没有我们的属性)
		// fun.prototype = "hello"
		
		// 原型对象中有一个属性constructor，它指向函数对象
		console.log(Date.prototype.constructor===Date)
		console.log(Fun.prototype.constructor===Fun)
		
		// 给原型对象添加属性（一般是方法） ==>实例对象可以访问
		Fun.prototype.test = function(){
			console.log('test()')
		}
		var fun = new Fun()
		fun.test()
		</script>
	</body>
</html>
```



### 显式原型和隐式原型

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- 
		显式原型和隐式原型
		
		1.每个函数function都有一个prototype，即为显式原型(属性)
		2.每个实例对象都有一个__proto__,可称为隐式原型(属性)
		3.对象的隐式原型的值为其对应构造函数的显式原型的值
		4.内存结构
		5.总结
			函数的prototype属性：在定义函数时自动添加的，默认值是一个空object对象
			对象的__proto__属性：创建对象时自动添加的，默认值为构造函数的prototype属性值
			程序员能直接操作显式原型，但不能直接操作隐式原型（es6之前）
		
		 -->
		
		<script type="text/javascript">
		// 定义构造函数
		function Fn(){
			
		}
		// 1.每个函数function都有一个prototype，即为显式原型(属性),默认指向一个空的object对象
		console.log(Fn.prototype)
		// 2.每个实例对象都有一个__proto__,可称为隐式原型(属性)，
		// 创建实例对象
		var fn = new Fn()
		console.log(fn.__proto__)
		// 3.对象的隐式原型的值为其对应构造函数的显式原型的值
		console.log(Fn.prototype===fn.__proto__)
		// 给原型添加方法
		Fn.prototype.test = function(){
			console.log('test()')
		}
		// 通过实例对象调用原型的方法
		fn.test()
		
		
		
		// 不能直接操作隐式原型
		fn.__proto__.Noi = function(){
			console.log('Noi')
		}
		// Fn.Noi()
		Fn.prototype.Noi()
		</script>
	</body>
</html>
```



### 原型链

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- 
		1.原型链
			访问一个对象的属性时，
				先在自身属性中查找，找到返回
				如果没有，再沿着__proto__这条链向上查找，找到返回
				如果最终没找到，返回undefined
			别名：隐式原型链
			作用：查找对象的属性（方法）
			原型链的尽头就是：Object原型对象
		2.构造函数/原型/实体对象的关系
		3.构造函数/原型/实体对象的关系2
		 -->
		
		<script type="text/javascript">
		function Fn(){
			this.test1 = function(){
				console.log('test1()')
			}
		}
		Fn.prototype.test2 = function(){
			console.log('test2()')
		}
		var fn = new Fn()
		fn.test1()
		fn.test2()
		console.log(fn.toString())
		// fn.test3()
		console.log(fn.test3)
		
		/* 
		 1.函数的显式原型指向的对象默认是空Object实例对象(但Object不满足)
		 */
		
		/* 
		 2.所有函数都是Function的实例（包含Function）*/
		 console.log(Function.__proto__===Function.prototype)
		 /* 
		 Object的原型对象是原型链尽头*/
		 console.log(Object.prototype.__proto__)
		</script>
	</body>
</html>
```



### 原型链_属性问题

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- 
		1.读取对象的属性值时：会自动到原型链中查找
		2.设置对象的属性值时：不会查找原型链，如果当前对象中没有此属性，直接添加此属性并设置其值
		3.方法一般定义在原型中，属性一般通过构造函数定义在对象本身上
		 -->
		
		<script type="text/javascript">
		function Fn(){
			
		}
		Fn.prototype.a = 'Noi'
		var fn1= new Fn()
		console.log(fn1.a,fn1)
		
		var fn2 = new Fn()
		fn2.a = 'HJM'
		console.log(fn1.a,fn2.a,fn2)
		</script>
	</body>
</html>
```



### 探索instanceof

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- 
		1.instanceof是如何判断的？
		表达式：A instanceof B
		如果B函数的显式原型对象在A对象的原型链上，返回true，否则返回false
		 -->
		
		<script type="text/javascript">
		/* 案例1 */
		function Foo(){}
		var f1 = new Foo()
		console.log(f1 instanceof Foo)
		console.log(f1 instanceof Object)
		/* 案例2 */
		console.log(Object instanceof Function)
		console.log(Object instanceof Object)
		console.log(Function instanceof Function)
		console.log(Function instanceof Object)
		
		console.log(Object instanceof Foo)
		</script>
	</body>
</html>
```



### 原型_面试题

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<script type="text/javascript">
		// 测试题1
		
		function A(){
			
		}
		A.prototype.n = 1
		
		var b = new A()
		
		A.prototype = {
			n: 2,
			m: 3
		}
		
		var c = new A()
		console.log(b.n,b.m,c.n,c.m)
		
		// 测试题2
		function F(){}
		Object.prototype.a = function(){
			console.log('a()')
		}
		Function.prototype.b = function(){
			console.log('b()')
		}
		
		// f是实例对象，F是构造函数
		var f = new F()
		
		console.log(Object.prototype)
		console.log(Function.prototype)
		
		f.a()
		console.log(f.__proto__.a)
		// f.b()
		F.a()
		console.log(F.prototype.a)
		F.b()

		</script>
	</body>
</html>

```



### 变量提升与函数提升

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!-- 
		 1.变量声明提升
			通过var定义（声明）的变量，在定义语句之前就可以访问到
			值：undefined
		2.函数声明提升
			通过function声明的函数，在之前就可以直接调用
		3.问题：变量提升和函数提升是如何产生的？
			-->
		
		<script type="text/javascript">
		
		/* 1 */
		var a = 3
		function fn(){
			console.log(a)
			var a = 4
		}
		fn()
		
		console.log(b)	// undefined 变量提升
		var b = 3
		
		fn2()	// 可调用  函数提升
		function fn2(){
			console.log('fn2')
		}
		
		fn3()	// 不能调用  变量提升
		
		var fn3 = function(){
			console.log('fn3')
		}
		</script>
	</body>
</html>
```



### 执行上下文

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!-- 
		1.代码分类
			全局代码
			函数（局部）代码
		2.全局执行上下文
			在执行全局代码前将window确定为全局执行上下文
			对全局数据进行预处理
				var定义的全局变量==>undefined，添加为window的属性
				function声明的全局函数==>赋值（fun），添加为window的方法
				this==>赋值（window）
			开始执行全局代码
		3.函数执行上下文
			在调用函数，准备执行函数体之前，创建对应的函数执行上下文对象(虚拟的，存在于栈中)
			对局部数据进行预处理
				形参变量==>赋值(实参)==>添加为执行上下文的属性
				arguments==>赋值(实参列表)，添加为执行上下文的属性
				var定义的局部变量==>undefined,添加为执行上下文的属性
				function声明的函数==>赋值(fun)，添加为执行上下文的方法
				this==>赋值(调用函数的对象)
			开始执行函数体代码
			-->
		
		<script type="text/javascript">
		
		// 全局执行上下文
		console.log(a1,window.a1)
		window.a2()
		console.log(this)
		var a1 = 3
		
		function a2(){
			console.log('a2')
		}
		
		// 函数执行上下文
		console.log('--------------------------')
		fn(1,2)
		function fn(a1){
			console.log(a1)
			console.log(a2)
			a3()
			console.log(this)
			console.log(arguments)	// 伪数组(1,2)
			var a2 = 3;
			function a3(){
				console.log('a3()')
			}
		}
		</script>
	</body>
</html>
```



### 执行上下文栈

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!-- 
		1.在全局代码执行前，js引擎就会创建一个栈来存储管理所有的执行上下文对象
		2.在全局执行上下文（window）确定后，将其添加到栈中（压栈）
		3.在函数执行上下文创建后，将其添加到栈中（出栈）
		4.在当前函数执行完后，将栈顶的对象移除（出栈）
		5.当所有的代码执行完后，栈中只剩下window
			-->
		
		<script type="text/javascript">
		var a = 10
		var bar = function(x){
			var b = 5
			foo(x+b)
		}
		var foo = function(y){
			var c = 5
			console.log(a+c+y)
		}
		bar(10)
		</script>
	</body>
</html>
```



### 作用域

```javascript
```



### 作用域—面试题

```javascript
var obj={
    fn: function(){
        console.log(this.fn)
    }
}
obj.fn()
```



### 循环遍历加监听

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!-- 
		
			-->
		<button type="button">1</button>
		<button type="button">2</button>
		<button type="button">3</button>
		<script type="text/javascript">
		var btns = document.getElementsByTagName('button')
		// 利用闭包
		for(var i=0;i<btns.length;i++){
			(function(i){
				var btn = btns[i]
				btn.onclick = function(){
					alert(i)
				}
			})(i)
		}
		</script>
	</body>
</html>
```

### 理解闭包

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!-- 
		1.如何产生闭包
			当一个嵌套的内部（子）函数引用了嵌套的外部（父）函数的变量（函数）时，就产生了闭包
		2.闭包到底是什么？
			使用chrome查看
			理解一：闭包是嵌套的内部函数（绝大部分）
			理解二：包含被引用变量（函数）的对象（极少数人）
			注意：闭包存在于嵌套的内部函数中
		3.产生闭包的条件？
			函数嵌套
			内部函数引用了外部函数的数据(变量/函数)
			-->	
		<script type="text/javascript">
		function fun(){
			var a = 2
			// fun2()
			function fun2(){	//执行函数定义就会产生闭包(不用调用内部函数)
				console.log(a)
			}
			
		}
		fun()
		</script>
	</body>
</html>
```



### 常见的闭包

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!--
		1.将函数作为另一个函数的返回值
		2.将函数作为实参传递给另一个函数调用
			-->	
		<script type="text/javascript">
			/*将函数作为另一个函数的返回值*/
			function fun(){
				var a = 2
				function fun2(){
					a++
					console.log(a)
				}
				return fun2
			}
			var f = fun()
			f()		//3
			f()		//4

			/*将函数作为实参传递给另一个函数调用*/
			function showDelay(msg,time){
				setTimeout(function (){
					alert(msg)
				},time)
			}
			showDelay('Noi',2000)
		</script>
	</body>
</html>
```



### 闭包的作用

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!--
		1.使用函数内部的变量在函数执行完后，仍然存活在内存中(延长了局部变量的生命周期)
		2.让函数外部可以操作(读写)到函数内部的数据(变量/函数)

		问题:
			1.函数执行完后，函数内部生命的局部变量是否还存在？	一般是不存在，存在于闭包的变量才存在
			2.在函数外部能直接访问函数内部的局部变量吗?	不能，但我们可以通过闭包让外部操作它
			-->	
		<script type="text/javascript">
			/**/
			function fun(){
				var a = 2

				function fun2(){
					a++
					console.log(a)
				}
				function fun3(){
					a--
					console.log(a)
				}
				return fun3

			}
			var f = fun()
			f()		//1
			f()		//0

		</script>
	</body>
</html>
```



### 闭包的生命周期

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!--
		1.产生：在嵌套内部函数定义执行完时就产生了（不是在调用）
		2.死亡：在嵌套的内部函数称为垃圾对象时
			-->	
		<script type="text/javascript">
			/**/
			function fun(){
				//此时闭包已经产生了（函数提升，内部函数对象已经创建了）
				var a = 2

				function fun2(){
					a++
					console.log(a)
				}
				function fun3(){
					a--
					console.log(a)
				}
				return fun3

			}
			var f = fun()
			f()		//1
			f()		//0

			//闭包死亡(包含闭包的函数对象成为垃圾对象）
			f = null
		</script>
	</body>
</html>
```



### 闭包应用_定义js模块

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!--
		闭包的应用：定义js模块
			具有特定功能的js文件
			将所有的数据和功能都封装在一个函数内部（私有的）
			只向外暴露一个包含n个方法的对象或函数
			模块的使用者，只需要通过模块暴露的对象调用方法来实现对应的功能
			-->
		<script type="text/javascript" src="Module.js"></script>
		<script type="text/javascript">
			var module = Module()
			module.doSomething()
			module.doOtherthing()
			console.log(module.msg)
		</script>
	</body>
</html>
```

```javascript
function Module(){
    //私有数据
    var msg = 'Noi'
    //操作数据的函数
    function doSomething(){
        console.log('doSomething'+msg.toUpperCase())
    }
    function doOtherthing(){
        console.log('doOtherthing'+msg.toLowerCase())
    }
    //向外暴露(给外部使用的方法)
    return {
        doSomething: doSomething,
        doOtherthing: doOtherthing,
        msg: msg
    }
}
```



### 闭包的应用_定义js模块2

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!--
		闭包的应用：定义js模块
			具有特定功能的js文件
			将所有的数据和功能都封装在一个函数内部（私有的）
			只向外暴露一个包含n个方法的对象或函数
			模块的使用者，只需要通过模块暴露的对象调用方法来实现对应的功能
			-->
		<script type="text/javascript" src="Module.js"></script>
		<script type="text/javascript">
			Module2.doSomething()
			Module2.doOtherthing()
			console.log(Module2.msg)
		</script>
	</body>
</html>
```

```javascript
(function (){
    //私有数据
    var msg = 'Noi'
    //操作数据的函数
    function doSomething(){
        console.log('doSomething'+msg.toUpperCase())
    }
    function doOtherthing(){
        console.log('doOtherthing'+msg.toLowerCase())
    }
    
    // 向外暴露对象（给外部使用的方法）
    window.Module2 = {
        doSomething: doSomething,
        doOtherthing: doOtherthing,
        msg: msg
    }
})()
```



### 闭包的缺点和解决

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!--
		1.缺点
			函数执行完后，函数内的局部变量没有释放，占用内存时间会变长
			容易造成内存泄漏
		2.解决
			能不用闭包就不用
			及时释放
			-->
		<script type="text/javascript">
			function fun(){
				var arr = new Array(199)
				function  fun2(){
					console.log(arr.length)
				}
				return fun2
			}
			var f = fun()
			f()

			f = null	// 让内部函数成为垃圾对象-->回收闭包
		</script>
	</body>
</html>
```

### 内存溢出和内存泄漏

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!--
		1.内存溢出
			一种程序运行出现的错误
			当程序运行需要的内存超过了剩余的内存时，就出现内存溢出的错误
		2.内存泄漏
			占用的内存没有及时释放
			内存泄漏积累多了就容易导致内存溢出
			常见的内存泄漏：
				意外的全局变量
				没有及时清理计时器或回调函数
				闭包
			-->
		<script type="text/javascript">
			/*内存溢出*/
			var obj = {}
			for(var i=0;i<10000;i++){
				obj[i] = new Array((1000000))
			}
			/*内存泄漏*/

		//	意外的全局变量
			function fun(){
				a = 3
				console.log(a)
			}

			var timer = setInterval(function (){	//启动循环定时器后不清理
				console.log('---')
			},1000)
			clearInterval(timer)

		//	闭包
			function fn1(){
				var a = 4
				function fn2(){
					console.log(a++)
				}
			}
			var f = fn1()
			f()
			f = null
		</script>
	</body>
</html>
```



### 面试题1

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!--
			-->
		<script type="text/javascript">
			/*代码片段一*/
			var name = "The Window"
			var object = {
				name : "My Object",
				getNameFunc : function (){
					return function (){	//匿名函数自调用由window调用
						return this.name
					}
				}
			}
			console.log(object.getNameFunc()())	//the window

			/* 代码片段二*/
			var name2 = "The Window"
			var object2 = {
				name2 : "My Object",
				getNameFunc : function (){
					var that = this;
					return function (){	//匿名函数自调用由window调用，但是它that改变了this的指向
						return that.name2
					}
				}
			}
			console.log(object2.getNameFunc()())	//the object
		</script>
	</body>
</html>
```

面试题2

```javascript
function fun(n,o){
    console.log(o)
    return {
        fun:function(m){
            return fun(m,n)
        }
    }
}
var a = fun(0)	//没有两个参数，且用的是引用变量,变量值传进的形参没有消失，因为利用了闭包
a.fun(1)	//传任何值改变的是m，因为n=o
a.fun(2)
a.fun(3)
// var b = fun(0).fun(1).fun(2).fun(3)
// var c =fun(0).fun(1); c.fun(2); c.fun(3)
```



## DAY03 面向对象高级



### 对象创建模式

```javascript
/*
方式一：Object构造函数模式
套路：先创建空Object对象，再动态添加属性/方法
适用场景：起始时不确定对象内部数据
问题：语句太多
*/
/*方式一：Object构造函数模式*/
var Man = new Object()
Man.name = "Noi"
Man.age = 18
Man.setName = function (name){
    this.name = name
}
console.log(Man)

/*
方式二：对象字面量模式
套路：使用{}创建对象，同时指定属性/方法
适用场景：起始时对象内部数据是确定的
问题：如果创建多个对象，有重复代码
*/
/*方式二：对象字面量模式*/
var Man2 = {
    name : "Noi",
    age : 18,
    setName : function (name){
        this.name = name
    }
}
console.log(Man2)

/*
方式三：工厂模式
套路：通过工厂函数动态创建对象并返回
适用场景：需要创建多个对象
问题：对象没有一个具体的类型，都是Object类型
*/
/*方式三：工厂模式*/
function createPerson(name,age){
    var obj = {
        name : name,
        age : age,
        setName : function (name){
            this.name = name
        }
    }
}
/*创建两个人*/
var m1 = createPerson('Jack',18)
var m2 = createPerson('Hop',18)

/*
方式四：自定义构造函数模式
套路：自定义构造函数，通过new创建对象
适用场景：需要创建多个类型确定的对象
问题：每个对象都有相同的数据，浪费内存
*/
/*方式四：自定义构造函数模式*/
/*定义类型*/
function Person(name,age){
    this.name = name
    this.age = age
    this.setName = function (name){
        this.name = name
    }
}
```



### 对象创建模式2

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!--

		方式五：构造函数+原型的组合模式
		套路：自定义构造函数，属性再函数中初始化，方法添加到原型上
		适用场景：需要创建多个类型确定的对象-->
		<script type="text/javascript">

			/*人：name age*/

			/*方式五：构造函数+原型的组合模式*/
			function Person(name,age){	//在构造函数中只初始化一般函数
				this.name = name
				this.age = age
			}
			Person.prototype.setName =function (name){
				this.name = name
			}
			var p1 = new Person('Tom',18)
			var p2 = new Person('Pom',18)
			console.log(p1,p2)
		</script>
	</body>
</html>
```



### 继承模式-原型链继承

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!--
		方式1：原型链继承
		1.套路
			1，定义父类型构造函数
			2，给父类型的原型添加方法
			3，定义子类型的构造函数
			4，创建父类型的镀锡赋予值给子类型的原型
			5，将子类型原型的构造属性设置子类型
			6，给子类型原型添加方法
			7，创建子类型的对象：可以调用父类型的方法
		2.关键
			1，子类型的原型为父类型的一个实例对象
		-->
		<script type="text/javascript">
			/*父类型*/
			function Supper(){
				this.supProp = 'Supper property'
			}
			Supper.prototype.showSupperProp = function (){
				console.log(this.supProp)
			}

			/*子类型*/
			function Sub(){
				this.subProp = 'Sub property'
			}
			//子类型的原型为父类型的一个实例对象
			Sub.prototype = new Supper()
			// 让子类型的原型的contstructor指向子类型
			Sub.prototype.constructor = sub
			Sub.prototype.showSubProp = function (){
				console.log(this.subProp)
			}

			// 添加Sub为构造函数
			var sub = new Sub()
			// 调用sub构造函数里原型链中的Supper函数里原型链中的方法
			sub.showSupperProp()
			// 调用sub构造函数里原型的Sub函数里原型链中的方法
			sub.showSubProp()

			console.log(sub.constructor)
			console.log(sub)

		</script>
	</body>
</html>
```



### 假的继承模式

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!--
		方式2：借用构造函数继承（假的）
		1，套路
			1.定义父类型构造函数
			2.定义子类型构造函数
			3.在子类型构造函数中调用父类型构造函数
		2，关键
			1.在子类型构造函数中通用call()调用父类型构造函数
		-->
		<script type="text/javascript">
			function Person(name,age){
				this.name = name
				this.age = age
			}
			function Student(name,age,price){
				Person.call(this,name,age)	// 相当于：this.Person(name,age)
				this.price = price
			}
			var s = new Student('Tom',12,1300)
			console.log(s.name,s.age,s.price)
		</script>
	</body>
</html>
```



### 组合继承模式

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!--方式3：组合继承模式
		原型链+借用构造函数的组合继承
		1，利用原型链实现对父类型对象的方法继承
		2，利用
		-->
		<script type="text/javascript">
			function Person(name,age){
				this.name = name
				this.age = age
			}
			Person.prototype.setName = function (name){
				this.name = name
			}

			function Student(name,age,price){
				Person.call(this,name,age)	// 为了得到属性
				this.price = price
			}
			Student.prototype = new Person()	// 为了能看到父类型的方法
			Student.prototype.constructor = Student  // 修正constructor属性
			Student.prototype.setPrice = function (price){
				this.price = price
			}

			var s = new Student('Tom',12,1330)
			s.setName('noi')
			s.setPrice(213321)
			console.log(s.name,s.age,s.price)
		</script>
	</body>
</html>
```



## DAY04 线程机制与事件机制



### 进程与线程

```javascript
1.进程
	程序的一次执行，它占有一片独有的内存空间
    可以通过Windows任何管理器查看进程
2.线程 
	是进程内的一个独立执行单元
    是程序执行的一个完整流程
    是CPU的最小的调度单元
3.浏览器都是多线程运行的
	浏览器有多进程和单进程运行的
    
```



### 浏览器内核

```javascript
内核：
1，支撑浏览器运行的最核心的程序
2，不同的浏览器可能都不一样{chrome，safari，firefox，ie}
3，内核由很多模块组成{
    1.主线程
    js引擎模块：负责js程序的编译与运行
    html，css文档解析模块：负责页面文本的解析
    DOM/css模块：负责dom/css在内存中的相关处理
    布局和渲染模块：负责页面的布局和效果的绘制（内存中的对象）
    2.分线程
    定时器模块：负责定时器的管理
    事件响应模块：负责事件的管理
    网络请求模块：负责ajax请求
}
```



### 定时器引发的思考

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!--
		1.定时器真是定时执行的吗？
			定时器并不能保证真正定时执行
			一般会延迟一丁点（可以接受），也有可能延迟很差时间（不能接受）
		2.定时器回调函数是在分线程执行的吗？
			在主线程执行的，js是单线程的
		3.定时器是如何实现的?
			时间循环模型
		-->
		<script type="text/javascript">
			var start = Date.now()
			console.log('定时器启动前')
			setTimeout(function (){
				console.log('定时器执行了',Date.now()-start)
			},200)
			console.log('定时器结束后')
		</script>
	</body>
</html>
```



### js是单线程执行的

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!--
		js只能是单线程，否则会带来很复杂的同步问题
		代码的分类：
        初始化代码
        执行代码
		-->
		<script type="text/javascript">
			/*回调函数(异步执行)*/
			setTimeout(function (){
				console.log('timeout 2000')
			},2000)
			setTimeout(function (){
				console.log('timeout 1000')
			},1000)
			setTimeout(function (){
				console.log('timeout 3000')
			},3000)
		</script>
	</body>
</html>
```



### 事件循环模型

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!--
正确的一次 Event loop 顺序是这样的

1.执行同步代码，也就是主任务代码

2.执行栈为空，查询是否有微任务需要执行

3.执行所有微任务

4.必要的话渲染 UI

5.然后开始下一轮Event loop，执行宏任务中的异步代码

		-->
		<script type="text/javascript">

		</script>
	</body>
</html>
```



### H5 Web Workers

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		
		<!--
		H5 Web Workers,H5提供了js分线程的实现
		2.相关api
			Workers：构造函数，加载分线程执行的js文件
			Worker.prototype.onmessage:用来接收另一个线程的回调函数
			worker.prototype.postMessage:向另一个线程发送消息

		-->
		<input type="text" placeholder="数值" id="inp">
		<button id="btn">计算</button>
		<script type="text/javascript">
			function fun(n){
				return n<=2 ? 1 : fun(n-1) + fun(n-2)
			}

			var input = document.getElementById('inp')
			var btn =  document.getElementById('btn')
			btn.onclick = function (){
				var ina = input.value
				var result = fun(ina)
				console.log(result)
			}
		</script>
	</body>
</html>
```

