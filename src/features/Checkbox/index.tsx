import styles from './style.module.scss'
import cn from 'classnames'

interface CheckboxProps {
	className?: string
	text: string
}

export default function Checkbox({
	className,
	text
}: CheckboxProps) {
	return (
		<>
			<input
				className={styles.hiddenInput}
				type='checkbox'
				id='remember'
			/>

			<label
				className={cn(styles.checkbox, className)}
				htmlFor='remember'
			>
				{text}
			</label>
		</>
	)
}
