import { useCreatePost } from '@/hooks';
import { createPostSchema } from '@/schemas';
import { CreatePostFormProps, FormValues } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormTextField } from '../FormTextField';

export const CreatePostForm: FC<CreatePostFormProps> = ({ onSuccess }) => {
	const { control, handleSubmit, reset } = useForm<FormValues>({
		resolver: yupResolver(createPostSchema),
		defaultValues: { title: '', author: '', body: '' },
	});

	const { onSubmit, isLoading } = useCreatePost(onSuccess, reset);

	return (
		<Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mb: 4 }}>
			<FormTextField
				name="title"
				control={control}
				label="Title"
				rows={1}
				fullWidth
				margin="normal"
				size="small"
			/>
			<FormTextField
				name="author"
				control={control}
				label="Author"
				rows={1}
				fullWidth
				margin="normal"
				size="small"
			/>
			<FormTextField
				name="body"
				control={control}
				label="Body"
				multiline
				rows={4}
				fullWidth
				margin="normal"
				size="small"
			/>
			<Button
				type="submit"
				variant="contained"
				disabled={isLoading}
				sx={{
					mt: 2,
					textTransform: 'none',
					minWidth: 100,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{isLoading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
			</Button>
		</Box>
	);
};
