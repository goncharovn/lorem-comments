import cn from 'classnames'
import styles from './style.module.scss'

interface InputProps {
	className?: string
	placeholder: string
	autoFocus?: boolean
}

export default function Input({
	className,
	placeholder,
	autoFocus
}: InputProps) {
	return (
		<div className={cn(styles.input, className)}>
			<input
				className={cn(styles.input__field)}
				type='text'
				autoFocus={autoFocus}
			/>
			<span className={styles.input__placeholder}>
				{placeholder}
			</span>
		</div>

	)
}
