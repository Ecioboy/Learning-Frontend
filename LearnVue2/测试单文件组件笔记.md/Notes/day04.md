## 单文件组件

App.vue

```vue
<template>
  <div>
      <Team></Team>
      <Student></Student>
  </div>
</template>

<script>

    // 引入组件
    import Student from './Student.vue'
    import Team from './Team.vue'

    export default {
        name:'App',
        components:{
            Team,
            Student
        }
    }
</script>
```

Team.vue

```vue
<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>团队名：{{name}}</h2>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据，方法...）
    export default {
        name:'Team',
        data(){
            return {
                name: 'VCaL'
            }
        }
    }
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color:orange;
    }
</style>
```

Student.vue

```vue
<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据，方法...）
    export default {
        name:'Student',
        data(){
            return {
                name: 'Ecioboy',
                age: 18
            }
        }
    }
</script>
```

main.js

```javascript
import App from './App.vue'

new Vue({
    el:'#root',
    components:{App}
})
```

index.html

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title></title>
		
	</head>

	<body>
		<!-- 容器 -->
		<div id="root">
			<App></App>
		</div>
		<script src="js/vue.js"></script>
		<script src="./main.js"></script>
	</body>
	
	<script type="text/javascript">
		Vue.config.productionTip = false
	</script>
	
</html>
```