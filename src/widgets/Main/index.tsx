import CardsContainer from 'widgets/CardsContainer'
import styles from './style.module.scss'
import Button from 'shared/ui/Button'
import { useAppDispatch } from 'app/hooks'
import { openModal } from 'features/Auth/authModalSlice'
import FocusTrap from 'focus-trap-react'

export default function Main() {
	const dispatch = useAppDispatch()

	return (
		<FocusTrap>
			<main
				className={styles.main}
			>
				<Button
					className={styles.main__button}
					text='Sign In'
					size='m'
					color='purple'
					onClick={() => dispatch(openModal())}
				/>
				<CardsContainer />
			</main>
		</FocusTrap>
	)
}
