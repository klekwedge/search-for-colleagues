import axios from 'axios';
import { createStore } from 'vuex'
import { IUser } from '../types';

interface State {
    users: IUser[];
    currentUser: IUser | null
}

const store = createStore<State>({
    state: {
        users: [],
        currentUser: null,
        // isLoading: 'idle'
    },
    mutations: {
        SET_USERS(state: State, users: IUser[]) {
            state.users = users
        },
        SET_CURRENT_USER(state: State, userId: number) {
            state.currentUser = state.users.find(user => user.id === userId) || null
        },
        // SET_LOADING(state, value) {
        //     state.isLoading = value
        // }
    },
    actions: {
        fetchUsers({ commit }: { commit: Function }, inputValue: string) {
            // commit('SET_LOADING', 'loading')

            return axios.get('https://jsonplaceholder.typicode.com/users', {
                params: {
                    name_like: inputValue
                }
            }).then(response => response.data).then(users => {
                commit('SET_USERS', users)
            }).catch(e => console.log(e))
        },
        changeCurrentUser({ commit }: { commit: Function }, userId: number) {
            commit('SET_CURRENT_USER', userId)
        }
    },
    getters: {
        getUsers(state: State) {
            return state.users
        },
        getCurrentUser(state: State) {
            return state.currentUser
        }
    }
})

export default store