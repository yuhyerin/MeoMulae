import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import SERVER from '@/api/url'
import VueRouter from 'vue-router'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: 1,
    // authToken: ,
    userMbti: '',
    dogMbti: '',
    survey: [0, 0, 0, 0],
    selected: 'false'
  },

  // state를 (가공해서) 가져올 함수들 === computed
  getters: {
    // config: state => ({ headers: {Auturization: }})
  },

  // state 변경하는 함수들, 동기적으로 동작, commit을 통해 실행
  mutations: {
    selectedUserMbti(state, userMbti) {
      state.userMbti = userMbti
      state.page += 1
    },

    selectedDogMbti(state, payload) {
      state.survey[payload.idx] += payload.answer
      state.page += 1
      // if(state.page == 10) {
      //   router.push({ name: 'Stepper'})
      // }
      // else {
      //   state.survey[payload.idx] += payload.answer
      //   state.page += 1
      // }
    },

    whatIsDogMbti(state) {
      state.survey[0] > 0 ? state.dogMbti += 'E' : state.dogMbti += 'Q';
      state.survey[1] > 0 ? state.dogMbti += 'S' : state.dogMbti += 'I';
      state.survey[2] > 0 ? state.dogMbti += 'W' : state.dogMbti += 'A';
      state.survey[3] > 0 ? state.dogMbti += 'F' : state.dogMbti += 'C';
    },

    goPage(state, pageNum) {
      state.page = pageNum
      // state.survey[] = 0
    }
  },

  // mutations에서 정의한 함수를 actions에서 실행 가능, 비동기 로직, dispatch
  actions: {
    submitSurvey({ commit }, info) {
      commit('whatIsDogMbti', info.survey)
      axios.post(SERVER.URL + SERVER.submitSurvey)
    }
  },
  modules: {
  }
})
