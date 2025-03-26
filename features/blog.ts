import { Post } from '@/types';
import { axiosBaseQuery } from '@/utils';
import { createApi } from '@reduxjs/toolkit/query/react';

export const blogApi = createApi({
	reducerPath: 'blogApi',
	baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_INSTANCE! }),
	tagTypes: ['Post'],
	endpoints: builder => ({
		getPosts: builder.query<Post[], { page: number; limit?: number }>({
			query: ({ page, limit = 10 }) => ({
				url: '/posts',
				method: 'get',
				params: { limit, page },
			}),
			providesTags: (result = [], error, arg) => [
				...result.map(({ id }) => ({ type: 'Post' as const, id })),
				{ type: 'Post', id: 'LIST' },
			],
		}),
		getPost: builder.query<Post, number>({
			query: id => ({ url: `/posts/${id}`, method: 'get' }),
			providesTags: (result, error, id) => [{ type: 'Post', id }],
		}),
		createPost: builder.mutation<Post, Partial<Post>>({
			query: body => ({ url: '/posts', method: 'post', data: body }),
			invalidatesTags: [{ type: 'Post', id: 'LIST' }],
		}),
	}),
});

export const { useGetPostsQuery, useGetPostQuery, useCreatePostMutation } = blogApi;
