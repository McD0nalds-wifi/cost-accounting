import { store } from './store'
export { store }

export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch
