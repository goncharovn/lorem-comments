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
				className={styles.Modal}
				onClick={closeModal}
				onKeyDown={handleKeyDown}
				tabIndex={0}
			>
				<div className={styles.Modal__dialog}>
					<div
						className={styles.Modal__content}
						onClick={(e) => e.stopPropagation()}
					>
						{children}

						<Cross
							className={styles.Modal__cross}
							onClick={closeModal}
						/>
					</div>
				</div>
			</div>
		</FocusTrap>
	)
}
