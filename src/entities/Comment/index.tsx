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
		<div className={cn(styles.Comment, className)}>
			<CommentHeader
				className={styles.Comment__header}
				email={comment.email}
			/>

			<p className={styles.Comment__text}>{comment.body}</p>

			<Button
				className={styles.Comment__button}
				text='Visit Comment'
				size='m'
				color='purple'
			/>
		</div>
	)
}
