import Cross from 'shared/ui/Cross'
import styles from './style.module.scss'
import { KeyboardEvent } from 'react'
import FocusTrap from 'focus-trap-react'

interface ModalProps {
	isActive: boolean
	closeModal: () => void
	children: React.ReactNode
}

export default function Modal({
	children,
	isActive,
	closeModal
}: ModalProps) {
	if (!isActive) {
		return null
	}

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			closeModal()
		}
	}

	return (
		<FocusTrap>
			<div
				className={styles.modal}
				onClick={closeModal}
				onKeyDown={handleKeyDown}
				tabIndex={0}
			>
				<div className={styles.modal__dialog}>
					<div
						className={styles.modal__content}
						onClick={(e) => e.stopPropagation()}
					>
						{children}

						<Cross
							className={styles.modal__cross}
							onClick={closeModal}
						/>
					</div>
				</div>
			</div>
		</FocusTrap>
	)
}
