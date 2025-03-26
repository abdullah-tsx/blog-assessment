'use client';

import React, { FC } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CreatePostForm } from '@/components/post/create-post-form';
import { CreatePostModalProps } from '@/types';

export const CreatePostModal: FC<CreatePostModalProps> = ({ open, onClose }) => {
	return (
		<Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
			<DialogTitle sx={{ fontSize: '1rem', fontWeight: 500 }}>
				Create a New Post
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
					}}
				>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent dividers>
				<CreatePostForm onSuccess={onClose} />
			</DialogContent>
		</Dialog>
	);
};
