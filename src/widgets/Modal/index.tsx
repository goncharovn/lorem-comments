import styles from './style.module.scss'

interface ModalProps {
	children: React.ReactNode
}

export default function Modal({
	children
}: ModalProps) {
	return (
		<div className={styles.modal}>
			<div className={styles.modal__dialog}>
				<div className={styles.modal__content}>
					{children}
				</div>
			</div>
		</div>
	)
}
