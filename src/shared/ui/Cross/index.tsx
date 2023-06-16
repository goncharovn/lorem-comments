import styles from './style.module.scss'
import cn from 'classnames'

interface CrossProps {
	className?: string
}

export default function Cross({
	className
}: CrossProps) {
	return (
		<div className={cn(styles.cross, className)}></div>
	)
}
