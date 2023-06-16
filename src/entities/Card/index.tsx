import styles from './style.module.scss'
import Comment from 'entities/Comment'

export default function Card() {
	return (
		<article className={styles.card}>
			<img
				className={styles.card__img}
				src="https://via.placeholder.com/600/771796"
				alt="reprehenderit est deserunt velit ipsam"
			/>

			<Comment
				className={styles.card__comment}
			/>
		</article>
	)
}
