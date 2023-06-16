import styles from './style.module.scss'
import cn from 'classnames'

interface IButtonProps {
	className?: string
	text: string
	size: string
	color: string
}

export default function Button({
	className,
	text,
	size,
	color
}: IButtonProps) {
	return (
		<button
			className={
				cn(
					styles.button,
					{ [styles[`button--size--${size}`]]: size },
					{ [styles[`button--${color}`]]: color },
					className
				)
			}
		>
			{text}
		</button>
	)
}
