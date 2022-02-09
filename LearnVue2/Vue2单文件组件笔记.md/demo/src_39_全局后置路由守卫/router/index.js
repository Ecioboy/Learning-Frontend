// 该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
// 创建并暴露一个路由器
const router = new VueRouter({
    routes:[
        {
            name:'guanyu',
            path: '/about',
            component:About,
            meta:{
                title: 'About'
            }
        },
        {
            path: '/home',
            component:Home,
            meta:{
                title: 'Home'
            },
            children:[
                {
                    path: 'news',
                    component:News,
                    meta:{
                        isAuth:true,
                        title: 'News'
                    }
                },
                {
                    path: 'message',
                    component:Message,
                    meta:{
                        isAuth:true,
                        title: 'Message'
                    },
                    children:[
                        {
                            name:'xiangqing',
                            path: 'detail/:id/:title',
                            meta:{
                                title: '详情'
                            },
                            component:Detail,
                            // props的第一种写法,值为对象,该对象的所有key-value都会以props的形式传给Detail组件
                            /*
                            props:{
                                a:1,
                                b:2
                            }*/
                            // props的第二种写法，值为布尔值,若布尔值为真，就会把该路由组件收到的所有params参数，以props形式传给Detail组件
                            // props:true,
                            // props的第三种写法，值为函数
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            }
                        }
                    ]
                }
            ]
        },
    ]
});

// 全局前置路由守卫_每次路由切换之前被调用，初始化的时候会被调用
router.beforeEach((to,from,next)=>{
    console.log('前置路由守卫被调用',to,from,next)
    if(to.meta.isAuth){ //判断是否需要检权
        if(localStorage.getItem('school')==='vcal'){
            next()
        }else{
            alert('你没有权限！')
        }
    }else {
        next()
    }
})

// 全局后置路由守卫_每次路由切换之后被调用，初始化的时候会被调用
router.afterEach((to,from)=>{
    console.log('后置路由守卫被调用',to,from)
    document.title = to.meta.title || 'demo'
})

export default router