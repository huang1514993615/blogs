import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    str:false,
    count:false
  },
  getters:{//时时监听state值的变化
    getstr:state=>{
      return  state.str
    }
  },
  mutations:{//唯一允许更改state
    fan(state){
      console.log('vuex函数执行了',state.str);
      state.str= !state.str
    },
    add(state){
      console.log('vuex函数执行了',state.str);
      state.count=!state.count
    }
  },
  // actions:{
  //   add(context){
  //     context.commit("fan")
  //   }
  // }
});
 
export default store;