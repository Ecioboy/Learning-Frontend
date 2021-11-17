## 迭代器的介绍

```javascript

// 声明一个数组

const xiyou = ['唐僧','孙悟空','猪八戒']

// 使用for..of遍历
for(let v of xiyou) {
    console.log(v)
}
```

## 自定义遍历数据

```javascript

// 声明一个对象

const banji = {
    name: 'VCaL',
    stus: [
        '一',
        '二',
        '三',
        '四'
    ],
    [Symbol.iterator](){
        // 索引变量
        let index = 0;
        // 保存this
        let _this = this;
        return {
            next: function () {
                if(index < _this.stus.length) {
                    const result = {
                        value: _this.stus[index],
                        done: false
                    }
                    // 下标自增
                    index++;
                    // 返回结果
                    return result;
                }else{
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

for(let v of banji) {
    console.log(v)
}
```

## 生成器函数声明与调用

```javascript

// 生成器其实就是一个特殊的函数
// 异步编程
// yield函数代码的分隔符
function * gen(){
    console.log("Hello")
    yield '1'
    console.log("Hello1")
    yield '2'
    console.log("Hello2")
    yield '3'
    console.log("Hello3")

}

let iterator = gen()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
```

## 生成器的参数传递

```javascript
function * gen(arg){
    console.log(arg);
    let one = yield 11;
    console.log(one);
    let two = yield 22;
    console.log(two);
    let three = yield 33;
    console.log(three);
}

// 执行获取迭代器对象
let iterator = gen('AAA');  //arg
console.log(iterator.next())
console.log(iterator.next('BBB'))
console.log(iterator.next('CCC'))
console.log(iterator.next('DDD'))
```

## 生成器函数案例

```javascript
function one(){
    setTimeout(()=>{
        console.log("111")
        iterator.next()
    },1000)
}
function two(){
    setTimeout(()=>{
        console.log("222")
        iterator.next()
    },2000)
}
function three(){
    setTimeout(()=>{
        console.log("333")
        iterator.next()
    },3000)
}

function * gen(){
    yield one()
    yield two()
    yield three()
}

let iterator = gen();
iterator.next()
```