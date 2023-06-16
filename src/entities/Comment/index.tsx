import CommentHeader from 'entities/CommentHeader'
import styles from './style.module.scss'
import Button from 'shared/ui/Button'
import cn from 'classnames'
import { api } from 'app/api'

interface CommentProps {
	className?: string
	id: number
}

export default function Comment({
	className,
	id
}: CommentProps) {
	const { comment } = api.useGetCommentsQuery(undefined, {
		selectFromResult: ({ data }) => ({
			comment: data?.find((comment) => comment.id === id),
		}),
	})

	return (
		<div className={cn(styles.comment, className)}>
			<CommentHeader
				className={styles.comment__header}
				email={comment?.email}
			/>

			<p className={styles.comment__text}>{comment?.body}</p>

			<Button
				className={styles.comment__button}
				text='Visit Comment'
				size='m'
				color='purple'
			/>
		</div>
	)
}
