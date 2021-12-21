// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 完整引用
// 引入ElementUi组件库
// import ElementUI from 'element-ui';
// 引入ElementUi的全部样式
// import 'element-ui/lib/theme-chalk/index.css';
// 应用ElementUi
// Vue.use(ElementUI);


// 按需引入
import { Button, Row, DatePicker } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);



// 关闭Vue的生产提示
Vue.config.productionTip = false


// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
})
