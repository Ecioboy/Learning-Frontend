## 初始Vue

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <!-- 开发版本-引入vue -->
    <script src="js/vue.js"></script>    
</head>
<body>
    <div id="root">
        <!-- {{}} 插值语法 -->
        <h1>Hello,{{name}},{{address}},{{Date.now()}}!</h1>
    </div>
    <script>
        /*
        初始Vue
            - 想让Vue工作，必须创建一个Vue实例，且要传入一个配置对象
            - root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法
            - root容器里的代码被成为[Vue模板]
            - Vue容器和实例是一一对应的
            - 注意区分：js表达式 和 js代码(语句)
                1. 表达式：一个表达式会生成一个值，可以放在任何一个需要值的地方
                    - a
                    - a+b
                    - demo(1)
                2. js代码(语句)
                    - if(){}
                    - for(){}
            - 真实开发中只有一个Vue实例，并且配合着组件一起使用
            - {{xxx}}中的xxx要写js表达式，且xxx可以读取到Vue实例中的data的所有属性
            - 一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新
            
        */
        Vue.config.productionTip = false    // 阻止生产文字提示
        // 创建Vue实例
        new Vue({
            // el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串
            el: '#root',
            // data中用于存储数据，数据供el所指定的容器去使用,值我们暂时先写成对象
            data:{
                name: 'Noi-q',
                address: 'YN'
            }
        });
    </script>
</body>
</html>
```

## 模板语法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="js/vue.js"></script>    
</head>
<body>
    <!-- 
        Vue模板语法有2大类：
            1.插值语法
                功能：用于解析标签体内容
                写法：{{xxx}}，xxx是表达式，且可以直接读取到data中的所以属性
            2.指令语法
                功能：用于解析标签（包括：标签属性，标签体内容，绑定事件...）
                写法：v-bind:href = "xxx" 或 :href = "xxx" xxx同样要写js表达式
                备注：Vue有很多指令，且形式都是v-???
     -->
    <div id="root">
        <h1>插值语法：你好，{{name}}</h1>
        <h1>指令语法：</h1>
        <a v-bind:href="url">点我去百度</a>
        <a :href="urlAll.url">点我去百度2</a>

    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        new Vue({
            el: '#root',
            data: {
                name: 'Ecioboy',
                url: 'http://www.baidu.com/',
                urlAll:{
                    url: 'http://www.baidu.com/'
                }
            }
        })
    </script>
</body>
</html>
```

## 数据绑定

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="js/vue.js"></script>    
</head>
<body>
    <!-- 
        Vue中有2种数据绑定方式：
            1.单向数据绑定(v-bind)：数据只能从data流向到页面
            2.双向数据绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data
                备注：
                    1.双向绑定一般都应用在表单类元素上(如:input,select等)
                    2.v-model:value 可以简写v-model，因为v-model默认收集就是value值
     -->
    <div id="root">
        单向数据绑定：<input type="text" v-bind:value="name"><br/>
        双向数据绑定：<input type="text" v-model:value="name"><br/>
        双向数据绑定2：<input type="text" v-model="name">
        <!-- 如下代码是错误的，因为v-model只能应用在表单类元素(输入类元素)上 -->
        <h2 v-model:x="name">Hello</h2>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        new Vue({
            el:'#root',
            data:{
                name: 'Ecioboy'
            }
        })
    </script>
</body>
</html>
```

## el和data两种写法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="js/vue.js"></script>    
</head>
<body>
    <div id="root">
        <h1>你好，{{name}}</h1>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        // el的两种写法
        /*
        const vue = new Vue({
            // el:'#root',  //el第一种写法
            data:{
                name: 'Ecioboy'
            }
        })
        // el第二种写法
        vue.$mount('#root')
        */

        // data的两种写法
        new Vue({
            el: '#root',
            // 1.对象式
            /*
            data: {
                name: 'Ecioboy'
            }
            */

            // 2.函数式
            // 一定不要写箭头函数，因为this指向不同。
            data: function(){
                console.log(this)   // 此处的this是Vue实例对象
                return {
                    name: 'Ecioboy'
                }
            }

        })
    </script>
</body>
</html>
```

## 理解MVVM

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="js/vue.js"></script>    
</head>
<body>
    <!-- 
        MVVM模型
            1.M: 模型(Model) : data中的数据
            2.V: 视图(View)  : 模板代码
            3.VM: 视图模型(ViewModel) : Vue实例
        观察发现：
            1.data中的所有的属性，最后都会出现在vm身上
            2.vm身上所有的属性，及Vue原型上所有的属性，在Vue模板中都可以直接使用
     -->
    <div id="root">
        <h1>你好，{{name}}</h1>
        <h1>年龄，{{age}}</h1>
        <h1>测试1：{{$options}}</h1>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data: {
                name: 'Ecioboy',
                age: '18'
            }
        })
    </script>
</body>
</html>
```

## 数据代理

### Object.defineProperty

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="js/vue.js"></script>    
</head>
<body>
    <script>
        let number = 19
        let Person = {
            name: 'Ecioboy',
            sex: '男',
        }
        // 给对象添加属性，不参与遍历(枚举)
        Object.defineProperty(Person,'age',{
            // value: 18,
            // enumerable: true,    // 控制属性是否可以枚，默认值false
            // writable: true,      // 控制属性是否可以被修改，默认值false
            // configurable: true,   // 控制属性是否可以被删除，默认值false
            // 当有人读取Person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
            get:function(){
                return number
            },
            // 当有人修改Person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
            set(value){
                number = value;
            }
        })
        console.log(Person)
        console.log(Object.keys(Person))
    </script>
</body>
</html>
```

### 理解数据代理

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="js/vue.js"></script>    
</head>
<body>
    <!-- 数据代理：通过一个对象代理对另一个对象中属性的操作(读/写) -->
    <script>
        let obj = {x:100}
        let obj2 = {y:200}

        Object.defineProperty(obj2,'x',{
            get(){
                return obj.x
            },
            set(value){
                obj.x = value
            }
        })
    </script>
</body>
</html>
```

### Vue中的数据代理

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="js/vue.js"></script>    
</head>
<body>
    <div id="root">
        <!-- 
            1.Vue中的数据代理：
                通过vm对象来代理data对象中属性的操作(读/写)
            2.Vue中数据代理的好处：
                更加方便的操作data中的数据
            3.基本原理：
                通过Object.defineProperty()把data对象中所有属性添加到vm上
                为每一个添加到vm上的属性，都指定一个getter/setter
                在getter/setter内部去操作(读/写)data中对应的属性
         -->
        <!-- vm.name = _data.name = name-->
        <h2>学校名称：{{name}}</h2>
        <h2>学习地址：{{address}}</h2>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示

        const vm = new Vue({
            el: '#root',
            data: {
                name: 'VCaL',
                address: '123456789'
            }
        })
    </script>
</body>
</html>
```

## 事件处理

### 事件的基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="js/vue.js"></script>    
</head>
<body>
    <!-- 
        事件的基本使用：
            1.使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名
            2.事件的回调需要配置在methods对象中，最终会在vm上
            3.methods中配置的函数，不要用箭头函数，否则this就不是vm了
            4.methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象
            5.@click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参
     -->
    <div id="root">
        <h2>{{name}} Team</h2>
        <button v-on:click="showInfo1">点我提示信息1(不传参)</button>
        <button @click="showInfo2($event,66)">点我提示信息2(传参)</button>

    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示

        const vm = new Vue({
            el: '#root',
            data: {
                name: 'VCaL',
            },
            methods:{
                showInfo1(event){
                    alert('欢迎加入VCaL团队！-1')
                    // console.log(this) 此处的this是vue
                },
                showInfo2(event,number){
                    alert('欢迎加入VCaL团队！-2')
                    console.log(event,number)
                    // console.log(this) 此处的this是vue
                }
            }
        })
    </script>
</body>
</html>
```

### 事件修饰符

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="js/vue.js"></script>
    <style>
        *{
            margin-top: 20px;
        }
        .demo1{
            height:50px;
            background-color: skyblue;
        }
        .box1{
            padding:5px;
            background-color: skyblue;
        }
        .box2{
            padding:5px;
            background-color: orange;
        }
        .list{
            width:200px;
            height:200px;
            background-color:peru;
            overflow:auto
        }
        li{
            height:100px;
        }
    </style>
</head>
<body>
    <!-- 
        Vue中的事件修饰符：
            1.prevent:阻止默认事件
            2.stop:阻止事件冒泡
            3.once:事件只触发一次
            4.capture:使用事件的捕获模式
            5.self:只有event.target是当前操作的元素时才触发事件
            6.passive:事件的默认行为立即执行，无需等待事件回调执行完毕
     -->
    <div id="root">
        <h2>欢迎加入{{name}} Team！</h2>
        <!-- 阻止默认事件 -->
        <a href="http://www.baidu.com" @click.prevent="showInfo">点我提示信息</a>
        <!-- 阻止事件冒泡 -->
        <div class="demo1" @click="showInfo">
            <button @click.stop="showInfo">点我提示信息2</button>
        </div>
        <!-- 事件只触发一次 -->
        <button @click.once="showInfo">点我提示信息3</button>
        <!-- 使用事件的捕获模式 -->
        <div class="box1" @click.capture="showMsg(1)">
            div1
            <div class="box2" @click="showMsg(2)">
                div2
            </div>
        </div>
        <!-- 只有event.target是当前操作的元素时才触发事件 -->
        <div class="demo1" @click.self="showInfo">
            <button @click="showInfo">点我提示信息2</button>
        </div>
        <!-- 事件的默认行为立即执行，无需等待事件回调执行完毕 -->
        <ul @wheel.passive="demo" class="list">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>

    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示

        const vm = new Vue({
            el: '#root',
            data: {
                name: 'VCaL'
            },
            methods:{
                showInfo(event){
                    alert('123')
                    // console.log(event.target)
                },
                showMsg(msg){
                    console.log(msg)
                },
                demo(){
                    for (let i = 0; i < 10000; i++) {
                        console.log('#')
                    }
                    console.log('结束了')
                }
            }
        })
    </script>
</body>
</html>
```

### 事件修饰符补充

```html
<!-- 修饰符可以连续写 -->
<div id="root">
    <div @click="demo">
        <!-- 阻止冒泡和默认行为 -->
        <a href="http://www.baidu.com" @click.stop.prevent="demo">点我提示信息</a>
    </div>
</div>
```

### 键盘事件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="js/vue.js"></script>
</head>
<body>
    <!-- 
        1.Vue中常用的按键别名
            回车 => enter
            删除 => delete(捕获'删除'和'退格'键)
            退出 => esc
            空格 => space
            换行 => tab (特殊，必须配合keydown去使用)
            上 => up
            下 => down
            左 => left
            右 => right
        2.Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case(短横行命名)
        3.系统修饰键(用法特殊)：ctrl alt shift meta
            1.配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发
                例如：@keyup.ctrl.y === ctrl+y
            2.配合keydown使用：正常触发事件
        4.也可以使用keyCode去指定具体的按键（不推荐）
        5.Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名
     -->
    <div id="root">
        <input type="text" placeholder="按下回车提示输入" @keyup.hc="showInfo">
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        Vue.config.keyCodes.hc = 13
        const vm = new Vue({
            el: '#root',
            data: {
                name: 'VCaL'
            },
            methods:{
                showInfo(event){
                    console.log(event.target.value);
                }
            }
        })
    </script>
</body>
</html>
```

## 姓名实例

### 插值语法和methods

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>姓名实例</title>
    <script src="js/vue.js"></script>
</head>
<body>
    <div id="root">
        <!-- 插值语法实现 -->
        <!--
        姓：<input type="text" v-model:value="firstName"><br><br>
        名：<input type="text" v-model:value="lastName"><br><br>
        全名：<span>{{firstName.slice(0,3)}}-{{lastName}}</span>
        -->
        <!-- methods实现 -->
        姓：<input type="text" v-model:value="firstName"><br><br>
        名：<input type="text" v-model:value="lastName"><br><br>
        全名：<span>{{fullName()}}</span>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        new Vue({
            el: '#root',
            data: {
                firstName: '张',
                lastName: '三'
            },
            methods: {
                fullName(){
                    return this.firstName + '-' + this.lastName
                }
            }
        })
    </script>
</body>
</html>
```

### 计算属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>姓名实例</title>
    <script src="js/vue.js"></script>
</head>
<body>
    <!-- 
        计算属性：
            1.定义：要用的属性不存在，要通过已有属性计算得来
            2.原理：底层借助了Object.defineproperty方法提供的getter和setter
            3.get函数什么时候执行？
                1.初次读取时会执行一次
                2.当依赖的数据发生改变时会被再次调用
            4.优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便
            5.备注：
                1.计算属性最终会出现在vm上，直接读取使用即可
                2.如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变
     -->
    <div id="root">
        <!-- 计算属性实现 -->
        姓：<input type="text" v-model:value="firstName"><br><br>
        名：<input type="text" v-model:value="lastName"><br><br>
        全名：<span>{{fullName}}</span>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data: {
                firstName: '张',
                lastName: '三',
            },
            // 计算属性
            computed: {
                fullName:{
                    // 当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
                    /*
                    1.初次读取fullName时get会被调用
                    2.所依赖的数据发生改变时
                    */
                    get(){
                        // console.log(this);  //this 还是 vm
                        return this.firstName + '-' + this.lastName
                    },
                    // 当fullName被修改时，set就会被调用
                    set(value){
                        const arr = value.split('-')
                        this.firstName = arr[0]
                        this.lastName = arr[1]
                    }
                }
            }

        })
    </script>
</body>
</html>
```

### 计算属性简写

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>姓名实例</title>
    <script src="js/vue.js"></script>
</head>
<body>
    <div id="root">
        <!-- 计算属性实现 -->
        姓：<input type="text" v-model:value="firstName"><br><br>
        名：<input type="text" v-model:value="lastName"><br><br>
        全名：<span>{{fullName}}</span>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data: {
                firstName: '张',
                lastName: '三',
            },
            // 计算属性-完整写法
            /*
            computed: {
                fullName:{
                    get(){
                        return this.firstName + '-' + this.lastName
                    },
                    set(value){
                        const arr = value.split('-')
                        this.firstName = arr[0]
                        this.lastName = arr[1]
                    }
                }
            }*/
            // 计算属性-简写
            computed: {
                // get
                fullName(){
                    return this.firstName + '-' + this.lastName
                }
            }
        })
    </script>
</body>
</html>
```

## 天气实例

### 普通方法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>天气实例</title>
    <script src="js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2>今天天气很{{info}}</h2>
        <button @click="changeWeather">切换天气</button>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data: {
                isHot:true
            },
            methods:{
                changeWeather(){
                    this.isHot = !this.isHot
                }
            },
            computed:{
                info(){
                    return this.isHot ? '炎热' : '凉爽'
                }
            }
        })
    </script>
</body>
</html>
```

### 监视属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>天气实例</title>
    <script src="js/vue.js"></script>
</head>
<body>
    <!-- 
        监视属性watch：
            1.当被监视的属性变化时，回调函数自动调用，进行相关操作
            2.监视的属性必须存在，才能进行监视
            3.监视的两种写法：
                1,new Vue时传入watch配置
                2,通过vm.$watch监视
     -->
    <div id="root">
        <h2>今天天气很{{info}}</h2>
        <button @click="changeWeather">切换天气</button>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data: {
                isHot:true
            },
            methods:{
                changeWeather(){
                    this.isHot = !this.isHot
                }
            },
            computed:{
                info(){
                    return this.isHot ? '炎热' : '凉爽'
                }
            },
            // 第一种监视方法
            watch: {
                isHot:{
                    immediate:true, //初始化时让handler调用一下
                    // 当isHot发生改变时，handler被调用
                    handler(newValue,oldValue){
                        console.log('isHot被修改了',newValue,oldValue);
                    }
                }
            }
        })
        // 第二种监视方法
        /*
        vm.$watch('isHot',{
            immediate:true, //初始化时让handler调用一下
            // 当isHot发生改变时，handler被调用
            handler(newValue,oldValue){
                console.log('isHot被修改了',newValue,oldValue);
            }
        })
        */
    </script>
</body>
</html>
```

### 深度监视

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>天气实例</title>
    <script src="js/vue.js"></script>
</head>
<body>
    <!-- 
        深度监视：
            1.Vue中的watch默认不监视对象内部值的改变(一层)
            2.配置deep:true可以监视对象内部值改变(多层)
        备注：
            1,Vue自身可以监视对象内部值的改变，但Vue提供的watch默认不可以
            2,使用watch时根据数据的具体结构，决定是否采用深度监视
     -->
    <div id="root">
        <h2>今天天气很{{info}}</h2>
        <button @click="changeWeather">切换天气</button>
        <hr>
        <h3>a的值是：{{numbers.a}}</h3>
        <button @click="numbers.a++">点我a+1</button>
        <hr>
        <h3>b的值是：{{numbers.b}}</h3>
        <button @click="numbers.b++">点我b+1</button>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data: {
                isHot:true,
                numbers:{
                    a:1,
                    b:2
                }
            },
            methods:{
                changeWeather(){
                    this.isHot = !this.isHot
                }
            },
            computed:{
                info(){
                    return this.isHot ? '炎热' : '凉爽'
                }
            },
            watch: {
                isHot:{
                    // immediate:true, //初始化时让handler调用一下
                    // 当isHot发生改变时，handler被调用
                    handler(newValue,oldValue){
                        console.log('isHot被修改了',newValue,oldValue);
                    }
                },
                // 监视多级结构中某个属性的变化
                /*监视a
                'numbers.a':{
                    handler(){
                        console.log('a变了')
                    }
                }
                */
               // 监视多级结构中所有属性的变化
               'numbers':{
                   deep:true,
                   handler(){
                       console.log('改变了')
                   }
               }
            }
        })
    </script>
</body>
</html>
```

### 监视的简写形式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>天气实例</title>
    <script src="js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2>今天天气很{{info}}</h2>
        <button @click="changeWeather">切换天气</button>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data: {
                isHot:true,
            },
            methods:{
                changeWeather(){
                    this.isHot = !this.isHot
                }
            },
            computed:{
                info(){
                    return this.isHot ? '炎热' : '凉爽'
                }
            },
            watch: {
                // 正常写法
                /*
                isHot:{
                    // immediate:true, //初始化时让handler调用一下
                    // deep:true    //深度监视
                    // 当isHot发生改变时，handler被调用
                    handler(newValue,oldValue){
                        console.log('isHot被修改了',newValue,oldValue);
                    }
                }
                */

                // 简写
                isHot(newValue,oldValue){
                    console.log('isHot被修改了',newValue,oldValue);
                }
            }
        })
        // 简写第二种
        /*
        vm.$watch('isHot', function(newValue,oldValue){
            console.log('isHot被修改了',newValue,oldValue);
        })
        */
    </script>
</body>
</html>
```

### watch对比computed

#### 姓名实例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>姓名实例</title>
    <script src="js/vue.js"></script>
</head>
<body>
    <!-- 
        computed和watch之间的区别：
            1.computed能完成的功能，watch都可以完成
            2.watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作
        两个重要的原则：
            1.所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象
            2.所有不被Vue所管理的函数(定时器的回调函数，ajax的回调函数)，最好写成箭头函数
                这样this的指向才是vm 或 组件实例对象
     -->
    <div id="root">
        姓：<input type="text" v-model:value="firstName"><br><br>
        名：<input type="text" v-model:value="lastName"><br><br>
        全名：<span>{{fullName}}</span>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data: {
                firstName: '张',
                lastName: '三',
                fullName: '张-三'
            },
            watch:{
                firstName: {
                    handler(newValue){
                        this.fullName = newValue + '-' + this.lastName
                    }
                },
                lastName: {
                    handler(newValue){
                        this.fullName = this.firstName + '-' + newValue
                    }
                }
            }
        })
    </script>
</body>
</html>
```



## 绑定样式

### 绑定class样式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>姓名实例</title>
    <script src="js/vue.js"></script>
    <style>
        .a{
            width: 200px;
            height: 100px;
            border: 1px solid black;
        }
        .b{
            width: 200px;
            height: 100px;
            background-color:orange;
        }
        .c{
            width: 200px;
            height: 100px;
            background-color:blue;
        }
        .d{
            width: 200px;
            height: 100px;
            background-color:red;
        }
        /* 可以同时加 */
        .aa{
            font-size:20px;
            color: pink;
        }
        .bb{
            border-radius: 10px 10px 10px 10px;
        }
        .cc{
            background-color:palegoldenrod;
        }
    </style>
</head>
<body>
    <div id="root">
        <!-- 绑定class样式--字符串写法,适用于：样式类名不确定，需要动态指定 -->
        <div class="a" :class="classMood" @click="changeMood">{{name}}</div><br><br><br>
        
        <!-- 绑定class样式--数组写法,适用于：要绑定的样式个数不确定，名字也不确定 -->
        <div class="a" :class="classArr" >{{name}}</div>

        <!-- 绑定class样式--对象写法,适用于：要绑定的样式确定，名字确定，但要动态决定用不用 -->
        <div class="a" :class="classObj">{{name}}</div>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data:{
                name: 'VCaL',
                classMood: '',
                classArr: ['aa','bb','cc'],
                classObj:{
                    aa:false,
                    bb:false
                }
            },
            methods:{
                changeMood(){
                    // this.mood = 'b'
                    const arr = ['b','c','d']
                    const index = Math.floor(Math.random()*3)
                    this.classMood = arr[index]
                }
            }
        })
    </script>
</body>
</html>
```



### 绑定style样式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>姓名实例</title>
    <script src="js/vue.js"></script>
    <style>
        .a{
            width: 200px;
            height: 100px;
            border: 1px solid black;
        }
        .b{
            width: 200px;
            height: 100px;
            background-color:orange;
        }
        .c{
            width: 200px;
            height: 100px;
            background-color:blue;
        }
        .d{
            width: 200px;
            height: 100px;
            background-color:red;
        }
        /* 可以同时加 */
        .aa{
            font-size:20px;
            color: pink;
        }
        .bb{
            border-radius: 10px 10px 10px 10px;
        }
        .cc{
            background-color:palegoldenrod;
        }
    </style>
</head>
<body>
    <!-- 
        绑定样式：
            1.class样式
                写法:class="xxx" xxx可以是字符串，对象，数组
                字符串写法适用于：类名不确定，要动态获取
                对象写法适用于：要绑定多个样式，个数不确定，名字也不确定
                数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用
            2.style样式
                :style="{fontSize: xxx}" 其中xxx是动态值
                :style="[a,b]" 其中a,b是样式对象
     -->
    <div id="root">
        <!-- 绑定style样式--对象写法 -->
        <div class="a" :style="styleObj">{{name}}</div>
        <!-- 绑定style样式--数组写法 -->
        <div class="a" :style="[styleObj,styleObj2]">{{name}}</div>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data:{
                name: 'VCaL',
                styleObj:{
                    fontSize: '40px',
                    color: 'red',
                    backgroundColor: 'pink'
                },
                styleObj2:{
                    backgroundColor: 'white'
                }
            }
        })
    </script>
</body>
</html>
```



## 条件渲染

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
</head>
<body>
    <!-- 
        条件渲染：
            1.v-if
                写法：
                    1.v-if="表达式"
                    2.v-else-if="表达式"
                    3.v-else="表达式"
                适用于：切换频率较低的场景
                特点：不展示的DOM元素直接被移除
                注意：v-if可以和：v-else-if,v-else一起使用，但要求结构不能被‘打断’
            2.v-show
                写法：v-show="表达式"
                适用于：切换频率较高的场景
                特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏了起来
            3.备注：使用v-if的时候，元素可能无法获取到，而适用v-show一定可以获取到
     -->
    <div id="root">
        <!-- 使用v-show做条件渲染 -->
        <h2 v-show="a">欢迎加入{{name}} Team1</h2>
        <h2 v-show="1 === 1">欢迎加入{{name}} Team2</h2>

        <!-- 使用v-if做条件渲染 -->
        <h2 v-if="true">欢迎加入{{name}} Team3</h2>
        <h2 v-if="1 === 1">欢迎加入{{name}} Team4</h2>

        <!-- v-else和v-else-if -->
        <h2>当前n的值是{{n}}</h2>
        <button @click="n++">点我n+1</button>
        <div v-show="n === 1">Angular</div>
        <div v-if="n === 2">React</div>
        <div v-else-if="n === 3">Vue</div>
        <div v-else>Vue2</div>

        <!-- v-if和template的配合使用 -->
        <template>
            <h2>1</h2>
            <h2>2</h2>
            <h2>3</h2>
        </template> 
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data:{
                name: 'VCaL',
                a:true,
                n:0
            },
            
        })
    </script>
</body>
</html>
```

## 列表渲染

 ### 基本列表

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
</head>
<body>
    <!-- 
        v-for指令：
            1.用于展示列表数据
            2.语法：v-for="(item,index) in xxx" :key="index"
            3.可遍历：数组，对象，字符串（用的很少），指定次数（用的很少）
     -->
    <div id="root">
        <h2>人员列表</h2>
        <ul>
            <!-- 遍历数组 -->
            <li v-for="(p,index) in persons" :key="p.id">{{p.name}}-{{p.age}}</li>
            <!-- 遍历对象 -->
            <li v-for="(m,index) in man" :key="m.id">{{m}}-{{index}}</li>
        </ul>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data:{
                persons:[
                    {
                        id:'001',
                        name:'张三',
                        age:18
                    },
                    {
                        id:'002',
                        name:'李四',
                        age:19
                    },
                    {
                        id:'003',
                        name:'王五',
                        age:20
                    }
                ],
                man:{
                    name:'Ecioboy',
                    age:18,
                    color:'red'
                }
            },
            
        })
    </script>
</body>
</html>
```



### key的原理和作用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
</head>
<body>
    <!-- 
            面试题：react、vue中的key有什么作用？（key的内部原理）
                
                1. 虚拟DOM中key的作用：
                                key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】, 
                                随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：
                                
                2.对比规则：
                            (1).旧虚拟DOM中找到了与新虚拟DOM相同的key：
                                        ①.若虚拟DOM中内容没变, 直接使用之前的真实DOM！
                                        ②.若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM。

                            (2).旧虚拟DOM中未找到与新虚拟DOM相同的key
                                        创建新的真实DOM，随后渲染到到页面。
                                        
                3. 用index作为key可能会引发的问题：
                                    1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
                                                    会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

                                    2. 如果结构中还包含输入类的DOM：
                                                    会产生错误DOM更新 ==> 界面有问题。

                4. 开发中如何选择key?:
                                    1.最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
                                    2.如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，
    -->
    <div id="root">
        <h2>人员列表</h2>
        <button @click.once="add">添加一个老刘</button>
        <ul>
            <!-- 遍历数组 -->
            <li v-for="(p,index) in persons" :key="p.id">
                {{p.name}}-{{p.age}}
                <input type="text">
            </li>
        </ul>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data:{
                persons:[
                    {
                        id:'001',
                        name:'张三',
                        age:18
                    },
                    {
                        id:'002',
                        name:'李四',
                        age:19
                    },
                    {
                        id:'003',
                        name:'王五',
                        age:20
                    }
                ],
            },
            methods:{
                add(){
                    const p = {id:'004',name:'老刘',age:40}
                    // 在persons最前面添加一个数据
                    this.persons.unshift(p)
                }
            }
        })
    </script>
</body>
</html>
```



### 列表过滤

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2>人员列表</h2>
        <input type="text" placeholder="请输入名字" v-model="keyWord">
        <ul>
            <!-- 遍历数组 -->
            <li v-for="(p,index) in filPersons" :key="p.id">
                {{p.name}}-{{p.age}}-{{p.sex}}
            </li>
        </ul>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        // 用watch实现
        /*
        const vm = new Vue({
            el: '#root',
            data:{
                keyWord:'',
                persons:[
                    {id:'001',name:'马冬梅',age:19,sex:'女'},
                    {id:'002',name:'周冬雨',age:20,sex:'女'},
                    {id:'003',name:'周杰伦',age:21,sex:'男'},
                    {id:'004',name:'温兆伦',age:22,sex:'男'}
                ],
                filPersons:[]
            },
            watch:{
                keyWord:{
                    immediate:true,
                    handler(newValue){
                        // filter过滤，p是每个人的对象
                        this.filPersons = this.persons.filter((p)=>{
                            return p.name.indexOf(newValue) !== -1
                        })
                    }
                }
            }
        })
        */

        // 用computed实现
        const vm = new Vue({
            el: '#root',
            data:{
                keyWord:'',
                persons:[
                    {id:'001',name:'马冬梅',age:19,sex:'女'},
                    {id:'002',name:'周冬雨',age:20,sex:'女'},
                    {id:'003',name:'周杰伦',age:21,sex:'男'},
                    {id:'004',name:'温兆伦',age:22,sex:'男'}
                ]
            },
            computed:{
                filPersons(){
                    // filter过滤，p是每个人的对象
                    return this.persons.filter((p)=>{
                        return p.name.indexOf(this.keyWord) !== -1
                    })
                }
            }
        })
    </script>
</body>
</html>
```



### 列表排序

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2>人员列表</h2>
        <input type="text" placeholder="请输入名字" v-model="keyWord">
        <button @click="sortType = 2">年龄升序</button>
        <button @click="sortType = 1">年龄降序</button>
        <button @click="sortType = 0">原顺序</button>
        <ul>
            <!-- 遍历数组 -->
            <li v-for="(p,index) in filPersons" :key="p.id">
                {{p.name}}-{{p.age}}-{{p.sex}}
            </li>
        </ul>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        // 用computed实现
        const vm = new Vue({
            el: '#root',
            data:{
                keyWord:'',
                sortType:0, // 0 代表原顺序 1 降序 2 升序
                persons:[
                    {id:'001',name:'马冬梅',age:20,sex:'女'},
                    {id:'002',name:'周冬雨',age:19,sex:'女'},
                    {id:'003',name:'周杰伦',age:24,sex:'男'},
                    {id:'004',name:'温兆伦',age:22,sex:'男'}
                ]
            },
            computed:{
                filPersons(){
                    // filter过滤，p是每个人的对象
                    /*filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
                    语法:arr.filter(function(currentValue){}) currentValue是参数，必须写
                    */
                    const arr = this.persons.filter((p)=>{
                        return p.name.indexOf(this.keyWord) !== -1
                    })
                    // 判断一下是否需要排序
                    /* sort()
                    对数组的引用。请注意，数组在原数组上进行排序，不生成副本。
                    若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
                    若 a 等于 b，则返回 0。
                    若 a 大于 b，则返回一个大于 0 的值。
                    */
                    if(this.sortType !== 0){
                        arr.sort((a,b)=>{
                            return this.sortType === 1 ? b.age-a.age : a.age - b.age
                        })
                    }
                    return arr
                }
            }
        })
    </script>
</body>
</html>
```

### 数据监测

#### 更新时的问题

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2>人员列表</h2>
        <button @click="updateMei">更新马冬梅的信息</button>
        <ul>
            <!-- 遍历数组 -->
            <li v-for="(p,index) in persons" :key="p.id">
                {{p.name}}-{{p.age}}-{{p.sex}}
            </li>
        </ul>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data:{
                persons:[
                    {id:'001',name:'马冬梅',age:20,sex:'女'},
                    {id:'002',name:'周冬雨',age:19,sex:'女'},
                    {id:'003',name:'周杰伦',age:24,sex:'男'},
                    {id:'004',name:'温兆伦',age:22,sex:'男'}
                ]
            },
            methods:{
                updateMei(){
                    // this.persons[0].name = '马什么梅' //奏效
                    // this.persons[0].age = 100 //奏效
                    // this.persons[0].sex = '男' //奏效
                    // this.persons[0] = {id:'001',name:'马什么梅',age:100,sex:'男'} //不奏效
                    this.persons.splice(0,1,'{id:'001',name:'马什么梅',age:100,sex:'男'}')
                }
            }
        })
    </script>
</body>
</html>
```

#### Vue监测数据改变的原理_对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2>团队名：{{name}}</h2>
        <h2>团队地址：{{address}}</h2>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data:{
                name:'VCaL',
                address:'China',
                Student:{
                    name: 'Tom',
                    age:{
                        rAge:30,
                        sAge:18
                    },
                    friends:[
                        {name:'jerry',age:35}
                    ]
                }
            }
        })
    </script>
</body>
</html>
```

#### Vue.set()方法使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2>团队名：{{name}}</h2>
        <h2>团队地址：{{address}}</h2>
        <hr>
        <h1>团队成员信息</h1>
        <button @click="addSex">添加一个性别属性，默认值是男</button>
        <h2>姓名：{{student.name}}</h2>
        <h2 v-if="student.sex">性别：{{student.sex}}</h2>
        <h2>真实年龄：{{student.age.rAge}}，对外年龄：{{student.age.sAge}}</h2>
        <h2>朋友：</h2>
        <ul>
            <li v-for="f in student.friends" :key="f.id">
                {{f.name}}-{{f.age}}
            </li>
        </ul>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        // Vue.set(target,key,val)
        const vm = new Vue({
            el: '#root',
            data:{
                name:'VCaL',
                address:'China',
                student:{
                    name: 'Tom',
                    age:{
                        rAge:30,
                        sAge:18
                    },
                    friends:[
                        {name:'jerry',age:35},
                        {name:'Kon',age:30}
                    ]
                }
            },
            methods:{
                addSex(){
                    Vue.set(this.student,'sex','男')
                }
            }
        })
    </script>
</body>
</html>
```

#### Vue监测数据改变的原理_数组

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2>团队名：{{name}}</h2>
        <h2>团队地址：{{address}}</h2>
        <hr>
        <h1>团队成员信息</h1>
        <button @click="addSex">添加一个性别属性，默认值是男</button>
        <h2>姓名：{{student.name}}</h2>
        <h2 v-if="student.sex">性别：{{student.sex}}</h2>
        <h2>真实年龄：{{student.age.rAge}}，对外年龄：{{student.age.sAge}}</h2>
        <h2>朋友：</h2>
        <ul>
            <li v-for="f in student.friends" :key="f.id">
                {{f.name}}-{{f.age}}
            </li>
        </ul>
        <h2>爱好：</h2>
        <ul>
            <li v-for="h in student.hobby" :key="h.id">
                {{h}}
            </li>
        </ul>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        /*
        splice(index,howmany,itemX)方法：删除/添加一个元素
            参数： 
                index  	必需。整数，指定在什么位置添加/删除项目，使用负值指定从数组末尾开始的位置。
                howmany 可选。要删除的项目数。如果设置为 0，则不会删除任何项目。
                itemX 可选。要添加到数组中的新项目。
        */
        const vm = new Vue({
            el: '#root',
            data:{
                name:'VCaL',
                address:'China',
                student:{
                    name: 'Tom',
                    age:{
                        rAge:30,
                        sAge:18
                    },
                    friends:[
                        {name:'jerry',age:35},
                        {name:'Kon',age:30}
                    ],
                    hobby:['抽烟','喝酒','烫头']
                }
            },
            methods:{
                addSex(){
                    Vue.set(this.student,'sex','男')
                }
            }
        })
    </script>
</body>
</html>
```

#### 总结Vue数据监测

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
</head>
<body>
		<!--
			Vue监视数据的原理：
				1. vue会监视data中所有层次的数据。

				2. 如何监测对象中的数据？
								通过setter实现监视，且要在new Vue时就传入要监测的数据。
									(1).对象中后追加的属性，Vue默认不做响应式处理
									(2).如需给后添加的属性做响应式，请使用如下API：
													Vue.set(target，propertyName/index，value) 或 
													vm.$set(target，propertyName/index，value)

				3. 如何监测数组中的数据？
									通过包裹数组更新元素的方法实现，本质就是做了两件事：
										(1).调用原生对应的方法对数组进行更新。
										(2).重新解析模板，进而更新页面。

				4.在Vue修改数组中的某个元素一定要用如下方法：
							1.使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse()
							2.Vue.set() 或 vm.$set()
				
				特别注意：Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象 添加属性！！！
		-->
    <div id="root">
        <h1>团队成员信息</h1>

        <button @click.once="addAge">年龄+1岁</button><br>
        <button @click="addSex">添加性别属性，默认值：男</button><br>
        <button @click="addFriend">在列表首位添加一个朋友</button><br>
        <button @click="rmFriend">修改第一个朋友的名字为：张三</button><br>
        <button @click="addHobby">添加一个爱好</button><br>
        <button @click="setHobby">修改第一个爱好为：开车</button>

        <h2>姓名：{{student.name}}</h2>
        <h2>年龄：{{student.age}}</h2>
        <h2 v-if="student.sex">性别：{{student.sex}}</h2>
        <h2>朋友：</h2>
        <ul>
            <li v-for="f in student.friends" :key="f.id">
                {{f.name}}-{{f.age}}
            </li>
        </ul>
        <h2>爱好：</h2>
        <ul>
            <li v-for="h in student.hobby" :key="h.id">
                {{h}}
            </li>
        </ul>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data:{
                student:{
                    name: 'Tom',
                    age:18,
                    hobby:['抽烟','喝酒','烫头'],
                    friends:[
                        {name:'jerry',age:35},
                        {name:'Kon',age:30}
                    ]
                }
            },
            methods:{
                // 年龄+1岁
                addAge(){
                    this.student.age = this.student.age + 1
                },
                // 添加性别属性，默认值：男
                addSex(){
                    Vue.set(this.student,'sex','男')
                    // Vue.$set(this.student,'sex','男')
                },
                // 在列表首位添加一个朋友
                addFriend(){
                    let a = {name:'Ecioboy',age:20}
                    this.student.friends.unshift(a)
                },
                // 修改第一个朋友的名字为：张三
                rmFriend(){
                    this.student.friends[0].name = "张三"
                },
                // 添加一个爱好
                addHobby(){
                    this.student.hobby.push('打豆豆')
                },
                // 修改第一个爱好为：开车
                setHobby(){
                    this.student.hobby.splice(0,1,'开车')
                    // Vue.set(this.student.hobby,0,'开车')
                }
            }
        })
    </script>
</body>
</html>
```



## 收集表单数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
</head>
<body>
		<!-- 
			收集表单数据：
					若：<input type="text"/>，则v-model收集的是value值，用户输入的就是value值。
					若：<input type="radio"/>，则v-model收集的是value值，且要给标签配置value值。
					若：<input type="checkbox"/>
							1.没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选，是布尔值）
							2.配置input的value属性:
									(1)v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）
									(2)v-model的初始值是数组，那么收集的的就是value组成的数组
					备注：v-model的三个修饰符：
									lazy：失去焦点再收集数据
									number：输入字符串转为有效的数字
									trim：输入首尾空格过滤
		-->
    <div id="root">
        <br><br>
        <form @submit.prevent="demo" action="" method="get" style="padding-left: 40px;">
            <!-- <label for="demo">帐号：</label>
            <input type="text" id="demo"> -->
            帐号：<input type="text" v-model.trim="account"><br><br>
            密码：<input type="password" v-model="password"><br><br>
            年龄：<input type="number" v-model.number="age"><br><br>
            性别：
            <input type="radio" name="sex" v-model="sex" value="male">男
            <input type="radio" name="sex" v-model="sex" value="female">女<br><br>
            爱好：
            <input type="checkbox" v-model="hobby" value="study">学习
            <input type="checkbox" v-model="hobby" value="play">打游戏
            <input type="checkbox" v-model="hobby" value="eat">吃饭<br><br>
            所属校区：
            <select v-model="city">
                <option value="">请选择校区</option>
                <option value="Shanghai">上海</option>
                <option value="Guangdong">广东</option>
                <option value="Anhui">安徽</option>
                <option value="Fujian">福建</option>
            </select><br><br>
            其他信息：
            <textarea v-model.lazy="other"></textarea><br><br>
            <input type="checkbox" v-model="agree"> 阅读并接受用户协议<a href="">《用户协议》</a><br><br>
            <input type="submit" value="提交">
        </form>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data:{
                account:'',
                password:'',
                age:'',
                sex:'',
                hobby:[],
                city:'',
                other:'',
                agree:''
            },
            methods:{
                demo(){
                    let userInfo = this._data
                    console.log(JSON.stringify(userInfo))
                }
            }
        })
    </script>
</body>
</html>
```



## 过滤器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
    <script src="js/dayjs.min.js"></script>
</head>
<body>
    <!-- 
        过滤器：
            定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）
            语法：
                1.注册过滤器：Vue.filter(name,callback) 或 new Vue({filters:{}})
                2.使用过滤器：{{ xxx | 过滤器名}} 或 v-bind:属性 = "xxx | 过滤器名
            备注：
                1.过滤器也可以接收额外参数，多个过滤器也可以串联
                2.并没有改变原本的数据，是产生新的对应的数据
     -->
    <div id="root">
        <h2>显示格式化后的时间</h2>
        <!-- 计算属性实现 -->
        <h3>现在是：{{fmtTime}}</h3>
        <!-- methods实现 -->
        <h3>现在是：{{getFmtTime()}}</h3>
        <!-- 过滤器实现 -->
        <h3>现在是：{{time | timeFormater}}</h3>
        <!-- 过滤器实现(传参) -->
        <h3>现在是：{{time | timeFormater('YYYY-MM-DD') | mySlice}}</h3>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        // 全局过滤器
        Vue.filter('MySlice',function(value){
            return value.slice(0,4)
        })
        
        const vm = new Vue({
            el: '#root',
            data:{
                time: 1637749428358,
            },
            computed:{
                fmtTime(){
                    return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss');
                }
            },
            methods:{
                getFmtTime(){
                    return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss');
                }
            },
            // 局部过滤器
            filters:{
                timeFormater(value,str="YYYY年MM月DD日 HH:mm:ss"){
                    return dayjs(value).format(str);
                },
                /*
                MySlice(value){
                    return value.slice(0,4)
                }
                */
            }
        })
    </script>
</body>
</html>
```



## 内置指令



### v-text指令

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
</head>
<body>
		<!-- 
				学过的指令：
						v-bind	: 单向绑定解析表达式, 可简写为 :xxx
						v-model	: 双向数据绑定
						v-for  	: 遍历数组/对象/字符串
						v-on   	: 绑定事件监听, 可简写为@
						v-if 	 	: 条件渲染（动态控制节点是否存存在）
						v-else 	: 条件渲染（动态控制节点是否存存在）
						v-show 	: 条件渲染 (动态控制节点是否展示)
				v-text指令：
						1.作用：向其所在的节点中渲染文本内容。
						2.与插值语法的区别：v-text会替换掉节点中的内容，{{xx}}则不会。
		-->
    <div id="root">
        <div>{{name}}</div>
        <div v-text="name">Hello</div>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data:{
                name:'Ecioboy'
            }
        })
    </script>
</body>
</html>
```



### v-html指令

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
</head>
<body>
    <!-- 
            v-html指令：
                    1.作用：向指定节点中渲染包含html结构的内容。
                    2.与插值语法的区别：
                                (1).v-html会替换掉节点中所有的内容，{{xx}}则不会。
                                (2).v-html可以识别html结构。
                    3.严重注意：v-html有安全性问题！！！！
                                (1).在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。
                                (2).一定要在可信的内容上使用v-html，永不要用在用户提交的内容上！
    -->
    <div id="root">
        <div>{{name}}</div>
        <div v-html="str"></div>
        <div v-html="str2"></div>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data:{
                name:'Ecioboy',
                str:'<h3>VCaL</h3>',
                str2:'<a href=javascript:location.href="http://www.baidu.com?"+document.cookie>点我试试</a>'
            }
        })
    </script>
</body>
</html>
```



### v-cloak指令

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
    <style>
        [v-cloak]{
            display:none;
        }
    </style>
</head>

<body>
    <!-- 
        v-cloak指令(没有值)
            1.本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性
            2.使用css配合v-cloak可以解决网速慢时页面展示{{xxx}}的问题
     -->
    <div id="root">
        <div v-cloak>{{name}}</div>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data: {
                name: 'Ecioboy'
            }
        })
    </script>
</body>
</html>
```



### v-once指令

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
</head>

<body>
    <!-- 
        v-once指令：
            1.v-once所在节点在初次动态渲染后，就视为静态内容了
            2.以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能
     -->
    <div id="root">
        <div v-once>初始化的n是：{{n}}</div>
        <div>当前的n是：{{n}}</div>
        <button @click="n++">点我n+1</button>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data: {
                n:2
            }
        })
    </script>
</body>
</html>
```

### v-pre指令

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
</head>

<body>
    <!-- 
        v-pre指令：
            1.跳过其所在节点的编译过程
            2.可利用它跳过：没有使用指令语法，没有使用插值语法的节点，会加快编译
     -->
    <div id="root">
        <div v-pre>Vue很简单</div>
        <div>当前的n是：{{n}}</div>
        <button @click="n++">点我n+1</button>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data: {
                n:1
            }
        })
    </script>
</body>
</html>
```



## 自定义指令



### 函数式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
</head>

<body>

    <div id="root">
        <h2>当前的n值是：<span v-text="n"></span></h2>
        <h2>放大十倍后的n值是：<span v-big="n"></span></h2>
        <button @click="n++">点我n++</button>
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data:{
                n:1
            },
            directives: {
                // big函数何时会被调用，1.指令与元素成功绑定时，2.指令所在的模板被重新解析时
                big(element,binding){
                    element.innerText = binding.value * 10
                }
            }
        })
    </script>
</body>
</html>
```



### 对象式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="js/vue.js"></script>
</head>

<body>

    <div id="root">
        <h2>当前的n值是：<span v-text="n"></span></h2>
        <h2>放大十倍后的n值是：<span v-big="n"></span></h2>
        <button @click="n++">点我n++</button>
        <hr>
        <input type="text" v-fbind:value="n">
    </div>
    <script>
        Vue.config.productionTip = false    // 阻止生产文字提示
        
        const vm = new Vue({
            el: '#root',
            data:{
                n:0
            },
            directives: {
                // big函数何时会被调用，1.指令与元素成功绑定时，2.指令所在的模板被重新解析时
                big(element,binding){
                    element.innerText = binding.value * 10
                },
                fbind:{
                    // 指令与元素成功绑定时
                    bind(element,binding){
                        element.value = binding.value
                    },
                    // 指令所在元素被插入页面时
                    inserted(element,binding){
                        element.focus()
                    },
                    // 指令所在模板被重新解析时
                    update(element,binding){
                        element.value = binding.value
                    }
                }
            }
        })
    </script>
</body>
</html>
```



### 总结

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title></title>
		<script type="text/javascript" src="/js/vue.js"></script>
	</head>
	<body>
		<!-- 
				需求1：定义一个v-big指令，和v-text功能类似，但会把绑定的数值放大10倍。
				需求2：定义一个v-fbind指令，和v-bind功能类似，但可以让其所绑定的input元素默认获取焦点。
				自定义指令总结：
						一、定义语法：
									(1).局部指令：
												new Vue({															new Vue({
													directives:{指令名:配置对象}   或   		directives{指令名:回调函数}
												}) 																		})
									(2).全局指令：
													Vue.directive(指令名,配置对象) 或   Vue.directive(指令名,回调函数)

						二、配置对象中常用的3个回调：
									(1).bind：指令与元素成功绑定时调用。
									(2).inserted：指令所在元素被插入页面时调用。
									(3).update：指令所在模板结构被重新解析时调用。

						三、备注：
									1.指令定义时不加v-，但使用时要加v-；
									2.指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名。
		-->
		<div id="root">
			<h2>当前的n值是：<span v-text="n"></span> </h2>
			<!-- <h2>放大10倍后的n值是：<span v-big-number="n"></span> </h2> -->
			<h2>放大10倍后的n值是：<span v-big="n"></span> </h2>
			<button @click="n++">点我n+1</button>
			<hr/>
			<input type="text" v-fbind:value="n">
		</div>
	</body>
	
	<script type="text/javascript">
		Vue.config.productionTip = false

		//定义全局指令
		/* Vue.directive('fbind',{
			//指令与元素成功绑定时（一上来）
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element,binding){
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
			}
		}) */

		new Vue({
			el:'#root',
			data:{
				n:1
			},
			directives:{
				//big函数何时会被调用？1.指令与元素成功绑定时（一上来）。2.指令所在的模板被重新解析时。
				/* 'big-number'(element,binding){
					// console.log('big')
					element.innerText = binding.value * 10
				}, */
				big(element,binding){
					console.log('big',this) //注意此处的this是window
					// console.log('big')
					element.innerText = binding.value * 10
				},
				fbind:{
					//指令与元素成功绑定时（一上来）
					bind(element,binding){
						element.value = binding.value
					},
					//指令所在元素被插入页面时
					inserted(element,binding){
						element.focus()
					},
					//指令所在的模板被重新解析时
					update(element,binding){
						element.value = binding.value
					}
				}
			}
		})
		
	</script>
</html>
```



## 生命周期



### 生命周期简介

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title></title>
		<script src="js/vue.js"></script>
	</head>

	<body>
		<!-- 
			生命周期：
				1.又名：生命周期回调函数，生命周期函数，生命周期钩子
				2.是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数
				3.生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的
				4.生命周期函数中的this指向是vm 或 组件实例对象
		 -->
		<div id="root">
			<h2 :style="{opacity: opacity}">欢迎Vue</h2>
		</div>
	</body>
	
	<script type="text/javascript">
		Vue.config.productionTip = false

		const vm = new Vue({
			el:'#root',
			data:{
				opacity:1
			},
			methods:{
			},
			// Vue完成模板的解析并把真实的DOM元素放入页面后(挂载完毕)调用mounted
			mounted(){
				console.log(this)
				setInterval(()=>{
					vm.opacity -= 0.01
					if(vm.opacity <= 0) vm.opacity = 1
				},16)
			}
		})
		
		// 通过外部的定时器实现
		/*
		setInterval(()=>{
			vm.opacity -= 0.01
			if(vm.opacity <= 0) vm.opacity = 1
		},16)
		*/
	</script>
</html>
```



### 生命周期-挂载流程

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title></title>
		<script src="js/vue.js"></script>
	</head>

	<body>
		<div id="root">
			<h2>当前的n值是：{{n}}</h2>
			<button @click="add">点我n++</button>
		</div>
	</body>
	
	<script type="text/javascript">
		Vue.config.productionTip = false

		const vm = new Vue({
			el:'#root',
			// template:'',
			data:{
				n:0
			},
			methods:{
				add(){
					this.n++
				}
			},
             // 挂载流程
			beforeCreate(){
				console.log('beforeCreate')
				// console.log(this)
				// debugger;	// 断点
			},
			created(){
				console.log('created')
				// console.log(this)
				// debugger
			},
			beforeMount(){
				console.log('beforeMount')
				// console.log(this)
			},
			mounted(){
				console.log('mounted')
				// console.log(this)
			}
		})
	</script>
</html>
```



### 生命周期-更新流程

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title></title>
		<script src="js/vue.js"></script>
	</head>

	<body>
		<div id="root">
			<h2>当前的n值是：{{n}}</h2>
			<button @click="add">点我n++</button>
		</div>
	</body>
	
	<script type="text/javascript">
		Vue.config.productionTip = false

		const vm = new Vue({
			el:'#root',
			// template:'',
			data:{
				n:0
			},
			methods:{
				add(){
					this.n++
				}
			},
			beforeCreate(){
				console.log('beforeCreate')
				// console.log(this)
				// debugger;	// 断点
			},
			created(){
				console.log('created')
				// console.log(this)
				// debugger
			},
			beforeMount(){
				console.log('beforeMount')
				// console.log(this)
			},
			mounted(){
				console.log('mounted')
				// console.log(this)
			}
		})
	</script>
</html>
```



### 生命周期-销毁流程

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title></title>
		<script src="js/vue.js"></script>
	</head>

	<body>
		<div id="root">
			<h2>当前的n值是：{{n}}</h2>
			<button @click="add">点我n++</button>
			<button @click="bye">点我销毁vm</button>
		</div>
	</body>
	
	<script type="text/javascript">
		Vue.config.productionTip = false

		const vm = new Vue({
			el:'#root',
			// template:'',
			data:{
				n:0
			},
			methods:{
				add(){
					this.n++
				},
				bye(){
					this.$destroy()
					console.log('destory')
				}
			},
			// 挂载流程
			beforeCreate(){
				console.log('beforeCreate')
				// console.log(this)
				// debugger;	// 断点
			},
			created(){
				console.log('created')
				// console.log(this)
				// debugger
			},
			beforeMount(){
				console.log('beforeMount')
				// console.log(this)
			},
			mounted(){
				console.log('mounted')
				// console.log(this)
			},
			// 更新流程
			beforeUpdate(){
				console.log('beforeUpdate')
				// console.log(this.n)
			},
			updated(){
				console.log('updated')
				// console.log(this.n)
			},
			// 销毁流程
			beforeDestroy(){
				console.log('beforeDestroy')
			},
			destroyed(){
			}
		})
	</script>
</html>
```



### 总结

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title></title>
		<script src="js/vue.js"></script>
	</head>

	<body>
		<!-- 
			常用的生命周期钩子(函数):
				1.mounted:发送ajax请求，启动定时器，绑定自定义事件，订阅消息[初始化操作]
				2.beforeDestroy:清除定时器，绑定自定义事件，取消订阅消息等[收尾工作]
			
			关于销毁Vue实例：
				1.销毁后借助Vue开发工具看不到任何信息
				2.销毁后自定义事件会失效，但原生DOM事件依然有效
				3.一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了
		 -->
		<div id="root">
			<h2 :style="{opacity: opacity}">欢迎Vue</h2>
			<button @click="stop">点我停止变换</button>
		</div>
	</body>
	
	<script type="text/javascript">
		Vue.config.productionTip = false

		const vm = new Vue({
			el:'#root',
			data:{
				opacity:1
			},
			methods:{
				stop(){
					this.$destroy();
				}
			},
			// Vue完成模板的解析并把真实的DOM元素放入页面后(挂载完毕)调用mounted
			mounted(){
				console.log(this)
				this.timer = setInterval(()=>{
					vm.opacity -= 0.01
					if(vm.opacity <= 0) vm.opacity = 1
				},16)
			},
			beforeDestroy() {
				clearInterval(this.timer)
			}
		})
		
	</script>
</html>
```



## 非单文件组件化



### 基本使用

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title></title>
		<script src="js/vue.js"></script>
	</head>

	<body>
		<!-- 
			Vue中使用组件的三大步骤：
					一、定义组件(创建组件)
					二、注册组件
					三、使用组件(写组件标签)

			一、如何定义一个组件？
						使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但也有点区别；
						区别如下：
								1.el不要写，为什么？ ——— 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。
								2.data必须写成函数，为什么？ ———— 避免组件被复用时，数据存在引用关系。
						备注：使用template可以配置组件结构。

			二、如何注册组件？
							1.局部注册：靠new Vue的时候传入components选项
							2.全局注册：靠Vue.component('组件名',组件)

			三、编写组件标签：
							<school></school>
		-->
		<div id="root">
			<team></team>
			<hr>
			<student></student>
		</div>
	</body>
	
	<script type="text/javascript">
		Vue.config.productionTip = false

		// 第一步
		// 创建Team组件
		const team = Vue.extend({
			template:`
			<div>
				<h2>团队名：{{TeamName}}</h2>
				<h2>地址：{{address}}</h2>	
			</div>
			`,
			// el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器
			data(){
				return {
					TeamName:'VCaL',
					address:'China'
				}
			}
		})

		// 创建name组件
		const student = Vue.extend({
			template:`
			<div>
				<h2>姓名：{{name}}</h2>
				<h2>年龄：{{age}}</h2>
			</div>
			`,
			data(){
				return {
					name:'Ecioboy',
					age:18
				}
			}
		})

		// 创建vm
		const vm = new Vue({
			el:'#root',
			// 第二步：注册组件(局部注册)
			components:{
				team:team,
				student:student
			}
		})
		
	</script>
</html>
```



### 组件的几个注意点

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title></title>
		<script src="js/vue.js"></script>
	</head>

	<body>
		<!-- 
			几个注意点：
					1.关于组件名:
								一个单词组成：
											第一种写法(首字母小写)：school
											第二种写法(首字母大写)：School
								多个单词组成：
											第一种写法(kebab-case命名)：my-school
											第二种写法(CamelCase命名)：MySchool (需要Vue脚手架支持)
								备注：
										(1).组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行。
										(2).可以使用name配置项指定组件在开发者工具中呈现的名字。

					2.关于组件标签:
								第一种写法：<school></school>
								第二种写法：<school/>
								备注：不用使用脚手架时，<school/>会导致后续组件不能渲染。

					3.一个简写方式：
								const school = Vue.extend(options) 可简写为：const school = options
		-->
		<div id="root">
			<Team></Team>
		</div>
	</body>
	
	<script type="text/javascript">
		Vue.config.productionTip = false

		// 定义组件
		const Team = Vue.extend({
			name:'VCaLTeam',
			template:`
			<div>
				<h2>团队名：{{TeamName}}</h2>
				<h2>地址：{{address}}</h2>	
			</div>
			`,
			// el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器
			data(){
				return {
					TeamName:'VCaL',
					address:'China'
				}
			}
		})

		// 创建vm
		const vm = new Vue({
			el:'#root',
			// 第二步：注册组件(局部注册)
			components:{
				Team:Team
			}
		})
		
	</script>
</html>
```



### 组件的嵌套

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title></title>
		<script src="js/vue.js"></script>
	</head>

	<body>
		<div id="root">
			<app></app>
		</div>
	</body>
	
	<script type="text/javascript">
		Vue.config.productionTip = false

		// 定义Student组件
		const student = Vue.extend({
			name:'student',
			template:`
			<div>
				<h2>姓名：{{name}}</h2>
				<h2>年龄：{{age}}</h2>	
			</div>
			`,
			// el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器
			data(){
				return {
					name:'Ecioboy',
					age:18
				}
			}
		})

		// 定义Team组件
		const Team = Vue.extend({
			name:'Team',
			template:`
			<div>
				<h2>团队名：{{TeamName}}</h2>
				<h2>地址：{{address}}</h2>
				<student></student>
			</div>
			`,
			// el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器
			data(){
				return {
					TeamName:'VCaL',
					address:'China'
				}
			},
			components:{student}
		})

		// 定义hz组件
		const hz = Vue.extend({
			name:'hz',
			template:`
			<div>
				<h1>{{hello}}</h1>
			</div>
			`,
			data(){
				return {
					hello:'Hello World!'
				}
			}
		})

		// 定义app组件
		const app = Vue.extend({
			name:'app',
			template:`
			<div>
				<Team></Team>
				<hz></hz>
			</div>
			`,
			components:{
				Team,
				hz
			}
		})

		// 创建vm
		const vm = new Vue({
			el:'#root',
			// 第二步：注册组件(局部注册)
			components:{app}
		})
		
	</script>
</html>
```



### VueComponent

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title></title>
		<script src="js/vue.js"></script>
	</head>

	<body>
		<!-- 
			关于VueComponent：
						1.school组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。

						2.我们只需要写<school/>或<school></school>，Vue解析时会帮我们创建school组件的实例对象，
							即Vue帮我们执行的：new VueComponent(options)。

						3.特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent！！！！

						4.关于this指向：
								(1).组件配置中：
											data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【VueComponent实例对象】。
								(2).new Vue(options)配置中：
											data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【Vue实例对象】。

						5.VueComponent的实例对象，以后简称vc（也可称之为：组件实例对象）。
							Vue的实例对象，以后简称vm。
		-->
		<div id="root">
			<team></team>
		</div>
	</body>
	
	<script type="text/javascript">
		Vue.config.productionTip = false

		const team = Vue.extend({
			name:'team',
			template:`
			<div>
				<h2>{{name}}</h2>
			</div>
			`,
			data(){
				return {
					name:'VCaL'
				}
			}
		})

		new Vue({
			el:'#root',
			components:{
				team
			}
		})
	</script>
</html>
```

### 重要的内置关系

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title></title>
		<script src="js/vue.js"></script>
	</head>

	<body>
		<!-- 
			1.一个重要的内置关系：VueComponent.prototype.__proto__ === Vue.prototype
			2.为什么要有这个关系：让组件实例对象(vc)可以访问到Vue原型上的属性，方法
		 -->
		<div id="root">
			<team></team>
		</div>
	</body>
	
	<script type="text/javascript">
		Vue.config.productionTip = false

		const team = Vue.extend({
			name:'team',
			template:`
			<div>
				<h2>团队名：{{name}}</h2>
				<button @click="showX">点我输出x</button>
			</div>
			`,
			data(){
				return {
					name:'VCaL'
				}
			},
			methods:{
				showX(){
					console.log(this)
				}
			}
		})

		const vm = new Vue({
			el:'#root',
			components:{
				team
			}
		})

		console.log(team.prototype.__proto__ === Vue.prototype)
	</script>
</html>
```

## 单文件组件

