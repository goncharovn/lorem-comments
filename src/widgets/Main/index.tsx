import CardsContainer from 'widgets/CardsContainer'
import styles from './style.module.scss'
import Button from 'shared/ui/Button'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { openModal } from 'widgets/AuthModal/authModalSlice'
import FocusTrap from 'focus-trap-react'
import { selectIsSignedIn, signIn, signOut } from 'features/Auth/authSlice'

export default function Main() {
	const dispatch = useAppDispatch()

	const isSignedIn = useAppSelector(selectIsSignedIn)
	const isStorageSignedIn = JSON.parse(localStorage.getItem('isSignedIn') ?? 'false')

	if (isSignedIn === false && isStorageSignedIn === true) {
		dispatch(signIn())
	}

	let button
	if (!isSignedIn) {
		button =
			<Button
				className={styles.Main__button}
				text='Sign In'
				size='m'
				color='purple'
				onClick={() => dispatch(openModal())}
			/>
	} else {
		button =
			<Button
				className={styles.Main__button}
				text='Sign Out'
				size='m'
				color='purple'
				onClick={() => dispatch(signOut())}
			/>
	}

	return (
		<FocusTrap focusTrapOptions={{ initialFocus: false }} >
			<main
				className={styles.Main}
			>
				{button}
				<CardsContainer />
			</main>
		</FocusTrap>
	)
}
