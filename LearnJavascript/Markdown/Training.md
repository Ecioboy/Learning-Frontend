# Javascript练习题



##### 1.设圆半径80，计算周长？

```javascript
// 公式：2Πr
    // ##### 1.设圆半径80，计算周长？
    let r = 80;
    // Π
    let pai = 3.14;
    // 计算周长
    let zc = 2 * pai * r;
    console.log(zc)
```

##### 2.为抵抗洪水，战士连续作战89小时，编程计算共多少天零多少小时？

```javascript
// 24小时一天
let h = 89/24;
let d = 89%24;
//parseInt() 取整
console.log(parseInt(h));	//天
console.log(d);		//
console.log(parseInt(h) + "天,"+d+"小时");
```

##### 3.编程将华氏温度（80度）转换为摄氏度，并以华氏度和摄氏度为单位分别显示该温度？

```javascript
/* 摄氏度 = (华氏度 - 32°F) ÷ 1.8 
单位：
华氏：F
摄氏：C
*/
let hs = 80;
let ss = (80 - 32) / 1.8;
console.log("华氏温度：" + hs +"摄氏度："+ss);
```

##### 4.设90度的角度，转成弧度是多少？

```javascript
```

