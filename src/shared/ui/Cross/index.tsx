import styles from './style.module.scss'
import cn from 'classnames'

interface CrossProps {
	className?: string
	onClick: () => void
}

export default function Cross({
	className,
	onClick
}: CrossProps) {
	return (
		<button
			className={cn(styles.Cross, className)}
			onClick={onClick}
		></button>
	)
}
