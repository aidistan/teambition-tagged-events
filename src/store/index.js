import Vue from 'vue'
import Vuex from 'vuex'
import qs from 'querystring'
import * as actions from './actions'
import { version } from '../../package.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    version,
    configs: { _task: {} },

    status: null,
    spinner: false,
    params: qs.parse(window.location.search.substr(1)),

    events: [],
    members: {},
    memberTeams: {},
    resources: {},
    resourceLevels: []
  },
  mutations: {
    SPINNER (state, { ifShow }) {
      state.spinner = ifShow
    },
    STATUS (state, status) {
      state.status = status
    },
    DATA (state, data) {
      state.events = data.events
      state.members = data.members
      state.memberTeams = data.memberTeams
      state.resources = data.resources
      state.resourceLevels = data.resourceLevels
    },
    CONFIGS (state, data) {
      state.configs = data
    }
  },
  actions
})
