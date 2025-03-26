import { useCreatePostMutation } from '@/features/blog';
import { FormValues } from '@/types';
import { useSnackbar } from 'notistack';

export const useCreatePost = (onSuccess?: () => void, resetFn?: () => void) => {
	const { enqueueSnackbar } = useSnackbar();
	const [createPost, { isLoading }] = useCreatePostMutation();

	const onSubmit = async (data: FormValues) => {
		try {
			await createPost(data).unwrap();
			enqueueSnackbar('Post created successfully!', { variant: 'success' });
			if (resetFn) resetFn();
			if (onSuccess) onSuccess();
		} catch (error) {
			const err = error as { status: number; data: string };
			enqueueSnackbar(err.data, { variant: 'error' });
		}
	};

	return { onSubmit, isLoading };
};
