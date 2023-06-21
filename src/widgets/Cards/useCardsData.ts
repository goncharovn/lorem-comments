import { useEffect, useState } from 'react'
import ICardData from 'shared/interfaces/cardData'
import IComment from 'shared/interfaces/comment'
import IPhoto from 'shared/interfaces/photo'

const useCardData = (page: number, baseURL: string, limit: number) => {
  const [data, setData] = useState<ICardData[]>([])
  const [isFetching, setIsFetching] = useState(false)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true)

      try {
        const responseComments = await fetch(
          `${baseURL}comments?_page=${page}&_limit=${limit}`
        )
        const comments: IComment[] = await responseComments.json()

        const responsePhotos = await fetch(
          `${baseURL}photos?_page=${page}&_limit=${limit}`
        )
        const photos: IPhoto[] = await responsePhotos.json()

        const newData: ICardData[] = comments.map(
          (comment: IComment, index: number) => ({
            comment,
            photo: photos[index],
          })
        )

        setData((prevData) => [...prevData, ...newData])
      } catch (error) {
        setError(true)
        console.error(
          error instanceof Error ? error.message : `Unexpected error ${error}`
        )
      } finally {
        setIsFetching(false)
      }
    }

    fetchData()
  }, [page])

  return { data, isFetching, isError }
}

export default useCardData
