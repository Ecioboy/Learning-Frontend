// 该文件用于Vuex创建核心store

// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

// 应用Vuex
Vue.use(Vuex)

// actions-用于响应组件中的动作
const actions = {
    /*
    J(context,value){
        context.commit('J',value);
    },
    JN(context,value){
        context.commit('JN',value);
    },
    */
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
}

// mutations-用于操作数据
const mutations = {
    J(state,value){
        // console.log(state,value);
        state.sum += value;
    },
    JN(state,value){
        // console.log(state,value);
        state.sum -= value;
    },
}

// state-用于存储数据
const state = {
    sum:0,   //当前的和
    team:'VCaL',
    subject:'Web'
}

// 准备getters-用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

// 创建Store并导出Store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
