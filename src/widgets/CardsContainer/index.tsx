import Cards from 'widgets/Cards'
import styles from './style.module.scss'
import Button from 'shared/ui/Button'
import { useState } from 'react'

export default function CardsContainer() {
	const [page, setPage] = useState(1)

	const loadMore = () => {
		setPage((prevPage) => ++prevPage)
	}

	return (
		<div className={styles.cardsContainer}>
			<Cards
				className={styles.cardsContainer__cards}
				page={page}
			/>

			<Button
				className={styles.cardsContainer__button}
				text='More'
				size='m'
				color='purple'
				onClick={loadMore}
			/>
		</div>
	)
}
