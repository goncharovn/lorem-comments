import { useMemo } from 'react';
import styles from './style.module.scss'
import cn from 'classnames'

interface CommentHeaderProps {
	className?: string
	email?: string
}

function randomInteger(min: number, max: number) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

export default function CommentHeader({
	className,
	email
}: CommentHeaderProps) {
	const scoreValue = useMemo(() => randomInteger(1, 5), [])

	return (
		<div className={cn(styles.commentHeader, className)}>
			<span className={styles.commentHeader__email}>{email}</span>

			<div className={styles.commentHeader__score}>
				<span className={styles.commentHeader__scoreValue}>{scoreValue}</span>
				<img src="/public/images/star.svg" alt="" />
			</div>
		</div>
	)
}
