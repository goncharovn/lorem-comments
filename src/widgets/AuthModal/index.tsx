import Modal from 'widgets/Modal'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { closeModal, selectIsActive } from 'widgets/AuthModal/authModalSlice'
import Auth from 'features/Auth'

export default function AuthModal() {
	const isAuthModalActive = useAppSelector(selectIsActive)
	const dispatch = useAppDispatch()

	return (
		<Modal
			isActive={isAuthModalActive}
			closeModal={() => dispatch(closeModal())}
		>
			<Auth />
		</Modal>
	)
}
