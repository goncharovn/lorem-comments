import Card from 'entities/Card'
import styles from './style.module.scss'
import cn from 'classnames'
import { useGetCommentsQuery, useGetPhotosQuery } from 'app/api'
import Comment from 'shared/interfaces/comment'

interface CardsProps {
	className?: string
	visibleCount: number
}

export default function Cards({
	className,
	visibleCount
}: CardsProps) {

	const {
		data: comments,
	} = useGetCommentsQuery()

	useGetPhotosQuery()

	return (
		<div className={cn(styles.cards, className)}>
			{comments?.slice(0, visibleCount)?.map((comment: Comment) => (
				<Card key={comment.id} id={comment.id} />
			))}
		</div>
	)
}
