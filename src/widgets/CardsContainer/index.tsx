import Cards from 'widgets/Cards'
import styles from './style.module.scss'
import Button from 'shared/ui/Button'

export default function CardsContainer() {
	return (
		<div className={styles.cardsContainer}>
			<Cards className={styles.cardsContainer__cards} />

			<Button
				className={styles.cardsContainer__button}
				text='More'
				size='m'
				color='purple'
			/>
		</div>
	)
}
