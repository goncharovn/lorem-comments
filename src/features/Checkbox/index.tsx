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
			<label
				className={cn(styles.Checkbox, className)}
			>
				<input
					className={styles.hiddenInput}
					type='checkbox'
				/>
				{text}
			</label>
		</>
	)
}
