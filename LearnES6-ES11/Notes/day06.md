## 集合介绍与API

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
        // 声明一个set
        let s = new Set();
        let s2 = new Set(['1','2','3','4']);
        console.log(s,typeof s);
        console.log(s2)

        // 元素个数
        console.log(s2.size)
        // 添加新的元素
        s2.add('5')
        console.log(s2)
        // 删除元素
        s2.delete('2')
        console.log(s2)
        // 检测
        console.log(s2.has('1'))
        // 清空
        // s2.clear()
        // console.log(s2)

        for(let v of s2){
            console.log(v)
        }

    </script>
</body>
</html>
```

## 集合

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
        let arr = [1,2,3,4,5,4,3,2,1]
        // 1.数组去重
        // let result = [...new Set(arr)]
        // console.log(result)

        // 2.交集
        let arr2 = [4,5,6,5,6]
        // let result = [...new Set(arr)].filter(item =>{
        //     let s2 = new Set(arr2)
        //     if(s2.has(item)){
        //         return true
        //     }else{
        //         return false
        //     }
        // })

        // let result = [...new Set(arr)].filter(item => new Set(arr2).has(item))
        // console.log(result)

        // 3.并集
        // let union = [...new Set([...arr,...arr2])]
        // console.log(union)

        // 4.差集
        let diff = [...new Set(arr)].filter(item => !(new Set(arr2).has(item)))
        console.log(diff)
    </script>
</body>
</html>
```

## Map的介绍与API

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
        // 声明Map
        let m = new Map();

        // 添加元素
         m.set('name','Noi-q')
         m.set('age',function(){
             console.log('hello')
         })
         let key = {
             school: 'Student'
         }
         m.set(key,['a','c'])

        //  size
        console.log(m.size)

        // 删除
        m.delete('name')

        // 获取
        console.log(m.get('age'))

        // 清空
        m.clear()

        // 遍历
        for(let v of m){
            console.log(v)
        }
         console.log(m)
    </script>
</body>
</html>
```