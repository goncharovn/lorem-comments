import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import IComment from 'shared/interfaces/comment'
import IPhoto from 'shared/interfaces/photo'

export const api = createApi({
	reducerPath: 'JSONPlaceholderApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/'
	}),
	endpoints: builder => ({
		getComments: builder.query<IComment[], number>({
			query: (page = 1) => `comments?_page=${page}&_limit=3`,
		}),
		getPhotos: builder.query<IPhoto[], number>({
			query: (page = 1) => `photos?_page=${page}&_limit=3`,
		}),
	})
})

export const {
	useGetCommentsQuery,
	useGetPhotosQuery
} = api
