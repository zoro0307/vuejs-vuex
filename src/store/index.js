import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storeData = {
    state: {
        todos: [
            {
                id: 1,
                title: 'Title1',
                completed: true,
            },
            {
                id: 2,
                title: 'Title2',
                completed: false,
            },
            {
                id: 3,
                title: 'Title3',
                completed: true,
            },
            {
                id: 4,
                title: 'Title4',
                completed: false,
            },
        ],
        auth: {
            isAuthenticated: false,
        },
    },
    getters: {
        doneTodos: state => state.todos.filter(todo => todo.completed),
        progress: (state, getters) => {
            const doneTodos = getters.doneTodos
            return Math.round((doneTodos.length / state.todos.length) * 100)
        },
    },
    mutations: {
        TOGGLE_AUTH(state) {
            state.auth.isAuthenticated = !state.auth.isAuthenticated
        },
        TOGGLE_COMPLETED(state, todoId) {
            state.todos.map(todo => {
                if (todo.id === todoId) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        },
    },
}

const store = new Vuex.Store(storeData)

export default store
