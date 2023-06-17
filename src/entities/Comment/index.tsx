import CommentHeader from 'entities/CommentHeader'
import styles from './style.module.scss'
import Button from 'shared/ui/Button'
import cn from 'classnames'
import IComment from 'shared/interfaces/comment'

interface CommentProps {
	className?: string
	comment: IComment
}

export default function Comment({
	className,
	comment
}: CommentProps) {
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
