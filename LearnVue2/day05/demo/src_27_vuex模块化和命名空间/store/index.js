// 该文件用于Vuex创建核心store

// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

// 应用Vuex
Vue.use(Vuex)

// 人员管理相关的配置
const personOptions = {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit('')
            }
        }
    },
    mutations:{},
    state:{
        personList:[
            {id:'001',name:'张三'}
        ]
    },
    getters:{}
}

// 求和功能相关的配置
const countOptions = {
    namespaced: true,
    actions:{
        JOdd(context,value){
            if(context.state.sum % 2){
                context.commit('J',value);
            }
        },
        JWait(context,value){
            setTimeout(()=>{
                context.commit('J',value);
            },500)
        }
    },
    mutations:{
        J(state,value){
            // console.log(state,value);
            state.sum += value;
        },
        JN(state,value){
            // console.log(state,value);
            state.sum -= value;
        },
    },
    state:{
        sum:0,   //当前的和
        team:'VCaL',
        subject:'Web',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }
}



// 创建Store并导出Store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})
