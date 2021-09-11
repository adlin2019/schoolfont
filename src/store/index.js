import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // 记录token状态
        token: null
    },
    mutations: {
        addToken (state,token) {
            state.token = token

        }
    },
    actions: {
        addToken({commit},token) {
            commit("addToken",token)
        }
    }
})

export default store
