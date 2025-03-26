import * as yup from 'yup';

export const createPostSchema = yup
	.object({
		title: yup.string().required('Title is required'),
		author: yup.string().required('Author is required'),
		body: yup.string().required('Body is required'),
	})
	.required();
