import { ChangeEvent } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'

interface CheckboxProps {
	className?: string
	text: string,
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	checked: boolean
	name: string
}

export default function Checkbox({
	className,
	text,
	onChange,
	checked,
	name
}: CheckboxProps) {
	return (
		<>
			<input
				className={styles.hiddenInput}
				type='checkbox'
				onChange={onChange}
				checked={checked}
				id='hiddenInput'
				name={name}
			/>

			<label
				className={cn(
					styles.Checkbox,
					className
				)}
				htmlFor='hiddenInput'
			>
				{text}
			</label>
		</>
	)
}
