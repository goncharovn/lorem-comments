import CommentHeader from 'entities/CommentHeader'
import styles from './style.module.scss'
import Button from 'shared/ui/Button'
import cn from 'classnames'

interface CommentProps {
	className?: string
}

export default function Comment({
	className
}: CommentProps) {
	return (
		<div className={cn(styles.comment, className)}>
			<CommentHeader className={styles.comment__header} />

			<p className={styles.comment__text}>laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium</p>

			<Button
				className={styles.comment__button}
				text='Visit Comment'
				size='m'
				color='purple'
			/>
		</div>
	)
}
