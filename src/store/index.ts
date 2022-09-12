import { configureStore, combineReducers } from '@reduxjs/toolkit'
import usersReducer from './reducers'

const store = configureStore({
  reducer: combineReducers({
    users: usersReducer,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
