import CardsContainer from 'widgets/CardsContainer'
import styles from './style.module.scss'
import Button from 'shared/ui/Button'

export default function Main() {
	return (
		<main
			className={styles.main}
		>
			<Button
				className={styles.main__button}
				text='Sign In'
				size='m'
				color='purple'
			/>
			<CardsContainer />
		</main>
	)
}
