import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {Message} from 'element-ui'


export default new Vuex.Store({
  state: {
    starItems: [],
    staritemsId: []
  },
  mutations: {

    // 添加喜欢的电影
    addStarItems(state, param) {
      if (state.staritemsId.indexOf(param.id) !== -1) {
        return  Message({
          message: '已经添加过 id 为 ' + param.id + '了哦！',
          type:'warning'
        })
      }
      state.starItems.push(param.item)
      state.staritemsId.push(param.id)
    }
  },
  actions: {
    addStarItemsFun(context, param) {

      return context.commit('addStarItems', param)
    }
  },
  modules: {

  }
})

