'use client';
import { Post } from '@/types';
import { formatDate } from '@/utils/dateFormatter';
import { Avatar, Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

type PostCardProps = {
	post: Post;
};

export const PostCard: FC<PostCardProps> = ({ post }) => {
	return (
		<Link
			href={`/posts/${post.id}`}
			className="hover:opacity-75"
			style={{ textDecoration: 'none' }}
		>
			<Card sx={{ borderRadius: 0, boxShadow: 'none', backgroundColor: 'transparent' }}>
				<CardMedia
					sx={{
						height: 180,
						border: '0.5px solid #e0e0e0',
						backgroundSize: 'fill',
						backgroundPosition: 'center',
					}}
					image={post.cover}
					title={post.title}
				/>
				<CardContent sx={{ pt: 1, pb: 2, pl: 0, pr: 0 }}>
					<Typography
						variant="h6"
						mt={1}
						mb={2}
						fontWeight={500}
						className="line-clamp-2"
						color={'#000000d6'}
					>
						{post.title}
					</Typography>
					<Typography variant="body2" className="line-clamp-3" color="#0000008a" sx={{ mb: 2 }}>
						{post.body}
					</Typography>
					<Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
						<Avatar alt={post.author} src={post.avatar} sx={{ width: 35, height: 35, mr: 1 }} />
						<Box display="flex" flexDirection="column" gap={0}>
							<Typography variant="body2" color="#0000008a">
								{post.author}
							</Typography>
							<Typography variant="caption" color="#0000008a">
								Posted : {formatDate(post.createdAt)}
							</Typography>
						</Box>
					</Box>
				</CardContent>
			</Card>
		</Link>
	);
};
