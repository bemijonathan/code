import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    values: {},
    unit: {}
  },
  mutations: {
    addTotal(state, payload) {
      Object.assign(state.values, payload);
    },
    unit(state, payload) {
      Object.assign(state.unit, payload);
    },
    clear(state) {
      state.unit = {
        1: 0
      };
      state.values = {
        1: 0
      };
    }
  },
  getters: {
    total(state) {
      // var totalunit = () => Object.values(state.unit).reduce((a, b) => a + b);

      var a = () =>
        Object.values(state.unit).reduce((a, b) => parseInt(a) + parseInt(b));

      var b = () =>
        Object.values(state.values).reduce((a, b) => parseInt(a) + parseInt(b));

      return b() / a();
    }
  }
});

export default store;
