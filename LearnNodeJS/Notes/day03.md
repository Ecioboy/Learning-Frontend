## Buffer缓冲区

```javascript
/**
 * Buffer(缓冲区)
 *      - Buffer的结构和数组很像，操作的方法也和数组类似
 *      - 数组不能存储二进制的文件，而buffer就是专门用来存储二进制数据
 *      - 使用buffer不需要引入模块
 *      - Buffer存储都是二进制数据，但是显示的时候都是以16进制显示
 *          Buffer中每个元素的范围都是 00-ff 0-255
 * 
 *      计算机 一个0 或一个1 我们称为1位(bit)
 *      8bit = 1byte(字节)
 * 
 *      - Buffer的大小一旦确定，则不能修改,Buffer实际上是对底层内存的直接操作
 */

var str = 'Noi-q 嗨'

// 将字符串保存在buffer中
var buf = Buffer.from(str)

console.log(buf)
console.log(buf.length) //占用内存的大小
console.log(str.length) //字符串的长度

// 创建一个指定的buffer
// buffer构造函数都是不推荐使用的
// var buf2 = new Buffer(1024)
// console.log(buf2.length)

// 创建一个10个字节的buffer
var buf3 = Buffer.alloc(10)
// 通过索引来操作buf中的元素
buf3[0] = 10
buf3[1] = 11
console.log(buf3)

// 只要数字在控制台输出或页面中输出一定是10进制
console.log(buf3[0].toString())

// Buffer.allocUnsafe(size) 创建一个指定大小的buffer，但是buffer中可能含有敏感数据

var buf3 = Buffer.allocUnsafe(10)
console.log(buf3)

/**
 * Buffer.from(str) 将一个字符串转换为buffer
 * Buffer.alloc(size) 创建一个指定大小的Buffer
 * Buffer.allocUnsafe(size) 创建一个指定大小的Buffer,可能包含敏感数据
 * buf.toString() 将缓冲区的数据转换为字符串
 */
```