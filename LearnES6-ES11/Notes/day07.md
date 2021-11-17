## class介绍与初步体验

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
        class Phone{
            // 构造方法 名字不能更改
            constructor(brand,price){
                this.brand = brand;
                this.price = price;
            }
            // 方法必须使用该语法，不能使用ES5的对象完整形式
            cpdd(){
                console.log("可以打给我吗")
            }
        }
        let onePlus = new Phone('1+',1000)
        onePlus.cpdd()
        console.log(onePlus)
    </script>
</body>
</html>
```

## class静态成员

```javascript
class Phone{
    // 静态属性
    static name = '手机'
    static change(){
        console.log('hello world')
    }
}
let nokia = new Phone();
console.log(nokia.name)
console.log(Phone.name)
```

## ES5对象继承

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
        // 父 手机
        function Phone(brand,price){
            this.brand = brand;
            this.price = price;
        }

        // 声明父类原型的方法
        Phone.prototype.call = function(){
            console.log('cpdd方法')
        }

        // 子 智能手机
        function SmartPhone(brand,price,color){
            Phone.call(this,brand,price)    // this.Phone(brand,price)
            this.color = color;
        }

        SmartPhone.prototype = new Phone();
        SmartPhone.prototype.constructor = SmartPhone;

        // 声明子类原型的方法
        SmartPhone.prototype.photo = function(){
            console.log("photo!!")
        }
        SmartPhone.prototype.play = function(){
            console.log("Play!!")
        }

        const cz = new SmartPhone('cz',1000,'black')
        console.log(cz)
    </script>
</body>
</html>
```

## 类继承

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
        class Phone{
            // 构造方法
            constructor(brand,price){
                this.brand = brand;
                this.price = price;
            }

            // 父类的成员属性
            call(){
                console.log('打电话')
            }
        }
        
        class SmartPhone extends Phone{
            // 构造方法
            constructor(brand, price,color){
                super(brand,price)
                this.color = color
            }

            photo(){
                console.log('拍照')
            }
            play(){
                console.log('玩游戏')
            }
        }
        const xm = new SmartPhone('小米',1999,'black')
        console.log(xm)
    </script>
</body>
</html>
```

## 重写


## getter和setter设置

```javascript
class Phone{
    get price(){
        console.log('被读取了')
        return 'price'
    }
    set price_set(a){
        console.log('set')
    }
}
let s = new Phone();
// console.log(s.price);
s.price_set = 'a'
```