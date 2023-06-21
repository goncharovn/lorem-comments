import styles from './style.module.scss'
import Comment from 'entities/Comment'
import IComment from 'shared/interfaces/comment'
import IPhoto from 'shared/interfaces/photo'
import React from 'react'

interface CardProps {
	comment: IComment
	photo: IPhoto
}

export default React.memo(function Card({
	comment,
	photo
}: CardProps) {
	return (
		<article
			className={styles.Card}
			tabIndex={0}
		>
			<img
				className={styles.Card__img}
				src={photo.url}
				alt={photo.title}
			/>

			<Comment
				className={styles.Card__comment}
				comment={comment}
			/>
		</article>
	)
})
