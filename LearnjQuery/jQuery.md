# Study jQuery





## DAY01



### 初始jQuery

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>
</head>
<body>
<!--
初始jQuery
1.What?（什么是jquery)
    https://jquery.com/
    一个优秀的JS函数库
    使用了jquery的网站超过90%
    中大型Web项目开发首选
    Write Less, Do More.
2.Why?（为什么使用jquery）
    HTML元素选取（选择器）
    HTML元素操作
    CSS操作
    HTML事件处理
    JS动画效果
    * 链式调用
    * 读写合一
    浏览器兼容
    易扩展插件
    ajax封装
3.How?（jquery能干什么）
    

-->

</body>
</html>
```



### jQuery的基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>
    <script type="text/javascript">
        /*使用原生DOM*/
        window.onload = function (){
            var btn1 = document.getElementById('btn1')
            btn1.onclick = function (){
                var username = document.getElementById('username')
                alert(username.value)
            }
        }
    </script>

    <!--使用jQuery实现-->
    <!--本地引入-->
<!--    <script type="text/javascript" src="jQuery.js"></script>-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
    <script type="text/javascript">
        /*绑定文档加载完成的监听*/
        jQuery(function (){
            var $btn2 = $('#btn2')
            $btn2.click(function (){  // 给btn2绑定单击监听
                var username = jQuery('#username')
                alert(username.val())
            })
        })

        /*
        * 1.使用jQuery核心函数：$/jQuery
        * 2.使用jQuery核心对象：执行$()返回的对象*/
    </script>
</head>
<body>
用户名：<input type="text" id="username">
<button id="btn1">确定(原生)</button>
<button id="btn2">确定(jQuery)</button>
<!--
jQuery的基本使用

-->

</body>
</html>
```



### jQuery的两把利器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
    <script type="text/javascript">
        /*1.jQuery函数：直接可用*/
        console.log(typeof jQuery)
        console.log($===jQuery) // true
        /*2.jQuery对象：执行jQuery函数得到它*/
        console.log($() instanceof Object)  // true
    </script>
</head>
<body>
<!--
1.jQuery核心函数
    简称：jQuery函数($/jQuery)
    jQuery库向外直接暴露的就是$/jQuery
    引入jQuery库后，直接使用$即可
2.jQuery核心对象
    简称：jquery对象
    得到jquery对象：执行jQuery函数返回的就是jQuery对象
    使用jQuery对象：$obj.xxx()-->
</body>
</html>
```



### jQuery函数的使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
</head>
<body>
<div>
    <button id="btn">测试</button>
    <br>
    <input type="text" name="msg1"><br>
    <input type="text" name="msg2"><br>
</div>
<!--
1.作为一般函数调用：$(param)
    1，参数为函数：当DOM加载完成后，执行此回调函数
    2，参数为选择器字符串：查找所有匹配的标签，并将它们封装称Jquery对象
    3，参数为DOM对象：将DOM对象封装成jQuery对象
    4，参数为html标签字符串：创建标签对象并封装成jQuery对象
2.作为对象使用：$.xxx()
    1，$.each() ：隐式遍历数组
    2，$.trim() ：去除两端的空格
-->

<script type="text/javascript">
    /*
    * 需求1.点击按钮：显示按钮的文本，显示一个新的输入框*/

    /*1，参数为函数：当DOM加载完成后，执行此回调函数*/
    $(function (){  // 绑定文档加载完成的监听
        /*2，参数为选择器字符串：查找所有匹配的标签，并将它们封装称Jquery对象*/
        $('#btn').click(function (){    //绑定点击事件监听
            // this是什么？发生事件的dom元素(<button>)
            //alert(this.innerHTML)
            alert($(this).html())
            /*4.参数为html标签字符串：创建标签对象并封装成jQuery对象*/
            $('<input type="text" name="msg3"><br>').appendTo('div')
        })
    })

    /*需求2：遍历数组中所有元素值*/
    var arr = [3,2,1,7]
    $.each(arr,function (index,item){
        console.log(index,item)
    })

    /* $.trim() ：去除两端空格*/
    var str = '  Noi is '
    console.log('---'+$.trim(str)+'---')
</script>
</body>
</html>
```



### jQuery对象的使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
</head>
<body>
<div>
    <button>测试一</button>
    <button>测试二</button>
    <button id="btn3">测试三</button>
    <button>测试四</button>
</div>
<!--
理解：
    执行jQuery核心函数返回的对象
    jQuery对象内部包含的是DOM元素对象的伪数组（可能只有一个元素）
    jQuery对象拥有很多有用的属性和方法
2.基本行为：
    size()/length：包含的DOM元素个数
    [index]/get(index)：得到对应位置的DOM元素
    each()：遍历包含的所有DOM元素
    index()：得到在所在兄弟元素中的下标

-->

<script type="text/javascript">
    /*
    * 需求1：统计一共有多少个按钮
    * 需求2：取出第2个button的文本
    * 需求3：输出所有button标签的文本
    * 需求4：输出‘测试三’按钮是所有按钮中的第几个*/

//    需求1：统计一共有多少个按钮
    /* size()/length：包含的DOM元素个数
    *   3.6版本size()已经没有这个方法了*/
    var $buttons = $('button')
    console.log($buttons.length)

//    需求2：取出第2个button的文本
    /* [index]/get(index)：得到对应位置的DOM元素 */
    console.log($buttons[1].innerHTML,$buttons.get(1).innerHTML)

//    需求3：输出所有button标签的文本
    /* each()：遍历包含的所有DOM元素 */
    console.log($buttons.each(function (index,domEle){
        console.log(index,domEle.innerHTML)
    }))

//    需求4：输出‘测试三’按钮是所有按钮中的第几个
    /* index()：得到在所在兄弟元素中的下标 */
    console.log($('#btn3').index())

    /*
    * 1.伪数组
    *   Object对象
    *   length属性
    *   数值下标属性
    *   没有数组特别的方法：forEach(),push(),pop(),splice()*/
    console.log($buttons instanceof Array)
    /*自定义一个伪数组*/
    var weiArr = {}
    weiArr.length = 0
    weiArr[0] = 'Noi'
    weiArr.length = 1
    weiArr[1] = 123
    weiArr.length = 2
    for (let i = 0; i < weiArr.length; i++) {
        var obj = weiArr[i]
        console.log(i,obj)
    }
    console.log(weiArr.forEach,$buttons.forEach)    // undefined undefined
</script>
</body>
</html>
```



### 基本选择器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
</head>
<body>
<div id="div1" class="box">div1</div>
<div id="div2" class="box">div2</div>
<div id="div3">div3</div>
<span class="box">span</span>
<ul>
    <li>a</li>
    <li>b</li>
    <li class="box">c</li>
    <li>d</li>
</ul>
<!--


-->

<script type="text/javascript">

    /*1.选择id为div1的元素*/
    $('#div1').css({background:'red'})

    /*2.选择所有的div元素*/
    $('div').css({background: 'yellow'})

    /*3.选择所有class属性为box的元素*/
    $('.box').css({background: 'red'})

    /*4.选择所有的div和span元素*/
    $('div,span').css({background: 'yellow'})

    /*5.选择所有class属性为box的div元素*/
    $('div.box').css({background: 'red'})

    /*选择所有元素*/
    $('*').css({background: 'yellow'})
</script>
</body>
</html>
```



### 层次选择器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
</head>
<body>
<ul>
    <li>a</li>
    <li class="box">b</li>
    <li title="hello"><span>c</span></li>
    <li title="hello"><span class="box">d</span></li>
    <span>e</span>
</ul>
<!--


-->

<script type="text/javascript">
    /*选中ul下所有的span*/
    // $('ul span').css({background: 'yellow'})

    /*选中ul下所有的子元素span*/
    // $('ul>span').css({background: 'yellow'})

    /*选中class为box的下一个li*/
    // $('.box+li').css({background: 'yellow'})

    /*选中ul下的class为box的元素后面的所有兄弟元素*/
    $('ul .box~*').css({background: 'yellow'})
</script>
</body>
</html>
```



### 过滤选择器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
</head>
<body>

<div id="div1" class="box">div1</div>
<div id="div2" class="box">div2</div>
<div id="div3">div3</div>
<span class="box">span</span>
<ul>
    <li>a</li>
    <li title="hello">b</li>
    <li class="box">c</li>
    <li title="hello">d</li>
    <li title="two">b</li>
    <li style="display: none">隐藏的</li>
</ul>

<script type="text/javascript">
    /* $('').css({background: 'yellow'}) */

    /*1.选中第一个div*/
    // $('div:first').css({background: 'yellow'})

    /*2.选择最后一个class为box的元素*/
    // $('.box:last').css({background: 'yellow'})

    /*3.选择所有class属性不为box的div*/
    // $('div:not(.box)').css({background: 'yellow'})

    /*4.选择第二个和第三个li元素   多个过滤选择器不是同时执行的，而是依次
    *   gt小于
    *   lt大于 */
    // $('li:gt(0):lt(2)').css({background: 'yellow'})

    /*5.选择内容为b的li*/
    // $('li:contains("b")').css({background: 'yellow'})

    /*6.选择隐藏的li*/
    // console.log($('li:hidden').length,$('li:hidden')[0])
    // $('li').css({display: 'block'})

    /*7.选择有title属性的li元素*/
    // $('li[title]').css({background: 'yellow'})

    /*8.选择所有属性title为hello的li元素*/
    $('li[title="hello"]').css({background: 'yellow'})
</script>
</body>
</html>
```



### 表格隔行变色

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
</head>
<body>

<table id="data">
    <tbody>
    <tr>
        <td>Noi</td>
        <td>$12</td>
        <td>2020</td>
        <td><a href="javascript:void(0)"></a></td>
    </tr>
    <tr>
        <td>eoi</td>
        <td>$12</td>
        <td>2020</td>
        <td><a href="javascript:void(0)"></a></td>
    </tr>
    <tr>
        <td>coi</td>
        <td>$12</td>
        <td>2020</td>
        <td><a href="javascript:void(0)"></a></td>
    </tr>
    <tr>
        <td>goi</td>
        <td>$12</td>
        <td>2020</td>
        <td><a href="javascript:void(0)"></a></td>
    </tr>
    <tr>
        <td>aoi</td>
        <td>$12</td>
        <td>2020</td>
        <td><a href="javascript:void(0)"></a></td>
    </tr>
    </tbody>
</table>

<script type="text/javascript">
    /*:odd 基数选择器*/
    $('#data>tbody>tr:odd').css({background:"yellow"})

</script>
</body>
</html>
```



### 表单选择器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
</head>
<body>
用户名:<input type="text"><br>
密码:<input type="text"><br>

爱好:
<input type="checkbox" checked="checked">篮球
<input type="checkbox" checked="checked">足球
<input type="checkbox" checked="checked">羽毛球 <br>

性别:
<input type="radio" name="sex" value="male">男
<input type="radio" name="sex" value="female">女 <br>

邮箱: <input type="text" disabled="disabled"><br>

<form action="" method="get">
    <select name="" id="">
        <option value="1">北京</option>
        <option value="2" selected="selected">天津</option>
        <option value="3">河北</option>
    </select><br>
    <input type="submit" value="提交">
</form>
<script type="text/javascript">
    /*需求*/

    /*1.选择不可用的文本输入框*/
    // $(':text:disabled').css({background: 'yellow'})

    /*2.显示选择爱好 的个数*/
    // console.log($(':checkbox:checkbox').length)

    /*3.显示选择的城市名称*/
    $(':submit').click(function (){
        var city = $('select>option:selected').html()   // 选择optin的标签体文本
        var city1 = $('select').val()   // 选择的option的value属性值
        alert(city1)
    })
</script>
</body>
</html>
```



### $工具方法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
</head>
<body>
<!--
1. $.each() 遍历数组或对象中的数据
2. $.trim() 去除字符串两边的空格
3. $.type(obj) 得到数据的类型
4. $.isArray(obj) 判断是否为数组
5. $.isFunction(obj) 判断是否为函数
6. $.parseJSON(json) 解析json字符串转换为js对象/数组
-->
<script type="text/javascript">
    // 1. $.each() 遍历数组或对象中的数据
    var obj = {
        name : "noi",
        age : 12,
        setName : function (name){
            this.name = name
        }
    }
    $.each(obj,function (key,value){
        console.log(key,value)
    })
    // 2. $.trim() 去除字符串两边的空格
    // 3. $.type(obj) 得到数据的类型
    console.log($.type($))  // function
    // 4. $.isArray(obj) 判断是否为数组
    console.log($.isArray($('body')),$.isArray([]))
    // 5. $.isFunction(obj) 判断是否为函数
    console.log($.isFunction($))
    // 6. $.parseJSON(json) 解析json字符串转换为js对象/数组
    var json = '{"name":"Noi","age":12}'
    // json对象===>JS对象
    // console.log(JSON.parse(json))
    console.log($.parseJSON(json))
    // json数组===>js数组
    json = '[{"name":"Noi","age":12},{"name":"Goi","age":16}]'
    console.log(JSON.parse(json))
    
/*  JSON.parse(jsonString)  json字符串--->js对象/数组
    JSON.stringify(jsObj/jsArr)  js对象/数组--->json字符串
    */
</script>
</body>
</html>
```



### 多Tab切换

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
</head>
<body>
<h2>多Tab点击切换</h2>
<ul id="tab">
    <li id="tab1" value="1">10元套餐</li>
    <li id="tab2" value="2">30元套餐</li>
    <li id="tab3" value="3">50元套餐</li>
</ul>

<div id="container">
    <div id="content1">
        10元套餐：
        <br>
        内容内容内容内容内容内容
    </div>
    <div id="content2" style="display: none">
        30元套餐：
        <br>
        内容内容内容内容内容内容
    </div>
    <div id="content3" style="display: none">
        50元套餐：
        <br>
        内容内容内容内容内容内容
    </div>
</div>
<!--

-->
<script type="text/javascript">
    var $contents = $('#container>div')
    /* 1 */
    /*
    // 给三个li加监听
    $('#tab>li').click(function (){     // 隐式遍历
        // 隐藏所有内容
        $contents.css({display : 'none'})
        // 显示对应的内容div
            // 得到当前点击的li在兄弟中下标
        var index = $(this).index()
            // 找到对应的内容div
        $contents[index].style.display = 'block'
    })
    */
    
     /* 2 */
    // 给三个li加监听
    var currIndex = 0   //当前显示的内容div的下标
    $('#tab>li').click(function (){     // 隐式遍历
        // 隐藏所有内容
        $contents[currIndex].style.display = 'none'
        // 显示对应的内容div
        // 得到当前点击的li在兄弟中下标
        var index = $(this).index()
        // 找到对应的内容div
        $contents[index].style.display = 'block'

        // 更新下标
        currIndex = index
    })
</script>
</body>
</html>
```



### jQuery属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
</head>
<body>
<div id="div1" class="box" title="one">div1</div>
<div id="div2" class="box" title="two">div2</div>
<div id="div3" >div3</div>
<span class="box">span</span>
<br>
<ul>
    <li>AAA</li>
    <li title="hello" class="box2">BBB</li>
    <li class="box">CCC</li>
    <li title="hello">DDD</li>
    <li title="two"><span>BBB</span></li>
</ul>
<input type="text" name="username" value="guiguClass">
<br>
<input type="checkbox">
<input type="checkbox">
<br>
<button>选中</button>
<button>全不选</button>
<!--
1. 读取第一个div的title属性
2. 给所有的div设置name属性(value为Ecio)
3. 移除所有div的title属性
4. 给所有div设置class='Ecio'
5. 给所有的div添加class='abc'
6. 移除所有div的guiguClass的class
7. 得到最后一个li的标签体文本
8. 设置第一个li的标签体为"<h1>mmmm</h1>"
9. 得到输入框中的value值
10. 将输入框的值设置为Ecio
11.  点击'全选'按钮实现全选
12.  点击'全不选'按钮实现全不选
-->
<script type="text/javascript">
    /* 1. 读取第一个div的title属性 */
    // console.log($('div:first').attr('title'))

    /*2. 给所有的div设置name属性(value为Ecio)*/
    // $('div').attr('name','Ecio')

    /*3. 移除所有div的title属性 */
    // $('div').removeAttr('title')

    /*4. 给所有div设置class='Ecio'*/
    // $('div').attr('class','Ecio')

    /*5. 给所有的div添加class='abc'*/
    // $('div').addClass('abc')

    /*6. 移除所有div的Ecio的class*/
    // $('div').removeClass('Ecio')

    /*7. 得到最后一个li的标签体文本*/
    // console.log($('li:last').html())

    /*8. 设置第一个li的标签体为"<h1>mmmm</h1>"*/
    // $('li:first').html('<h1>mmmm</h1>')

    /*9. 得到输入框中的value值*/
    // console.log($(':text').val())

    /*10. 将输入框的值设置为Ecio*/
    // $(':text').val('Ecio')  //读写合一

    /*11.  点击'全选'按钮实现全选*/
    /*
    * attr() 操作属性值为非布尔值的属性
    * prop() 专门操作属性值为布尔值的属性*/
    var $checkboxs = $(':checkbox')
    $('button:first').click(function (){
        // $checkboxs.attr('checked',true)
        $checkboxs.prop('checked',true)
    })
    /*12.  点击'全不选'按钮实现全不选*/
    $('button:last').click(function (){
        // $checkboxs.attr('checked',false)
        $checkboxs.prop('checked',false)
    })
</script>
</body>
</html>
```



## DAY02



### jQuery_css

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
</head>
<body>
<p style="color: red">Hello</p>
<p style="color: yellow">Hello2</p>
<!--
设置css样式/读取css值
    css()
-->
<script type="text/javascript">
    /*1.得到第一个p标签的颜色*/
    // console.log($('p:first').css('color'))

    /*2.设置所有p标签的文本颜色为red*/
    // $('p').css({color: 'red'})

    /*3.设置第二个p的字体颜色(#ff0011)，背景(blue),宽(300px),高(30px)*/
    // $('p:last').css({background : 'blue',color : '#ff0011',height : '300px',width : '30px'})
    $('p:eq(1)').css({
        background : 'blue',
        color : '#ff0011',
        height : '300',
        width : '30'})
</script>
</body>
</html>
```



### offset和position

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
    <style>
        *{
            margin: 0;
        }
        .div1{
            position: absolute;
            width: 200px;
            height: 200px;
            top: 20px;
            left: 10px;
            background: blue;
        }
        .div2{
            position: absolute;
            width: 100px;
            height: 100px;
            top: 50px;background: red;
        }
        .div3{
            position: absolute;
            top: 250px;
        }
    </style>
</head>
<body style="height: 2000px">
<div class="div1">
    <div class="div2">测试offset</div>
</div>
<div class="div3">
    <button id="btn1">读取offset和position</button>
    <button id="btn2">设置offset</button>
</div>

<!--
获取/设置标签的位置数据
    offset() 相对页面左上角的坐标
    position() 相对于父元素左上角的坐标
-->
<script type="text/javascript">
    /*点击btn1
    * 打印div1相对于页面左上角的位置
    * 打印div2相对于页面左上角的位置
    * 打印div1相对于父元素左上角的位置
    * 打印div2相对于父元素左上角的位置**/
    /*点击btn2
    * 设置div2相对于页面的左上角的位置*/
    $('#btn1').click(function (){
        /*打印div1相对于页面左上角的位置*/
        var offSET = $('.div1').offset()
        console.log(offSET.left,offSET.top)
        /*打印div2相对于页面左上角的位置*/
        offSET = $('.div2').offset()
        console.log(offSET.left,offSET.top)

        /*打印div1相对于父元素左上角的位置*/
        var posiTION = $('.div1').position()
        console.log(posiTION.left,posiTION.top)
        /*打印div2相对于父元素左上角的位置*/
        posiTION = $('.div2').position()
        console.log(posiTION.left,posiTION.top)

        /*设置div2相对于页面的左上角的位置*/
        $('#btn2').click(function (){
            $('.div2').offset({
                left : 50,
                top : 100
            })
        })

    })
</script>
</body>
</html>
```



### scrollTop()

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
</head>
<body style="height: 2000px">
<div style="overflow: scroll;width: 200px;height: 200px;border: 0.5px solid black">
    This is some text.This is some text.This is some text.This is some text.This is some text.This is some text.
    This is some text.This is some text.This is some text.This is some text.This is some text.This is some text.
    This is some text.This is some text.This is some text.This is some text.This is some text.This is some text.
    This is some text.This is some text.This is some text.This is some text.This is some text.This is some text.
    This is some text.This is some text.This is some text.This is some text.This is some text.This is some text.
</div>
<br>
<br>
<br>
<button id="btn1">得到scrollTop</button>
<button id="btn2">设置scrollTop</button>

<!--
1. scrollTop()
    读取/设置滚动条的y坐标
2.
-->
<script type="text/javascript">

    /*1.得到div或页面滚动条的坐标*/
    $('#btn1').click(function (){
        console.log($('div').scrollTop())
        console.log($('html').scrollTop())
        // console.log($('body').scrollTop())
    })
    /*2.让div或页面的滚动条滚动到指定位置*/
    $('#btn2').click(function (){
        $('div').scrollTop(200)
        $('html').scrollTop(200)
        // $('html,body').scrollTop()
    })
</script>
</body>
</html>
```



### 回到顶部

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

    <style>
        #to_top{
            font: 14px/20px Arial;
            text-align: center;
            background: aqua;
            position: fixed;
            cursor: pointer;
            color: #fff;
            left: 1650px;
            top: 800px;
        }
    </style>
</head>
<body style="height: 2000px">
<h1>顶部</h1>
<div id="to_top">返回顶部</div>

<script type="text/javascript">
    $('#to_top').click(function (){
        /*瞬间滚到顶部*/
        // $('html,body').scrollTop(0)

        /* 平滑滚到顶部*/
            //总距离
        var $page = $('html,body')
        var distance = $page.scrollTop()
            //总时间
        var time = 500
            //间隔时间
        var intervalTime = 5
        var itemDistance = distance/(time/intervalTime)
        // 使用循环定时器不断滚动
        var intervalId = setInterval(function (){
            distance -= itemDistance
            /* 到达顶部*/
            if(distance<=0){
                distance = 0
                clearInterval(intervalId)
            }
            $page.scrollTop(distance)
        },intervalTime)
        // 到达顶部，停止定时器

    })
</script>
</body>
</html>
```



### 元素的尺寸

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

    <style>
        div{
            width: 100px;
            height: 150px;
            background: red;
            padding: 10px;
            border: 10px #fbd850 solid;
            margin: 10px;
        }
    </style>
</head>
<body>
<div>div</div>
<script type="text/javascript">
    var $div = $('div')
    /*1.内容尺寸
    * height():height
    * width():width*/
    console.log($div.width(),$div.height()) //100 150
    /*2.内部尺寸
    * innerHeight():height+padding
    * innerWidth():width+padding
    * */
    console.log($div.innerWidth(),$div.innerHeight())   //120 170
    /*3.外部尺寸
    * outerHeight(false/true):height+padding+border
    * outerWidth(false/true):width+padding+border
    * */
    console.log($div.outerHeight(),$div.outerWidth())   //190 140
    console.log($div.outerHeight(true),$div.outerWidth(true))   //210 160
</script>
</body>
</html>
```



### 对象的过滤

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>
<ul>
    <li>AAA</li>
    <li title="hello" class="box2">BBB</li>
    <li class="box">CCC</li>
    <li title="hello">DDD</li>
    <li title="two"><span>BBB</span></li>
</ul>
<li>eee</li>
<li>EEE</li>
<br>
<script type="text/javascript">
    var $lis = $('ul>li')
    /*1，ul下li标签第一个*/
    // $lis.first().css({background: 'red'})

    /*2，ul下li标签的最后一个*/
    // $lis.last().css({background: 'red'})

    /*3，ul下li标签的第二个*/
    // $lis.eq(1).css({background: 'red'})

    /*4.ul下li标签中title属性为hello的*/
    // $lis.filter('[title=hello]').css({background: 'red'})

    /*5.ul下li标签中title属性不为hello的*/
    // $lis.not('[title=hello]').css({background: 'red'})
    // $lis.filter('[title!=hello]').css({background: 'red'})

    /*有title但title不等于hello的*/
    // $lis.filter('[title][title!=hello]').css({background: 'red'})
    // $lis.filter('[title!=hello]').filter('[title]').css({background: 'red'})

    /*6，ul下li标签中有span子标签的*/
    $lis.has('span').css({background: 'red'})
</script>
</body>
</html>
```



### 对象的查找

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>
<div id="div1" class="box" title="one">class为box的div1</div>
<div id="div2" class="box">class为box的div2</div>
<div id="div3">div3</div>
<span class="box">class为box的span</span>
<br>
<div>
    <ul>
        <span>span文本1</span>
        <li>AAA</li>
        <li title="hello" class="box2">BBB</li>
        <li class="box" id="cc">CCC</li>
        <li title="hello">DDD</li>
        <li title="two"><span>span文本2</span></li>
        <span>span文本3</span>
    </ul>
    <span>span文本444</span>
    <li>eee</li>
    <li>EEE</li>
    <br>
</div>
<script type="text/javascript">
    var $ul = $('ul')

    /*1.ul标签的第2个span子标签*/
    // $ul.children('span:eq(1)').css({background: 'red'})

    /*2.ul标签的第2个span后代标签*/
    // $ul.find('span:eq(1)').css({background: 'red'})

    /*3.ul标签的父标签*/
    // $ul.parent().css({background: 'red'})

    /*4.id为cc的li标签的前面的所有li标签*/
    // $('#cc').prevAll('li').css({background: 'red'})

    /*4.id为cc的li标签的所有兄弟li标签*/
    $('#cc').siblings('li').css({background: 'red'})

</script>
</body>
</html>
```



### 爱好选择器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>
<form action="post">
    你爱好的运动是？<input type="checkbox" id="checkedAllBox">全选/全不选
    <br>
    <input type="checkbox" name="items" value="足球">足球
    <input type="checkbox" name="items" value="篮球">篮球
    <input type="checkbox" name="items" value="羽毛球">羽毛球
    <input type="checkbox" name="items" value="乒乓球">乒乓球
    <br>
    <input type="button" id="checkedAllBtn" value="全  选">
    <input type="button" id="checkedNoBtn" value="全不选">
    <input type="button" id="checkedRevBtn" value="反选">
    <input type="button" id="sendBtn" value="提   交">
</form>
<script type="text/javascript">

    /*全选/全不选*/
    var $checkedAllBox = $('#checkedAllBox')
    /*所有爱好*/
    var $items = $(':checkbox[name=items]')

    /*1，点击‘全选’：选中所有爱好*/
    $('#checkedAllBtn').click(function (){
        /*点击全选爱好*/
        $items.prop('checked',true)
        /*点击全选 ’全选/全不选‘*/
        $checkedAllBox.prop('checked',true)
    })

    /*2,点击‘全不选’：所有爱好都不勾选*/
    $('#checkedNoBtn').click(function (){
        /*点击全不选爱好*/
        $items.prop('checked',false)
        /*点击全不选 ’全选/全不选‘*/
        $checkedAllBox.prop('checked',false)
    })

    /*3,点击‘反选’：改变所有爱好的勾选状态*/
    $('#checkedRevBtn').click(function (){
        /*定义一个隐式遍历*/
        $items.each(function (){
            /*点击反选，所有爱好都是相反的选中状态*/
            this.checked = !this.checked
        })
        /* 设置‘全选/全不选'的反选状态*/
        $checkedAllBox.prop('checked',$items.filter(':not(:checked)').length===0)
    })

    /*4,点击‘提交’：提示所有爱好的勾选状态*/
    $('#sendBtn').click(function (){
        /*筛选所有的爱好,匹配所有勾选的元素，然后为每个元素执行一个函数*/
        $items.filter(':checked').each(function (){
            alert(this.value)
        })
    })

    /*5,点击'全选/全不选‘：选中所有爱好，勾选状态*/
    $checkedAllBox.click(function (){
        $items.prop('checked',this.checked)
    })

    /*6,点击某个爱好是，必要时更新'全选/全不选'的选中状态*/
    $items.click(function (){
        $checkedAllBox.prop('checked',$items.filter(':not(:checked)').length===0)
    })
</script>
</body>
</html>
```



## DAY03



### 文档_增删改

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>
<ul id="ul1">
    <li>AAA</li>

    <li title="hello">BBB</li>
    <li class="box">CCC</li>

    <li title="hello">DDD</li>
    <li title="two">EEE</li>
    <li>FFF</li>
</ul>
<br>
<br>
<ul id="ul2">
    <li>aaa</li>
    <li title="hello">bbb</li>
    <li class="box">ccc</li>
    <li title="hello">ddd</li>
    <li title="two">eee</li>
</ul>
<script type="text/javascript">
    var $ul1 = $('#ul1')

    // 1.向id为ul1的ul下添加一个span(最后)
    // $ul1.append('<span>添加的span</span>')
    $('<span>appendTo()添加的span</span>').appendTo($ul1)

    // 2.向id为ul1的ul下添加一个span(最前)
    // $ul1.prepend('<span>添加的span</span>')
    $('<span>prependTo()添加的span</span>').prependTo($ul1)

    // 3.在id为ul1的ul下的li(title为hello)的前面添加span
    $ul1.children('li[title=hello]').before('<span>before()添加的span</span>')

    // 4.在id为ul1的ul下的li(title为hello)的后面添加span
    $ul1.children('li[title=hello]').after('<span>after()添加的span</span>')

    // 5.将在id为ul2的ul下的li(title为hello)全部替换为p
    $('#ul2>li[title=hello]').replaceWith('<p>replaceAll()替换的p</p>')

    // 6.移除ul2下的ul下的所有li
    // $('#ul2').empty()     // 后加的也会删除
    $('#ul2>*').remove()
</script>
</body>
</html>
```



### 添加删除记录-练习

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>

<style type="text/css">

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

<script type="text/javascript">
    /*添加删除记录*/

    $('#addEmpButton').click(function (){
        // 1.收集输入的数据
        var $empName = $('#empName')
        var $email = $('#email')
        var $salary = $('#salary')
        var empName = $empName.val()
        var email = $email.val()
        var salary = $salary.val()

        // 2.生成对应的<tr>标签结构，并插入#employeeTable的tbody中
        /*
    <tr>
        <td>Bob</td>
        <td>bob@tom.com</td>
        <td>10000</td>
        <td><a href="deleteEmp?id=003">Delete</a></td>
    </tr>*/
        $('<tr></tr>')
            .append('<td>'+empName+'</td>')     //拼串
            .append('<td>'+email+'</td>')
            .append('<td>'+salary+'</td>')
            .append('<td><a href="deleteEmp?id="'+Date.now()+'>Delete</a></td>')
            .appendTo('#employeeTable>tbody')
            .find('a')
            .click(clickDelete)

        // 3.清除输入
        $empName.val('')
        $email.val('')
        $salary.val('')
    })

    // 给所有删除链接绑定点击监听
    $('#employeeTable a').click(clickDelete)

    function clickDelete() {
        var $tr = $(this).parent().parent()
        var name = $tr.children(':first').html()
        if (confirm('确定删除' + name + '吗?')) {
            $tr.remove()
            return false
        }
    }
</script>
</body>
</html>
```



### 事件处理-事件绑定与解绑

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>
<style>
    .out{
        width: 250px;
        height: 300px;
        background: blue;
    }
    .inner{
        width: 200px;
        height: 200px;
        background: red;
        position: absolute;
        top: 50px;
    }
</style>
<div class="out">
    外部div
    <div class="inner">内部div</div>
</div>
<div class="divBtn">
    <button id="btn1">取消绑定所有事件</button>
    <button id="btn2">取消绑定mouseover事件</button>
    <button id="btn3">测试事件坐标</button>
    <a href="https://www.baidu.com" id="test4">百度一下</a>
</div>
<script type="text/javascript">

    // 1.给.out绑定点击监听（两种方式）
    /* 第一种
    $('.out').click(function (){
        console.log('click out')
    })
     */
    // 第二种
    $('.out').on('click',function (){
        console.log('on click out')
    })

    // 2.给.inner绑定鼠标移入和移除的事件监听(3种方法绑定)
    /* 第一种
    $('.inner')
    .mouseenter(function (){    // 进入
        console.log('进入 ')
    })
    .mouseleave(function (){    // 离开
        console.log('离开')
    })
     */
    /* 第二种
    $('.inner')
    .on('mouseenter',function (){
        console.log('进入2')
    })
    .on('mouseleave',function (){
        console.log('离开2')
    })
     */
    // 第三种
    $('.inner').hover(function (){
        console.log('进入3')
    },function (){
        console.log('离开3')
    })

    // 3.点击btn1解除.inner上的所有事件监听
    $('#btn1').click(function (){
        $('.inner').off()
    })

    // 4.点击btn2解除.inner上的mouseenter事件
    $('#btn2').click(function (){
        $('.inner').off('mouseenter')
    })

    // 5.点击btn3得到事件坐标
    /*
    * event.clientX,event.clientY 相对于视口的左上角
    * event.pageX,event.pageY 相对于页面的左上角
    * event.offsetX,event.offsetY 相对于事件元素左上角
    * */
    $('#btn3').click(function (event){  //event事件对象
        console.log(event.offsetX,event.offsetY)    // 原点为事件元素的左上角
        console.log(event.clientX,event.clientY)    // 原点为窗口的左上角
        console.log(event.pageX,event.pageY)        // 原点为页面的左上角
    })

    //6.点击.inner区域，外部点击监听不响应
    $('.inner').click(function (event){
        console.log('click inner')
        // 停止事件冒泡
        event.stopPropagation()
    })
    
    // 7.点击链接，如果当前时间为偶数不跳转
    $('#test4').click(function (event){
        if(Date.now()%2===0){
            // 阻止事件默认行为
            event.preventDefault()
        }
    })

</script>
</body>
</html>
```



### 事件的面试题

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>
<style>
    #div1{
        width: 200px;
        height: 200px;
        background: darkolivegreen;
        position: absolute;
        top: 50px;
    }
    #div2{
        width: 100px;
        height: 100px;
        background: red;
        position: absolute;
        top: 60px;
    }
    #div3{
        width: 200px;
        height: 200px;
        background: darkolivegreen;
        position: absolute;
        left: 230px;
        top: 50px;
    }
    #div4{
        width: 100px;
        height: 100px;
        background: yellow;
        position: relative;
        top: 40px;
    }
    .p1{
        position: absolute;
        top: 300px;
    }
</style>
<div id="div1">
    div1...
    <div id="div2">
        div2...
    </div>
</div>
<div id="div3">
    div3...
    <div id="div4">
        div4...
    </div>
</div>
<p class="p1">区分鼠标的事件</p>

<!--
区别mouseover与mouseenter?
    * mouseover:在移入子元素时也会触发,对应mouseout
    * mouseenter:只在移入当前元素时才触发，对应mouseleave
                    hover()使用的就是mouseenter()和mouseleave()

区别on('eventName',fun) 与 eventName(fun)
    * on('eventName',fun)：通用，编码麻烦
    * eventName(fun)：编码简单，但有的事件没有对应的方法
-->
<script type="text/javascript">
    $('#div1')
        .mouseover(function (){
        console.log('mouseover 进入')
    })
        .mouseout(function (){
        console.log('mouseout 离开')
    })

    $('#div3')
        .mouseenter(function (){
            console.log('mouseenter 进入')
        })
        .mouseleave(function (){
            console.log('mouseleave 离开')
        })

    $('#div1')
        .click(function (){
        console.log('click 点击')
    })
        .click(function (){
            console.log('click2 点击')
    })
    $('#div3')
        .on('click',function (){
        console.log('on 点击')
    })
        .on('click',function (){
            console.log('on2 点击')
    })
</script>
</body>
</html>
```



### 事件委托(事件委派)-1

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>
<ul>
    <li>111</li>
    <li>11111</li>
    <li>1111111</li>
    <li>111111111</li>
</ul>
<li>222</li>
<br>
<button id="btn">添加新的li</button>
<br>
<script type="text/javascript">
    // 1.给ul下的li添加点击响应事件，并把背景改为red
    $('ul>li').click(function (){
        this.style.background = "red"
    })
    /*2.点击btn就添加一个li*/
    $('#btn').click(function (){
        $('ul').append('<li>新的</li>')
    })
</script>
</body>
</html>
```



### 事件委托(事件委派)-2

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>
<ul>
    <li>1111</li>
    <li>2222</li>
    <li>3333</li>
    <li>4444</li>
</ul>
<li>222</li>
<br>
<button id="btn1">添加新的li</button>
<button id="btn2">删除ul上的事件委托的监听器</button>
<br>
<script type="text/javascript">
    /*1.给li添加背景颜色-2*/
    /*设置事件委托
    * 好处：
    *   添加新的子元素，自动有事件响应处理
    *   减少事件的监听数量*/
    $('ul').delegate('li','click',function (){
        this.style.background = 'red'
    })

    /*2.点击btn就添加一个li*/
    $('#btn1').click(function (){
        $('ul').append('<li>新的</li>')
    })

    $('#btn2').click(function (){
        // 移除事件委托
        $('ul').undelegate('click')
    })
</script>
</body>
</html>
```



## DAY04



### 轮播图

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>
<style>

    /*去除内边距,没有链接下划线*/
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    /*让<body有20px的内边距*/
    body {
        padding: 20px;
    }

    /*最外围的div*/
    #container {
        width: 600px;
        height: 400px;
        overflow: hidden;
        position: relative; /*相对定位*/
        margin: 0 auto;
    }

    /*包含所有图片的<div>*/

    #list {
        width: 4200px; /*7张图片的宽: 7*600 */
        height: 400px;
        position: absolute; /*绝对定位*/
        z-index: 1;

    }

    /*所有的图片<img>*/
    #list img {
        float: left; /*浮在左侧*/
    }

    /*包含所有圆点按钮的<div>*/
    #pointsDiv {
        position: absolute;
        height: 10px;
        width: 100px;
        z-index: 2;
        bottom: 20px;
        left: 250px;
    }

    /*所有的圆点<span>*/

    #pointsDiv span {
        cursor: pointer;
        float: left;
        border: 1px solid #fff;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #333;
        margin-right: 5px;
    }

    /*第一个<span>*/

    #pointsDiv .on {
        background: orangered;
    }

    /*切换图标<a>*/

    .arrow {
        cursor: pointer;
        display: none;
        line-height: 39px;
        text-align: center;
        font-size: 36px;
        font-weight: bold;
        width: 40px;
        height: 40px;
        position: absolute;
        z-index: 2;
        top: 180px;
        background-color: RGBA(0, 0, 0, 0.3);
        color: #fff;
    }

    /*鼠标移到切换图标上时*/
    .arrow:hover {
        background-color: RGBA(0, 0, 0, 0.7);
    }

    /*鼠标移到整个div区域时*/
    #container:hover .arrow {
        display: block; /*显示*/
    }

    /*上一个切换图标的左外边距*/
    #prev {
        left: 20px;
    }

    /*下一个切换图标的右外边距*/
    #next {
        right: 20px;
    }
</style>
    
    <!--- 每张图片left:600px-->

<div id="container">
    <div id="list" style=" left: -600px;">
        <img src="img/5.jpg" alt="5"/>
        <img src="img/1.jpg" alt="1"/>
        <img src="img/2.jpg" alt="2"/>
        <img src="img/3.jpg" alt="3"/>
        <img src="img/4.jpg" alt="4"/>
        <img src="img/5.jpg" alt="5"/>
        <img src="img/1.jpg" alt="1"/>
    </div>
    <div id="pointsDiv">
        <span index="1" class="on"></span>
        <span index="2"></span>
        <span index="3"></span>
        <span index="4"></span>
        <span index="5"></span>
    </div>
    <a href="javascript:;" id="prev" class="arrow">&lt;</a>
    <a href="javascript:;" id="next" class="arrow">&gt;</a>
</div>

<script type="text/javascript" src="app.js"></script>
</body>
</html>
```

```javascript
/*
* 功能说明：
* 1，点击向右（左）的图标，平滑切换到下（上）一页
* 2，无限循环切换：第一页的上一页为最后页，最后页的下一页是第一页
* 3，每隔3s自动滑动到下一页
* 4，当鼠标进入图片区域时，自动切换停止，当鼠标离开后，又开始自动切换
* 5，切换页面时，下面的圆点也同步更新
* 6，点击圆点图标切换到对应的页
*
* bug:快速点击的时候*/

$(function (){

    var $container = $('#container')
    var $list = $('#list')
    var $points = $('#pointsDiv>span')
    var $prev = $('#prev')
    var $next = $('#next')
    var PAGE_WIDTH = 600    // 一页的宽度
    var TIME = 400  // 翻页的持续时间
    var ITEM_TIME = 20  // 单元移动的间隔时间
    var imgCount = $points.length
    var index = 0   // 当前下标
    var moving = false  // 标识是否正在翻页（默认没有）

    // 1，点击向右（左）的图标，平滑切换到下（上）一页
    $next.click(function (){
        //  平滑翻到下一页
        nextPage(true)
    })
    $prev.click(function (){
        //  平滑翻到上一页
        nextPage(false)
    })

    // 3.每隔3s自动滑到下一页
    var intervalId2 = setInterval(function (){
        nextPage(true)
    },3000)

    // 4，当鼠标进入图片区域时，自动切换停止，当鼠标离开后，又开始自动切换
    $container.hover(function (){
        // 清除定时器
        clearInterval(intervalId2)
    },function (){
        intervalId2 = setInterval(function (){
            nextPage(true)
        },3000)
    })

    // 6，点击圆点图标切换到对应的页
    $points.click(function (){
        // 目标页的下标
        var targetIndex = $(this).index()
        // 只有当点击的不是当前页的圆点时才翻页
        if (targetIndex!=index){
            nextPage(targetIndex)
        }
    })


    /*
    * 平滑翻页
    * true:下一页
    * false:上一页
    * 数值：指定下标页*/
    function nextPage(next){
        /*
        *
        * 总的时间：TIME = 400
        * 单元移动的间隔时间：ITEM_TIME = 20
        * 总的偏移量：offset
        * 单元移动的偏移量：itemOffset = offset/(TIME/ITME_TIME)
        *
        * 启动循环定时器不断更新$list的left，到达目标处停止定时器
        * */

        // 如果正在翻页，直接结束
        if (moving){    //已经正在翻页中
            return
        }
        moving = true   //标识正在翻页

        // 总的偏移量：offset
        var offset = 0;
        // 计算offset
        if (typeof next==='boolean'){
            offset = next ? - PAGE_WIDTH : PAGE_WIDTH
        }else{
            offset = -(next-index) * PAGE_WIDTH
        }
        // offset = next ? - PAGE_WIDTH : PAGE_WIDTH
        /*
        if (next){
            offset =-PAGE_WIDTH
        }else {
            offset = PAGE_WIDTH
        }
         */
        // 计算itemOffset
        var itemOffset = offset/(TIME/ITEM_TIME)

        // 得到当前的left值
        var currLeft = $list.position().left

        // 计算出目标处的left值
        var targetLeft = currLeft + offset

        // 启动循环定时器不断更新$list的left，到达目标处停止定时器
        var intervalId = setInterval(function (){

            // 计算出最新的currLeft
            currLeft += itemOffset
            if (currLeft===targetLeft){
                // 到达目标位置，清除定时器
                clearInterval(intervalId)

                // 标识翻页停止
                moving = false

                // 2，无限循环切换：第一页的上一页为最后页，最后页的下一页是第一页
                if (currLeft===-(imgCount+1) * PAGE_WIDTH){
                    // 如果到达了最右边的图片（1.jpg），跳转到最左边的第二张图片（1.jpg）
                    currLeft = -PAGE_WIDTH
                }else if (currLeft===0){
                    // 如果到达了最左边的图片（5.jpg），跳转到最右边的第二张图片（5.jpg）
                    currLeft = -imgCount * PAGE_WIDTH
                }

            }
            // 设置left
            $list.css({left: currLeft})
        },ITEM_TIME)

        // 更新圆点
        updatePoints(next)
    }

    /*
    * 更新圆点
    * 5，切换页面时，下面的圆点也同步更新
    * */
    function updatePoints(next){


        // 计算出目标圆点的下标targetIndex
        var targetIndex = 0
        if (typeof next === 'boolean'){
            if (next){
                targetIndex = index + 1     //[0,imgCount-1]
                if (targetIndex===imgCount){    // 此时看到的是1.jpg，第一个圆点
                    targetIndex = 0
                }
            }else{
                targetIndex = index - 1
                if (targetIndex===1){   // 此时看到的是5.jpg，第五个圆点
                    targetIndex = imgCount-1
                }
            }
        }else{
            targetIndex = next
        }

        // 将当前index的<span>的class移除
        $points.eq(index).removeClass('on')
        // 给目标圆点添加class="on"
        $points.eq(targetIndex).addClass('on')
        // 将index更新为targetIndex
        index = targetIndex
    }
})
```



### 动画效果-淡入淡出

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>
<style>
    *{
        margin: 0;
    }

    .div1{
        position: absolute;
        width: 200px;
        height: 200px;
        top: 50px;
        left: 10px;
        background: red;
    }
</style>
<button id="btn1">慢慢淡出</button>
<button id="btn2">慢慢淡入</button>
<button id="btn3">淡出/淡入切换</button>

<div class="div1"></div>
<script type="text/javascript">
    /*
    * 1.点击btn1，慢慢淡出
    *   无参
    *   有参*/
    // 改变元素的透明度
    var $div1 = $('.div1')
    $('#btn1').click(function (){
        // $div1.fadeOut()
        $div1.fadeOut(2000,function (){ // 回调函数
            
        })
    })
    // 2.慢慢淡入
    $('#btn2').click(function (){
        // $div1.fadeIn()
        $div1.fadeIn(2000)
    })
    // 3.淡出/淡入切换
    $('#btn3').click(function (){
        $div1.fadeToggle(2000)
    })
</script>
</body>
</html>
```

### 动画效果-滑动

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>
<style>
    *{
        margin: 0;
    }

    .div1{
        position: absolute;
        width: 200px;
        height: 200px;
        top: 50px;
        left: 10px;
        background: red;
    }
</style>
<button id="btn1">慢慢收缩</button>
<button id="btn2">慢慢展开</button>
<button id="btn3">收缩/展开切换</button>

<div class="div1"></div>
<script type="text/javascript">
    var $div1 = $('.div1')
    // 改变元素的高度

    //点击btn1，向上滑动
    $('#btn1').click(function (){
        $div1.slideUp()
    })
    //点击btn2，向下滑动
    $('#btn2').click(function (){
        $div1.slideDown()
    })
    //点击btn3，向上/向下切换
    $('#btn3').click(function (){
        $div1.slideToggle()
    })
</script>
</body>
</html>
```



### 动画效果-显示与隐藏

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>
<style>
    *{
        margin: 0;
    }

    .div1{
        position: absolute;
        width: 200px;
        height: 200px;
        top: 50px;
        left: 10px;
        background: red;
    }
</style>
<button id="btn1">瞬间显示</button>
<button id="btn2">慢慢显示</button>
<button id="btn3">慢慢隐藏</button>
<button id="btn4">显示/隐藏切换</button>

<div class="div1"></div>
<script type="text/javascript">
    // 改变透明度，高度，宽度
    var $div1 = $('.div1')
    // 点击btn1，立即显示
    $('#btn1').click(function (){
        $div1.show()
    })
    // 点击btn2，慢慢显示
    $('#btn2').click(function (){
        $div1.show(1000)
    })
    // 点击btn3，慢慢隐藏
    $('#btn3').click(function (){
        $div1.hide(1000)
    })
    // 点击btn4，显示/隐藏
    $('#btn4').click(function (){
        $div1.toggle()
    })
</script>
</body>
</html>
```



### 自定义动画

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>
<style>
    *{
        margin: 0;
    }

    .div1{
        position: absolute;
        width: 100px;
        height: 100px;
        top: 50px;
        left: 250px;
        background: red;
    }
</style>
<button id="btn1">逐渐扩大</button>
<button id="btn2">移动到指定位置</button>
<button id="btn3">移动到指定距离</button>
<button id="btn4">停止动画</button>

<div class="div1"></div>
<script type="text/javascript">
    var $div1 = $('.div1')

    $('#btn1').click(function (){
        /*1.逐渐扩大
        *   1.宽和高都扩为200px
        *   2.宽先扩为200px，高后扩为200px*/
        /*
        $div1.animate({
            width: 200,
            height: 200
        },1000)
         */
        $div1
            .animate({
                width: 200
        },1000)
            .animate({
                height: 200
        },1000)
    })
    $('#btn2').click(function (){
        /*2.移动到指定位置
        *   移动到(500,100)处
        *   移动到(100,20)处*/
        $div1.animate({
            left: 500,
            top: 100
        })
        $div1.animate({
            left: 100,
            top: 20
        })
    })
    $('#btn3').click(function (){
        /*3.移动到指定的距离
        *   移动距离为（100，50）
        *   移动距离为（-100，-20）*/
        $div1.animate({
            left: '+=100',
            top: '+=50'
        })
        $div1.animate({
            left: '-=100',
            top: '-=20'
        })
    })
    $('#btn4').click(function (){
        /*4.停止动画*/
        $div1.stop()
    })
</script>
</body>
</html>
```



### 导航动画效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>
<style rel="stylesheet">
    * {
        margin: 0;
        padding: 0;
        word-wrap: break-word;
        word-break: break-all;
    }

    body {
        background: #FFF;
        color: #333;
        font: 12px/1.6em Helvetica, Arial, sans-serif;
    }

    a {
        color: #0287CA;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    ul, li {
        list-style: none;
    }

    img {
        border: none;
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: 1em;
    }

    html {
        overflow: -moz-scrollbars-vertical; /* 在Firefox下始终显示滚动条*/
    }

    #navigation {
        width: 784px;
        padding: 8px;
        margin: 8px auto;
        background: #3B5998;
        height: 18px;
    }

    #navigation ul li {
        float: left;
        margin-right: 14px;
        position: relative;
        z-index: 100;
    }

    #navigation ul li a {
        display: block;
        padding: 0 8px;
        background: #EEEEEE;
        font-weight: 700;
    }

    #navigation ul li a:hover {
        background: none;
        color: #fff;
    }

    #navigation ul li ul {
        background-color: #88C366;
        position: absolute;
        width: 80px;
        overflow: hidden;
        display: none;
    }

    #navigation ul li ul li {
        border-bottom: 1px solid #BBB;
        text-align: left;
        width: 100%;
    }
</style>
<div id="navigation">
    <ul>
        <li><a href="#">首 页</a></li>
        <li>
            <a href="#">衬 衫</a>
            <ul>
                <li><a href="#">短袖衬衫</a></li>
                <li><a href="#">长袖衬衫</a></li>
                <li><a href="#">无袖衬衫</a></li>
            </ul>
        </li>
        <li>
            <a href="#">卫 衣</a>
            <ul>
                <li><a href="#">开襟卫衣</a></li>
                <li><a href="#">套头卫衣</a></li>
            </ul>
        </li>
        <li>
            <a href="#">裤 子</a>
            <ul>
                <li><a href="#">休闲裤</a></li>
                <li><a href="#">卡其裤</a></li>
                <li><a href="#">牛仔裤</a></li>
                <li><a href="#">短裤</a></li>
            </ul>
        </li>
        <li><a href="#">联系我们</a></li>
    </ul>
</div>
<script type="text/javascript">
    $('#navigation>ul>li:has(ul)').hover(function (){
            // 动画展开
            $(this).children('ul').stop().slideDown()
    },function (){
            // 动画收缩
            $(this).children('ul').stop().slideUp()
    })
</script>
</body>
</html>
```



### 多库共存

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>
<!--
问题：如果有2个库都有$，就存在冲突
解决：jQuery库可以释放$的使用权，让另一个库可以正常使用，此时jQuery库只能使用jQuery了
API：jQuery.noConflict()
-->
<script src="myLib.js"></script>
<script type="text/javascript">
    // 释放$的使用权
    jQuery.noConflict()
    
    // 调用myLib的$
    $()
    
    // 要想使用jQuery的功能，只能使用jQuery
    jQuery(function (){
        console.log('文档加载完成')
    })
    console.log('+++')
</script>
</body>
</html>
```



### 区别onload与ready

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>

<script type="text/javascript">
    /*
    * window.onload 只能加一个，页面加载完就回调*/
    window.onload = function (){}
    
    
    $(document).ready(function (){})
    
    $(function (){})
</script>
</body>
</html>
```



## DAY05



### 自定义jQuery插件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>
<input type="checkbox" name="items">羽毛球
<input type="checkbox" name="items">篮球
<input type="checkbox" name="items">乒乓球
<br>
<button id="checkedAllBtn">全选</button>
<button id="checkedNoBtn">全不选</button>
<button id="checkedRevBtn">反选</button>
<script src="myLib.js"></script>
<script type="text/javascript">

    console.log($.min(3,5),$.max(3,5))

    var string = '   asdasdsa dasd   '
    console.log('----' + $.leftTrim(string) + '----')
    console.log('----' + $.rightTrim(string) + '----')
    var $items = $(':checkbox[name=items]')
    $('#checkedAllBtn').click(function (){
        $items.checkAll()
    })
    $('#checkedNoBtn').click(function (){
        $items.unCheckAll()
    })
    $('#checkedRevBtn').click(function (){
        $items.reverseCheck()
    })
</script>
</body>
</html>
```

```javascript
//  基于jQuery写插件
(function (){
    // 扩展$的方法
    jQuery.extend({
        // 求出最小值
        min: function (a,b){
            return a < b ? a : b
        },
        // 求出最大值
        max: function (a,b){
            return a > b ? a : b
        },
        // 去除字符串左边的空格
        leftTrim: function (str){
            return str.replace(/^\s+/,'')
        },
        // 去除字符串右边的空格
        rightTrim: function (str){
            return str.replace(/\s+$/,'')
        }
    })
    // 扩展jQuery对象的方法
    jQuery.fn.extend({
        // 全选
        checkAll: function (){
            this.prop('checked',true)   // this是jQuery对象
        },
        // 全不选
        unCheckAll: function (){
            this.prop('checked',false)
        },
        // 反选
        reverseCheck: function (){
            // this是jQuery对象
            this.each(function (){
                // this是dom元素
                this.checked = !this.checked
            })
        }
    })
})()
```



### jQuery-Validate(表单验证插件)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>
<!--远程服务jQuery插件：jquery-validation-->
    <!--- https://jqueryvalidation.org/ -->
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3 /dist/jquery.validate.min.js"></script>
<style>
    .error{
        color: red;
    }
</style>
<form action="ddd" method="post" id="myForm">
    <p>用户名(必须，最小6位)：<input type="text" name="username" required minlength="6"></p>
    <p>密码(必须，6到8位)：<input id="passwd" type="password" name="userpwd" required minlength="6" maxlength="8"></p>
    <p>确认密码(与密码相同)：<input type="password" name="userpwd2" equalTo="#passwd"></p>
    <p><input type="submit" value="注册"></p>
</form>
<script type="text/javascript">
    // 声明式验证:程序员只需要声明各种验证规则，可以自定义验证错误信息
    
    // 对此表单开启验证
    $('#myForm').validate({
        messages: {
            username: {
                required: '必须输入用户名',
                minLength: '用户最小输入6位'
            },
            userpwd: {
                required: '必须输入密码',
                minLength: '密码至少为6位',
                maxLength: '密码最多为8位'
            },
            userpwd2: {
                equalTo: '必须与密码相同'
            }
        }
    })

</script>
</body>
</html>
```







### jQuery-UI(界面工具)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>

    <!--使用jQuery实现-->
    <!--远程服务-->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>
<body>
<!-- https://jqueryui.com/-->
<script src="jquery-ui-1.13.0/jquery-ui.js"></script>

<link rel="stylesheet" href="jquery-ui-1.13.0/jquery-ui.css">

<!--1.手风琴-->
<h2>Accordion</h2>
<div id="accordion">
    <h3>First</h3>
    <div>Hello1</div>
    <h3>Second</h3>
    <div>Hello2</div>
    <h3>Third</h3>
    <div>Hello3</div>
</div>

<!--2.自动搜索匹配-->
<h2>Autocomplete</h2>
<div>
    <input id="autocomplete" title="type &quot;a&quot;">
</div>

<!--3.选项卡-->
<h2>Tabs</h2>
<div id="tabs">
    <ul>
        <li><a href="#tabs-1">First</a></li>
        <li><a href="#tabs-2">Second</a></li>
        <li><a href="#tabs-3">Third</a></li>
    </ul>
    <div id="tabs-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
    <div id="tabs-2">Phasellus mattis tincidunt nibh. Cras orci urna, blandit id, pretium vel, aliquet ornare, felis. Maecenas scelerisque sem non nisl. Fusce sed lorem in enim dictum bibendum.</div>
    <div id="tabs-3">Nam dui erat, auctor a, dignissim quis, sollicitudin eu, felis. Pellentesque nisi urna, interdum eget, sagittis et, consequat vestibulum, lacus. Mauris porttitor ullamcorper augue.</div>
</div>

<script type="text/javascript">
    // 1.手风琴
    $('#accordion').accordion();

    // 2.自动搜索匹配
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $( "#autocomplete" ).autocomplete({
        source: availableTags   // 指定数据源
    });

    // 3.选项卡
    $('#tabs').tabs()

</script>
</body>
</html>
```



### laydate

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery</title>
    <script src="laydate-v1.1/laydate/laydate.js"></script>
    <link rel="stylesheet" href="laydate-v1.1/laydate/need/laydate.css">
</head>
<body>

<input placeholder="请输入日期" class="laydate-icon" onclick="laydate()">

<script type="text/javascript">
    
</script>
</body>
</html>
```



## DAY06

### 京东

### 应用_显示与隐藏

