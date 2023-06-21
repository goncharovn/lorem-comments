import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

const initialState = {
	isSignedIn: false
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signIn: (state, _action: PayloadAction<undefined>) => {
			state.isSignedIn = true
		},
		signOut: (state, _action: PayloadAction<undefined>) => {
			state.isSignedIn = false
		}
	}
})

export const { signIn, signOut } = authSlice.actions
export const selectIsSignedIn = (state: RootState) => state.auth.isSignedIn
export default authSlice.reducer
