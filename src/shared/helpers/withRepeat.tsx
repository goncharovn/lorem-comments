import React from 'react'

export default function withRepeat(Component: React.FC, repeatCount: number) {
	return ([...Array(repeatCount)].map((_, index: number) => (
		<Component key={index} />
	)))
}
