import React, { FC } from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import { Post } from '@/types';

type PageProps = {
	params: Promise<{ id: string }>;
};

const PostDetailPage: FC<PageProps> = async ({ params }: PageProps) => {
	const { id: postId } = await params;

	const res = await fetch(`${process.env.NEXT_PUBLIC_API_INSTANCE}/posts/${postId}`, {
		next: { revalidate: 60 },
	});

	if (!res.ok) {
		notFound();
	}

	const post: Post = await res.json();

	return (
		<Card sx={{ background: 'transparent', boxShadow: 'none', p: 0 }}>
			<Link href="/" passHref>
				<Button variant="text" sx={{ pl: 0, my: 2, textTransform: 'none' }}>
					<ArrowLeft />
					Back to Posts
				</Button>
			</Link>
			<CardMedia sx={{ height: 250 }} image={post.cover} title={post.title} />
			<CardContent>
				<Typography variant="h4" mt={2}>
					{post.title}
				</Typography>
				<Typography variant="subtitle1" color="#242424">
					By: {post.author}
				</Typography>
				<Typography variant="body1" mt={2}>
					{post.body}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default PostDetailPage;
