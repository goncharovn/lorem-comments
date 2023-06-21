import Card from 'entities/Card'
import styles from './style.module.scss'
import cn from 'classnames'
import CardPreloader from 'widgets/CardPreloader'
import withRepeat from 'shared/helpers/withRepeat'
import useCardsData from './useCardsData'

interface CardsProps {
	className?: string
	page: number
}

const baseURL = 'https://jsonplaceholder.typicode.com/'
const limit = 3

export default function Cards({
	className,
	page
}: CardsProps) {
	const { data, isFetching } = useCardsData(page, baseURL, limit);

	return (
		<div className={cn(styles.Cards, className)}>
			{data.map((value) => (
				<Card
					key={value.comment.id}
					comment={value.comment}
					photo={value.photo}
				/>
			))}

			{isFetching &&
				<>
					{withRepeat(CardPreloader, limit)}
				</>
			}
		</div>
	)
}
