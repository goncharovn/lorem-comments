import { FormEvent, useState } from 'react'
import styles from './style.module.scss'
import { closeModal } from 'widgets/AuthModal/authModalSlice'
import { useAppDispatch } from 'app/hooks'
import Input from 'features/Input'
import Checkbox from 'features/Checkbox'
import Button from 'shared/ui/Button'

export default function Auth() {
	const dispatch = useAppDispatch()

	const [login, setLogin] = useState(localStorage.getItem('login') ?? '')
	const [password, setPassword] = useState('')
	const [isRemembered, setIsRemembered] = useState(false)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (isRemembered) {
			localStorage.setItem('login', login)
		}

		dispatch(closeModal())
	}

	return (
		<form
			className={styles.Auth}
			onSubmit={handleSubmit}
		>
			<h2 className={styles.Auth__header}>Authorization</h2>

			<Input
				className={styles.Auth__login}
				placeholder='Login'
				autoFocus={true}
				type='text'
				required={true}
				onChange={(e) => setLogin(e.target.value)}
				value={login}
				name='login'
			/>

			<Input
				className={styles.Auth__password}
				placeholder='Password'
				type='password'
				required={true}
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				name='password'
			/>

			<Checkbox
				className={styles.Auth__checkbox}
				text='Remember me on next login'
				onChange={(e) => setIsRemembered(e.target.checked)}
				checked={isRemembered}
				name='remembered'
			/>

			<Button
				className={styles.Auth__button}
				text='Sign In'
				size='s'
				color='purple'
			/>
		</form>
	)
}
