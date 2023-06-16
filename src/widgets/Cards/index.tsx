import Card from 'entities/Card'
import styles from './style.module.scss'
import cn from 'classnames'

interface CardsProps {
	className?: string
}

export default function Cards({
	className
}: CardsProps) {
	return (
		<div className={cn(styles.cards, className)}>
			<Card />
			<Card />
			<Card />
		</div>
	)
}
