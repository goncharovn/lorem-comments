import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

const initialState = {
	isActive: false
}

const authModalSlice = createSlice({
	name: 'authModal',
	initialState,
	reducers: {
		openModal: (state, _action: PayloadAction<undefined>) => {
			state.isActive = true
			document.body.classList.add('Page--modal--active')
		},
		closeModal: (state, _action: PayloadAction<undefined>) => {
			state.isActive = false
			document.body.classList.remove('Page--modal--active')
		}
	}
})

export const { openModal, closeModal } = authModalSlice.actions
export const selectIsActive = (state: RootState) => state.authModal.isActive
export default authModalSlice.reducer
