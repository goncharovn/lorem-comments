import Button from 'shared/ui/Button'
import styles from './style.module.scss'
import Input from 'features/Input'
import Modal from 'widgets/Modal'
import Checkbox from 'features/Checkbox'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { closeModal, selectIsActive } from 'features/Auth/authModalSlice'

export default function Auth() {
	const isAuthModalActive = useAppSelector(selectIsActive)
	const dispatch = useAppDispatch()

	return (
		<Modal
			isActive={isAuthModalActive}
			closeModal={() => dispatch(closeModal())}
		>
			<form className={styles.Auth}>
				<h2 className={styles.Auth__header}>Authorization</h2>

				<Input
					className={styles.Auth__login}
					placeholder='Login'
					autoFocus={true}
				/>

				<Input
					className={styles.Auth__password}
					placeholder='Password'
				/>

				<Checkbox
					className={styles.Auth__checkbox}
					text='Remember me on next login'
				/>

				<Button
					className={styles.Auth__button}
					text='Sign In'
					size='s'
					color='purple'
				/>
			</form>
		</Modal>
	)
}
