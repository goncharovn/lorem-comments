import cn from 'classnames'
import styles from './style.module.scss'

interface InputProps {
	className?: string
	placeholder: string
}

export default function Input({
	className,
	placeholder,
}: InputProps) {
	return (
		<div className={cn(styles.input, className)}>
			<input
				className={cn(styles.input__field)}
				type='text'
			/>
			<span className={styles.input__placeholder}>
				{placeholder}
			</span>
		</div>

	)
}
