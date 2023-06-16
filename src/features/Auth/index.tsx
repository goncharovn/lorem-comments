import Button from 'shared/ui/Button'
import styles from './style.module.scss'
import Input from 'features/Input'
import Modal from 'widgets/Modal'
import Checkbox from 'features/Checkbox'
import Cross from 'shared/ui/Cross'

export default function Auth() {
	return (
		<Modal>
			<h2 className={styles.auth__header}>Authorization</h2>

			<Input
				className={styles.auth__password}
				placeholder='Password'
			/>

			<Input
				className={styles.auth__login}
				placeholder='Login'
			/>

			<Checkbox
				className={styles.auth__checkbox}
				text='Remember me on next login'
			/>

			<Button
				className={styles.auth__button}
				text='Sign In'
				size='s'
				color='purple'
			/>

			<Cross
				className={styles.auth__cross}
			/>
		</Modal>
	)
}
