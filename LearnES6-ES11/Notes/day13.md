## ES11

## 私有属性

```javascript
class Person{
    // 公有属性
    name;
    // 私有属性
    #age;
    #weight;
    // 构造方法
    constructor(name, age, weight){
        this.name = name;
        this.#age = age;
        this.#weight = weight;
    }
    // 暴露内部私有属性
    intro(){
        console.log(this.name)
        console.log(this.#age)
        console.log(this.#weight)
    }
}

const girl = new Person('Noi-q',11,'45kg');

girl.intro()
```

## Promise.allSettled

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const p1 = new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve('p1')
            },1000)
        })

        const p2 = new Promise(function(resolve, reject){
            setTimeout(function(){
                // resolve('p2')
                reject('出错了')
            },1000)
        })

        // Promise.allSettled   这个结果失败，Promise也是成功  
        const result = Promise.allSettled([p1,p2])
        console.log(result)
        // Promise.all  这个结果全部成功，Promise才为成功
        // const result = Promise.all([p1,p2])
        // console.log(result)
    </script>
</body>
</html>
```

## String.prototype.matchAll

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let str = `
        <ul>
            <li>
                <a>hello</a>
                <p>2021</p>
            </li>
            <li>
                <a>hello2</a>
                <p>2021_2</p>
            </li>
        </ul>`;
        // 声明正则
        const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/sg;
        const result = str.matchAll(reg);
        // for(let v of result) {
        //     console.log(v);
        // }
        const arr = [...result];
        console.log(arr);
    </script>
</body>
</html>
```

## 可选链操作符

```javascript
// ?.

function main(config) {
    // 输出参数里的db-host
    const dbHost = config?.db?.host
    console.log(dbHost)
}

main({
    db: {
        host: 'localhost',
        user: 'root',
    },
    cache: {
        host: 'localhost',
        user: 'root',
    }
})
```

## 动态import

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="btn">点我</button>
    <script src="src/js/index.js"></script>
</body>
</html>
```

```javascript
export function hello(){
    console.log("hello")
}
```

```javascript
// 获取元素
const btn = document.getElementById('btn');
btn.onclick = function() {
    // 动态import,返回的是一个Promise对象
    import('./mk.js').then(module=>{
        module.hello()
    })
}
```

## BigInt

```javascript

// 大整形
let n = 521n;
console.log(n,typeof n);

// 不能使用浮点数
let m = 123;
console.log(BigInt(m));

// 大数值运算
let max = Number.MAX_SAFE_INTEGER
console.log(max+2);
console.log(max+1);

console.log(BigInt(max) + BigInt(321))
```

## globalThis

```javascript
// 始终指向全局
console.log(globalThis)
```