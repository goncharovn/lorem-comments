import styles from './style.module.scss'
import cn from 'classnames'
import randomInteger from 'shared/helpers/randomInteger'

interface CommentHeaderProps {
	className?: string
	email: string
}

export default function CommentHeader({
	className,
	email
}: CommentHeaderProps) {
	const scoreValue = randomInteger(1, 5)

	return (
		<div className={cn(styles.CommentHeader, className)}>
			<span className={styles.CommentHeader__email}>{email}</span>

			<div className={styles.CommentHeader__score}>
				<span className={styles.CommentHeader__scoreValue}>{scoreValue}</span>
				<img src="/images/star.svg" alt="" />
			</div>
		</div>
	)
}
