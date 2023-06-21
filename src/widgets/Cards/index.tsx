import Card from 'entities/Card'
import styles from './style.module.scss'
import cn from 'classnames'
import { useEffect, useState } from 'react'
import IComment from 'shared/interfaces/comment'
import IPhoto from 'shared/interfaces/photo'
import ICardData from 'shared/interfaces/cardData'
import CardPreloader from 'widgets/CardPreloader'
import withRepeat from 'shared/helpers/withRepeat'

interface CardsProps {
	className?: string
	page: number
}

const baseURL = 'https://jsonplaceholder.typicode.com/'
const limit = 3

export default function Cards({
	className,
	page
}: CardsProps) {
	const [data, setData] = useState<ICardData[]>([])
	const [isFetching, setIsFetching] = useState(false)
	const [isError, setError] = useState(false)

	useEffect(() => {
		const getCardData = async () => {
			setIsFetching(true)

			try {
				const responseComments = await fetch(`${baseURL}comments?_page=${page}&_limit=${limit}`)
				const comments: IComment[] = await responseComments.json()

				const responsePhotos = await fetch(`${baseURL}photos?_page=${page}&_limit=${limit}`)
				const photos: IPhoto[] = await responsePhotos.json()

				const data: ICardData[] = comments.map((comment: IComment, index: number) => {
					return {
						comment: comment,
						photo: photos[index]
					}
				})

				setData(prevData => [...prevData, ...data])
			}
			catch (error) {
				setError(true)

				if (error instanceof Error) {
					console.log(error.message)
				} else {
					console.log(`Unexpected error ${error}`)
				}
			}
			finally {
				setIsFetching(false)
			}
		}

		getCardData()
	}, [page])

	return (
		<div className={cn(styles.Cards, className)}>
			{data.map((value) => (
				<Card
					key={value.comment.id}
					comment={value.comment}
					photo={value.photo}
				/>
			))}

			{isFetching &&
				<>
					{withRepeat(CardPreloader, limit)}
				</>
			}
		</div>
	)
}
