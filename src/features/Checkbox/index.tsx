import { ChangeEvent } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'

interface CheckboxProps {
	className?: string
	text: string,
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	checked: boolean
}

export default function Checkbox({
	className,
	text,
	onChange,
	checked
}: CheckboxProps) {
	return (
		<>
			<label
				className={cn(styles.Checkbox, className)}
			>
				<input
					className={styles.hiddenInput}
					type='checkbox'
					onChange={onChange}
					checked={checked}
				/>
				{text}
			</label>
		</>
	)
}
