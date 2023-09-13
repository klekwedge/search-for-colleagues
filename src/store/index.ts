import axios from 'axios';
import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        users: [],
        currentUser: null,
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users
        },
        SET_CURRENT_USER(state, userId) {
            state.currentUser = state.users.find(user => user.id === userId)
        }
    },
    actions: {
        fetchUsers({ commit }, inputValue) {
            return axios.get('https://jsonplaceholder.typicode.com/users', {
                params: {
                    name_like: inputValue
                }
            }).then(response => response.data).then(users => {
                commit('SET_USERS', users)
            })
        },
        changeCurrentUser({ commit }, userId) {
            commit('SET_CURRENT_USER', userId)
        }
    },
    getters: {
        getUsers(state) {
            return state.users
        },
        getCurrentUser(state) {
            return state.currentUser
        }
    }
})

export default store