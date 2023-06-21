import cn from 'classnames'
import styles from './style.module.scss'
import { ChangeEvent } from 'react'

interface InputProps {
	className?: string
	placeholder: string
	autoFocus?: boolean
	type: string
	required?: boolean
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	value: string
}

export default function Input({
	className,
	placeholder,
	autoFocus,
	type,
	required,
	onChange,
	value,
}: InputProps) {
	return (
		<div className={cn(styles.Input, className)}>
			<input
				className={cn(styles.Input__field, { [styles['Input__field--isFilled']]: Boolean(value) })}
				type={type}
				autoFocus={autoFocus}
				onChange={onChange}
				required={required}
				value={value}
			/>
			<span className={styles.Input__placeholder}>
				{placeholder}
			</span>
		</div>

	)
}
