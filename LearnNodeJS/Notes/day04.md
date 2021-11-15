# 文件系统(fs)

## 同步文件写入

```javascript
/**
 * 文件系统(File System)
 *      - 文件系统简单来说就是通过Node来操作系统中的文件
 *      - 使用文件系统，需要先引入fs模块，fs是核心模块
 * 
 *  文件的写入
 *      - 步骤
 *          1.打开文件
 *          fs.openSync(path,flags[,mode])
 *              - path 要打开文件的路径
 *              - flags 打开文件要做的操作的类型
 *                  r 只读 w 写
 *              - 设置文件的操作权限，一般不传
 *              返回值：
 *                  - 该方法会返回一个文件的描述符作为结果，我们可以通过该描述符来对文件进行各种操作
 *          2.写入内容
 *              fs.writeSync(fd,string[,position[,encoding]])
 *                  - fd 文件的描述符，需要传递要写入的文件的描述符
 *                  - string 要写入的内容
 *                  - position 写入的其实起始位置
 *                  - encoding 写入的编码，默认utf-8
 *          3.保存并关闭文件
 *              fs.closeSync(fd)
 *                  - fd 关闭文件的描述符
 */

/**
 * 同步和异步调用
 *      - 同步文件系统会阻塞程序的执行，也就是除非操作完毕，否则不会向下执行代码。
 *      - 异步文件系统不会阻塞程序的执行，而是在操作完成时，通过回调函数将结果返回。
 */

const fs = require('fs');
// 打开文件
var fd = fs.openSync('./index2.js','w')
// 写入文件
fs.writeSync(fd,'hello')
// 关闭文件
fs.closeSync(fd)

console.log(fd)
```

## 异步文件写入

```javascript
/**
 * 异步文件写入
 * fs.open(path,flages[,mode],callback)
 *   - 用来打开文件
 *   - 异步调用的方法，结果都是通过回调函数的参数返回的
 *   - 回调函数两个参数：
 *          - err 错误对象，如果没有则为null
 *          - fd 文件的描述符
 * fs.write(fd,string[,position[,encoding]],callback)
 *   - 用来写入文件
 * fs.close(fd,callback)
 *   - 用来关闭文件
 */     

// 引入fs模块
const fs = require('fs');

// 异步打开文件
fs.open('./index2.js','w',function(err,fd){
    console.log(arguments);
    // 判断是否出错
    if(!err){
        // 异步写入文件
        // 如果文件没有出错，则对文件进进行写入操作
        fs.write(fd,'内容',function(err){
            if(!err){
                console.log('写入成功')
            }
            // 关闭文件
            fs.close(fd,function(){
                if(!err){
                    console.log('文件已经关闭')
                }
            })
        })
    }else{
        console.log(err)
    }
})
```

## 简单文件写入

```javascript
/**
 * 简单文件写入
 * fs.writeFile(file,data[,options],callback)
 * fs.writeFileSync(file,data[,options])
 *  - file 要操作的文件路径
 *  - data 要写入的数据
 *  - options 选项，可以对写入进行一些设置(encoding mode flag)
 *      - flag 
 *          r 读取
 *          w 读写
 *          a 追加
 * 
 *  - callback 回调函数，当写入完成以后执行的函数
 */

var fs = require('fs');

fs.writeFile('./index2.js','wirteFile',{
    flag: 'a'
},function(err){
    if(!err){
        console.log('写入成功!')
    }else{
        console.log(err)
    }
})
```

## 流式文件写入

```javascript
/**
 * 同步，异步，简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
 * 
 */
var fs = require('fs');

// 流式文件写入
// 创建一个可写流
/**
 * fs.createWriteStream(path[,options])
 *      - 可以用来创建一个可写流
 *      - path 文件路径
 *      - options 配置的参数
 */
var ws = fs.createWriteStream('./index2.js')

// 可以通过监听流的open和close事件来监听流的打开和关闭
/**
 * once(事件字符串，回调函数)
 *  - 可以为对象绑定一个一次性的事件，该事件将会在触发一次以后自动失效
 */
ws.once('open',function(){
    console.log('打开了')
})

ws.once('close',function(){
    console.log('关闭了')
})

// 通过ws向文件中输出内容
ws.write('hello')
ws.write('hello2')
ws.write('hello3')

// 关闭流,版本更新之后两个方法都可以使用
// ws.close()
ws.end()
```

## 简单的文件读取

```javascript
/**
 * 简单文件读取
 * 
 * fs.readFile(path,[,options],callback)
 * fs.readFileSync(path,[,options])
 *  - path 要读取的文件的路径
 *  - options 读取的选项
 *  - callback 回调函数，通过回调函数将读取到的内容返回
 *          err 错误对象
 *          data 读取到的数据，会返回一个Buffer
 */

var fs = require('fs');

fs.readFile('./index2.js',function(err,data){
    if(!err){
        console.log(data.toString())
        // 将data写入到文件中
        fs.writeFile('./index2.js',data,function(err){
            if(!err){
                console.log('文件写入成功！')
            }
        })
    }
})
```

## 流式文件读取

```javascript
/**
 * 流式文件读取也适用于一些较大的文件，可以分多次将文件读取到内存中
 */

var fs = require('fs');

// 创建一个可读流
var rs = fs.createReadStream('./index2.js')
// 创建一个可写流
var ws = fs.createWriteStream('./index3.js')

// 监听流的开启和关闭

// 可读流监听
rs.once('open',function(){
    console.log('可读开启了')
})
rs.once('close',function(){
    console.log('可读关闭了')
    // 数据读取完毕，关闭可写流关闭
    ws.close()
})

// 可写流监听
ws.once('open',function(){
    console.log('可写开启了')
})
ws.once('close',function(){
    console.log('可写关闭了')
})

// 如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动读取数据
rs.on('data',function(data){
    console.log(data)
    ws.write(data)
})
```

## 流式文件读取2

```javascript
/**
 * 流式文件读取也适用于一些较大的文件，可以分多次将文件读取到内存中
 */

 var fs = require('fs');

 // 创建一个可读流
 var rs = fs.createReadStream('./index2.js')
 // 创建一个可写流
 var ws = fs.createWriteStream('./index3.js')
 
 // 监听流的开启和关闭
 
 // 可读流监听
 rs.once('open',function(){
     console.log('可读开启了')
 })
 rs.once('close',function(){
     console.log('可读关闭了')
 })
 
 // 可写流监听
 ws.once('open',function(){
     console.log('可写开启了')
 })
 ws.once('close',function(){
     console.log('可写关闭了')
 })
 
// pipe()可以将可读流中的内容，直接输出到可写流中
 rs.pipe(ws)
```