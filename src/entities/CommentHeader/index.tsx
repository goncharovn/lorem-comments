import styles from './style.module.scss'
import cn from 'classnames'

interface CommentHeaderProps {
	className?: string
}

export default function CommentHeader({
	className
}: CommentHeaderProps) {
	return (
		<div className={cn(styles.commentHeader, className)}>
			<span className={styles.commentHeader__email}>Eliseo@gardner.biz</span>

			<div className={styles.commentHeader__score}>
				<span className={styles.commentHeader__scoreValue}>5</span>
				<img src="/public/images/star.svg" alt="" />
			</div>
		</div>
	)
}
