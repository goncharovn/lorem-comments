import Cards from 'widgets/Cards'
import styles from './style.module.scss'
import Button from 'shared/ui/Button'
import { useState } from 'react'

export default function CardsContainer() {
	const [visibleCount, setVisibleCount] = useState(3)

	const showMoreCards = () => {
		setVisibleCount(prevCount => prevCount + 3)
		console.log(visibleCount)
	}

	return (
		<div className={styles.cardsContainer}>
			<Cards
				className={styles.cardsContainer__cards}
				visibleCount={visibleCount}
			/>

			<Button
				className={styles.cardsContainer__button}
				text='More'
				size='m'
				color='purple'
				onClick={showMoreCards}
			/>
		</div>
	)
}
