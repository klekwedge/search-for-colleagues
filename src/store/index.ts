import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        users: []
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users
        }
    },
    actions: {
        fetchUsers({ commit }) {
            return fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(users => {
                    commit('SET_USERS', users)
                })
        }
    },
    getters: {
        getUsers(state) {
            return state.users
        }
    }
})

export default store