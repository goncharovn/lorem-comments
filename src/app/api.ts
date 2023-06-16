import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Comment from 'shared/interfaces/comment'
import Photo from 'shared/interfaces/photo'

export const api = createApi({
	reducerPath: 'JSONPlaceholderApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/'
	}),
	endpoints: builder => ({
		getComments: builder.query<Comment[], void>({
			query: () => ({
				url: `/comments`,
			})
		}),
		getPhotos: builder.query<Photo[], void>({
			query: () => ({
				url: `/photos`,
			})
		}),
	})
})

export const {
	useGetCommentsQuery,
	useGetPhotosQuery
} = api
