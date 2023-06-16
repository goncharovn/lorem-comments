import { api } from 'app/api'
import styles from './style.module.scss'
import Comment from 'entities/Comment'

interface CardProps {
	id: number
}

export default function Card({
	id
}: CardProps) {
	const { photo } = api.useGetPhotosQuery(undefined, {
		selectFromResult: ({ data }) => ({
			photo: data?.find((photo) => photo.id === id),
		}),
	})

	return (
		<article className={styles.card}>
			<img
				className={styles.card__img}
				src={photo?.url}
				alt={photo?.title}
			/>

			<Comment
				className={styles.card__comment}
				id={id}
			/>
		</article>
	)
}
