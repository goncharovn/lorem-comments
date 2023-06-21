import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { useEffect, useState } from 'react'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useMount = ({ isActive, duration }: { isActive: boolean, duration: number }) => {
	const [mounted, setMounted] = useState(false)
	useEffect(() => {
		if (isActive && !mounted) {
			setMounted(true)
		} else if (!isActive && mounted) {
			setTimeout(() => {
				setMounted(false)
			}, duration);
		}
	}, [isActive])

	return { mounted }
}
