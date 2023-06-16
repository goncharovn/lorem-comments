import styles from './style.module.scss'
import cn from 'classnames'

interface IButtonProps {
	className?: string
	text: string
	size: string
	color: string
	onClick?: (arg: any) => any
}

export default function Button({
	className,
	text,
	size,
	color,
	onClick
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
			onClick={onClick}
		>
			{text}
		</button>
	)
}
