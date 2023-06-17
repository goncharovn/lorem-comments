import Card from 'entities/Card'
import styles from './style.module.scss'
import cn from 'classnames'
import { useGetCommentsQuery, useGetPhotosQuery } from 'app/api'
import { useEffect, useState } from 'react'
import IComment from 'shared/interfaces/comment'
import IPhoto from 'shared/interfaces/photo'

interface CardsProps {
	className?: string
	page: number
}

export default function Cards({
	className,
	page
}: CardsProps) {
	const [commentsData, setCommentsData] = useState<IComment[]>([])
	const [photosData, setPhotosData] = useState<IPhoto[]>([])

	const { data: comments, isFetching: isCommentsFetching } = useGetCommentsQuery(page)
	const { data: photos, isFetching: isPhotosFetching } = useGetPhotosQuery(page)

	useEffect(() => {
		if (comments) {
			setCommentsData(commentsData => [...commentsData, ...comments])
		}
	}, [comments])

	useEffect(() => {
		if (photos) {
			setPhotosData(photosData => [...photosData, ...photos])
		}
	}, [photos])

	return (
		<div className={cn(styles.cards, className)}>
			{commentsData.map((comment, index) => (
				<Card
					key={comment.id}
					comment={comment}
					photo={photosData[index]}
				/>
			))}

			{(isCommentsFetching || isPhotosFetching) && <div style={{ color: 'white' }}>Preloader</div>}
		</div>
	)
}
