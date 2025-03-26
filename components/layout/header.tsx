'use client';

import { CreatePostModal } from '@/components/post/create-post-dialogue';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';

export const Header = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Stack direction="row" spacing={2} paddingTop={2} mb={2} justifyContent="space-between">
				<Typography variant="h2" fontSize="1.5rem" gutterBottom>
					Welcome to Urbio Blog
				</Typography>
				<Button
					variant="outlined"
					startIcon={<EditNoteIcon />}
					onClick={handleOpen}
					sx={{
						textTransform: 'none',
						color: 'darkgray',
						'&:hover': {
							color: '#6B6B6B',
							backgroundColor: 'transparent',
						},
						'& .MuiButton-startIcon': { marginRight: '4px' },
					}}
					className="hover:bg-gray-200"
				>
					Write
				</Button>
			</Stack>
			<Typography variant="subtitle1" fontSize="1rem" gutterBottom>
				Your source for what's happening with Urbio
			</Typography>
			<CreatePostModal open={open} onClose={handleClose} />
		</>
	);
};
