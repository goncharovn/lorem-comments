import Cross from 'shared/ui/Cross'
import styles from './style.module.scss'
import { KeyboardEvent } from 'react'
import FocusTrap from 'focus-trap-react'
import cn from 'classnames'
import { useMount } from 'app/hooks'
import { MODAL_ANIMATION_DURATION } from 'shared/constants'

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
	const { mounted } = useMount({ isActive, duration: MODAL_ANIMATION_DURATION })

	if (!mounted) {
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
				className={cn(styles.Modal, { [styles['Modal--active']]: isActive })}
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
