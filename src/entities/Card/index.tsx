import styles from './style.module.scss'
import Comment from 'entities/Comment'
import IComment from 'shared/interfaces/comment'
import IPhoto from 'shared/interfaces/photo'

interface CardProps {
	comment: IComment
	photo: IPhoto
}

export default function Card({
	comment,
	photo
}: CardProps) {
	return (
		<article className={styles.card}>
			<img
				className={styles.card__img}
				src={photo?.url}
				alt={photo?.title}
			/>

			<Comment
				className={styles.card__comment}
				comment={comment}
			/>
		</article>
	)
}
