## fs模块的其他方法

```javascript

var fs = require('fs');

/**
 * ds.existsSync
 *      - 检查文件是否存在
 */
var b = fs.existsSync('./index2.js')
console.log(b)

/**
 * fs.stat
 * fs.statSync
 *      - 检查文件的状态
 */
fs.stat('./index2.js',function(err,stat){
    /**
     * size 文件的大小
     * isFile 是否为一个文件
     * isDirectory 是否为一个文件夹
     */
    console.log(stat.isDirectory)
})

/**
 * fs.unlink(path,callback)
 * fs.unlink(path)
 *      - 删除文件
 */
// fs.unlinkSync('./index3.js')

/**
 * fs.readdir(path[,options], callback)
 * fs.readdir(path[,options])
 *      - 读取一个目录的目录结构
 */

fs.readdir('.',function(err,files){
    if(!err){
        console.log(files)
    }
})

/**
 * fs.truncate(path,len,callback)
 * fs.truncateSync(path,len)
 *      - 截断文件，将文件修改为指定的大小
 */
fs.truncateSync('./index2.js',3)

/**
 * fs.mkdir(path[,mode],callback)
 * fs.mkdir(path[,mode])
 *      - 创建一个文件夹
 */

/**
 * fs.rmdir(path,callback)
 * fs.rmdirSync(path)
 *      - 删除目录
 */

/**
 * fs.rename(oldpath,newepath,callback)
 * fs.rename(oldpath,newepath)
 *      - 对文件进行重命名
 */
fs.rename('index2.js','index3.js',function(err){
    if(!err){
        console.log("修改成功！")
    }
})

/**
 * fs.watchFile(filename[,options],listener)
 *      - 监视文件的修改
 *      参数：
 *          filename 要监视文件的名字
 *          options配置选项
 *          listener 回调函数，当文件发生变化时，回调函数会执行
 *                  回调函数参数：
 *                      curr 当前文件的状态
 *                      prev 修改当前文件的状态
 *                              - 这两个对象都是stats对象
 */
```