## LearnBootstrap



## DAY01



### 例子

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <style>
      body{
        padding-top: 50px;
      }
      .starter{
        padding: 40px 15px;
        text-align: center;
      }
    </style>
</head>
<body>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <a href="#" class="navbar-brand">Project Name</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="starter">
        <h1>Bootstrap starter Template</h1>
        <p class="lead">我是Noi</p>
      </div>
    </div>
</body>
</html>

```



### 全局cssn样式-排版

```html
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
        <title>Document</title>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <style></style>
    </head>
    <body>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="js/bootstrap.min.js"></script>

        <div class="container">
            <h1>GET</h1>
            <h2>GET</h2>
            <h3>GET</h3>
            <!-- 比父标签小点的small -->
            <h4>GET<small>Noi欢迎你的到来</small></h4>
            <p>hellohellohello</p>
            <p class="lead">hellohellohello<abbr title="attribute">hello</abbr></p>
            <!-- 注释mark -->
            <p>hello world<mark>Noi</mark></p>
            <del>删除线标签</del>

            <!-- 文本靠左 -->
            <p class="text-left">你好吗</p>
            <!-- 文本靠右 -->
            <p class="text-right">你好吗</p>
            <!-- 文本居中 -->
            <p class="text-center">你好吗</p>
            <!-- 全部小写 -->
            <p class="text-lowercase">dddasdasDAS</p>
            <!-- 全部大写 -->
            <p class="text-uppercase">dasads</p>
            <!-- 首字母大写 -->
            <p class="text-capitalize">dasda</p>

            <address>
                <strong>社牛学院</strong><br />
                云南，长平<br />
                五五街道：1110
                <abbr title="Phone">P:9999 9999</abbr>
            </address>

            <ul class="list-unstyled">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    </body>
</html>
```



### 珊格系统

```html
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
        <title>Document</title>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <style>
            .row {
                margin-bottom: 20px;
            }
            .row .row {
                margin-top: 10px;
                margin-bottom: 0;
            }
            [class*='col-'] {
                padding-top: 15px;
                padding-bottom: 15px;
                background-color: #eee;
                background-color: rgba(86, 61, 124, 0.15);
                border: 1px solid #ddd;
                border: 1px solid rgba(86, 61, 124, 0.2);
            }
        </style>
    </head>
    <body>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="js/bootstrap.min.js"></script>

        <div class="container">
            <div class="row">
                <div class="col-md-1">col-md-1</div>
                <div class="col-md-1">col-md-1</div>
                <div class="col-md-1">col-md-1</div>
                <div class="col-md-1">col-md-1</div>
                <div class="col-md-1">col-md-1</div>
                <div class="col-md-1">col-md-1</div>
                <div class="col-md-1">col-md-1</div>
                <div class="col-md-1">col-md-1</div>
                <div class="col-md-1">col-md-1</div>
                <div class="col-md-1">col-md-1</div>
                <div class="col-md-1">col-md-1</div>
                <div class="col-md-1">col-md-1</div>
            </div>

            <div class="row">
                <div class="col-md-3">col-md-3</div>
                <div class="col-md-3">col-md-3</div>
                <div class="col-md-3">col-md-3</div>
                <div class="col-md-3">col-md-3</div>
            </div>

            <div class="row">
                <!-- 内容超出自适应 -->
                <div class="col-md-3">col-md-3col-md-3col-md-3col-md-3col-md-3</div>
                <div class="col-md-3">col-md-3</div>
                <div class="col-md-3">col-md-3</div>
            </div>

            <div class="row">
                <!-- 设置偏移 -->
                <div class="col-md-4 col-md-offset-4">col-md-4</div>
            </div>

            <div class="row">
                <!-- 嵌套使用 -->
                <div class="col-sm-9">
                    one
                    <div class="row">
                        <div class="col-xs-8">first</div>
                        <div class="col-xs-4">two</div>
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- 设置位置转换 -->
                <div class="col-md-9 col-md-push-3">col-md-9</div>
                <div class="col-md-3 col-md-pull-9">col-md-3</div>
            </div>
        </div>
    </body>
</html>
```



### code代码

```html
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
        <title>Document</title>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <style></style>
    </head>
    <body>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="js/bootstrap.min.js"></script>

        <div class="container">
            <!-- code -->
            For example <code>&lt;section&gt;</code>as inline;
            <!-- cmd -->
            我希望现在能键入<kbd>cmd</kbd>命令
            <!-- 代码块 -->
            <pre>sudo pacman -Syyu</pre>
            <!-- 数学字符 -->
            <var>x</var> = <var>y</var>+<var>z</var>
            <!-- 程序输出 -->
            <samp>hello owrld</samp>
        </div>
    </body>
</html>
```



### 表格

```html
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
        <title>Document</title>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <style></style>
    </head>
    <body>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="js/bootstrap.min.js"></script>

        <div class="table-responsive">
            <!-- 多样式表格
            正常型：table table-striped table-bordered table-hover
            紧凑型：table table-condensed
            状态类：tr class: active success info warning danger
            响应式：div class:table-responsive && table class: table table-condensed
            -->
            <table class="table table-condensed">
                <thead>
                    <tr class="active">
                        <th>表格标题</th>
                        <th>表格标题</th>
                        <th>表格标题</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="success">
                        <td>表格单元格</td>
                        <td>表格单元格</td>
                        <td>表格单元格</td>
                    </tr>
                    <tr class="info">
                        <td>表格单元格</td>
                        <td>表格单元格</td>
                        <td>表格单元格</td>
                    </tr>
                    <tr class="warning">
                        <td>表格单元格</td>
                        <td>表格单元格</td>
                        <td>表格单元格</td>
                    </tr>
                    <tr class="danger">
                        <td>表格单元格</td>
                        <td>表格单元格</td>
                        <td>表格单元格</td>
                    </tr>
                    <tr>
                        <td>表格单元格</td>
                        <td>表格单元格</td>
                        <td>表格单元格</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
</html>
```



###  表单(上)

```html
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
        <title>Document</title>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <style></style>
    </head>
    <body>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="js/bootstrap.min.js"></script>

        <!-- class:form-inline 内联样式 -->
        <form action="" role="form" class="form-inline">
            <div class="form-group">
                <label for="">用户名</label>
                <input type="date" class="form-control" placeholder="user" />
            </div>
            <div class="form-group">
                <label for="">email</label>
                <input type="email" class="form-control" placeholder="Enter email" />
            </div>
            <div class="form-group">
                <label for="">密码</label>
                <input type="password" class="form-control" placeholder="password" />
            </div>
            <div class="form-group">
                <!-- class:sr-only 隐藏label -->
                <label for="" class="sr-only">选择文件</label>
                <input type="file" />
                <p class="help-block">选择你的需要的文件</p>
            </div>
        </form>

        <!-- 登录界面
         -->
        <form action="" class="form-horizontal" role="form">
            <div class="form-group">
                <label for="" class="col-sm-2 control-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" placeholder="Email" class="form-control" />
                </div>
            </div>
            <div class="form-group">
                <label for="" class="col-sm-2 control-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" placeholder="Password" class="form-control" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <div class="checkbox">
                        <label for=""> <input type="checkbox" />记住密码 </label>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default">登录</button>
                </div>
            </div>
        </form>
    </body>
</html>
```



### 表单(下)

```html
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
        <title>Document</title>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <style></style>
    </head>
    <body>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="js/bootstrap.min.js"></script>

        <form action="" role="form">
            <input type="text" class="form-control" />
            <!-- 文本域 -->
            <textarea class="form-control" rows="5">Hello</textarea>

            <!-- 复选按钮 -->
            <div class="checkbox">
                <label for=""> <input type="checkbox" value="" />吃橘子 </label>
            </div>
            <div class="checkbox">
                <label for=""> <input type="checkbox" value="" />吃苹果 </label>
            </div>

            <!-- 单选按钮 -->
            <div class="radio">
                <label for=""> <input name="radios" type="radio" checked />男 </label>
            </div>
            <div class="radio">
                <label for=""> <input name="radios" type="radio" checked />女 </label>
            </div>

            <!-- 下拉列表 -->
            <!--  multiple 显示所有 -->
            <select name="" id="" class="form-control" multiple>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
            </select>

            <!-- 静态文本模式 -->
            <p class="form-control-static">请按照我的格式输入：hello@163.com</p>

            <!-- 禁用输入框 -->
            <input type="text" class="form-control" placeholder="hello" disabled />

            <!-- 禁用表单 -->
            <fieldset disabled>
                <form action="">
                    <input type="text" placeholder="被禁用的表单" />
                </form>
            </fieldset>

            <!-- 只读输入框 -->
            <input type="text" class="form-control" readonly />

            <!-- 状态输入框 -->
            <form action="" role="form">
                <!-- class:has-waring 警告 -->
                <!-- class:has-feedback 显示图标 -->
                <!-- class:col-xs-5 珊格系统输入框 -->
                <div class="form-group has-warning has-feedback col-xs-5">
                    <label for="">用户ing</label>
                    <input type="text" class="form-control" />
                    <!-- 设置状态输入框的图标 -->
                    <span class="glyphicon glyphicon-ok form-control-feedback"></span>
                </div>
                <!-- class:has-success 成功 -->
                <div class="form-group has-success">
                    <label for="">用户ing</label>
                    <input type="text" class="form-control" />
                </div>
                <!-- class:has-error 错误 -->
                <div class="form-group has-error">
                    <label for="">用户ing</label>
                    <input type="text" class="form-control" />
                </div>
            </form>
        </form>
    </body>
</html>
```



### 按钮和图片

```html
<html lang="en"><head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
  <title>Document</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <style></style>
</head>

<body>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <div class="container">
    <div class="dropdown open">
      <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true">
        下拉菜单
        <!-- 小箭头 -->
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
        <li><a href="#" role="menuitem">1</a></li>
        <li><a href="#" role="menuitem">2</a></li>
        <li><a href="#" role="menuitem">3</a></li>
        <li><a href="#" role="menuitem">4</a></li>
      </ul>
    </div>

</div>
</body>
</html>
```



### 下拉菜单

```html
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
        <title>Document</title>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <style></style>
    </head>
    <body>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
        <script src="js/jquery.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <div class="container">
            <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button">
                    下拉菜单
                    <!-- 小箭头 -->
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#" role="menuitem">1</a></li>
                    <li><a href="#" role="menuitem">2</a></li>
                    <li><a href="#" role="menuitem">3</a></li>
                    <li><a href="#" role="menuitem">4</a></li>
                </ul>
            </div>
    </body>
</html>
```



### 按钮组

```html
<html lang="en"><head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
  <title>Document</title>
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
  <style></style>
</head>

<body>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>

  <div class="container">
    <!--- 按钮组 -->
    <!---
      class:btn-group-vertica 垂直
    -->
    <div class="btn-group">
      <button type="button" class="btn btn-default">Left</button>
      <button type="button" class="btn btn-default">Middle</button>
      <button type="button" class="btn btn-default">Right</button>
    </div>
  </div>

  <div class="btn-toolbar">
    <div class="btn-group">
      <!--- 靠左图标-->
      <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-left">Button</span></button>
      <!--- 居中图标-->
      <button type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-align-center">Button</span>
      </button>
      <!--- 靠右图标-->
      <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-right">Button</span></button>
    </div>

    <!--- 从大到小的按钮组 -->
    <div class="btn-group">

      <button type="button" class="btn btn-default">Left</button>
      <button type="button" class="btn btn-default">Middle</button>
      <button type="button" class="btn btn-default">Right</button>

    </div>
    <div class="btn-group btn-group-sm">

      <button type="button" class="btn btn-default">Left</button>
      <button type="button" class="btn btn-default">Middle</button>
      <button type="button" class="btn btn-default">Right</button>

    </div>
    <div class="btn-group btn-group-xs">

      <button type="button" class="btn btn-default">Left</button>
      <button type="button" class="btn btn-default">Middle</button>
      <button type="button" class="btn btn-default">Right</button>

    </div>
  </div>
  <!--- 按钮组搭配下拉菜单 -->
  <div class="btn-group">
    <button type="button" class="btn btn-default">1</button>
    <button type="button" class="btn btn-default">2</button>
    <div class="btn-group">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
        下拉菜单
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" role="menu">
        <li><a href="#">点我</a></li>
        <li><a href="#">点我</a></li>
      </ul>
    </div>
  </div>
  <div class="btn-group btn-group-justified">
    <div class="btn-group">
      <button type="button" class="btn btn-default">Left</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-default">Middle</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-default">Right</button>
    </div>
  </div>
</body></html>
```



### 分裂式下拉菜单

```html
<html lang="en"><head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
  <title>Document</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <style></style>
</head>

<body>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>

  <div class="container">
    <div class="btn-group">
      <button type="button" class="btn btn-info">分裂式下拉菜单</button>
      <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" role="menu">
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
      </ul>
    </div>
  </div>
  <!--- 箭头向上 -->
  <div class="container">
    <div class="btn-group dropup">
      <button type="button" class="btn btn-info">分裂式下拉菜单</button>
      <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu">
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
      </ul>
    </div>
  </div>
</body></html>
```



### 输入框组

```html
<html lang="en"><head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
  <title>Document</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <style></style>
</head>

<body>
  <!--- <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script> -->
  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>

  <!--- 输入框前面添加标识 -->
  <div class="container">
    <div class="input-group">
      <span class="input-group-addon">@</span>
      <input type="text" class="form-control" placeholder="User Name">
    </div>
    <!--- 输入框后面添加标识 -->
    <div class="input-group">
      <input type="text" class="form-control">
      <span class="input-group-addon">.00</span>
    </div>

    <div class="input-group">
      <span class="input-group-addon">$</span>
      <input type="text" class="form-control">
      <span class="input-group-addon">.00</span>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="input-group">
          <!--- class:input-group-addon -->
          <span class="input-group-btn">
            <!--- <input type="radio"> -->
            <button class="btn btn-default">GO</button>
          </span>
          <input type="text" class="form-control">
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="input-group">

          <div class="input-group-btn">
            <button class="btn btn-default dropdown" data-toggle="dropdown" aria-expanded="false">
              Action
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
            </ul>
          </div>
          <input type="text" class="form-control">
        </div>
      </div>
    </div>

  </div>
</body></html>
```



### 导航的创建

```html
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
  <title>Document</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <style></style>
</head>

<body>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script>
    $("#mytab").click(function (e) {
      e.preventDefault();
      $(this).tab("show")
    })
  </script>
  <div class="container">
    <!--- class:nav-stacked 垂直
          class:nav-justified 两端对齐 -->
    <ul class="nav nav-pills nav-justified" role="tablist" id="mytab">
      <li role="presentation" class="" data-toggle="tab"><a href="#">home</a></li>
      <li role="presentation" data-toggle="tab" class=""><a href="#">hello</a></li>
      <li role="presentation" data-toggle="tab" class="dropdown active">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
          word
          <span class="caret">
          </span>
        </a>
        <ul class="dropdown-menu" role="menu">
          <li role="presentation"><a href="#" role="menuitem" tabindex="-1">helo1</a>
          </li><li role="presentation"><a href="#" role="menuitem" tabindex="-1">helo1</a>
          </li><li role="presentation"><a href="#" role="menuitem" tabindex="-1">helo1</a>
          </li><li role="presentation"><a href="#" role="menuitem" tabindex="-1">helo1</a>
        </li></ul>
      </li>
    </ul>
  </div>
</body>
```



### 导航条的使用

```html
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
  <title>Document</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <style></style>
</head>

<body>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>

  <nav class="navbar nav-default" role="navigation">
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav" id="mytab">
        <li class="active"><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
      </ul>
    </div>
  </nav>
</body>
```



### 媒体对象

```html
```



### 面板

```html
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
  <title>Document</title>
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <style></style>
</head>

<body>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>
<!--标题面板-->
  <div class="panel panel-info">
    <div class="panel-heading">
      学习网站
    </div>
    <div class="panel-body">
      学习网站,学习网站学习网站学习网站 <br>
      学习网站学习网站学习网站学习网站 <br>
    </div>
    <div class="panel-footer">
      www.baidu.com
    </div>
    <br>
<!--    表格式面板-->
    <div class="panel panel-default">
      <div class="panel-heading">
        表格式列表
      </div>
      <div class="panel-body">
        <p>表格式</p>
      </div>
      <table class="table">
        <tbody>
          <tr class="success">
            <td>表格单元格</td>
            <td>表格单元格</td>
            <td>表格单元格</td>
          </tr>
          <tr class="success">
            <td>表格单元格</td>
            <td>表格单元格</td>
            <td>表格单元格</td>
          </tr>
          <tr class="success">
            <td>表格单元格</td>
            <td>表格单元格</td>
            <td>表格单元格</td>
          </tr>
          <tr class="success">
            <td>表格单元格</td>
            <td>表格单元格</td>
            <td>表格单元格</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</body>

</html>
```

