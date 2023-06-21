import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import authModalReducer from 'widgets/AuthModal/authModalSlice'
import authReducer from 'features/Auth/authSlice'

const rootReducer = combineReducers({
	authModal: authModalReducer,
	auth: authReducer
})

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
